import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { accountId } from "services/near";
import Collection from "./Collection";
import NFT from "./NFT";

type IMenuItem = {
  name: string;
  active: boolean;
};

function MenuItem({
  item,
}: PropsWithChildren<{
  item: IMenuItem;
}>) {
  const [menuItem, setMenuItem] = useState(item);
  const { profileId } = useParams();
  const { hash } = useLocation();

  const onHashChange = () => {
    const hashParams = hash === "" ? "nfts" : hash.split("#")[1];

    if (menuItem.name.toLowerCase() === hashParams) {
      return setMenuItem((s) => {
        return {
          ...s,
          active: true,
        };
      });
    }
    setMenuItem((s) => {
      return {
        ...s,
        active: false,
      };
    });
  };

  useEffect(() => {
    onHashChange();
  }, [hash]);

  return (
    <li className="w-full hover dark:hover:bg-dark-gray-90 text-center cursor-pointer">
      <Link
        to={`/${profileId}#${
          menuItem.name === "NFTs" ? "" : menuItem.name.toLowerCase()
        }`}
        className="flex justify-center"
      >
        <p className="w-max py-4 relative">
          <div
            className={`${
              menuItem.active ? "" : "text-light-gray-45 dark:text-dark-gray-50"
            }`}
          >
            {menuItem.name}
          </div>
          {menuItem.active && (
            <div className="absolute w-full bottom-0 left-0 right-0 border-2 border-primary-100 rounded-lg"></div>
          )}
        </p>
      </Link>
    </li>
  );
}

// this comp is used to render which comp depends on the hash route menu
function HandleChangeParam() {
  const { hash } = useLocation();
  const hashParams = hash === "" ? "nfts" : hash.split("#")[1];

  switch (hashParams) {
    case "collections":
      return <Collection />;
    default:
      return <NFT />;
  }
}

function Menu() {
  const [items] = useState<IMenuItem[]>([
    {
      name: "NFTs",
      active: true,
    },
    {
      name: "Collections",
      active: false,
    },
  ]);

  return (
    <div className="w-full px-4">
      <ul className="flex justify-center items-center border-b dark:border-dark-gray-80">
        {items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </ul>
      <div className="flex border-dark-gray-90">
        <HandleChangeParam />
      </div>
    </div>
  );
}

export default Menu;
