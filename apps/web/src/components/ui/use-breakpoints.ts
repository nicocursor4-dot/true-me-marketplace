import { useMemo, useState, useLayoutEffect } from "react";

const BREAKPOINTS = {
  SM: 0,
  MD: 600,
  LG: 960,
  XL: 1200
};

const useBreakpoints = () => {
  const getInitialWidth = () => {
    if (typeof window !== "undefined") return window.innerWidth;
    return 0;
  };

  // Initialize from window to avoid an initial wrong branch (mobile vs desktop)
  const [deviceWidth, setDeviceWidth] = useState<number>(getInitialWidth());
  const [ready, setReady] = useState<boolean>(false);

  const isSM = useMemo<boolean>(
    () => deviceWidth < BREAKPOINTS.MD,
    [deviceWidth]
  );

  const isMD = useMemo<boolean>(
    () => deviceWidth >= BREAKPOINTS.MD && deviceWidth < BREAKPOINTS.LG,
    [deviceWidth]
  );

  const isLG = useMemo<boolean>(
    () => deviceWidth >= BREAKPOINTS.LG && deviceWidth < BREAKPOINTS.XL,
    [deviceWidth]
  );

  const isXL = useMemo<boolean>(
    () => deviceWidth >= BREAKPOINTS.XL,
    [deviceWidth]
  );

  const isMobile = useMemo<boolean>(
    () => deviceWidth < BREAKPOINTS.MD,
    [deviceWidth]
  );

  const isDesktop = useMemo<boolean>(
    () => deviceWidth >= BREAKPOINTS.MD,
    [deviceWidth]
  );

  // Measure as early as possible on mount for smoother UI (prevents Drawer flash)
  useLayoutEffect(() => {
    const updateSize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    setReady(true);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return {
    isSM,
    isMD,
    isLG,
    isXL,
    isMobile,
    isDesktop,
    ready
  };
};

export default useBreakpoints;

