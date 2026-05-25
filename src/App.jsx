import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import logo from "./assets/logo.png";
import emailjs from "@emailjs/browser";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);
const sendAppointment = (e) => {

  e.preventDefault();

  emailjs.sendForm(
    "service_hqucigk",
    "template_wydauz8",
    e.target,
    "D_6A1XMw3-ZeffLBJ"
  )

  .then(() => {

    alert("Appointment Request Sent Successfully!");

  })

  .catch(() => {

    alert("Something went wrong.");

  });

};
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* NAVBAR */}
<nav className="bg-white shadow-md sticky top-0 z-50">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <div className="flex items-center gap-4">

  <img
  src={logo}
  alt="Divine Mercy Hospital Logo"
  className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-blue-900"
/>

  <div>

    <h1 className="text-2xl font-bold text-blue-900">
      DIVINE MERCY HOSPITAL
    </h1>

    <p className="text-sm text-slate-600 italic">
      Divine Touch That Heals
    </p>

  </div>

</div>

    {/* DESKTOP MENU */}
<ul className="hidden md:flex gap-8 font-medium text-slate-700">

  <a href="#home" className="hover:text-blue-900">
    Home
  </a>

  <a href="#about" className="hover:text-blue-900">
    About
  </a>

  <a href="#services" className="hover:text-blue-900">
    Services
  </a>

  <a href="#contact" className="hover:text-blue-900">
    Contact
  </a>

</ul>

{/* MOBILE BUTTON */}
<button
  className="md:hidden text-3xl text-blue-900"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
    <a
  href="#appointment"
  className="bg-blue-900 text-white px-5 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
>
  Appointment
</a>

  </div>
  {/* MOBILE MENU */}
{menuOpen && (

  <div className="md:hidden bg-white px-6 pb-6 shadow-lg">

    <div className="flex flex-col gap-4 text-slate-700 font-medium">

      <a href="#home">Home</a>

      <a href="#about">About</a>

      <a href="#services">Services</a>

      <a href="#appointment">Appointment</a>

      <a href="#contact">Contact</a>

    </div>

  </div>

)}

</nav>

      {/* HERO SECTION */}
      <section
  id="home"
  className="relative text-white py-32 px-6 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop')",
  }}
>
  <div className="absolute inset-0 bg-blue-950/70"></div>
       <div className="relative z-10 max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            DIVINE MERCY HOSPITAL, WUKARI
          </h1>

          <p className="text-2xl text-blue-100 italic mb-8">
            “DIVINE TOUCH THAT HEALS”
          </p>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-blue-100">
            Providing compassionate, quality, and affordable healthcare
            services guided by Christian love, professional excellence,
            and respect for human dignity.
          </p>

          <a
  href="#appointment"
  className="inline-block mt-10 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
>
  Book Appointment
</a>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="about" className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Mission Statement
            </h2>

            <p className="text-lg leading-relaxed text-slate-700">
              To provide compassionate, quality, and affordable healthcare
              to all people, especially the poor and vulnerable, guided by
              Christian love, professional excellence, and respect for
              human dignity, inspired by the healing ministry of Christ.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Vision Statement
            </h2>

            <p className="text-lg leading-relaxed text-slate-700">
              To become a trusted Catholic healthcare institution known
              for healing and holistic care that reflects the mercy of God
              and improves the well-being of our community.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20 px-6" data-aos="fade-up">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Services
            </h2>

            <p className="text-lg text-slate-600">
              Compassionate healthcare services for individuals and families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "General Medicine",
              "Emergency Care",
              "Maternal Care",
              "Laboratory Services",
              "Pharmacy",
              "Surgical Care",
              "Counseling",
              "Community Outreach"
            ].map((service, index) => (

              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl shadow hover:shadow-xl transition"
              >

                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 font-bold text-xl mb-5">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service}
                </h3>

                <p className="text-slate-600">
                  Professional and compassionate healthcare services.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

{/* STATISTICS SECTION */}
<section className="bg-slate-100 py-20 px-6" data-aos="fade-up">

  <div className="max-w-6xl mx-auto">

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          number: "10K+",
          label: "Patients Treated",
        },

        {
          number: "25+",
          label: "Qualified Doctors",
        },

        {
          number: "15+",
          label: "Years Experience",
        },

        {
          number: "24/7",
          label: "Emergency Support",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition"
        >

          <h2 className="text-5xl font-bold text-blue-900 mb-4">
            {item.number}
          </h2>

          <p className="text-slate-600 text-lg">
            {item.label}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* DOCTORS SECTION */}
<section
  className="bg-white py-20 px-6" data-aos="fade-up"
>

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">

      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Meet Our Doctors
      </h2>

      <p className="text-slate-600 text-lg">
        Experienced and compassionate healthcare professionals.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          name: "Dr. John Daniel",
          role: "General Physician",
          image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
        },

        {
          name: "Dr. Mary Joseph",
          role: "Maternal Specialist",
          image:
            "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
        },

        {
          name: "Dr. Samuel Paul",
          role: "Surgeon",
          image:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
        },
      ].map((doctor, index) => (

        <div
          key={index}
          className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-80 object-cover"
          />

          <div className="p-8">

            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {doctor.name}
            </h3>

            <p className="text-slate-600 text-lg">
              {doctor.role}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* APPOINTMENT SECTION */}
<section
  id="appointment"
  className="bg-blue-900 text-white py-20 px-6" data-aos="fade-up"
>

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold mb-4">
        Book an Appointment
      </h2>

      <p className="text-blue-100 text-lg">
        Schedule your visit with DIVINE MERCY HOSPITAL, WUKARI
      </p>

    </div>

    <div className="bg-white text-slate-800 rounded-3xl shadow-2xl p-10">

      <form
  onSubmit={sendAppointment}
  className="grid md:grid-cols-2 gap-6"
>

        <input  name="name"
          type="text"
          placeholder="Full Name"
          className="border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
        />

        <input name="phone"
          type="tel"
          placeholder="Phone Number"
          className="border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
        />

        <select  name="department"
          className="border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
        data-aos="fade-up">
          <option>Select Department</option>
          <option>General Medicine</option>
          <option>Emergency Care</option>
          <option>Maternal Care</option>
          <option>Surgery</option>
          <option>Laboratory</option>
        </select>

        <input name="date"
          type="date"
          className="border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
        />

        <textarea name="message"
          rows="5"
          placeholder="Additional Information"
          className="md:col-span-2 border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
        ></textarea>

        <button
          className="md:col-span-2 bg-blue-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition"
        >
          Submit Appointment Request
        </button>

      </form>

    </div>

  </div>

</section>

{/* CONTACT SECTION */}
<section
  id="contact"
  className="bg-slate-100 py-20 px-6" data-aos="fade-up"
>

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Contact Us
      </h2>

      <p className="text-slate-600 text-lg">
        Reach out to DIVINE MERCY HOSPITAL, WUKARI
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* CONTACT INFO */}
      <div className="bg-white p-10 rounded-3xl shadow-lg">

        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          Hospital Information
        </h3>

        <div className="space-y-5 text-slate-700">

          <p>
            📍 Wukari, Taraba State, Nigeria
          </p>

          <p>
            📞 +234 XXX XXX XXXX
          </p>

          <p>
            ✉️ info@divinemercyhospital.com
          </p>

          <p>
            🕒 Open 24 Hours
          </p>

        </div>

      </div>

      {/* CONTACT FORM */}
      <div className="bg-white p-10 rounded-3xl shadow-lg">

        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          Send a Message
        </h3>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-blue-900"
          ></textarea>

          <button
            className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>

</section>

{/* WHATSAPP BUTTON */}
<a
  href="https://wa.me/2348000000000"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
>
  💬
</a>

{/* GOOGLE MAP SECTION */}
<section className="py-20 px-6 bg-white" data-aos="fade-up">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-10">

      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Find Us
      </h2>

      <p className="text-slate-600 text-lg">
        DIVINE MERCY HOSPITAL, WUKARI
      </p>

    </div>

    <div className="rounded-3xl overflow-hidden shadow-2xl">

      <iframe
        src="https://www.google.com/maps?q=Wukari,Taraba,Nigeria&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hospital Location"
      ></iframe>

    </div>

  </div>

</section>

{/* FOOTER */}
<footer className="bg-slate-950 text-slate-300 py-16 px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

    {/* HOSPITAL INFO */}
    <div>

      <div className="flex items-center gap-4 mb-5">

        <img
          src={logo}
          alt="Hospital Logo"
          className="w-14 h-14 rounded-full border-2 border-white"
        />

        <div>

          <h2 className="text-xl font-bold text-white">
            DIVINE MERCY HOSPITAL
          </h2>

          <p className="text-sm italic text-slate-400">
            Divine Touch That Heals
          </p>

        </div>

      </div>

      <p className="text-slate-400 leading-relaxed">
        Compassionate, quality, and affordable healthcare
        guided by Christian love and professional excellence.
      </p>

    </div>

    {/* QUICK LINKS */}
    <div>

      <h3 className="text-white font-bold text-xl mb-5">
        Quick Links
      </h3>

      <div className="flex flex-col gap-3">

        <a href="#home" className="hover:text-white">
          Home
        </a>

        <a href="#about" className="hover:text-white">
          About
        </a>

        <a href="#services" className="hover:text-white">
          Services
        </a>

        <a href="#appointment" className="hover:text-white">
          Appointment
        </a>

      </div>

    </div>

    {/* CONTACT */}
    <div>

      <h3 className="text-white font-bold text-xl mb-5">
        Contact
      </h3>

      <div className="space-y-3 text-slate-400">

        <p>📍 Wukari, Taraba State</p>

        <p>📞 +234 XXX XXX XXXX</p>

        <p>✉️ info@divinemercyhospital.com</p>

      </div>

    </div>

    {/* EMERGENCY */}
    <div>

      <h3 className="text-white font-bold text-xl mb-5">
        Emergency
      </h3>

      <p className="text-slate-400 mb-5">
        24/7 emergency medical support available.
      </p>

      <a
        href="tel:+2348000000000"
        className="bg-red-600 px-6 py-3 rounded-2xl text-white inline-block hover:bg-red-700 transition"
      >
        Emergency Call
      </a>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">

    © 2026 DIVINE MERCY HOSPITAL, WUKARI — All Rights Reserved

  </div>

</footer>

    </div>
  )
}