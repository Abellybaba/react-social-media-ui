import React from 'react';
import "../stories/story.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Stories = () => {
    const {currentUser} = useContext(AuthContext);

    //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    
    
  
  ];
  return (
    <div className="flex gap-2 px-1 mb-6 h-64">
        <div className="flex-1 overflow-hidden relative">
                <img className="rounded-md w-full h-full object-cover" src={currentUser.profilePic} alt="" />
                <span className="absolute bottom-3 left-3 text-white">{currentUser.name}</span>
                <AddCircleOutlineOutlinedIcon className="cursor-pointer bg-indigo-500 absolute left-3 bottom-9 rounded-full text-white"/>
            </div>
        {stories.map(story => (
            <div className="flex-1 flex-wrap overflow-hidden relative " key={story.id}>
                <img className="rounded-md w-full h-full object-cover" src={story.img} alt="" />
                <span className="absolute bottom-3 left-3 text-white">{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories