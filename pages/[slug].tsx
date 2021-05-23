import { GetStaticProps, GetStaticPaths } from "next";

import { LocationsService } from "modules/locations/locations.service";
import { Location } from "modules/locations/entities/location.entity";
import { entityToObject } from "lib/utils/entity-to-object.util";

interface HawkerCenterProps {
  locationData: Location;
}

export default function HawkerCenter({ locationData }: HawkerCenterProps) {
  return <div>{locationData.name}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locationsService = await LocationsService.build();
  const paths = (await locationsService.findAll()).map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locationsService = await LocationsService.build();
  const locationData = await locationsService.findOne({
    where: { slug: params.slug },
  });

  return {
    props: {
      locationData: entityToObject(locationData),
    },
  };
};
