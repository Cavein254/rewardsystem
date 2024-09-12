import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { FaThumbsDown, FaThumbsUp, FaFaceSmileWink } from "react-icons/fa6";
import { PiMaskHappyFill, PiMaskSadFill } from "react-icons/pi";
import { TbMoodSadFilled } from "react-icons/tb";
const style = "text-3xl";
export const ReactData = [
  {
    icon: <FaHeart className={style} />,
    title: "Love",
  },
  {
    icon: <FaHeartBroken className={style} />,
    title: "Hate",
  },
  {
    icon: <FaThumbsUp className={style} />,
    title: "Like",
  },
  {
    icon: <FaThumbsDown className={style} />,
    title: "Dislike",
  },
  {
    icon: <PiMaskHappyFill className={style} />,
    title: "Happy",
  },
  {
    icon: <PiMaskSadFill className={style} />,
    title: "Sad",
  },
  {
    icon: <FaFaceSmileWink className={style} />,
    title: "Interesting",
  },
  {
    icon: <TbMoodSadFilled className={style} />,
    title: "Boring",
  },
];
