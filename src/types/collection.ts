import { NFT } from "./nft"

export type Collection = {
    _id: string,
    name: string,
    description: string,
    avatar: string,
    background: string,
    ownerId: string,
    nfts: NFT[],
}