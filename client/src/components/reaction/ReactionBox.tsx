import { useQuery } from "@apollo/client";
import { ReactData } from "./ReactionData";
import ReactionItem from "./ReactionItem";
import { GET_POST_REACTION } from "@/graphql/operations/query/reaction";
import { ReactionCount } from "@/__generated__/graphql";

interface ReactionBoxProps {
  postId: string;
}

const ReactionBox = ({ postId }: ReactionBoxProps) => {
  const { data } = useQuery(GET_POST_REACTION, {
    variables: {
      postId,
    },
  });
  const storedReaction = data?.getPostReactions?.data;
  const allReactions = ReactData.map((reaction) => {
    const userAction: Array<ReactionCount> = storedReaction?.filter(
      (action: ReactionCount) =>
        action.reactionType === reaction.title.toUpperCase()
    );
    const populatedUserAction = userAction?.length > 0 ? userAction[0] : null;
    return (
      <div key={reaction.title}>
        <ReactionItem
          reaction={reaction}
          populatedUserAction={populatedUserAction}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-wrap justify-center py-2">{allReactions}</div>
  );
};

export default ReactionBox;
