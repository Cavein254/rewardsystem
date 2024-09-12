import { useQuery } from "@apollo/client";
import { ReactData } from "./ReactionData";
import ReactionItem from "./ReactionItem";
import {
  GET_MY_POST_REACTION,
  GET_POST_REACTION,
} from "@/graphql/operations/query/reaction";
import { Reaction, ReactionCount } from "@/__generated__/graphql";
import { useContext } from "react";
import { AuthContext } from "@/Auth";

interface ReactionBoxProps {
  postId: string;
}

const ReactionBox = ({ postId }: ReactionBoxProps) => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery(GET_POST_REACTION, {
    variables: {
      postId,
    },
  });
  const { data: myPostReaction } = useQuery(GET_MY_POST_REACTION, {
    variables: {
      userId: user?.id,
      postId,
    },
  });

  const userInteraction: Array<Reaction> = myPostReaction?.getMyPostReaction;
  const storedReaction = data?.getPostReactions?.data;
  const allReactions = ReactData.map((reaction) => {
    const userAction: Array<ReactionCount> = storedReaction?.filter(
      (action: ReactionCount) =>
        action.reactionType === reaction.title.toUpperCase()
    );
    const populatedUserAction = userAction?.length > 0 ? userAction[0] : null;
    const userInteractionItem = userInteraction?.some(
      (item) => reaction.title.toUpperCase() === item.reactionType
    );
    return (
      <div key={reaction.title}>
        <ReactionItem
          reaction={reaction}
          populatedUserAction={populatedUserAction}
          userInteractionItem={userInteractionItem}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-wrap justify-center py-2">{allReactions}</div>
  );
};

export default ReactionBox;
