import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { Home } from "@material-ui/icons";
import Link from "next/link";
import clsx from "clsx";

interface HomeButtonProps extends ButtonProps {}

export default function HomeButton({ className, ...rest }: HomeButtonProps) {
  return (
    <Link href="/">
      <a>
        <Button
          variant="contained"
          color="secondary"
          className={clsx("mt-4 ml-4", className)}
          startIcon={<Home />}
        >
          Return to home
        </Button>
      </a>
    </Link>
  );
}
