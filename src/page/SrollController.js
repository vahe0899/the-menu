import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollController = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollController;