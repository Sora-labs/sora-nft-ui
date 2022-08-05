import { useTranslation } from "react-i18next";

function ProfileFooter() {
    const joinedDate = "2022/07/13"
    const { t } = useTranslation()
    
    return (
        <div className="flex flex-col gap-2 px-8 mb-4">
            <div>
                <div>
                    { t('joined') }
                </div>
            </div>
            <div className="w-full flex gap-8">
                <div className="font-semibold">
                    {320}
                    {' '}
                    <span className="text-light-gray-30 dark:text-dark-gray-70 font-normal">{ t('following') }</span>
                </div>
                <div className="font-semibold">
                    {21}
                    {' '}
                    <span className="text-light-gray-30 dark:text-dark-gray-70 font-normal">{ t('followers') }</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileFooter;