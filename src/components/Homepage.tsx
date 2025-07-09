import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BedroomBgImage from '../assets/BedroomBgImage.svg';
import LivingRoom from '../assets/LivingRoom.svg';
import RedChair from '../assets/RedChair.svg';
import BrownChair from '../assets/BrownChair.svg';
import GreenChair from '../assets/GreenChair.svg';
import Sofa from '../assets/Sofa.svg';
import WhiteChair from '../assets/WhiteChair.svg';
import TwoBooksOnTable from '../assets/TwoBooksOnTable.svg';
import BooksOnShelf from '../assets/BooksOnShelf.svg';
import Bed from '../assets/Bed.svg';
const Homepage = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* B + C: Bedroom & Living Room Side by Side */}
      <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
        {/* B */}
        <div
          className="relative bg-cover bg-center bg-no-repeat h-full"
          style={{ backgroundImage: `url(${BedroomBgImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center pb-10 text-white text-center">
            <h3 className="text-xs font-dm-sans text-2xl md:text-3xl font-normal">
              Bedroom
            </h3>
            <p className="text-xs mt-2 text-base md:text-lg font-extralight max-w-md">
              Crafted sanctuaries for your most peaceful hours.
            </p>
            <Link 
              to="/collection" 
              className="text-xs mt-2 text-xs md:text-base font-extralight underline cursor-pointer"
            >
              View Collection
            </Link>
          </div>
        </div>

        {/* C */}
        <div
          className="relative bg-cover bg-center bg-no-repeat h-full"
          style={{ backgroundImage: `url(${LivingRoom})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center pb-10 text-white text-center">
            <h3 className="text-xs  font-dm-sans text-2xl md:text-3xl font-normal">
              Living Room
            </h3>
            <p className="text-xs mt-2 text-base md:text-lg font-extralight max-w-md">
              Crafted sanctuaries for your most peaceful hours.
            </p>
            <Link 
              to="/collection" 
              className="text-xs mt-2 text-xs md:text-base font-extralight underline cursor-pointer"
            >
              View Collection
            </Link>
          </div>
        </div>
      </section>

      {/* D + E | F: Chairs Section */}
<section className="w-full grid grid-cols-1 md:grid-cols-2">
  <div className="flex flex-col border-2 border-white">
    {/* D: Red Chair Section */}
    <div className="flex h-[50vh] bg-[#254127] text-white relative border-b-2 border-white">
      {/* RedChair Image Side with right border only */}
      <div className="relative w-2/3 border-r-2 border-white">
        <img src={RedChair} alt="Red Chair" className="w-full h-full object-cover" />
      </div>

      {/* Text Side with left border only */}
      <div className="relative w-1/3 p-6 flex items-center justify-center">
        <div className="p-4 flex flex-col justify-between w-full h-full">
          <div>
            <h4 className="text-xl font-semibold">Modern</h4>
          </div>
          <div>
            <p className="text-xs leading-relaxed mt-2">
              The Modern Collection brings together graceful lines and luxurious finishes.
            </p>
            <p className="text-xs mt-4 underline cursor-pointer text-xs flex items-center gap-1">
              View Collection <span className="text-lg">↗</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* E: Brown Chair Section */}
    <div className="relative h-[50vh] bg-[#254127] text-white flex flex-row-reverse">
      {/* Image: BrownChair with left border only */}
      <div className="relative w-2/3 border-l-2 border-white">
        <img
          src={BrownChair}
          alt="Brown Chair"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section: Wood with right border only */}
      <div className="relative w-1/3 p-6 flex items-center justify-center border-r-2 border-white">
        <div className="p-4 flex flex-col justify-between w-full h-full">
          <div>
            <h4 className="text-xl font-semibold">Wood</h4>
          </div>
          <div>
            <p className="text-xs text-xs leading-relaxed mt-2">
              The Modern Collection brings together graceful lines and luxurious finishes.
            </p>
            <p className="text-xs mt-4 underline cursor-pointer text-xs flex items-center gap-1">
              View Collection <span className="text-lg">↗</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* F */}
  <div className="border-2 border-white">
  <div className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${GreenChair})` }}>
  {/* White Text Box with border, positioned bottom-left */}
  {/* Tall vertical white box aligned to bottom-left */}
  <div className="absolute bottom-10 left-10 border-2 border-white bg-white p-4 shadow-lg w-[176px] h-[230px] flex flex-col justify-between text-black">
    <h4 className="text-base font-semibold">Modern</h4>

    <p className="text-xs leading-snug">
      The Modern Collection brings together graceful lines and luxurious finishes.
    </p>

    <p className="text-xs underline cursor-pointer flex items-center gap-1 text-xs">
      View Collection <span className="text-base">↗</span>
    </p>
  </div>
</div>

</div>

</section>
      

      {/*Designed For Durability*/}
     <section className="w-full grid grid-cols-1 md:grid-cols-1">
  {/*<div className="relative h-[100vh] bg-[#254127] text-white flex items-center px-10">*/}
    <div className="relative h-[100vh] bg-[#254127] text-white flex items-center">

    {/* Left Image */}
    <img src={Sofa} alt="Sofa" className="w-1/2 h-full object-cover" />

    {/* Right Text Block */}
    <div className="pl-10 text-white max-w-xl">
      <h3 className="font-garamond text-2xl xs:text-3xl xs:text-4xl md:text-[54px] max-w-[100%]">
        Designed for durability.
      </h3>
      <p className="font-garamond text-[32px] italic font-Cormorant Garamond mt-2 leading-tight">
        Made for rest.
      </p>
      <p className="text-xs font-light mt-6">
        Built with solid teak and timeless joinery, our bedroom collection is made to last through years <br />
        of daily use without compromising on comfort. From beds to side tables, every piece is<br />
         thoughtfully designed to support restful living, day after day.
      </p>
      <button className="text-xs mt-8 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
        Explore Collection
      </button>
    </div>
    
  </div>
</section>


<section className="w-full h-screen flex">
  {/* Left */}
  <div className="bg-[#254127] text-white flex items-center px-10 w-1/2">
  <div className="pr-10 max-w-xl">
    <h3 className="font-garamond text-2xl xs:text-3xl xs:text-4xl md:text-[38px] max-w-[100%]">
      Rooted in nature.
    </h3>

    <h4 className="font-garamond text-white text-[42px] md:text-[32px] italic font-normal mt-2">
      Designed for quiet moments.
    </h4>

    <p className="text-xs font-light mt-6">
      Crafted from sustainably sourced teak, our bedroom pieces bring the quiet elegance of <br /> nature into your home.
      With clean lines, warm tones, and thoughtful details, each piece is<br /> made to turn your space into a restful retreat—
      one that ages beautifully with time.
    </p>

    <button className="text-xs mt-8 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
      Explore Collection
    </button>
  </div>
</div>


  {/* Right */}
  <div className="w-1/2 h-full">
    <img src={Bed} alt="Bed" className="w-full h-full object-cover" />
  </div>
</section>



      {/*Designed For Durability First section*/}
      <section>
  <div
    className="relative h-screen bg-cover bg-center flex items-start justify-start"
    style={{ backgroundImage: `url(${WhiteChair})` }}
  >
    <div className="p-10 mt-12 max-w-md text-white">
      <h3 className="font-garamond text-2xl xs:text-3xl xs:text-4xl md:text-[38px] max-w-[100%]">
      Rooted in nature.
    </h3>
      <h4 className="font-garamond text-white text-[42px] md:text-[32px] italic font-normal mt-2">
        Designed for quiet moments.
      </h4>

      <button className="mt-6 px-6 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition duration-300">
        Explore Collection
      </button>
    </div>
  </div>
</section>

      {/*Designed For Durability second section*/}
     <section>
  <div
    className="relative h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${TwoBooksOnTable})` }}
  >
    <div className="absolute bottom-10 left-10 max-w-md text-white">
      <h3 className="font-garamond text-2xl xs:text-3xl xs:text-4xl md:text-[38px] max-w-[100%]">
        Rooted in nature.
      </h3>
      <h4 className="font-garamond text-white text-[42px] md:text-[32px] italic font-normal mt-2">
        Designed for quiet moments.
      </h4>

      <button className="mt-6 px-6 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition duration-300">
        Explore Collection
      </button>
    </div>
  </div>
</section>


      {/*Designed For Durability Third section*/}
      <section>
  <div
    className="relative h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${BooksOnShelf})` }}
  >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-xl px-4">
      <h3 className="font-garamond text-2xl xs:text-3xl md:text-[38px]">
        Rooted in nature.
      </h3>
      <h4 className="font-garamond text-white text-[42px] md:text-[32px] italic font-normal mt-2">
        Designed for quiet moments.
      </h4>

      <button className="mt-6 px-6 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition duration-300">
        Explore Collection
      </button>
    </div>
  </div>
</section>


      <Footer /> 
    </div>
  );
};

export default Homepage;