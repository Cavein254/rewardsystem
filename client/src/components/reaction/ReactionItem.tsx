import { ReactionCount } from "@/__generated__/graphql";
import { AuthContext } from "@/Auth";
import { ADD_POST_REACTION } from "@/graphql/operations/mutation/reaction";
import { GET_POST_DETAILS } from "@/graphql/operations/query/posts";
import { GET_MY_POST_REACTION } from "@/graphql/operations/query/reaction";
import { useMutation } from "@apollo/client";
import { ReactElement, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type ReactionData = {
  icon: ReactElement;
  title: string;
};
interface ReactionItemProps {
  reaction: ReactionData;
  populatedUserAction: ReactionCount | null;
  userInteractionItem: boolean | undefined;
  postId: string;
}
const ReactionItem = ({
  reaction,
  populatedUserAction,
  userInteractionItem,
  postId,
}: ReactionItemProps) => {
  const { user } = useContext(AuthContext);
  const actionCount =
    populatedUserAction !== null ? populatedUserAction.count : 0;
  const [btnActive, setBtnActive] = useState<boolean | undefined>(
    userInteractionItem
  );
  const [userCount, setUserCount] = useState(actionCount ? actionCount : 0);
  const style = btnActive ? "text-purple-500" : "";

  const handleUserInteraction = (userInteractionItem: boolean | undefined) => {
    if (userInteractionItem) {
      setBtnActive(userInteractionItem);
    } else {
      setBtnActive(false);
    }
  };

  useEffect(() => {
    handleUserInteraction(userInteractionItem);
  }, [userInteractionItem]);
  const [addReaction] = useMutation(ADD_POST_REACTION, {
    variables: {
      input: {
        userId: user?.id,
        postId,
        reactionType: reaction.title.toUpperCase(),
      },
    },
    onCompleted: (data) => {
      console.log(data);
      if (!data?.addReaction?.success) {
        return toast.error(data?.addReaction?.message);
      } else {
        if (!btnActive) {
          setUserCount(userCount + 1);
        } else {
          setUserCount(userCount - 1);
        }
        setBtnActive(!btnActive);
        return toast.success(data?.addReaction?.message);
      }
    },
    onError: (err) => {
      console.log(err);
    },
    refetchQueries: [
      {
        query: GET_MY_POST_REACTION,
        variables: {
          userId: user?.id,
          postId,
        },
      },
    ],
  });

  const handleOnclick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await addReaction();
  };
  return (
    <button
      className={`${style} flex justify-center w-fit items-center shadow-sm border-2 border-gray-300 mx-2 p-2 hover:bg-green-400 hover:text-white `}
      onClick={handleOnclick}
    >
      <div className="">{reaction.icon}</div>
      <div>
        <p className="ml-1 font-bold">{userCount}</p>
        <p className="text-xs">{reaction.title}</p>
      </div>
    </button>
  );
};

export default ReactionItem;
