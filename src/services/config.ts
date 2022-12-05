export const NEAR_ENV = "testnet" // change this to mainnet when deploy to production

export const getConfig = (NEAR_ENV: string) => {
    switch (NEAR_ENV) {
        case 'mainnet':
            return {
                appUrl: "https://sora-nft.netlify.app",
                networkId: "testnet",
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org",
                fakeImgUrl: "https://picsum.photos/",
                contractId: "",
                apiUrl: "https://sora-nft-api.herokuapp.com",
                twitterApi: "https://api.twitter.com",
            }
        case 'testnet':
            return {
                appUrl: "http://localhost:3000",
                networkId: "testnet",
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org",
                fakeImgUrl: "https://picsum.photos/",
                contractId: "",
                apiUrl: "http://localhost:8000",
                twitterApi: "https://api.twitter.com",
            }
        case 'betanet': 
            return {
                networkId: "betanet",
                nodeUrl: "https://rpc.betanet.near.org",
                walletUrl: "https://wallet.betanet.near.org",
                helperUrl: "https://helper.betanet.near.org",
                explorerUrl: "https://explorer.betanet.near.org",
            }
        case 'localnet':
            return {
                networkId: "local",
                nodeUrl: "http://localhost:3030",
                walletUrl: "http://localhost:4000/wallet",
            }
        default:
            return {}
    }
}