import { useTranslation } from "react-i18next";

function ProfileInfo() {
    const { t } = useTranslation()

    return (
        <div className="w-full px-8">
            <div className="flex justify-between mb-5">
                <div className="flex flex-col justify-center gap-2" aria-label="name and username">
                    <div className="font-semibold text-2xl">{ "name" }</div>
                    <div className="font-semibold text-light-gray-80 dark:text-dark-gray-50">{ "@username" }</div>
                </div>
                <div>
                    <div className="border border-light-gray-100 dark:border-dark-gray-50 hover:bg-light-gray-20 dark:hover:bg-dark-gray-90 py-2 px-4 rounded-full cursor-pointer">
                        { t('edit_profile') }
                    </div>
                </div>
            </div>
            <div className="w-full">
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
    );
}

export default ProfileInfo;