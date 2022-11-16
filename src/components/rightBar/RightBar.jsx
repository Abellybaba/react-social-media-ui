import React from 'react';
import "./rightBar.scss";



const RightBar = () => {
  return (
    <div className="hidden lg:block max-h-screen sticky-top overflow-scroll p-5 max-w-lg bg-gray-100 dark:bg-slate-800" style={{ flex: 3 }}>
      {/* First Suggestion section on the right bar */}
      <div className=" mt-14 container h-60 bg-slate-50 dark:bg-slate-700 rounded shadow-lg overflow-auto">
      <h4 className="text-gray-500 p-2 ml-3 mt-3 dark:text-white">Latest Activities</h4>
        <div className="px-3">
        
          <div className="flex justify-between align-center p-2 border-b">
            <div className="flex items-center">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="38px" />
              <span className='text-sm ml-3 dark:text-gray-400'>Able Abelly</span>
            </div>
            <div className="">
              <button type="button" class="mr-2 inline-block px-3 py-1.5 bg-indigo-500  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">follow</button>
              <button type="button" class="inline-block px-3 py-1.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">dismiss</button>
            </div>
          </div>
          <div className="flex justify-between align-center  p-2">
            <div className="flex items-center">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="38px" />
              <span className='text-sm ml-3 dark:text-gray-400'>Able Abelly</span>
            </div>
            <div className="">
              <button type="button" class="mr-2 inline-block px-3 py-1.5 bg-indigo-500  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">follow</button>
              <button type="button" class="inline-block px-3 py-1.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">dismiss</button>
            </div>
          </div>

        </div>

      </div>

        {/* Latest Activity section */}
      <div className=" mt-5 container h-60 bg-slate-50 rounded shadow-lg overflow-auto dark:bg-slate-700">
      <h4 className="text-gray-500 p-2 ml-3 mt-3 dark:text-white">Latest Activities</h4>
        <div className="px-3">
      
          <div className="flex justify-between align-center p-2 border-b">
            <div className="flex items-center">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="38px" />
              <p className="dark:text-gray-400">
              <span className='text-sm ml-3 dark:text-gray-400'>Able Abelly</span> - changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
          <div className="flex justify-between align-center p-2 border-b">
            <div className="flex items-center">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="38px" />
              <p className="dark:text-gray-400">
              <span className='text-sm ml-3'>Able Abelly</span> - changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
          <div className="flex justify-between align-center  p-2 border-b">
            <div className="flex items-center">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="38px" />
              <p className="dark:text-gray-400">
              <span className='text-sm ml-3'>Able Abelly</span> - changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
          <div className="flex justify-between align-center p-2 border-b">
            <div className="flex items-center">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="38px" />
              <p className="dark:text-gray-400">
              <span className='text-sm ml-3'>Able Abelly</span> - changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
          <div className="flex justify-between align-center p-2">
            <div className="flex items-center">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="38px" />
              <p className="dark:text-gray-400">
              <span className='text-sm ml-3'>Able Abelly</span> - changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
        </div>
      </div>

      {/* Online friends section right bar */}
      <div className=" mt-5 container h-60 bg-slate-50 rounded shadow-lg overflow-auto dark:bg-slate-700">
      <h4 className="text-gray-500 p-2 ml-3 mt-3 dark:text-white">Online Friends</h4>
        <div className="px-3"> 
          <div className="flex flex-wrap justify-between align-center p-2 border-b">
            <div className="flex items-center relative">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="36px" />
              <div className="rounded-full bg-lime-400 w-3 h-3 absolute top-0 left-7"></div>
              <span className='text-sm ml-3 dark:text-gray-400'>Able Abelly</span>
            </div>
            
          </div>
          <div className="flex flex-wrap justify-between align-center p-2 border-b">
            <div className="flex items-center relative">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="36px" />
              <div className="rounded-full bg-lime-400 w-3 h-3 absolute top-0 left-7"></div>
              <span className='text-sm ml-3 dark:text-gray-400'>Able Abelly</span>
            </div>
            
          </div>
          <div className="flex flex-wrap justify-between align-center p-2 border-b">
            <div className="flex items-center relative">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="36px" />
              <div className="rounded-full bg-lime-400 w-3 h-3 absolute top-0 left-7"></div>
              <span className='text-sm ml-3 dark:text-gray-400'>Able Abelly</span>
            </div>
            
          </div>
          <div className="flex flex-wrap justify-between align-center p-2 border-b">
            <div className="flex items-center relative">
              <img className="rounded-full" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="36px" />
              <div className="rounded-full bg-lime-400 w-3 h-3 absolute top-0 left-7"></div>
              <span className='text-sm ml-3 dark:text-gray-400' >Able Abelly</span>
            </div>
            
          </div>
          
          
        </div>
      </div>


    </div>
  )
}

export default RightBar