import React from "react";
import { mutate } from "swr";
import { useRouter } from "next/router";
import axios from "axios";

import StallFormDialog from "components/admin/stalls/StallFormDialog";

import { Stall } from "modules/stalls/entities/stall.entity";
import { StallInformation } from "components/admin/EditStallForm";
import { useAppSelector } from "lib/hooks/redux.hook";
import { useSnackbar } from "lib/hooks/use-snackbar.hook";

export default function EditStallDialog() {
  const { open } = useSnackbar();
  const token = useAppSelector((state) => state.admin.token);
  const router = useRouter();
  const [id, setId] = React.useState<string | undefined>();
  const [stall, setStall] = React.useState<Stall | undefined>();

  React.useEffect(() => {
    const id = router.query.edit as string;
    setId(id);

    if (id) {
      axios.get<Stall>(`/api/v1/stalls/${id}`).then((response) => {
        setStall(response.data);
      });
    }
  }, [router.query]);

  if (stall) {
    const { name: stallName, stallNumber, images, location } = stall;

    const {
      contact,
      deliveryAvailable,
      moreAboutThisHawker,
      dietaryRestrictions,
      favorites,
      foodTheyServe,
      nameOfHawker,
      openingHours,
      priceRange,
      recommendedBy,
      whatAreTheConcernsThisHawkerIsFacing,
    } = stall.information;

    const stallInformation: StallInformation = {
      stallName,
      stallNumber,
      contact,
      deliveryAvailable,
      moreAboutThisHawker,
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
        onSubmit={async (values, locationId) => {
          try {
            await axios.put(
              `/api/v1/stalls/${id}`,
              { ...values, locationId: locationId },
              {
                headers: { "admin-token": token },
              }
            );
            mutate("/api/v1/stalls?hide-compressed=true");
            router.push("/admin/stalls");
            open({
              message: "Entry updated!",
            });
          } catch {
            open({
              message: "An error has occurred. Please try again",
              severity: "error",
            });
          }
        }}
      />
    );
  }

  return null;
}
