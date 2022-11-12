import React from 'react';
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Comments = () => {
    const { currentUser } = useContext(AuthContext);

    //Temporary
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur",
            name: "John Doe",
            userId: 1,
            profilePicture:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profilePicture:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur",
            name: "Able Abelly",
            userId: 3,
            profilePicture:
                "https://images.pixieset.com/50867825/eeecd3326c1e4c06ce2a676dcc3af9ba-thumb.png",
        },
    ];
    return (
        <div className="py-3">
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-3 my-4">
                <img src={currentUser.profilePic} alt="" className="rounded-full" style={{ height: "36px", width: "40px", objectFit: "cover" }} />
                <input className="w-full bg-gray-100 rounded-sm border-spacing-1 p-2 break-all" type="text" placeholder="write a comment" />
                <button type="button" class="inline-block px-2 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Send</button>
            </div>
            {comments.map(comment => (
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-3 mb-2">
                    <div className="">
                        <img src={comment.profilePicture} alt="" className="rounded-full" style={{ height: "36px", width: "40px", objectFit: "cover" }} />
                    </div>
                    <div className="flex flex-col items-start w-full" >
                        <span className="text-base cursor-pointer">{comment.name}</span>
                        <p className="text-xs md:text-sm text-gray-600">{comment.desc}</p>
                    </div>
                    <span className="text-xs text-gray-500">1 hour ago</span>

                </div>
            ))}
        </div>
    )
}

export default Comments