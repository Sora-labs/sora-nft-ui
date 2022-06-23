import { BaseImage } from "../../components/Images"

export const Collection = ({ bgImg }: { bgImg: string}) => {

    return (
        <div className="w-full flex justify-center blur-md pl-4 py-5" style={{backgroundImage: bgImg}}>
            <div className="flex gap-3">
                <BaseImage src="" width="w-5" height="w-5" rounded="rounded-md"></BaseImage>
            </div>
        </div>
    )
}