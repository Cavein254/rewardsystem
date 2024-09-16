import { useQuery } from "@apollo/client";
import { ReactData } from "./ReactionData";
import ReactionItem from "./ReactionItem";
import {
  GET_MY_POST_REACTION,
  GET_POST_REACTION,
} from "@/graphql/operations/query/reaction";
import { Reaction, ReactionCount } from "@/__generated__/graphql";
import { useContext, useState } from "react";
import { AuthContext } from "@/Auth";

interface ReactionBoxProps {
  postId: string;
}

const ReactionBox = ({ postId }: ReactionBoxProps) => {
  const { user } = useContext(AuthContext);
  const [userInteraction, setUserInteraction] = useState<Array<Reaction>>();
  const [storedReaction, setStoredReaction] = useState<Array<ReactionCount>>();
  const { error } = useQuery(GET_POST_REACTION, {
    variables: {
      postId,
    },
    onCompleted: (data) => {
      console.log("event fire");
      if (data?.getPostReactions?.data) {
        const udata = data?.getPostReactions?.data;
        setStoredReaction(udata);
      } else {
        setStoredReaction([]);
      }
    },
  });
  useQuery(GET_MY_POST_REACTION, {
    variables: {
      userId: user?.id,
      postId,
    },
    onCompleted: (data) => {
      if (data?.getMyPostReaction?.length > 0) {
        const udata = data?.getMyPostReaction;
        setUserInteraction(udata);
      } else setUserInteraction([]);
    },
  });

  const allReactions = ReactData.map((reaction) => {
    const userAction = storedReaction?.filter(
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
          postId={postId}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-wrap justify-center py-2">{allReactions}</div>
  );
};

export default ReactionBox;
