import React from 'react'
import carpng from './aboutcar.png';
const About = () => {
  return (
    <div className='dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center bg-slate-100' id='about'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div data-aos="slide-right"
                data-aos-duration='1500'>
                    <img src={carpng} alt="Car" className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' />
                </div>
                <div>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-bold font-serif'>About Us</h1>
                        <p data-aos='fade-up'>
                        At <b>GoCarZ</b>, we offer reliable and affordable car rentals to suit every journey. With a wide range of vehicles, from compact cars to spacious SUVs, we ensure a comfortable and safe travel experience. Our hassle-free booking process, transparent pricing, and 24/7 customer support make renting with us seamless. Whether it’s a business trip, family vacation, or road adventure, GoCarZ is your trusted travel partner for unforgettable rides.
                        </p><br />
                        <p data-aos='fade-up'>"GoCarZ – Your Journey, Our Drive!"</p>
                        <button data-aos='fade-up' className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About