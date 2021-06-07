import { GetServerSideProps } from "next";
import { Container, Typography } from "@material-ui/core";
import Head from "next/head";

import BannerTop from "components/BannerTop";
import StallContent from "components/StallContent";
import HomeButton from "components/HomeButton";

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
      <BannerTop image={stallData.images[0]}>
        <div className="relative h-full">
          <HomeButton className="absolute top-0 left-0" />
          <Typography variant="h4" className="font-bold absolute top-4 right-4">
            {stallData.stallNumber}
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
      <div className="text-center mt-20 mb-5">
        <Typography variant="caption" color="textSecondary">
          If you do not wish for your image to be displayed here, message us and
          we will take it down
        </Typography>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
