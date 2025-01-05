import React from "react";
import whiteCar from "./white-car.png";
import car2 from "./car5.png";
import car3 from "./car6.png";
import swift from "./swiftcar.png";
import thar from "./thar.png";
import sonet from "./sonet.png";

const carList = [
  {
    name: "Swift vxi",
    price: 100,
    image: swift,
    aosDelay: "0",
    km:50,
  },
  {
    name: "Mahindra Thar",
    price: 140,
    image: thar,
    aosDelay: "500",
    km:30,
  },
  {
    name: "Kia Sonet",
    price: 180,
    image: sonet,
    aosDelay: "1000",
    km:30,
  },
  {
    name: "Scorpio Blue",
    price: 500,
    image: car3,
    aosDelay: "1500",
    km:25,
  },
  {
    name: "Scorpio White",
    price: 600,
    image: car2,
    aosDelay: "2000",
    km:25,
  },
  {
    name: "Range Rover",
    price: 1000,
    image: whiteCar,
    aosDelay: "2500",
    km:20,
  },
];

const CarList = () => {
  return (
    <div className="pb-24 bg-white dark:bg-dark dark:text-white" id="carlist">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-5xl font-semibold font-serif mb-10 text-center"
        >
          CarZ we offer
        </h1>
        {/* <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p> */}
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>&#8377;{data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  {data.km} km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
        <button data-aos='fade-up' data-aos-delay="2700" className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CarList;