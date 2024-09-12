import { ReactionCount } from "@/__generated__/graphql";
import { ReactElement } from "react";

type ReactionData = {
  icon: ReactElement;
  title: string;
};
interface ReactionItemProps {
  reaction: ReactionData;
  populatedUserAction: ReactionCount | null;
}
const ReactionItem = ({ reaction, populatedUserAction }: ReactionItemProps) => {
  const actionCount =
    populatedUserAction !== null ? populatedUserAction.count : 0;
  console.log(actionCount);
  return (
    <div className="flex justify-center w-fit items-center shadow-sm border-2 border-gray-300 mx-2 p-2 hover:bg-green-400 hover:text-white ">
      <div className="">{reaction.icon}</div>
      <div>
        <p className="ml-1 font-bold">{actionCount}</p>
        <p className="text-xs">{reaction.title}</p>
      </div>
    </div>
  );
};

export default ReactionItem;
