import { useTranslation } from "react-i18next"
import BaseButton from "../../components/Buttons/Button"
import { CuratedCollection } from "./CuratedCollection"
import FirstPost from "./FirstPost"
import Marquee from "react-fast-marquee/"
import { BaseImage } from "../../components/Images"
import { getConfig, NEAR_ENV } from "../../services/config"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Banner from "components/Banner"
import { AiOutlineTwitter } from "react-icons/ai"

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full overflow-x-hidden">
            <Banner></Banner>
            <FirstPost></FirstPost>
            <CuratedCollection></CuratedCollection>
            <div className="w-full flex flex-col text-center items-center px-8 py-48 gap-4 2xl:gap-8 dark:bg-dark-gray-100">
                <h1 className="text-2xl lg:text-6xl font-semibold">{ t('home_first_heading') }</h1>
                <p className="text-xl lg:text-2xl tracking-wide quote">{ t('home_first_quote') }</p>
                <div className="2xl:text-2xl mt-10">
                    <BaseButton rounded="rounded-full font-medium" padding="py-3 px-10">{ t('get_started') }</BaseButton>
                </div>
            </div>
            <div className="w-full flex flex-col gap-8 py-16 dark:bg-dark-gray-100">
                <Marquee pauseOnHover={true}>
                    { Array(30).fill(1).map((i , index) => 
                    <Link to="#" key={index} className="mx-4 rounded-full hover:shadow-lg hover:-translate-y-px">
                        <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-20" rounded="rounded-full"></BaseImage>
                    </Link>
                    )}
                </Marquee>
                <Marquee pauseOnHover={true} direction="right">
                    { Array(30).fill(1).map((i, index) => 
                    <Link to="#" key={index} className="mx-4 rounded-full hover:shadow-lg hover:-translate-y-px">
                        <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-20" rounded="rounded-full"></BaseImage>
                    </Link>
                    )}
                </Marquee>
            </div>
            <div className="flex flex-col items-center text-center pl-8 py-48 gap-4 dark:bg-dark-gray-100">
                <h1 className="text-2xl lg:text-6xl font-semibold">{ t('home_second_heading') }</h1>
                <p className="text-xl lg:text-2xl tracking-wide quote">{ t('home_second_quote') }</p>
                <div className="w-full mt-8 pr-8 flex flex-col md:flex-row justify-center items-center gap-10 relative">
                    <img src="./images/kawaii-anime-school-girls-right-side.png" alt="" className="absolute w-32 md:w-40 -top-20 right-0"/>
                    <img src="./images/anya-kore-suki-left-side.png" alt="" className="absolute w-80 bottom-0 -left-5"/>
                    <div className="w-full md:w-1/3 relative px-8 py-10 shadow-md rounded-lg hover:-translate-y-1 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-canvas-grid before:bg-center before:bg-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16">
                                <BaseImage src="./images/nft-app-logo.png"></BaseImage>
                            </div>
                            <h2 className="font-semibold text-4xl my-4">Sora</h2>
                            <p className="font-semibold text-lg text-light-gray-80 dark:text-dark-gray-30" style={{maxWidth: "200px"}}>
                                Next generation of NFT marketplace
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 relative px-8 py-10 shadow-md rounded-lg hover:-translate-y-1 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-canvas-grid before:bg-center before:bg-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 p-2 rounded-full bg-primary-100">
                                <AiOutlineTwitter className="w-full h-full text-white"></AiOutlineTwitter>
                            </div>
                            <h2 className="font-semibold text-4xl my-4">Twitter</h2>
                            <p className="font-semibold text-lg text-light-gray-80 dark:text-dark-gray-30" style={{maxWidth: "200px"}}>
                                Largest social network in Japan
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 relative px-8 py-10 shadow-md rounded-lg hover:-translate-y-1 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-canvas-grid before:bg-center before:bg-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16">
                                <BaseImage src="./images/pixiv.jpg" rounded="rounded-full"></BaseImage>
                            </div>
                            <h2 className="font-semibold text-4xl my-4">Pixiv</h2>
                            <p className="font-semibold text-lg text-light-gray-80 dark:text-dark-gray-30" style={{maxWidth: "200px"}}>
                                Japanese artist online community
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           <Footer></Footer>             
        </div>
    )
}

export default Home