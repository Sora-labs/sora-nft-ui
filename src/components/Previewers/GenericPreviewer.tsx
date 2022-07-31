import { BaseImage } from "components/Images";
import DefaultAvatar from "components/Images/DefaultAvatar";
import { PropsWithChildren } from "react";

function ProfilePics({
    avatar,
    background
}: PropsWithChildren<{
    avatar?: null | string,
    background?: null | string,
}>) {
    return (
        <div className="relative mb-32">
            <div className="">
                <div className="w-full h-32 md:h-56 overflow-y-hidden">
                    { background && <img src={ "" } alt="not found" className="w-full object-cover"/> }
                    { !background && <div className="w-full h-full bg-slate-500 object-cover"/> }
                </div>
            </div>
            <div className="flex flex-col items-center absolute w-min -bottom-3/4 left-0 right-0 mx-auto md:-bottom-1/2 md:mr-0 md:ml-0 md:left-8 md:right-auto md:items-start">
                <div className="w-28 h-28 rounded-full border-8 bg-light-gray-10 dark:bg-dark-gray-100 border-light-gray-10 dark:border-dark-gray-100 md:-bottom-1/3 md:m-0 md:right-auto md:left-8">
                    { avatar && <BaseImage src={ "" } rounded="rounded-full"/> }
                    { !avatar && <DefaultAvatar/> }
                </div>
            </div>
        </div>
    )
}

function ProfileInfo({
    name,
    username,
    description,
}: PropsWithChildren<{
    name?: null | string,
    username?: null | string,
    description?: null | string
}>) {
    return (
        <div className="w-full px-8">
            <div className="flex justify-between mb-5">
                <div className="flex flex-col justify-center gap-2" aria-label="name and username">
                    <div className="font-semibold text-2xl">{ name }</div>
                    <div className="font-semibold text-light-gray-80 dark:text-dark-gray-50">{ username }</div>
                </div>
            </div>
            <div className="w-full">
                <p>
                    { description }
                </p>
            </div>
        </div>
    );
}

function GenericPreviewer({
    avatar,
    background,
    name,
    username,
    description,
}: PropsWithChildren<{
    avatar?: null | string,
    background?: null | string,
    name?: null | string,
    username?: null | string,
    description?: null | string
}>) {
    return (
        <div className="flex gap-8">
            <div className="md:w-8/12 flex flex-col border-r border-b border-light-gray-70 dark:border-dark-gray-80">
                <ProfilePics avatar={avatar} background={background}/>
                <ProfileInfo name={name} username={username} description={description}/>
            </div>
            <div className="md:w-4/12 md:flex hidden"></div>
        </div>
    );
}

export default GenericPreviewer;