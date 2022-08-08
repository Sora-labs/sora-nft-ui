import { ApolloError } from "@apollo/client";
import { PropsWithChildren } from "react";

const Error = ({ error }: PropsWithChildren<{
    error?: ApolloError | undefined
}>) => {
    return (
        <div className="w-full">
            <p className="text-center font-semibold">{ error ? error.message : "Something went wrong" }</p>
        </div>
    )
}

export default Error