import { Stall } from "modules/stalls/entities/stall.entity";
import { Container, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      fontSize: theme.typography.body1.fontSize,
    },
  })
);

interface StallContentProps {
  stallData: Stall;
}

export default function StallContent({ stallData }: StallContentProps) {
  const classes = useStyles();

  return (
    <Container fixed className="py-8">
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: stallData.htmlDescription }}
          />
        </Grid>
        <Grid container item xs={12} sm={6} spacing={4}>
          {stallData.images.map((image, i) => (
            <Grid item xs={12} key={i}>
              <img src={"/" + image.link} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
