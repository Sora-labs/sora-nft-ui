import { BaseImage, ImageWithLoader } from "../../components/Images"
import { getConfig, NEAR_ENV } from "../../services/config"

export const Collection = ({ bgImg }: { bgImg: string}) => {

    return (
        <div className="w-full flex flex-col justify-center px-8 py-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover blur-md bg-light-gray-100 scale-110" style={{backgroundImage: `url(${bgImg})`}}></div>
            <div className="w-full flex gap-5 mb-4">
                <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-40" height="w-40" rounded="rounded-md"></BaseImage>
                <div className="w-full flex flex-col gap-4">
                    <div className="text-xl text-white font-semibold">COLLECTION NAME</div>
                    <div className="text-lg text-white font-medium" aria-label="nfts in collection">{2} NFTs</div>
                </div>
            </div>
            <div className="grid grid-cols-3 overflow-auto" style={{minWidth: "100vw", scrollSnapType: "x mandatory", scrollPaddingLeft: "32px", scrollPaddingRight: "32px"}}>
                <div className="flex gap-8">
                { Array(3).fill(1).map(i => 
                    <div className="card flex-col" style={{minWidth: '80vw', scrollSnapAlign: "start"}}>
                        <ImageWithLoader src={getConfig(NEAR_ENV).fakeImgUrl + '500/1000'} width="w-full"></ImageWithLoader>
                        <div className="border-t border-light-gray-70 dark:border-dark-gray-50">
                            <div className="flex gap-4">
                                <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-16" height="w-16" rounded="round-full"></BaseImage>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}