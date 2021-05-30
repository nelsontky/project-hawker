import { Stall } from "modules/stalls/entities/stall.entity";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import _ from "lodash";

interface StallContentProps {
  stallData: Stall;
}

export default function StallContent({ stallData }: StallContentProps) {
  const { information } = stallData;

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
