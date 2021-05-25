import { Stall } from "modules/stalls/entities/stall.entity";
import { Container, Grid, Typography } from "@material-ui/core";
import _ from "lodash";
import clsx from "clsx";

interface StallContentProps {
  stallData: Stall;
}

export default function StallContent({ stallData }: StallContentProps) {
  const { information } = stallData;

  return (
    <Container fixed className="py-8">
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          {Object.keys(information).map((property, i) => (
            <div key={i} className="mb-4">
              <Typography className="font-bold text-center sm:text-left">
                {_.startCase(property)}
              </Typography>
              <Typography
                className={clsx(
                  property !== "description" && "text-center",
                  "sm:text-left"
                )}
              >
                {information[property]}
              </Typography>
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
