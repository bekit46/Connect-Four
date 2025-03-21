import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {

    if (pathname === "/extras" || "/details" || "/payment") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;