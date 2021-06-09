import React from "react";
import { useRouter } from "next/router";
import { Container, LinearProgress } from "@material-ui/core";
import useSWR from "swr";
import { Pagination, PaginationItem } from "@material-ui/lab";
import Link from "next/link";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import PostEditor from "components/admin/PostEditor";

import { useAppSelector } from "lib/hooks/redux.hook";
import { ScrapeFacebook } from "modules/scrape-facebook/entities/scrape-facebook.entity";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageUl: {
      justifyContent: "center",
    },
  })
);

interface MainPortalProps {
  numberOfPages: number;
  pageSize: number;
}

export default function MainPortal({
  numberOfPages,
  pageSize,
}: MainPortalProps) {
  const classes = useStyles();
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const token = useAppSelector((state) => state.admin.token);

  const { data, error } = useSWR<ScrapeFacebook[]>([
    `/api/v1/scrape-facebook?limit=${pageSize}&skip=${pageSize * (page - 1)}`,
    token,
  ]);

  React.useEffect(() => {
    if (router.isReady) {
      const page = router.query.page;
      if (page) {
        setPage(+(page as string));
      }
    }
  }, [router.query]);

  return (
    <Container fixed>
      {!data || error ? (
        <LinearProgress />
      ) : (
        data.map((post) => <PostEditor key={post.id} post={post} />)
      )}
      <Pagination
        className="mt-8"
        page={page}
        count={numberOfPages}
        classes={{ ul: classes.pageUl }}
        renderItem={(item) => {
          if (
            item.page > numberOfPages ||
            item.page === 0 ||
            item.page === null
          ) {
            return <PaginationItem {...item} />;
          }
          return (
            <Link href={`/admin?page=${item.page}`}>
              <a>
                <PaginationItem {...item} />
              </a>
            </Link>
          );
        }}
      />
    </Container>
  );
}
