import Head from "next/head";
import { GetStaticProps } from "next";
import { useTheme } from "@material-ui/core/styles";

import AppHero from "components/AppHero";
import LocationList from "components/LocationList";
import AppFooter from "components/AppFooter";

import { LocationsService } from "modules/locations/locations.service";
import { Location } from "modules/locations/entities/location.entity";

import { entityToObject } from "lib/utils/entity-to-object.util";

interface HomeProps {
  allLocationsData: Location[];
}

export default function Home({ allLocationsData }: HomeProps) {
  const theme = useTheme()

  return (
    <div>
      <Head>
        <title>Project Hawker</title>
      </Head>
      <AppHero />
      <LocationList allLocationsData={allLocationsData} />
      <AppFooter neighborColor={theme.palette.primary.main} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const locationsService = await LocationsService.build();
  const allLocationsData = await locationsService.findAll();

  return {
    props: {
      allLocationsData: entityToObject(allLocationsData),
    },
  };
};
