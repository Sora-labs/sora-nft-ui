import { useQuery } from "@apollo/client";
import Error from "components/Errors";
import Loader from "components/Loaders/Loader";
import { getCollectionsByArtist } from "graphql/queries/collections";
import { PropsWithChildren } from "react";
import { accountId, config } from "services/near";
import { Collection as CollectionType } from "types/collection";

function Collection({ 
    col
}: PropsWithChildren<{ 
    col?: CollectionType
}>) {
    return (
        <div className="flex flex-col relative px-4 py-4 rounded-lg overflow-hidden" style={{minHeight: '490px'}}>
            <div className="w-full h-full absolute top-0 left-0 z-10">
                <img src={ col?.background } alt="" className="w-full h-full object-cover" aria-label="background"/>
            </div>
            <div className="w-full flex relative z-20">
                <div className="w-1/2 absolute">
                    <div className="w-20 h-20 rounded-md border-8 border-light-gray-70 border-opacity-40">
                        <img src={ col?.avatar } alt="" className="w-full object-cover" aria-label="avatar"/>
                    </div>
                </div>
                <div className="flex justify-end w-1/2 absolute right-0 top-0">
                    <div className="w-min px-3 py-2 rounded-full bg-gray-600 bg-opacity-40">
                        <p className="text-xs text-light-gray-20 uppercase font-semibold">{ col?.name }</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col relative mt-auto z-20 gap-4">
                <div>
                    <h1 className="text-2xl text-white font-semibold">{ col?.name }</h1>
                </div>
                <div>
                    <div className="flex items-center gap-2 w-min px-3 py-2 rounded-full bg-gray-500 bg-opacity-40 backdrop-blur">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10">
                            <img src={config.fakeImgUrl + '/400/400' } alt="" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">@{ col?.ownerId }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Collections() {
    const { data, loading, error } = useQuery(getCollectionsByArtist, {
        variables: {
            address: accountId
        }
    })

    if(loading) {
        return <Loader></Loader>
    }

    if(error) {
        return <Error error={error}/>    
    }
    return (
        <div className="w-full h-max grid gap-4" style={{gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))"}}>
            { data.collections.map((collection: CollectionType) => 
                <Collection col={collection} key={collection._id}/>
            )}
        </div>
    )
}

export default Collections;