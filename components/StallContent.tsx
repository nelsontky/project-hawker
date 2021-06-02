import { Stall } from "modules/stalls/entities/stall.entity";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import _ from "lodash";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import RatioContainer from "components/RatioContainer";

interface StallContentProps {
  stallData: Stall;
}

export default function StallContent({ stallData }: StallContentProps) {
  const { information } = stallData;
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container fixed className="py-8">
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <div className="mb-4">
            <Typography className="font-bold text-left">Location</Typography>
            <Typography className="text-justify">
              {stallData.location.name} ({stallData.location.postalCode})
            </Typography>
          </div>
          {Object.keys(information).map((property, i) => (
            <div key={i} className="mb-4">
              <Typography className="font-bold text-left">
                {_.startCase(property)}
              </Typography>
              <Typography className="text-justify">
                {information[property]}
              </Typography>
              {property === "contact" &&
                !!information[property] &&
                information[property].trim().length > 7 && (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Phone />}
                    href={`tel:+65${information[property]}`}
                  >
                    Call to dabao
                  </Button>
                )}
            </div>
          ))}
          {stallData.location && (
            <RatioContainer percentage={isLarge ? "56.25%" : "100%"}>
              <iframe
                className="absolute top-0 w-full h-full"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  process.env.NEXT_PUBLIC_GOOGLE_API_KEY
                }&q=${encodeURIComponent(
                  stallData.location.name + " " + stallData.location.postalCode ?? ""
                )}`}
                allowFullScreen
              ></iframe>
            </RatioContainer>
          )}
        </Grid>
        <Grid container item xs={12} sm={6} spacing={4}>
          {stallData.images.map((image, i) => (
            <Grid item xs={12} key={i}>
              <img src={image.link} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
