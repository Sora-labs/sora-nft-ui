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

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full overflow-x-hidden">
            <Banner></Banner>
            <FirstPost></FirstPost>
            <CuratedCollection></CuratedCollection>
            <div className="w-full flex flex-col text-center items-center px-8 py-16 gap-4 2xl:gap-8 dark:bg-dark-gray-100">
                <h1 className="text-2xl 2xl:text-4xl font-semibold">{ t('home_first_heading') }</h1>
                <p className="2xl:text-2xl tracking-wide quote">{ t('home_first_quote') }</p>
                <div className="2xl:text-2xl">
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
            <div className="flex flex-col items-center text-center px-8 py-16 gap-4 dark:bg-dark-gray-100">
                <h1 className="text-2xl 2xl:text-4xl font-semibold">{ t('home_second_heading') }</h1>
                <p className="2xl:text-2xl tracking-wide quote">{ t('home_second_quote') }</p>
            </div>
           <Footer></Footer>             
        </div>
    )
}

export default Home