import Image from "../../components/Images"
import { getConfig, NEAR_ENV } from "../../services/config"

const FirstPost = () => {
    return (
        <div className="flex flex-col mx-8">
            <Image src={getConfig(NEAR_ENV).fakeImgUrl + '/1000/500'} width="w-full"></Image>
            
        </div>
    )
}

export default FirstPost