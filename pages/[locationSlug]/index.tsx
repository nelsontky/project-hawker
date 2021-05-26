import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Typography, Grid } from "@material-ui/core";
import AppFooter from "components/AppFooter";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import BannerTop from "components/BannerTop";
import StallLink from "components/StallLink";

import { LocationsService } from "modules/locations/locations.service";
import { Location } from "modules/locations/entities/location.entity";
import { entityToObject } from "lib/utils/entity-to-object.util";

interface HawkerCenterProps {
  locationData: Location;
  locationSlug: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stall: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);

export default function HawkerCenter({
  locationData,
  locationSlug,
}: HawkerCenterProps) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{locationData.name}</title>
      </Head>
      <BannerTop image={locationData.images[0].link}>
        <Container
          maxWidth="md"
          className="flex flex-col justify-center h-full text-center"
        >
          <Typography variant="h2" className="font-bold">
            {locationData.name}
          </Typography>
        </Container>
      </BannerTop>
      <Container fixed className="py-16">
        <Grid container spacing={10} justify="center">
          {locationData.stalls.map((stall, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={i}
              className={classes.stall}
            >
              <StallLink stall={stall} locationSlug={locationSlug} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <AppFooter />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async (locationSlug) => {
  const locationsService = await LocationsService.build();
  const locations = await locationsService.findAll();

  const paths = locations.map((location) => ({
    params: { locationSlug: location.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locationsService = await LocationsService.build();
  const locationData = await locationsService.findOneDeep(
    params.locationSlug as string
  );

  return {
    props: {
      locationData: entityToObject(locationData),
      locationSlug: params.locationSlug,
    },
  };
};
