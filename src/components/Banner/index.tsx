import BaseButton from "components/Buttons/Button"
import { useTranslation } from "react-i18next"


const Banner = () => {
    const { t } = useTranslation() 
    
    return (
        <div className="flex w-full h-screen md:h-auto relative mb-24 md:px-8" style={{minHeight: "480px", maxHeight: "70vh"}}>
            <div className="absolute inset-0 h-full bg-cover bg-center">
                <img src="./images/header-bg.jpg" alt="banner" className="w-full h-full block object-cover"/>
            </div>
            <div className="absolute z-30 top-4 right-4">
                <div className="flex gap-2 items-center py-2 px-4 rounded-full bg-blue-300 bg-opacity-70 cursor-pointer">
                    <span>x</span>
                    <h6 className="font-semibold">Hide</h6>
                </div>
            </div>
            <div className="absolute inset-0 py-16">
                <div className="flex flex-col font-semibold text-center items-center">
                    <h2 className="text-2xl tracking-tighter uppercase font-mono text-white mb-8">{ t('introducing') }</h2>
                    <h1 className="text-4xl md:text-8xl text-white mb-16">
                        <div className="inline-block mr-2">Sora</div>
                        <div className="inline-block p-2 bg-white text-transparent rounded-xl">
                            <div className="nft-badge bg-center" style={{backgroundImage: "url(./images/header-bg.jpg)"}}>NFT</div>
                        </div>
                    </h1>
                    <p className="text-xl text-white mb-8">{ t('intro_quote') }</p>
                    <BaseButton width="w-min" rounded="rounded-full">{ t('explore') }</BaseButton>
                </div>
            </div>
        </div>
    )
}

export default Banner