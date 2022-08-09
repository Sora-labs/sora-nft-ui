import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

function ProfileFooter({ 
    createdAt 
}: PropsWithChildren<{
    createdAt: string
}>) {
    const { t } = useTranslation()
    
    return (
        <div className="flex flex-col gap-2 px-8 mb-4">
            <div className="flex items-center gap-2">
                <div>
                    { t('joined') }
                </div>
                <div>
                    { createdAt }
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