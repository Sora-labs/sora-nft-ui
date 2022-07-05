import { Bid } from "components/Offer/Bid"
import Provenance from "components/Provenance"
import { useTranslation } from "react-i18next"

const NFTSideDetail = () => {
    const { t } = useTranslation() 

    return (
        <div className="">
            <div className="my-2 p-4 border border-light-gray-80 dark:border-dark-gray-70 rounded-2xl">
                <Bid ></Bid>
                <div
                    className="w-full text-center text-white font-semibold bg-primary-100 p-2 rounded-lg cursor-pointer"
                >
                    { t('place_bid') }
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-8" aria-label="nft description">
                <h2 className="text-xl font-semibold">
                    { t("provenance") }
                </h2>
                { Array(3).fill(0).map((i, index) => 
                    <Provenance
                        action=""
                        address=""
                        txAddress=""
                        date="2022-07-05 15:14:09"
                    ></Provenance>
                )}   
            </div>
        </div>
    )
}

export default NFTSideDetail