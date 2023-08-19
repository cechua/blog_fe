import { format } from "date-fns";

const PostContainer = ({ post }) => {
  const { title, content, postedDate, postedBy } = post;
  return (
    <div className="container w-[800px] h-[200px] flex flex-col justify-between shadow-md py-4 px-8">
      <div>
        <div className="flex flex-row justify-between w-full font-bold">
          <h2>
            {title} by {postedBy?.username}
          </h2>
          <h2>{format(new Date(postedDate), "MMM d,yyyy")}</h2>
        </div>
        <div>{content}</div>
      </div>
      <div>Comments</div>
    </div>
  );
};

export default PostContainer;
