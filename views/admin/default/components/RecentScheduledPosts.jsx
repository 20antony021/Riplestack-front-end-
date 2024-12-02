import Card from "components/card";
import postImg from "../../../../assets/img/posts/image.png";
import facebookIcon from "../../../../assets/img/marks/facebook.png";
import PostItem from "./PostItem";
// import twitterIcon from "../../../../assets/img/marks/twitter.png";
// import instagramIcon from "../../../../assets/img/marks/instagram.png";
// import tiktokIcon from "../../../../assets/img/marks/tiktok.png";

const RecentScheduledPosts = () => {
  const posts = Array(11).fill({ title:"Now Available: The Latest Smartwatch Series", date:"Today 18:03" })
  return (
    <Card extra="flex flex-col bg-gradient-to-b from-[#ffffff] to-[#FDF7FF] w-full rounded-3xl py-6 text-center mt-5 3xl:mt-0 h-[730px] overflow-y-hidden">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white dark:!text-navy-900">
          Recently Schedule Post
        </h2>
      </div>
      <div className="flex flex-col w-full mt-3 px-6">
        { posts.map((item, id) => <PostItem key={`post-item-${id}`} imgData={postImg} accountImg={facebookIcon} title={item.title} date={item.date} />) }
      </div>
    </Card>
  );
};

export default RecentScheduledPosts;
