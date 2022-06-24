import { useTranslation } from "react-i18next"

export const Bid = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full flex gap-8 items-center my-2 justify-between">
            <div className="flex flex-col text-light-gray-80 dark:text-dark-gray-30 font-medium text-sm" aria-label="current bid">
                <p>{ t('current_bid') }</p>
                <p>{ 0 } NEAR</p>
            </div>
            <div className="flex flex-col text-light-gray-80 dark:text-dark-gray-30 font-medium text-sm" aria-label="ends in">
                <p>{ t('auction_ends_in') }</p>
                <p>{ `${1} ${t('hour')} : ${1} ${t('minute')} : ${59} ${t('second')}` }</p>
            </div>
        </div>
    )
}