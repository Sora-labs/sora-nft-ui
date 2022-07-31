// import VerifyProfileModal from "components/Modals/VerifyProfileModal";
import GenericPreviewer, { PreviewData } from "components/Previewers/GenericPreviewer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CreateForm from "./CreateForm";

function CreateCollection() {
    const { t } = useTranslation()
    const [previewData, setPreviewData] = useState<PreviewData>({
        avatar: null,
        name: null,
        background: null,
        description: null,
        username: null,
    })

    return (
        <div className="flex py-8">
            <div className="flex flex-col w-1/2 px-8">
                <CreateForm previewData={previewData} setPreviewData={setPreviewData}></CreateForm>
            </div>
            <div className="flex flex-col w-1/2 px-8">
                <div className="bg-light-gray-5 dark:bg-dark-gray-90 py-4 rounded-md shadow-lg">
                    <h1 className="text-lg text-black px-2 my-2">{ t('preview') }</h1>
                    <p className="text-light-gray-70 text-sm px-2 my-2">{ t('create_preview_note') }</p>
                    <GenericPreviewer data={previewData}/>
                </div>
            </div>
        </div>
    );
}

export default CreateCollection;