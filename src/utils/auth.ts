import { accountId } from "services/near";

export const isOenerProfile = (address: string | undefined): boolean => {
  return address === accountId;
};
