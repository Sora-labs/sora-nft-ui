import { accountId } from "services/near"

export const isOwnProfile = (address: string | undefined): boolean => {
    return address === accountId
}