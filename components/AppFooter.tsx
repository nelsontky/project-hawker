import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ImageLink from "components/ImageLink";

interface StyleProps {
  neighborColor: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 350,
      backgroundColor: theme.palette.secondary.main,
    },
    title: {
      fontFamily: "'Fredericka the Great', cursive",
      color: theme.palette.common.white,
    },
    waves: {
      fill: (props) => props.neighborColor ?? theme.palette.background.default,
    },
    icon: {
      height: theme.spacing(16),
      width: theme.spacing(16),
    },
  })
);

interface AppFooterProps {
  neighborColor?: string;
}

export default function AppFooter({ neighborColor }: AppFooterProps) {
  const classes = useStyles({ neighborColor });

  return (
    <div className={classes.root}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className={classes.waves}
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className={classes.waves}
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className={classes.waves}
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </div>
      <Container fixed className="pt-8">
        <Grid container spacing={6}>
          <Grid item xs={12} className="text-center">
            <Typography className={classes.title} variant="h4">
              @projecthawker
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={2} justify="center">
            <Grid item>
              <ImageLink
                className={classes.icon}
                src="/images/icons/instagram.png"
                href="https://www.instagram.com/projecthawker/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Grid>
            <Grid item>
              <ImageLink
                className={classes.icon}
                src="/images/icons/facebook.png"
                href="https://www.facebook.com/projecthawker"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Grid>
            <Grid item>
              <ImageLink
                className={classes.icon}
                src="/images/icons/whatsapp.png"
                href="https://api.whatsapp.com/send?phone=6590682937"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Grid>
            <Grid item>
              <ImageLink
                className={classes.icon}
                src="/images/icons/telegram.png"
                href="https://t.me/projecthawker"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
