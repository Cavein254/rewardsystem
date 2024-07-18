import { MdAutoGraph } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";
export const HeroData = [
  {
    id: 1,
    title: "Earn Points When you Register",
    description:
      "Automatically get rewarded points for registering to the site",
    icon: <MdAutoGraph className="p-2 text-[6.4rem] bg-gray-400 rounded-xl" />,
  },
  {
    id: 2,
    title: "More points when you write a Post",
    description:
      "For every post you write you will earn points for writing. Also you will receive points if someone likes your post and lose points when someone dislikes your post",
    icon: <FiEdit className="p-2 text-[6.4rem] bg-gray-400 rounded-xl" />,
  },
  {
    id: 3,
    title: "Unlock more with points",
    description:
      "Once you gain more points your credentials are elivated and you will can be an editor or a moderator",
    icon: <SiCodechef className="p-2 text-[6.4rem] bg-gray-400 rounded-xl" />,
  },
];
