import * as nearAPI from "near-api-js"

const NEAR_ENV = "testnet"

const { keyStores } = nearAPI;
const keyStore = new keyStores.BrowserLocalStorageKeyStore();

const getConfig = (NEAR_ENV: string) => {
    switch (NEAR_ENV) {
        case 'mainnet':
            return {
                networkId: "mainnet",
                keyStore,
                nodeUrl: "https://rpc.mainnet.near.org",
                walletUrl: "https://wallet.mainnet.near.org",
                helperUrl: "https://helper.mainnet.near.org",
                explorerUrl: "https://explorer.mainnet.near.org",
            }
        case 'testnet':
            return {
                networkId: "testnet",
                keyStore, 
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org",
            }
        case 'betanet': 
            return {
                networkId: "betanet",
                keyStore, 
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