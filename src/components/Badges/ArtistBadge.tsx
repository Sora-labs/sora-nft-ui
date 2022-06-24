import { PropsWithChildren } from "react"

export const ArtistBadge = (props : PropsWithChildren<{className?: string}> & 
    React.HTMLAttributes<HTMLDivElement> & {
        src: string,
        name: string,
        bg?: string,
    }
) => {
    const {
        src,
        name,
        bg,
    } = props

    return (
        <div className={`flex items-center gap-2 p-2 rounded-full ${bg ? bg : "bg-light-gray-70"} bg-opacity-70`}>
            <div className="w-8 h-8">
                <img src={src} alt="" className="rounded-full"/>
            </div>
            <div className="font-medium">
                @{name}
            </div>
        </div>
    )
}