import { PreviewData } from "components/Previewers/GenericPreviewer";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { useTranslation } from "react-i18next";


function CreateForm({ previewData, setPreviewData }: PropsWithChildren<{
    previewData: PreviewData,
    setPreviewData: Dispatch<SetStateAction<PreviewData>>,
}>) {
    const { t } = useTranslation()

    return (
        <div className="w-full bg-light-gray-5 dark:bg-dark-gray-90 shadow-lg rounded-lg px-8 py-8 md:px-16 md:py-16">
            <h1 className="font-semibold text-2xl">{ t('title_and_description') }</h1>
            <div className="flex flex-col gap-8">
                <div className="form-field" tabIndex={0}>
                    <label htmlFor="title">{ t('avatar') }</label>
                    
                </div>
                <div className="form-field" tabIndex={0}>
                    <label htmlFor="title">{ t('background') }</label>

                </div>
                <div className="form-field" tabIndex={0}>
                    <label htmlFor="title">{ t('title') }</label>
                    <input type="text" id="title" onChange={(e) => setPreviewData(state => { 
                        return { 
                            ...state,
                            name: e.target.value 
                        }
                    })} />
                </div>
                <div className="form-field">
                    <label htmlFor="description">{ t('description') }</label>
                    <textarea onChange={(e) => setPreviewData(state => {
                            return { 
                                ...state,
                                description: e.target.value
                            }
                        })} id="description"></textarea>
                </div>
                <button type="button" className="bg-primary-100 text-white text-center py-3 font-semibold shadow-lg rounded-lg hover:-translate-y-1">{ t('create_collection') }</button>
            </div>
        </div>
    );
}

export default CreateForm;