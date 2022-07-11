import { PropsWithChildren, Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

// This Component is used to solve the problem that navigating into another page, its position will remain like the previous page. 
const ScrollToTop = (props: PropsWithChildren<any>) => {
    const { pathname } = useLocation()  

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    return (
      <Fragment>{ props.children }</Fragment>
    )
}

export default ScrollToTop;