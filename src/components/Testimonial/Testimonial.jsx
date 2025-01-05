import React from "react";
import img1 from './t1.jpg';
import img2 from './t2.jpg';
const testimonialData = [
  {
    name: "Dilshad",
    image: img1,
    description: "Best Services.",
    aosDelay: "0",
    stars:'⭐⭐⭐⭐',
  },
  {
    name: "Siya",
    image: img2,
    description: "Best Cars.",
    aosDelay: "300",
    stars:'⭐⭐⭐',
  },
  {
    name: "Sabir",
    image: img1,
    description: "Well maintained vechiles.",
    aosDelay: "1000",
    stars:'⭐⭐⭐⭐⭐',
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-dark dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
            "Our clients trust us for exceptional quality and outstanding service!"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">{skill.stars}</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;