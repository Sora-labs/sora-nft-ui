import React, { PropsWithChildren } from "react"
import { ImageLoader } from "./ImageLoader"


export const ImageWithLoader = (props: PropsWithChildren<{className?: string}> &
    React.HTMLAttributes<HTMLDivElement> & {
        src: string,
        width: string,
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
    <BaseImage src={src} width={width} height={height} padding={padding}>
        <ImageLoader></ImageLoader>
        <img src={src} alt={name ? name : "not found"} className={`w-full ${rounded ? rounded : 'rounded-sm'}`}/>
    </BaseImage>
    )
}

export const BaseImage = (props: PropsWithChildren<{className?: string}> &
    React.HTMLAttributes<HTMLDivElement> & {
        src: string,
        width: string,
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
                ${height ? height : 'h-fit'}
                ${padding ? padding : ''}
                relative
            `}
        >
            { props.children ? props.children : <img src={src} alt={name ? name : "not found"} className={`w-full ${rounded ? rounded : 'rounded-sm'}`}/> }
        </div>
    )
}