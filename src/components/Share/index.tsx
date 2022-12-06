import { useTranslation } from "react-i18next";
import { AiOutlineTwitter } from "react-icons/ai";

const Share = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <AiOutlineTwitter className="text-2xl"></AiOutlineTwitter>
      <div>{t("share")}</div>
    </div>
  );
};

export default Share;
