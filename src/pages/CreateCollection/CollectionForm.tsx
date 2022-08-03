import { PreviewData } from "components/Previewers/GenericPreviewer";
import { Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { AiOutlineCamera, AiOutlineLoading3Quarters } from "react-icons/ai";
import ImageEditor from "components/Modals/ImageEditor";
import { useTranslation } from "react-i18next";
import { MAX_FILE_SIZE } from "constants/file";
import { useMutation } from "@apollo/client";
import { ADD_COLLECTION } from "graphql/mutations/collections";
import { accountId } from "services/near";
import { useNavigate } from "react-router-dom";

function AvatarUploading({
    previewData,
    setPreviewData,
}: PropsWithChildren<{
    previewData: PreviewData,
    setPreviewData: Dispatch<SetStateAction<PreviewData>>,
}>) {
    const [image, setImage] = useState<ImageListType>([])
    const [output, setOutput] = useState<string|null>(null)
    const [openModal, setOpenModal] = useState(false)
    const { t } = useTranslation()
    const onUploadingImage = (
        imageList: ImageListType, 
        addUpdateIndex: number[] | undefined
    ) => {
        setImage(imageList)
    }

    useEffect(() => {
        if(image.length > 0) {
            setOpenModal(true)
        }
    }, [image])

    // prevent modal rendering when user already apply image changes
    useEffect(() => {
        if(previewData.avatar) {
            setImage([])
        }
    }, [previewData.avatar])

    // when user apply changes it changes the output state, this useEffect sets preview avatar to it 
    // and the ...s will keep other states as they are
    useEffect(() => {
        if(output) {
            setPreviewData(s => { 
                return {
                    ...s,
                    avatar: output 
                }
            })
        }
    }, [output])
    
    return (
        <div className="flex gap-4">
            <ImageUploading
                value={ image }
                onChange={ onUploadingImage }
            >
                {({
                    onImageUpload,
                    isDragging,
                    dragProps
                }) => (
                    <div
                        onClick={ onImageUpload }
                        className="w-20 h-20 p-4 rounded-full border border-dashed border-light-gray-80 cursor-pointer"
                        {...dragProps}
                    >
                        { isDragging ? <p className="text-xs text-center">{ t('drop_image_here') }</p> : 
                        <AiOutlineCamera 
                            className="w-full h-full"
                        />}
                    </div>
                )}
            </ImageUploading>
            <div className="w-20 h-20">
                { previewData.avatar ? <img src={previewData.avatar} alt="not found" className="rounded-full"></img> : null }
            </div>
            { image.length > 0 &&
                <ImageEditor
                    setOutput={setOutput}
                    toggle={openModal}
                    setToggle={setOpenModal}
                    image={image[0].dataURL!}
                    borderRadius={9999}
                ></ImageEditor>
            }
        </div>
    )
}

function BackgroundUploading({
    previewData,
    setPreviewData,
}: PropsWithChildren<{
    previewData: PreviewData,
    setPreviewData: Dispatch<SetStateAction<PreviewData>>,
}>) {
    const [image, setImage] = useState<ImageListType>([])
    const [output, setOutput] = useState<string|null>(null)
    const [openModal, setOpenModal] = useState(false)
    const { t } = useTranslation()
    const onUploadingImage = (
        imageList: ImageListType, 
        addUpdateIndex: number[] | undefined
    ) => {
        setImage(imageList)
    }

    useEffect(() => {
        if(image.length > 0) {
            setOpenModal(true)
        }
    }, [image])

    // prevent modal rendering when user already apply image changes
    useEffect(() => {
        if(previewData.background) {
            setImage([])
        }
    }, [previewData.background])

    // when user apply changes it changes the output state, this useEffect sets preview avatar to it 
    // and the ...s will keep other states as they are
    useEffect(() => {
        if(output) {
            setPreviewData(s => { 
                return {
                    ...s,
                    background: output 
                }
            })
        }
    }, [output])
    
    return (
        <div className="flex gap-4">
            <ImageUploading
                value={ image }
                onChange={ onUploadingImage }
                maxFileSize={MAX_FILE_SIZE}
            >
                {({
                    onImageUpload,
                    isDragging,
                    dragProps
                }) => (
                    <div
                        onClick={ onImageUpload }
                        className="w-20 h-20 p-4 border border-dashed border-light-gray-80 cursor-pointer"
                        {...dragProps}
                    >
                        { isDragging ? <p className="text-xs text-center">{ t('drop_image_here') }</p> : 
                        <AiOutlineCamera 
                            className="w-full h-full"
                        />}
                    </div>
                )}
            </ImageUploading>
            <div className="w-full h-20">
                { previewData.background ? <img src={previewData.background} alt="not found" className="h-full"></img> : null }
            </div>
            { image.length > 0 &&
                <ImageEditor
                    setOutput={setOutput}
                    toggle={openModal}
                    setToggle={setOpenModal}
                    image={image[0].dataURL!}
                    width={625}
                    height={250}
                ></ImageEditor>
            }
        </div>
    )
}

function CreateForm({ previewData, setPreviewData }: PropsWithChildren<{
    previewData: PreviewData,
    setPreviewData: Dispatch<SetStateAction<PreviewData>>,
}>) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [addCollection, { loading, error }] = useMutation(ADD_COLLECTION)
    const onSubmit = async() => {
        const { data } = await addCollection({
            variables: {
                name: previewData.name,
                description: previewData.description,
                avatar: previewData.avatar,
                background: previewData.background,
                ownerId: accountId,
            }
        })
        if( data ) {
            navigate(`/@${accountId}`)
        }
        console.log(error)
    }

    return (
        <div className="w-full bg-light-gray-5 dark:bg-dark-gray-90 shadow-lg rounded-lg px-8 py-8 md:px-16 md:py-16">
            <h1 className="font-semibold text-2xl">{ t('title_and_description') }</h1>
            <div className="flex flex-col gap-8">
                <div className="form-field" tabIndex={0}>
                    <label htmlFor="title">{ t('avatar') }</label>
                    <AvatarUploading 
                        previewData={previewData} 
                        setPreviewData={setPreviewData}
                    />
                </div>
                <div className="form-field" tabIndex={0}>
                    <label htmlFor="title">{ t('background') }</label>
                    <BackgroundUploading 
                        previewData={previewData} 
                        setPreviewData={setPreviewData}
                    />
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
                <button 
                    type="button" 
                    className="bg-primary-100 text-white text-center py-3 font-semibold shadow-lg rounded-lg hover:-translate-y-1"
                    onClick={onSubmit}
                    disabled={loading}
                >
                    { loading ? 
                        <AiOutlineLoading3Quarters
                            className="w-5 h-5 animate-spin mx-auto"
                        /> 
                        :
                        <>{ t('create_collection') }</>
                    }
                </button>
            </div>
        </div>
    );
}

export default CreateForm;