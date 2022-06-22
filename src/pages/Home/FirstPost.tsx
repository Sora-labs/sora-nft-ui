import { useTranslation } from "react-i18next"
import BaseButton from "../../components/Buttons/Button"
import Image from "../../components/Images"
import { useToRealCurrency } from "../../hooks/useToRealCurrency"
import { getConfig, NEAR_ENV } from "../../services/config"

const FirstPost = () => {
    const { t } = useTranslation()
    const { rlPrice } = useToRealCurrency("0")
    return (
        <div className="flex flex-col mx-8">
            <Image src={getConfig(NEAR_ENV).fakeImgUrl + '/1000/500'} width="w-full"></Image>
            <h1 className="text-4xl font-semibold my-4">Title</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="text-light-gray-70 dark:text-dark-gray-50 font-semibold">
                        { t('artist') }
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={getConfig(NEAR_ENV).fakeImgUrl + '/200/200'} width="w-8" rounded="rounded-full"></Image>
                        <div className="">
                            @<span className="font-semibold">artist</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-light-gray-70 dark:text-dark-gray-50 font-semibold">
                        { t('collection') }
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={getConfig(NEAR_ENV).fakeImgUrl + '/201/201'} width="w-8" rounded="rounded-lg"></Image>
                        <div className="">
                            @<span className="font-semibold">collection</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-light-gray-70 dark:text-dark-gray-50 font-semibold" aria-label="current bid">
                        { t('current_bid') }
                    </div>
                    <div className="text-2xl font-semibold">
                        <p>{"0"} 
                            <span className="ml-2">NEAR</span>
                        </p>
                    </div>
                    <div className="text-light-gray-70 dark:text-dark-gray-50 font-semibold" aria-label="to real price">
                        { rlPrice }
                    </div>
                </div>
                <div>
                    <div className="text-light-gray-70 dark:text-dark-gray-50 font-semibold" aria-label="current bid">
                        { t('aunction_ends_in') }
                    </div>
                    <div className="flex items-center text-lg font-semibold" aria-label="aunction countdown">
                        {`${1} ${t('h')} : ${1} ${t('m')} : ${59} ${t('s')}`}
                    </div>
                </div>
                <div className="">
                    <BaseButton >{ t('view_nft') }</BaseButton>
                </div>
            </div>
        </div>
    )
}

export default FirstPost