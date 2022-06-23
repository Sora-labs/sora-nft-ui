import Loader from "../../assets/svg/loader.svg"

export const ImageLoader = () => {
    return (
        <div className="flex items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="">
                <img src={ Loader } alt="" />
            </div>
        </div>
    )   
}