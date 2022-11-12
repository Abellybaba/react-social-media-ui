import React from 'react';
import Posts from '../../components/posts/Posts';
import Stories from '../../components/stories/Stories';
//import { useContext } from "react";
//import {Navigate} from "react-router-dom";
//import { AuthContext } from "./src/context/authContext.js";

const Home = () => {
  // const currentUser = useContext(AuthContext);

  // console.log(currentUser);

  // if (!currentUser) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <div className="mt-10 p-6 py-10 bg-gray-100 max-h-screen overflow-scroll">
      <div className='py-10 container rounded'>
        <Stories />
        <Posts/>
      </div>
    </div>
  )
}

export default Home