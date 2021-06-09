import React from "react";
import _ from "lodash";

import { useAppSelector, useAppDispatch } from "lib/hooks/redux.hook";
import { set } from "lib/slices/scroll-position.slice";

export function useRestoreScroll() {
  const dispatch = useAppDispatch();
  const scrollPosition = useAppSelector((state) => state.scollPosition.value);

  const setScrollPosition = _.throttle(() => {
    dispatch(set(window.scrollY));
  }, 100);

  React.useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", setScrollPosition);

    return () => {
      window.removeEventListener("scroll", setScrollPosition);
    };
  }, []);
}
