import React from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from './Comments';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = true;


  return (
    <div className="">
      <div className="container p-5 rounded-lg bg-white shadow-lg mb-5">
        {/* Top user information and menu */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-10 h-9 rounded-full " src={post.profilePic} alt="" />
            <div className="" style={{ display: "flex", flexDirection: "column" }}>
              <Link
                to={`/profile/${post.userId}`}>
                <span className="cursor-pointer">{post.name}</span>
              </Link>
              <span className="text-sm text-gray-500">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon className='cursor-pointer'/>
        </div>

        {/* Post Card image and tile */}
        <div className="mt-2">
          <p>{post.desc}</p>
          <img className="w-full mt-5" src={post.img} alt="" style={{ maxHeight: "500px", objectFit: "cover" }} />
        </div>

        {/* card below buttons */}
        <div className="flex gap-3 pt-4">
          <div className="flex items-center gap-1 text-xs md:text-sm cursor-pointer">
            {liked?<FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm cursor-pointer" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm cursor-pointer">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
        
      </div>
    </div>
  )
}

export default Post