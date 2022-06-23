import { getConfig, NEAR_ENV } from "../../services/config"
import { Collection } from "./Collection"

export const CuratedCollection = () => {
    
    return (
        <div className="flex flex-col">
            <div className="text-lg my-4 mx-8" aria-label="curated collection">
                <p className="">Curated Collection</p>
            </div>
            <Collection bgImg={getConfig(NEAR_ENV).fakeImgUrl + '/200/500'}></Collection>
        </div>
    )
}