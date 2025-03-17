import React from "react";
import { ShieldCheck, Clock, Smartphone, MessageCircle, CreditCard, Users, DollarSign } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Secure Transactions", description: "Your transactions are encrypted and secure." },
  { icon: Clock, title: "Fast Payments", description: "Send and receive money instantly." },
  { icon: Smartphone, title: "User-Friendly Interface", description: "Designed for simplicity and ease of use." },
  { icon: CreditCard, title: "Multiple Payment Options", description: "Supports various payment methods for convenience." }
];

const testimonials = [
  { text: "Amazing experience!", user: "John Doe" },
  { text: "Super easy to use!", user: "Jane Smith" },
  { text: "Fast and secure transactions!", user: "Michael Lee" }
];

const stats = [
  { icon: Users, title: "10K+ Users", description: "Trusted by thousands worldwide." },
  { icon: DollarSign, title: "$1M+ Transactions", description: "Handled securely every day." }
];

const HeroNext = () => {
  return (
    <div className="bg-[#EBE6DC] min-h-screen text-gray-800 mt-[-8rem] sm:mt-0">
      {/* Features Section */}
      <section className="pb-16 px-6 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <feature.icon size={40} className="text-slate-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-8 bg-[#EBE6DC]">
        <h2 className="text-4xl font-bold mb-10 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <stat.icon size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg text-center hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <p className="text-lg italic mb-2">"{testimonial.text}"</p>
              <span className="text-gray-800 font-semibold">- {testimonial.user}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-8 bg-[#EBE6DC] w-full">
        <h2 className="text-4xl font-bold mb-10 text-center">Get in Touch</h2>
        <form className=" sm:w-full flex justify-center items-center flex-col bg-white p-8 rounded-2xl shadow-lg">
          
          <div className="sm:flex w-[100%] gap-5">
          <input type="text" placeholder="Your Name" className="w-full p-4 mb-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-4 mb-4 border rounded-lg" />
          </div>
          
          <textarea placeholder="Your Message" rows={3} className="w-full p-4 mb-4 border rounded-lg"></textarea>
          <button type="submit" className="w-full bg-black text-white p-4 rounded-lg font-semibold hover:bg-gray-800 transition-all">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default HeroNext;