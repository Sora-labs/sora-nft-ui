import { useTranslation } from "react-i18next"

export const Reserve = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full flex gap-8 items-center my-2">
            <div className="flex flex-col text-light-gray-80 dark:text-dark-gray-30 font-medium">
                <p>{ t('reserve') }</p>
                <p>{ "0" } NEAR</p>
            </div>
        </div>
    )
}