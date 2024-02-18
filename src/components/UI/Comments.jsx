import React, { useState } from "react";
import toast from "react-hot-toast";

const initialComments = [
  {
    id: 1,
    username: "user1",
    comment: "This is awesome!",
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    username: "user2",
    comment: "Really cool post!",
    avatar: "/images/avatar.png",
  },
];

const Comments = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (!newComment) return;
    const comment = {
      id: comments.length + 1,
      username: "iyushjain",
      comment: newComment,
      avatar: "/images/avatar.png",
    };
    setComments([comment, ...comments]);
    setNewComment("");
    setTimeout(() => {
      toast(
        (t) => (
          <div className="flex flex-row gap-[10px] items-center">
            <img src="/icons/coin.svg" alt="" /> You earned{" "}
            <span className="font-bold">5</span> coins
          </div>
        ),
        {
          duration: 3000,
        }
      );
    }, 2000);
  };

  return (
    <div className="mx-[10px] mt-[16px] mb-[25px] space-y-4">
      <div className="mb-[16px]">
        <div className="flex flex-row items-center pr-[12px] rounded-[2px] border-[0.5px] border-[#909090] bg-transparent w-full h-[40px]">
          <input
            type="text"
            placeholder="COMMENT"
            className="bg-transparent w-full p-[18px] focus:outline-none text-[12px]"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment} className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M0.885742 3.87134C0.885742 3.07569 1.20181 2.31263 1.76442 1.75002C2.32703 1.18741 3.09009 0.871338 3.88574 0.871338L21.8857 0.871338C22.6814 0.871338 23.4445 1.18741 24.0071 1.75002C24.5697 2.31263 24.8857 3.07569 24.8857 3.87134V21.8713C24.8857 22.667 24.5697 23.43 24.0071 23.9927C23.4445 24.5553 22.6814 24.8713 21.8857 24.8713H3.88574C3.09009 24.8713 2.32703 24.5553 1.76442 23.9927C1.20181 23.43 0.885742 22.667 0.885742 21.8713V3.87134ZM9.13574 18.8713C9.1357 19.0159 9.17745 19.1574 9.25596 19.2788C9.33446 19.4002 9.44638 19.4963 9.57824 19.5556C9.7101 19.6149 9.85629 19.6348 9.99919 19.6129C10.1421 19.591 10.2756 19.5283 10.3837 19.4323L17.1337 13.4323C17.213 13.362 17.2765 13.2756 17.32 13.1789C17.3635 13.0822 17.386 12.9774 17.386 12.8713C17.386 12.7653 17.3635 12.6605 17.32 12.5638C17.2765 12.4671 17.213 12.3807 17.1337 12.3103L10.3837 6.31034C10.2756 6.21434 10.1421 6.15164 9.99919 6.12977C9.85629 6.1079 9.7101 6.1278 9.57824 6.18707C9.44638 6.24635 9.33446 6.34247 9.25596 6.46387C9.17745 6.58527 9.1357 6.72677 9.13574 6.87134V18.8713Z"
                fill="#909090"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`flex items-start space-x-2 ${
              index === 0 ? "animate-fade-in" : ""
            }`}
          >
            <img
              src={comment.avatar}
              alt="Avatar"
              className="w-[24px] h-[24px] rounded-full"
            />
            <div>
              <p className="font-medium text-[10px]">{comment.username}</p>
              <p className="text-[12px]">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
