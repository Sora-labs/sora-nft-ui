import { Collection } from "components/Collection/Collection";
import { useDisableRightClick } from "hooks/useDisableRightClick";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getConfig, NEAR_ENV } from "services/config";
import { RootState } from "store/store";
import { NFT } from "types/nft";
import NFTInfo from "./NFTInfo";
import NFTSideDetail from "./NFTSideDetail";
import NFTWrapper from "./NFTWrapper";

const NFTPage = () => {
  const { isExpanded } = useSelector((state: RootState) => state.nftPage);
  const { t } = useTranslation();
  // useDisableRightClick()
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
    <div className="">
      <div className="nft-inner-wrapper px-8">
        <div
          className={`${isExpanded ? "wide-nft-wrapper" : ""}
                    `}
        >
          <NFTWrapper></NFTWrapper>
        </div>
        <div className="grid-col-1">
          <NFTInfo></NFTInfo>
        </div>
        <div
          className={`
                        ${
                          isExpanded
                            ? "on-wide-nft-wrapper"
                            : "on-skrink-nft-wrapper"
                        }
                    `}
        >
          <NFTSideDetail></NFTSideDetail>
        </div>
      </div>
      <div className="w-full flex flex-col mt-16">
        <h2 className="mx-8 text-2xl font-semibold">
          {t("more_from_this_artist")}
        </h2>
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
    </div>
  );
};

export default NFTPage;
