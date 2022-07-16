import { useState } from "react";
import { useTranslation } from "react-i18next";


function CreateForm() {
    const { t } = useTranslation()
    const [state, setState] = useState<string>()
    console.log(state)
    return (
        <div className="w-full bg-light-gray-0 dark:bg-dark-gray-90 shadow-lg rounded-lg px-8 py-8 md:px-16 md:py-16">
            <h1 className="font-semibold text-2xl">{ t('title_and_description') }</h1>
            <p className="my-4">{ t('create_note') }</p>
            <div className="flex flex-col gap-8">
                <div className="form-field" tabIndex={0}>
                    <label htmlFor="title">{ t('title') }</label>
                    <input type="text" id="title"/>
                </div>
                <div className="form-field">
                    <label htmlFor="price">{ t('price') }</label>
                    <input type="text" id="price"/>
                </div>
                <div className="form-field">
                    <label htmlFor="description">{ t('description') }</label>
                    <textarea onChange={(e) => setState(e.target.value)} id="description"></textarea>
                </div>
                <button type="button" className="bg-primary-100 text-center py-3 font-semibold shadow-lg rounded-lg hover:-translate-y-1">{ t('mint_nft') }</button>
            </div>
        </div>
    );
}

export default CreateForm;