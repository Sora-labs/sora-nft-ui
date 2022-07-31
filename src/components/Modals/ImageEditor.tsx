import { useCoverWholeApp } from "hooks/useCoverWholeApp";
import { useWindowSize } from "hooks/useWindowSize";
import { PropsWithChildren, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useTranslation } from "react-i18next";
import { AiOutlineClose, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";

function ImageEditor({ 
    toogle,
    image,
    borderRadius,
    className,
}: PropsWithChildren<{
    toogle: boolean,
    image: string,
    borderRadius?: number,
    className?: string,
}>) {
    const { t } = useTranslation()
    const { width, height } = useWindowSize()
    const [scale, setScale] = useState(0)
    useCoverWholeApp(toogle)
    console.log(image)

    return (
        <div className="flex justify-center items-center py-auto fixed inset-0 w-full h-full z-50 bg-light-gray-70 bg-opacity-40">
            <div className="flex flex-col bg-light-gray-100 rounded-lg h-max py-4">
                {/* Header */}
                <div className="flex items-center justify-between px-2 pb-4">
                    <div>
                        <h1 className="text-white">{ t('edit_media') }</h1>
                    </div>
                    <div>
                        <div
                            className="bg-light-gray-80 rounded-full p-2"
                        >
                            <AiOutlineClose className="text-white"/>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="flex ">
                    <AvatarEditor
                        image={image}
                        border={10}
                        scale={scale}
                        width={ height! / 2 }
                        height={ height! / 2 }
                        borderRadius={borderRadius}
                        className="w-full"
                    />
                </div>
                {/* Footer */}
                <div>
                    <div className="flex items-center justify-center gap-4">
                        <div>
                            <AiOutlineZoomOut 
                                className="w-6 h-6 text-light-gray-45"
                            />
                        </div>
                        <input 
                            type="range" 
                            name="scale" 
                            min={0} 
                            max={5} 
                            step={0.1} 
                            value={scale} 
                            defaultValue={0}
                        />
                        <div>
                            <AiOutlineZoomIn 
                                className="w-6 h-6 text-light-gray-45"
                            ></AiOutlineZoomIn>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="bg-primary-100 rounded-full px-4 py-2 text-white cursor-pointer"
                        >
                            { t('apply') }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageEditor;