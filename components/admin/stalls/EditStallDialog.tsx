import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import StallFormDialog from "components/admin/stalls/StallFormDialog";

import { Stall } from "modules/stalls/entities/stall.entity";
import { StallInformation } from "../EditStallForm";

export default function EditStallDialog() {
  const router = useRouter();
  const [id, setId] = React.useState<string | undefined>();

  React.useEffect(() => {
    setId(router.query.edit as string);
  }, [router.query]);

  const { data } = useSWR<Stall | undefined>(
    !!id ? `/api/v1/stalls/${id}` : null
  );

  if (data) {
    const { name: stallName, stallNumber, images, location } = data;

    const {
      contact,
      deliveryAvailable,
      moreAboutThisHawker: description,
      dietaryRestrictions,
      favorites,
      foodTheyServe,
      nameOfHawker,
      openingHours,
      priceRange,
      recommendedBy,
      whatAreTheConcernsThisHawkerIsFacing,
    } = data.information;

    const stallInformation: StallInformation = {
      stallName,
      stallNumber,
      contact,
      deliveryAvailable,
      description,
      dietaryRestrictions,
      favorites,
      foodTheyServe,
      nameOfHawker,
      openingHours,
      priceRange,
      recommendedBy,
      whatAreTheConcernsThisHawkerIsFacing,
      location,
    };

    return (
      <StallFormDialog
        stallInformation={stallInformation}
        imageLinks={images.map((image) => image.link)}
        open={!!id}
        close={() => {
          router.push("/admin/stalls");
        }}
      />
    );
  }

  return null;
}
