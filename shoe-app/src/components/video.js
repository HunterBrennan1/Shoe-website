import Running from '../assets/imgs/running.mp4';


export const Video = () => {
  return (
    <section>
      <video loop muted autoPlay src={Running}></video>
    </section>
  )
}

export default Video;