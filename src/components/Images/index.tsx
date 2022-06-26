import React, { PropsWithChildren, useMemo, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { getHolderImg } from "services/img"

export const ImageWithLoader = (props: PropsWithChildren<{className?: string}> &
    React.HTMLAttributes<HTMLDivElement> & {
        src: string,
        width?: string,
        name?: string,
        height?: string,
        rounded?: string,
        padding?: string,
    }
) => {
    const { 
        src,
        name,
        width,
        height,
        rounded,
        padding,
    } = props
    const [isLoad, setIsLoad] = useState(false)
    const [img, setImg] = useState<string>("")
    useMemo(() => {
        (async() => {
            setIsLoad(true)
            setImg(await getHolderImg(src))
            setIsLoad(false)
        })()
    }, [src])
    return (
        <BaseImage src={img} width={width} height={height} padding={padding}>
            { isLoad && 
                <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center bg-light-gray-45 dark:bg-dark-gray-80">
                    <AiOutlineLoading3Quarters 
                        className="text-4xl animate-spin"
                    >
                    </AiOutlineLoading3Quarters>
                </div>
            }
            <div className={`absolute inset-0 ${rounded ? rounded : 'rounded-sm'}`}>
                <img src={src} alt={name ? name : "not found"} className={`w-full h-full object-cover block`}/>
            </div>
            <div className="w-full h-0 pb-full"></div>
        </BaseImage>
    )
}

export const BaseImage = (props: PropsWithChildren<{className?: string}> &
    React.HTMLAttributes<HTMLDivElement> & {
        src: string,
        width?: string,
        name?: string,
        height?: string,
        rounded?: string,
        padding?: string,
    }
) => {
    const { 
        src,
        name,
        width,
        height,
        rounded,
        padding,
    } = props

    return (
        <div
            {...props}
            className={`
                ${width ? width : 'w-full'}
                ${height ? height : 'h-full'}
                ${padding ? padding : ''}
                relative
            `}
        >
            { props.children ? props.children : <img src={src} alt={name ? name : "not found"} className={`w-full block ${rounded ? rounded : 'rounded-sm'}`}/> }
        </div>
    )
}