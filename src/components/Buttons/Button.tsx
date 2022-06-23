import React, { PropsWithChildren } from "react";

function BaseButton(props: PropsWithChildren<{className?: string}> & 
    React.HTMLAttributes<HTMLDivElement> & {
        width?: string,
        rounded?: string,
        border?: string,
        padding?: string,
        margin?: string,
        bg?: string,
    }
) {
    const { 
        width, 
        rounded, 
        border, 
        padding, 
        margin, 
        bg, 
    } = props
    return (
        <div className={`
            ${ width ? width : 'w-full' }
            ${ rounded ? width: 'rounded-md' }
            ${ border ? border : 'border border-light-gray-80 dark:border-dark-gray-30' }
            ${ padding ? padding : 'py-3 px-4' }
            ${ margin ? margin : '' }
            ${ bg ? bg : 'bg-white dark:bg-black'}
            text-center
            font-medium
            cursor-pointer
        `}>
            {props.children}
        </div>
    );
}

export default BaseButton;