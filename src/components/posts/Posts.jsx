import React from 'react'
import Post from '../../components/Post';

const Posts = () => {

//TEMPORARY
const posts = [
    {
      id: 1,
      name: "Able Abelly",
      userId: 1,
      profilePic:
        "https://images.pixieset.com/50867825/eeecd3326c1e4c06ce2a676dcc3af9ba-thumb.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
        id: 3,
        name: "Able Abelly",
        userId: 3,
        profilePic:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://images.pexels.com/photos/1524105/pexels-photo-1524105.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
  ];



  return (
    <div className="">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts