import React, { useState } from "react";

import facebookIcon from "../../../../assets/img/marks/facebook.png";
import postImg from "../../../../assets/img/posts/image.png";
import PostListItem from "./PostListItem";
import { Pagination } from "rsuite";

const PostList = () => {
  const postList = [...Array(10)].map(_ => ({
    date: "2024-11-15 14:00:00",
    icon: facebookIcon,
    title: "Now Available: The Latest Smartwatch Series",
    postImage: postImg,
    likes: Math.floor(Math.random() * 200),
    shares: 1000,
    comment: 900,
    engagementRate: 96
  }))
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [viewPosts, setViewPosts] = useState(postList.slice(0, 4));

  const handlePage = (page) => {
    setCurrentPage(page);
    setViewPosts(postList.slice((page - 1) * itemsPerPage), page * itemsPerPage);
  }

  return (
    <div className="w-full">
      <div className="w-full">
        {
          viewPosts.slice(0, 4).map((item, id) => (<PostListItem key={`post-list-${id}`} {...item} last={id === 3} />))
        }
      </div>
      <div className="flex justify-between items-center w-full mt-3">
        <div className="text-sm">{`Showing ${currentPage} of ${postList.length} entries`}</div>
        <Pagination first last ellipsis prev next total={postList.length} limit={itemsPerPage} activePage={currentPage} onChangePage={(page) => handlePage(page)} />
      </div>
    </div>
  )
}

export default PostList;