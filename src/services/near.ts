import { keyStores, Near, utils } from "near-api-js"
import { functionCall } from "near-api-js/lib/transaction"
import { getConfig, NEAR_ENV } from "./config"
import Wallet from "./wallet"
import BN from "bn.js"
import { toRoundedReadableNumber } from "../utils/stringFormatter"

const keyStore = new keyStores.BrowserLocalStorageKeyStore()

export const config = getConfig(NEAR_ENV)

declare global {
    interface Window {
        wallet: Wallet
    }
}

// @ts-ignore
export const near = new Near({
    ...config,
    keyStore,
    headers: {},
})

window.wallet = new Wallet(near, null)

export const wallet = new Wallet(near, null)

export const accountId: string = window.wallet.getAccountId()

export const getGas = (gas: string) =>
    gas ? new BN(gas) : new BN('100000000000000')

export const getAmount = (amount: string) => 
    amount ? new BN(utils.format.parseNearAmount(amount)!) : new BN('0')

export const getUserBalance = async(): Promise<string> => {
    if (!window.wallet.isSignedIn()) return "0"
    const account = await near.account(window.wallet.getAccountId())
    const balances = await account.getAccountBalance()
    return toRoundedReadableNumber({
        decimals: 24, 
        number: balances.available, 
        precision: 2, 
        withCommas: false
    })
}

interface FunctionCallOptions {
    methodName: string,
    args?: object,
    gas?: string,
    amount?: string,
}

export interface Transaction {
    receiverId: string,
    functionCalls: FunctionCallOptions[],
}

export const executeMultipleTransactions = async(
    transactions: Transaction[], 
    callbackUrl?: string
) => {
    const currentTransactions = await Promise.all(
        transactions.map((t, i) => {
            return window.wallet.createTransaction({
                receiverId: t.receiverId,
                nonceOffset: i + 1,
                actions: t.functionCalls.map(fc =>
                    functionCall(
                        fc.methodName,
                        fc.args!,
                        getGas(fc.gas!),
                        getAmount(fc.amount!),
                    )
                )
            })
        })
    )
    return window.wallet.requestSignTransactions(currentTransactions, callbackUrl)
}