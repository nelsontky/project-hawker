import { GetServerSideProps } from "next";
import { Container, Typography } from "@material-ui/core";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import SquareLinkGrid from "components/SquareLinkGrid";
import HomeButton from "components/HomeButton";

import { LocationsService } from "modules/locations/locations.service";
import { Location } from "modules/locations/entities/location.entity";
import { entityToObject } from "lib/utils/entity-to-object.util";
import { useRestoreScroll } from "lib/hooks/use-restore-scroll.hook";

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
  useRestoreScroll();
  const classes = useStyles();
  const description = `${locationData.name} is a hawker center serving great food in Singapore. Learn more about ${locationData.name} here!`;

  return (
    <div className={classes.root}>
      <Head>
        <title>{locationData.name}</title>
        <meta name="title" content={locationData.name} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projecthawker.com/" />
        <meta property="og:title" content={locationData.name} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projecthawker.com/" />
        <meta property="twitter:title" content={locationData.name} />
        <meta property="twitter:description" content={description} />
      </Head>
      <HomeButton />
      <Container
        maxWidth="md"
        className="flex flex-col justify-center text-center pt-10"
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
