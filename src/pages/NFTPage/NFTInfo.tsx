import { ArtistBadge } from "components/Badges/ArtistBadge"
import { CollectionBadge } from "components/Badges/CollectionBadge"
import Reaction from "components/Reaction"
import Share from "components/Share"
import { Tag } from "components/Tags"
import { useTranslation } from "react-i18next"
import { getConfig, NEAR_ENV } from "services/config"

const NFTInfo = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full">
            <h1 className="text-3xl font-semibold">{ "Title" }</h1>
            <div className="w-full border-b border-light-gray-70 dark:border-dark-gray-70 py-2">
                <div className="flex justify-between">
                    <div 
                        className=""
                        aria-label="nft base info" 
                    >
                        <div>
                            { t('minted_on') }
                            <span>: 2022/06/18</span>
                        </div>
                    </div>
                    <div
                        className="flex items-center gap-10"
                        aria-label="sentiment bar"
                    >
                        <Reaction></Reaction>
                        <Share></Share>
                    </div>

                </div>
            </div>
            <div className="py-8">
                <div className="flex items-center justify-between" aria-label="nft authority info">
                    <ArtistBadge src={ getConfig(NEAR_ENV).fakeImgUrl + '50/50' } name="Akashic"></ArtistBadge>
                    <div className="py-2 px-8 bg-primary-100 text-lg rounded-sm text-white font-medium">
                        { t('follow') }
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-8" aria-label="nft collection">
                    <h2 className="text-2xl font-semibold">
                        { t("collection") }
                    </h2>
                    <div className="flex justify-between">
                        <CollectionBadge src={ getConfig(NEAR_ENV).fakeImgUrl + '50/50' } name="Landscape"/>
                        <div></div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-8" aria-label="nft description">
                    <h2 className="text-2xl font-semibold">
                        { t("description") }
                    </h2>
                    <div className="flex justify-between">
                        <p>
                            in the rain / keeno さん　http://www.nicovideo.jp/watch/sm21858462
                            <br />
                            【まささん acoustic guitar ver】sm22014724 <br />
                            【Mix】 らんくん　mylist/21166224 <br />
                            【Illustration】 すがのん　@hirotopizza　<br />
                            【Encode】 シュウ　mylist/38220094　@shu_niconico　
                            <br />
                            ありがとうございました。
                            <br />
                            【Vocal】TORi     Twitter@Night_in_ga1e    Instagram@tori_xdxd
                            http://www.nicovideo.jp/watch/sm24131603
                            <br />
                            <br />
                            Thank you for listening.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-8" aria-label="nft description">
                    <h2 className="text-2xl font-semibold">
                        { t("details") }
                    </h2>
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>{ t('view_on_nearblocks') }</div>
                        </div>
                        <div>
                            <div>{ t('view_metadata') }</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-8" aria-label="nft description">
                    <h2 className="text-xl font-semibold">
                        { t("tags") }
                    </h2>
                    <div className="flex gap-2">
                        { ["art", "2d", "boobs"].map((tag, index) =>
                            <Tag name={tag} bg="bg-light-gray-20 dark:bg-dark-gray-80"></Tag>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTInfo