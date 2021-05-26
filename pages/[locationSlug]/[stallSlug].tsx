import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Typography } from "@material-ui/core";
import Head from "next/head";
import AppFooter from "components/AppFooter";

import BannerTop from "components/BannerTop";
import StallContent from "components/StallContent";

import { LocationsService } from "modules/locations/locations.service";
import { StallsService } from "modules/stalls/stalls.service";
import { Stall } from "modules/stalls/entities/stall.entity";

import { entityToObject } from "lib/utils/entity-to-object.util";

interface StallPageProps {
  stallData: Stall;
}

export default function StallPage({ stallData }: StallPageProps) {
  return (
    <div>
      <Head>
        <title>{stallData.name}</title>
      </Head>
      <BannerTop image={stallData.location.images[0]}>
        <div className="relative h-full">
          <Typography variant="h4" className="font-bold absolute top-4 left-4">
            {"#" + stallData.stallNumber}
          </Typography>
          <Container
            maxWidth="md"
            className="flex flex-col justify-center h-full text-center"
          >
            <Typography variant="h2" className="font-bold">
              {stallData.name}
            </Typography>
          </Container>
        </div>
      </BannerTop>
      <StallContent stallData={stallData} />
      <AppFooter />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async (locationSlug) => {
  const locationsService = await LocationsService.build();
  const locations = await locationsService.findAll();
  const stallsService = await StallsService.build();

  let paths = [];
  for (const location of locations) {
    const stalls = await stallsService.findAllSlugs(location.slug);
    for (const stall of stalls) {
      paths.push({
        params: { locationSlug: location.slug, stallSlug: stall.slug },
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stallsService = await StallsService.build();
  const stallData = await stallsService.findOneDeep(
    params.locationSlug as string,
    params.stallSlug as string
  );

  return {
    props: {
      stallData: entityToObject(stallData),
    },
  };
};
