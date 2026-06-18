import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Enroll() {

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-r from-black via-black to-black text-white ">

  <img
    src="/background.jpg"
    alt="background"
    className="absolute inset-0 h-full w-full object-cover object-[center_45%] opacity-35 blur-[2px]"
  />

  <div className="relative mx-auto w-full px-4 py-40 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.9fr] text-left ml-25">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-0.35em text-slate-200 shadow-inner mb-10">
                Admission Now Open
              </div>
              <h2 className="mt-10 font-bold leading-tight tracking-tight sm:text-5xl">
                Grace Christian Academy of Cavite Inc.
              </h2>
              <p className="mt-6 max-w-180 text-base leading-8 text-slate-200">Grace Christian Academy of Cavite Inc. welcomes preschool learners for the 2026–2027 school year. Join a joyful learning community rooted in faith, values, and creative growth.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/form" className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white/70 px-5 py-3 text-sm font-semibold text-cgaGreen shadow hover:bg-emerald-50 mb-10">
                <span className="h-2.5 w-2.5 rounded-full bg-green-300"></span>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="bg-slate-200 text-slate-900 pt-10 pb-10 pl-10 pr-10 ">
      <div className="mx-auto rounded-3xl border border-slate-200 bg-white p-15 shadow-lg">
        <div className="grid gap-15 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[0.94fr_1.06fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen text-left">Who, What, & How We Teach</p>
          <div className="space-y-4 rounded-3xl border-slate-200 bg-cgaLight h-125 p-6 border shadow-lg">
            <div className="grid gap-10 pt-5 p-3 sm:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-slate-350 bg-white p-4">
                <p className="text-sm font-semibold text-cgaDark">Age Group</p>
                <p className="text-sm text-slate-700">3–4 years old</p>
              </div> 
              <div className="space-y-2 rounded-2xl border border-slate-350 bg-white p-4">
                <p className="text-sm font-semibold text-cgaDark">Motor Skills</p>
                <p className="text-sm text-slate-700">Drawing, coloring, and physical activities</p>
              </div>
            </div>
            <div className="grid gap-10 p-3 sm:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-slate-350 bg-white p-4">
                <p className="text-sm font-semibold text-cgaDark">Focus</p>
                <p className="text-sm text-slate-700">Basic letters, numbers, shapes, and colors</p>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-350 bg-white p-4">
                <p className="text-sm font-semibold text-cgaDark">Emotional Growth</p>
                <p className="text-sm text-slate-700">Confidence and independence building</p>
              </div>
            </div>
            <div className="grid gap-10 p-3 sm:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-slate-350 bg-white p-4">
                <p className="text-sm font-semibold text-cgaDark">Language Skills</p>
                <p className="text-sm text-slate-700">Early speaking and listening development</p>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-350 bg-white p-4">
                <p className="text-sm font-semibold text-cgaDark">Learning Style</p>
                <p className="text-sm text-slate-700">Play-based and guided learning</p>
              </div>
            </div>
            <div className="grid gap-10 p-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-350 bg-white p-4">
              <p className="text-sm font-semibold text-cgaDark">Social Skills</p>
              <p className="text-sm text-slate-700">Sharing, cooperation, and interaction</p>
            </div>
            <div className="rounded-2xl border border-slate-350 bg-white p-4">
              <p className="text-sm font-semibold text-cgaDark">Environment</p>
              <p className="text-sm text-slate-700">Safe and child-friendly classroom</p>
            </div>
          </div>
        </div>
      </div>
        <div className="relative flex items-center justify-center h-130 overflow-hidden rounded-3xl border border-slate-300 shadow-lg">
          <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 blur-[2px]"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            opacity: 0.50,
            }}
            />
            <div className="absolute inset-0" />
            <div className="relative z-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cgaGreen">If you are interested</p>
            <h3 className="mt-4 text-3xl font-bold text-cgaDark">Please "Click" Enroll Now</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">Ready to start? Click the button below and send us a message to reserve your child’s place for the next school year.</p>
            <Link to="/form" className="mt-8 inline-flex rounded-full bg-cgaGreen px-8 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-600">Enroll Now</Link>
          </div>
        </div>
      </div>
    </div>
  </section>

    <section id="#contact" className="bg-cgaGreen text-white">
      <div className="mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 text-left ml-10 mr-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Contact Us</p>
            <h2 className="mt-3 text-3xl font-bold">Reach out for admission details</h2>
            <p className="mt-4 max-w-xl text-slate-100">Visit our campus or send a message to learn about enrollment, curriculum, and our preschool programs.</p>
            <div className="mt-8 space-y-4 text-sm text-left">
              <div className="flex gap-4 rounded-3xl bg-white/10 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200/10 text-emerald-200 hover:bg-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4.5a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold">Contact Number</p>
                  <p className="text-emerald-100">0992-641-8526</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-3xl bg-white/10 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200/10 text-emerald-200 hover:bg-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V6.75zm1.5.75v9.75h12V7.5H6z" />
                    <path d="M6.75 6.75l5.25 4.5 5.25-4.5" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-emerald-100">grace.cslife@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-3xl bg-white/10 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200/10 text-emerald-200  hover:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M13.5 2.25H10.5a1.5 1.5 0 00-1.5 1.5v1.5H6a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h1.5V21h3v-9.75h2.25l.75-3h-3V5.25a.75.75 0 01.75-.75h2.25V2.25z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold">Facebook</p>
                  <p className="text-emerald-100">Grace Christian Academy of Cavite Inc.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-3xl bg-white/10 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200/10 text-emerald-200 hover:bg-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2.25a6.75 6.75 0 00-6.75 6.75c0 5.062 6.75 12.75 6.75 12.75s6.75-7.688 6.75-12.75A6.75 6.75 0 0012 2.25zm0 9.75a3 3 0 110-6 3 3 0 010 6z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-emerald-100">306, Purok 4, Barangay Cabuco, Trece Martires, Philippines, 4109</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Find us here</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Google Map</h3>
            <p className="mt-4 max-w-xl text-slate-100">See our campus location and get directions directly from Google Maps.</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/20 bg-white/90">
              <iframe
                className="h-100 w-full border-0"
                loading="lazy"
                src="https://www.google.com/maps?q=Grace Christian Academy of Cavite Inc.&output=embed"
                aria-label="Grace Christian Academy map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Enroll;