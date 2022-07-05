import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { BaseImage } from "components/Images"
import DefaultAvatar from "components/Images/DefaultAvatar"
import { PropsWithChildren } from "react"
import viewTx from "../../assets/svg/viewTx.svg"

const Provenance = (props: PropsWithChildren<{
    txAddress: string,
    action: string,
    address: string,
    date: string,
    name?: string,
    img?: string,
    offer?: string,
}>) => {
    const {
        action,
        txAddress,
        address,
        img,
        date,
        name,
        offer
    } = props
    dayjs.extend(relativeTime)

    return (
        <div className="w-full px-4 py-3 bg-slate-50 dark:bg-transparent border rounded-md dark:border-dark-gray-70 shadow-sm">
            <div className="flex gap-2 justify-between">
                <div className="flex gap-4">
                    <div>
                        { img 
                            ?
                            <BaseImage 
                                src={img}
                                rounded="rounded-full"
                            ></BaseImage>
                            :
                            <div className="w-10 h-10">
                                <DefaultAvatar></DefaultAvatar>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold text-lg">10 NEAR</div>
                        <div>action by akashic</div>
                        <div>{ dayjs(date).fromNow() }</div>
                    </div>
                </div>
                <div>
                    <a href="#" target="_blank">
                        <img className="cursor-pointer" src={ viewTx } alt="view tx"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Provenance