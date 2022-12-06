import { useTranslation } from "react-i18next";
import { getConfig, NEAR_ENV } from "../../services/config";
import { Collection } from "../../components/Collection/Collection";
import { NFT } from "types/nft";

export const CuratedCollection = () => {
  const { t } = useTranslation();
  const items: Array<NFT> = [
    {
      name: "Fuck yourself",
      image: getConfig(NEAR_ENV).fakeImgUrl + "200/500",
      isBid: false,
    },
    {
      name: "Fuck yourself",
      image: getConfig(NEAR_ENV).fakeImgUrl + "201/500",
      isBid: false,
    },
    {
      name: "Fuck yourself",
      image: getConfig(NEAR_ENV).fakeImgUrl + "200/501",
      isBid: false,
    },
  ];

  return (
    <div className="w-full flex flex-col mt-16">
      <div className="text-2xl my-4 mx-8" aria-label="curated collection">
        <p className="font-semibold">{t("curated_collections")}</p>
      </div>
      {Array(3)
        .fill(1)
        .map((i, index) => (
          <Collection
            key={index}
            collectionBg={getConfig(NEAR_ENV).fakeImgUrl + "200/200"}
            artist="Akashic"
            avatar={getConfig(NEAR_ENV).fakeImgUrl + "200/200"}
            collectionImg={getConfig(NEAR_ENV).fakeImgUrl + "200/200"}
            collectionItems={items}
            collectionName="Landscape"
            isBid={false}
          ></Collection>
        ))}
    </div>
  );
};
