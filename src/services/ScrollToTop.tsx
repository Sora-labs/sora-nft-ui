import { BrowserHistory } from "history";
import { PropsWithChildren, Fragment, useEffect, useContext } from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";

// This Component is used to solve the problem that navigating into another page, its position will remain like the previous page. 
const ScrollToTop = (props: PropsWithChildren<any>) => {

    const navigate = useContext(UNSAFE_NavigationContext).navigator as BrowserHistory
    useEffect(() => {
        const unlisten = navigate.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
    }, [navigate]);

    return (
        <Fragment>{ props.children }</Fragment>
    )
}

export default ScrollToTop;