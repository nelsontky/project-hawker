import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Typography, Grid } from "@material-ui/core";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import SquareLinkGrid from "components/SquareLinkGrid";

import { LocationsService } from "modules/locations/locations.service";
import { Location } from "modules/locations/entities/location.entity";
import { entityToObject } from "lib/utils/entity-to-object.util";

interface HawkerCenterProps {
  locationData: Location;
  locationSlug: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function HawkerCenter({
  locationData,
  locationSlug,
}: HawkerCenterProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>{locationData.name}</title>
      </Head>
      <Container
        maxWidth="md"
        className="flex flex-col justify-center h-full text-center pt-10"
      >
        <Typography variant="h2" className="font-bold">
          {locationData.name}
        </Typography>
      </Container>
      <Container fixed className="py-16">
        <SquareLinkGrid
          items={locationData.stalls.map((stall) => ({
            href: `/${locationSlug}/${stall.slug}`,
            image: stall.images[0],
            children: stall.name,
          }))}
        />
      </Container>
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
