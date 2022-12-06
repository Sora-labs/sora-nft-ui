import { useCoverWholeApp } from "hooks/useCoverWholeApp";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useRef,
  useState,
} from "react";
import AvatarEditor from "react-avatar-editor";
import { useTranslation } from "react-i18next";
import {
  AiOutlineClose,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from "react-icons/ai";

function ImageEditor({
  toggle,
  image,
  setToggle,
  setOutput,
  borderRadius,
  width,
  height,
}: PropsWithChildren<{
  image: string;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  setOutput: Dispatch<SetStateAction<string | null>>;
  borderRadius?: number;
  width?: number;
  height?: number;
}>) {
  const { t } = useTranslation();
  const [scale, setScale] = useState(1);
  const editor = useRef<AvatarEditor | null>(null);
  useCoverWholeApp(toggle);

  const onApplyImage = () => {
    const editedImg = editor.current?.getImageScaledToCanvas().toDataURL();
    if (editedImg) {
      setOutput(editedImg);
      setToggle(false);
    }
  };

  if (!toggle) {
    return <></>;
  }

  return (
    <div className="flex justify-center items-center py-auto fixed inset-0 w-full h-full z-50 bg-light-gray-70 bg-opacity-40">
      <div className="flex flex-col bg-light-gray-100 rounded-lg h-max py-4">
        {/* Header */}
        <div className="flex items-center justify-between px-2 pb-10">
          <div>
            <h1 className="text-white">{t("edit_media")}</h1>
          </div>
          <div>
            <div
              className="bg-light-gray-80 rounded-full p-2 cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <AiOutlineClose className="text-white" />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex ">
          <AvatarEditor
            ref={editor}
            image={image}
            border={10}
            scale={scale}
            width={width}
            height={height}
            borderRadius={borderRadius}
          />
        </div>
        {/* Footer */}
        <div>
          <div className="flex items-center justify-center gap-4 py-2">
            <div>
              <AiOutlineZoomOut
                className="w-6 h-6 text-light-gray-45 cursor-pointer"
                onClick={() => setScale((s) => (s === 1 ? s : s - 0.1))}
              />
            </div>
            <input
              type="range"
              name="scale"
              min={1}
              max={5}
              step={0.1}
              value={scale}
              defaultValue={0}
              onChange={(e) => setScale(+e.target.value)}
              className="w-3/5 px-0"
            />
            <div>
              <AiOutlineZoomIn
                className="w-6 h-6 text-light-gray-45 cursor-pointer"
                onClick={() => setScale((s) => (s === 5 ? s : s + 0.1))}
              ></AiOutlineZoomIn>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="bg-primary-100 rounded-full px-4 py-2 text-white cursor-pointer"
              onClick={onApplyImage}
            >
              {t("apply")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageEditor;
