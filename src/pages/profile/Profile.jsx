import React from 'react';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";;
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className="mt-10 p-6 py-10 bg-gray-100 max-h-screen overflow-scroll">
      <div className="container">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full h-72 object-cover"
        />
      </div>

      <div className="container rounded-md my-6 bg-white shadow-lg">
        <div className="flex items-center justify-between h-60">
          <div className="basis-1/4 flex flex-col md:flex-row items-center justify-around text-gray-500">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="medium" />
            </a>

          </div>

          <div className="flex flex-col items-center basis-1/2 relative w-full">
            <img
              src="https://images.pixieset.com/50867825/eeecd3326c1e4c06ce2a676dcc3af9ba-thumb.png"
              alt=""
              className="w-32 h-32 rounded-full object-cover absolute bottom-28"
            />
            <span className="my-3 text-center">Able Abelly</span>
            <div className="flex items-center justify-between gap-16">
              <div className="text-center text-xs">
                <PlaceIcon fontSize="small" />
                <span className='ml-1'>USA</span>
              </div>
              <div className="text-center text-xs">
                <LanguageIcon fontSize="small" />
                <span className='ml-1'>Abellybaba</span>
              </div>
            </div>
            <button type="button" class="my-3 inline-block px-2 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Follow</button>
          </div>

          <div className=" basis-1/4 flex items-center justify-around">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>

        </div>

      </div>
      <Posts />
    </div>
  )
}

export default Profile