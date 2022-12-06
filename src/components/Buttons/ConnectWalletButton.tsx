import { useTranslation } from "react-i18next";
import { config, wallet } from "../../services/near";

function ConnectWalletButton() {
  const { t } = useTranslation();

  return (
    <div
      onClick={async () => await wallet.requestSignIn()}
      className="px-3 py-1 bg text-white text-xs md:text-lg border bg-gray-900 border-light-gray-100 rounded-md cursor-pointer whitespace-nowrap"
    >
      {t("connect_wallet")}
    </div>
  );
}

export default ConnectWalletButton;
