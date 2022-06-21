import React, { PropsWithChildren } from "react"


const Image = (props: PropsWithChildren<{className?: string}> &
    React.HTMLAttributes<HTMLDivElement> & {
        src: string,
        width: string,
        height?: string,
        padding?: string,
    }
) => {
    const { 
        src,
        width,
        height,
        padding,
    } = props

    return (
    <div
        {...props}
        className={`
            ${width ? width : 'w-full'}
            ${height ? height : 'h-fit'}
            ${padding ? padding : ''}
        `}
    >
        <img src={src} alt="not found" className="w-full"/>
    </div>
    )
}

export default Image