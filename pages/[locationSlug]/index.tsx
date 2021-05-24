import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Typography, Grid } from "@material-ui/core";
import Head from "next/head";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";

import BannerTop from "components/BannerTop";
import RatioContainer from "components/RatioContainer";

import { LocationsService } from "modules/locations/locations.service";
import { Location } from "modules/locations/entities/location.entity";
import { entityToObject } from "lib/utils/entity-to-object.util";

interface HawkerCenterProps {
  locationData: Location;
  locationSlug: string;
}

export default function HawkerCenter({
  locationData,
  locationSlug,
}: HawkerCenterProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

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
      <Container fixed className="pt-16">
        <Grid container spacing={isSmall ? 8 : 4} justify="center">
          {locationData.stalls.map((stall, i) => (
            <Grid item xs={12} sm={4} md={3} key={i}>
              <Link href={`/${locationSlug}/${stall.slug}`}>
                <a>
                  <RatioContainer
                    className="border-black"
                    percentage={isSmall ? "100%" : "56.25%"}
                    style={{
                      background: `url(${stall.images[0].link}) no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  ></RatioContainer>
                  <Typography variant="h6">{stall.name}</Typography>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
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
