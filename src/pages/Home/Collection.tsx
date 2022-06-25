import { Link } from "react-router-dom"
import { ArtistBadge } from "../../components/Badges/ArtistBadge"
import { BaseImage, ImageWithLoader } from "../../components/Images"
import { Bid } from "../../components/Offer/Bid"
import { Reserve } from "../../components/Offer/Reserve"
import { getConfig, NEAR_ENV } from "../../services/config"

export const Collection = ({ bgImg }: { bgImg: string}) => {

    return (
        <div className="w-screen flex flex-col justify-center px-8 pt-5 relative overflow-hidden box-border">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover blur-md bg-light-gray-100 scale-110" style={{backgroundImage: `url(${bgImg})`}}></div>
            <div className="relative z-10 w-full flex gap-5 mb-4">
                <div className="">
                    <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-20" rounded="rounded-md"></BaseImage>
                </div>
                <div className="w-full flex flex-col gap-4 justify-center">
                    <div className="text-xl text-white font-semibold">COLLECTION NAME</div>
                    <div className="text-lg text-white font-medium" aria-label="nfts in collection">{2} NFTs</div>
                </div>
            </div>
            <div className="relative grid grid-cols-3 overflow-auto pb-full" style={{scrollSnapType: "x mandatory", scrollPaddingLeft: "24px", scrollPaddingRight: "24px"}}>
                <div className="flex gap-4">
                { Array(3).fill(1).map((i, index)=> 
                    <Link to="#" key={index} className="card flex-col" aria-label="nft card" style={{minWidth: '75vw', scrollSnapAlign: "start"}}>
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
                    </Link>
                )}
                </div>
            </div>
            <div className="absolute z-10 bottom-5">
                <ArtistBadge src={getConfig(NEAR_ENV).fakeImgUrl + '100/100'} name="name"></ArtistBadge>
            </div>
        </div>
    )
}