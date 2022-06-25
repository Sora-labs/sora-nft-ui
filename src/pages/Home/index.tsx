import { useTranslation } from "react-i18next"
import BaseButton from "../../components/Buttons/Button"
import { CuratedCollection } from "./CuratedCollection"
import FirstPost from "./FirstPost"
import Marquee from "react-fast-marquee"
import { BaseImage } from "../../components/Images"
import { getConfig, NEAR_ENV } from "../../services/config"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer"

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="pt-8">
            <div className=""></div>
            <FirstPost></FirstPost>
            <CuratedCollection></CuratedCollection>
            <div className="flex flex-col text-center items-center px-8 py-16 gap-4 dark:bg-dark-gray-100">
                <h1 className="text-2xl font-semibold">{ t('home_first_heading') }</h1>
                <p className="tracking-wide quote">{ t('home_first_quote') }</p>
                <div className="">
                    <BaseButton rounded="rounded-full font-medium" padding="py-3 px-10">Get Started</BaseButton>
                </div>
            </div>
            <div className="flex flex-col gap-8 py-16 dark:bg-dark-gray-100">
                <Marquee pauseOnHover={true}>
                    { Array(20).fill(1).map(i => 
                    <Link to="#" className="mx-4 rounded-full hover:shadow-lg hover:-translate-y-px">
                        <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-20" rounded="rounded-full"></BaseImage>
                    </Link>
                    )}
                </Marquee>
                <Marquee pauseOnHover={true} direction="right">
                    { Array(20).fill(1).map(i => 
                    <Link to="#" className="mx-4 rounded-full hover:shadow-lg hover:-translate-y-px">
                        <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} width="w-20" rounded="rounded-full"></BaseImage>
                    </Link>
                    )}
                </Marquee>
            </div>
            <div className="flex flex-col text-center px-8 py-16 gap-4 dark:bg-dark-gray-100">
                <h1 className="text-2xl font-semibold">{ t('home_second_heading') }</h1>
                <p className="tracking-wide quote">{ t('home_second_quote') }</p>
            </div>
           <Footer></Footer>             
        </div>
    )
}

export default Home