import { Link } from "react-router-dom"
import { ArtistBadge } from "../../components/Badges/ArtistBadge"
import { BaseImage, ImageWithLoader } from "../../components/Images"
import { Bid } from "../../components/Offer/Bid"
import { Reserve } from "../../components/Offer/Reserve"
import { getConfig, NEAR_ENV } from "../../services/config"

export const Collection = ({ bgImg }: { bgImg: string}) => {

    return (
        <div className="w-full md:w-auto md:my-4 md:rounded-2xl flex flex-col justify-center md:mx-8 px-3 pt-5 relative overflow-hidden box-border">
            <div className="absolute top-0 right-0 bottom-0 left-0 md:mx-8 bg-cover bg-no-repeat bg-center blur-md bg-light-gray-100 scale-110" style={{backgroundImage: `url(${bgImg})`}}></div>
            <div className="collection-wrapper">
                <div className="relative z-10 2xl:w-full flex gap-5 mb-4 px-6">
                    <div className="flex 2xl:flex-col flex-1 gap-8">
                        <div className="w-20 2xl:w-36">
                            <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-full" rounded="rounded-md"></BaseImage>
                        </div>
                        <div className="w-full 2xl:w-auto flex flex-col gap-4 justify-center">
                            <div className="text-xl 2xl:text-3xl text-white font-semibold">COLLECTION NAME</div>
                            <div className="text-lg 2xl:text-xl text-white font-medium" aria-label="nfts in collection">{2} NFTs</div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 2xl:top-auto 2xl:right-auto 2xl:bottom-0 2xl:left-0 z-10 px-6 hidden md:block">
                        <div className="w-max">
                            <ArtistBadge src={getConfig(NEAR_ENV).fakeImgUrl + '100/100'} name="name"></ArtistBadge>
                        </div>
                    </div>
                </div>
                <div className="grid grid-col-3 gap-8 overflow-x-auto overflow-y-hidden hide-scrollbar pb-4 px-9 md:px-6 box-border" style={{scrollSnapType: "x mandatory", scrollPaddingLeft: "24px", scrollPaddingRight: "24px"}}>
                    { Array(3).fill(1).map((i, index)=> 
                        <Link to="#" key={index} className="nft-card flex gap-4" aria-label="nft card" style={{scrollSnapAlign: "start"}}>
                            <div className="flex nft-card flex-col flex-1 rounded-md md:rounded-lg overflow-hidden">
                                <div className="flex relative w-full justify-center items-center overflow-hidden" style={{scrollSnapAlign: "start"}} aria-label="card-body">
                                    <ImageWithLoader src={getConfig(NEAR_ENV).fakeImgUrl + '500/1000'} width="w-full"></ImageWithLoader>
                                </div>
                                <div className="relative bottom-0 z-10 dark:border-dark-gray-50 px-4 py-4 bg-white dark:bg-dark-gray-90" aria-label="card footer">
                                    <div className="flex gap-4">
                                        <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-8" height="w-8" rounded="rounded-full"></BaseImage>
                                        <div className="text-light-gray-80 dark:text-dark-gray-30 text-lg font-medium">
                                            <p>@<span>name</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        {index % 2 === 0 ? <Bid></Bid> : <Reserve></Reserve> }
                                    </div> 
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <div className="relative bottom-2 z-10 px-6 md:hidden">
                 <div className="w-min">
                   <ArtistBadge src={getConfig(NEAR_ENV).fakeImgUrl + '100/100'} name="name"></ArtistBadge>
                </div>
            </div>
        </div>
    )
}