import { useTranslation } from "react-i18next";
import { gql, useQuery } from "@apollo/client"
import { wallet } from "services/near";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setLoading } from "store/slices/toploading";

function ProfileInfo() {
    const { t } = useTranslation()
    const { loading: progress } = useSelector((state: RootState) => state.toploading)
    const dispatch = useDispatch()

    useEffect(() => {
        
    }, [])

    return (
        <div className="w-full px-8">
            <div className="flex justify-between mb-5">
                <div className="flex flex-col justify-center gap-2" aria-label="name and username">
                    <div className="font-semibold text-2xl">{ "" }</div>
                    <div className="font-semibold text-light-gray-80 dark:text-dark-gray-50">{ "" }</div>
                </div>
                <div>
                    <div className="border border-light-gray-100 dark:border-dark-gray-50 hover:bg-light-gray-20 dark:hover:bg-dark-gray-90 py-2 px-4 rounded-full cursor-pointer">
                        { t('edit_profile') }
                    </div>
                </div>
            </div>
            <div className="w-full">
                <p>
                    { "" }
                </p>
            </div>
        </div>
    );
}

export default ProfileInfo;