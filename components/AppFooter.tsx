import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ImageLink from "components/ImageLink";

interface StyleProps {
  neighborColor: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(30),
      backgroundColor: theme.palette.secondary.main,
    },
    title: {
      fontFamily: "'Fredericka the Great', cursive",
      "-webkit-text-stroke-width": "0.5px",
      "-webkit-text-stroke-color": "#404040",
      color: "#404040",
    },
    waves: {
      fill: (props) => props.neighborColor ?? theme.palette.background.default,
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
                width="64px"
                height="64px"
                src="/images/icons/instagram.png"
                href="https://www.instagram.com/projecthawker/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Grid>
            <Grid item>
              <ImageLink
                width="64px"
                height="64px"
                src="/images/icons/facebook.png"
                href="https://www.facebook.com/projecthawker"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Grid>
            <Grid item>
              <ImageLink
                width="64px"
                height="64px"
                src="/images/icons/whatsapp.png"
                href="https://api.whatsapp.com/send?phone=6590682937"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Grid>
            <Grid item>
              <ImageLink
                width="64px"
                height="64px"
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
