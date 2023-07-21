import Running from '../assets/imgs/running.mp4';


export const Video = () => {
  return (
    <section className="relative">
      <video className=" z-0" loop muted autoPlay src={Running}></video>
      <h1 className="video_title flex absolute items-center top-0 mt-1/2 z-10 w-full justify-center text-5xl text-white font-bold text-center">"Stride with confidence, conquer every step. Embrace your journey, reach new heights. With Stride Gear by your side, greatness knows no limits."</h1>
    </section>
  )
}

export default Video;