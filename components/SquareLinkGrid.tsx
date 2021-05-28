import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SquareLink from "components/SquareLink";

import { Image } from "modules/images/entities/image.entity";

interface SquareLinkGridProps {
  items: { href: string; image: Image; children: React.ReactNode }[];
}

export default function SquareLinkGrid({ items }: SquareLinkGridProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid container spacing={isSmall ? 10 : 6} justify="center">
      {items.map((item, i) => (
        <Grid item xs={6} md={4} lg={3} key={i}>
          <SquareLink href={item.href} image={item.image}>
            {item.children}
          </SquareLink>
        </Grid>
      ))}
    </Grid>
  );
}
