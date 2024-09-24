import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const WatchListContext = createContext();

const getInitialState = () => {
  const watchlist = localStorage.getItem("watchlist");
  return watchlist ? JSON.parse(watchlist) : [];
};

export function WatchListProvider({ children }) {
  const [watchlist, setWatchList] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const value = useMemo(
    () => ({ watchlist, setWatchList }),
    [watchlist, setWatchList]
  );

  return (
    <WatchListContext.Provider value={value}>
      {children}
    </WatchListContext.Provider>
  );
}

export default WatchListContext;

WatchListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};