import instance from ".";
import { config } from "services/near";
import { Collection } from "types/collection";

export const createCollection = async (colData: Collection) => {
  const { data } = await instance.post(
    `${config.apiUrl}/api/collections`,
    colData
  );

  if (!data.success) {
    return "failed to get profile: " + data.data.msg;
  }
  return data.data.collection;
};
