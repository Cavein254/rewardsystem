import { ReactionCount } from "@/__generated__/graphql";
import { ReactElement } from "react";

type ReactionData = {
  icon: ReactElement;
  title: string;
};
interface ReactionItemProps {
  reaction: ReactionData;
  populatedUserAction: ReactionCount | null;
  userInteractionItem: boolean;
}
const ReactionItem = ({
  reaction,
  populatedUserAction,
  userInteractionItem,
}: ReactionItemProps) => {
  const actionCount =
    populatedUserAction !== null ? populatedUserAction.count : 0;
  const style = userInteractionItem ? "text-purple-500" : "";

  return (
    <div
      className={`${style} flex justify-center w-fit items-center shadow-sm border-2 border-gray-300 mx-2 p-2 hover:bg-green-400 hover:text-white `}
    >
      <div className="">{reaction.icon}</div>
      <div>
        <p className="ml-1 font-bold">{actionCount}</p>
        <p className="text-xs">{reaction.title}</p>
      </div>
    </div>
  );
};

export default ReactionItem;
