import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="md:flex md:flex-col justify-start items-start my-20 container">
      <hr className="horizontal w-24  border-b-8 mb-4 border-slate-400" />
      <h2 className="mb-10 text-gray-400 text-4xl font-bold ">
        What my <span className="text-[#4A4B7C] ">Clients</span> say <br /> about my work
      </h2>
      <TestimonialCard />
    </div>
  );
};

export default Testimonials;