import Loadable from "react-loadable";
import LoadingPage from "./loading";

const LoadableComponent = (component: any) => {
    return Loadable({
        loader: component,
        loading: LoadingPage
    })
}

export default LoadableComponent