import { PropsWithChildren } from "react"

export const CollectionBadge = (props : PropsWithChildren<{className?: string}> & 
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
        <div className={`flex items-center gap-2 p-2 rounded-lg ${bg ? bg : "bg-light-gray-30 dark:bg-dark-gray-50"} bg-opacity-50`}>
            <div className="w-8 h-8">
                <img src={src} alt="" className="rounded-md"/>
            </div>
            <div className="font-medium">
                @{name}
            </div>
        </div>
    )
}