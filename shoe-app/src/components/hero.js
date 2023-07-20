import Heroimg from "../assets/imgs/shoeimg.jpg";

export const Hero = () => {
  return (
    <section className="bg-hero-color p">
      <div className="w-full h-full flex px-10 lg:flex-row sm:flex-col xs:flex-col justify-center relative bg-#dcdedd">
        <div className=" z-10  min-w-xs max-w-sm ">
          <div className="h-full">
            <h1 className="font-bold text-5xl mt-40 text-teal-main">Join the StrideGear Movement</h1>
            <p className="mt-10 text-md ">It's time to elevate your game and embrace the StrideGear experience. Click below to explore our exclusive collection of athletic shoes and discover a new level of performance. Join the StrideGear movement today and let's conquer new horizons together.</p>
            <p className="my-8 font-bold">Unleash Your True Potential with StrideGear</p>
            <div className="flex flex-row justify-left gap-5">
              <a className=" text-teal-main font-bold shadow-lg bg-yellow-main mb-10 rounded-lg px-10 py-3  top-10 hover:bg-teal-main hover:text-yellow-main cursor-pointer">Shop Now</a>

            </div>
          </div>
        </div>

        <img className=" hero-img w-2/4 lg:visible md:invisible sm:invisible relative flex justify-center m-0" src={Heroimg}></img>
      </div>
      {/* <div className="flex flex-row w-full justify-evenly ">
        <div className="flex flex-col justify-center  items-center text-center p-10">
          <div className=" flex w-14 h-14 bg-teal-main border-1  rounded-full shadow-2xl  justify-center inline-block align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 relative top-3 stroke-white flex ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>

          </div>
          <p className="mt-5">Stay Active</p>
        </div>
        <div className="flex flex-col justify-center  items-center  text-center">
          <div className=" flex w-14 h-14 bg-teal-main border-1  rounded-full shadow-2xl  justify-center inline-block align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 relative top-3 stroke-white flex ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>



          </div>
          <p className="mt-5">Unbeatable performance</p>
        </div>
        <div className="flex flex-col justify-center  items-center  text-center">
          <div className=" flex w-14 h-14 bg-teal-main border-1  rounded-full shadow-2xl  justify-center inline-block align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 relative top-3 stroke-white flex ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>


          </div>
          <p className="mt-5">Innovative technology</p>
        </div>
        <div className="flex flex-col justify-center  items-center  text-center">
          <div className=" flex w-14 h-14 bg-teal-main border-1  rounded-full shadow-xl  justify-center inline-block align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 relative top-3 stroke-white flex ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>


          </div>
          <p className="mt-5">Versatile Styles</p>
        </div>
        <div className="flex flex-col justify-center  items-center  text-center">
          <div className=" flex w-14 h-14 bg-teal-main border-1  rounded-full shadow-2xl  justify-center inline-block align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 relative top-3 stroke-white flex ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>


          </div>
          <p className="mt-5">Customer Satisfaction</p>
        </div>
      </div> */}


    </section>
  )
}

export default Hero;