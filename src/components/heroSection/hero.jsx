import React from 'react';
import heroCar from './HeroCar.png'; // Correct path to the image
import heroCar2 from './HeroCar2.png';

const Hero = ({theme}) => {
  return (
    <div className="dark:bg-dark dark:text-white duration-300 relative -z-20" id='hero'>
      <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div data-aos='zoom-in' data-aos-duration='1500' className='order-1 sm:order-2'>
            <img src={theme==="dark"?heroCar:heroCar2} alt="Hero Car" className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" />
          </div>
          <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
            <p data-aos='fade-up' className='text-primary text-2xl font-serif'>Effortless drive with</p>
            <h1 data-aos='fade-up' data-aos-delay='600' className='text-5xl font-semibold lg:text-7xl font-serif'>GoCarZ</h1>
            <p  data-aos='fade-up' data-aos-delay='1000'>
            "Unlock the freedom to travel with our affordable and convenient car rentals. Whether it's a weekend getaway or a business trip, we’ve got the perfect ride for every occasion."</p>
            <button data-aos='fade-up' data-aos-delay='1500' className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
