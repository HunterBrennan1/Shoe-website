import Heroimg from "../assets/imgs/shoeimg.jpg";

export const Hero = () => {
  return (
    <section className="bg-hero-color">
      <div className="w-full flex justify-center bg-#dcdedd">
        <img className="w-2/4 relative flex justify-center m-0" src={Heroimg}></img>
      </div>
    </section>
  )
}

export default Hero;