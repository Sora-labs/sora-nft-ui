import { useTranslation } from "react-i18next"
import { getConfig, NEAR_ENV } from "../../services/config"
import { Collection } from "./Collection"

export const CuratedCollection = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col mt-16">
            <div className="text-2xl my-4 mx-8" aria-label="curated collection">
                <p className="font-semibold">{ t('curated_collections') }</p>
            </div>
            { Array(3).fill(1).map((i, index) => 
                <Collection key={index} bgImg={getConfig(NEAR_ENV).fakeImgUrl + '200/500'}></Collection> 
            )}
        </div>
    )
}