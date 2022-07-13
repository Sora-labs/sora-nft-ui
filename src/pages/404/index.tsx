function NotFound() {
    return (
        <div className="flex justify-center items-center w-full" style={{height: "calc(100vh - 57px)"}}>
            <div className="flex max-h-full py-10 px-20">
                <img src="./images/404.png" alt="" className="block object-scale-down"/>
            </div>
        </div>
    );
}

export default NotFound;