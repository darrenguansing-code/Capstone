import { Link } from "react-router-dom";
import { CheckCircle, GraduationCap, Users, BadgeInfoIcon, GoalIcon, Goal, Eye  } from "lucide-react";
function Home() {

  const programData = [
    {
      title: "Preschool Program",
      description:
        "Our preschool works closely with parents to ensure the maximum benefit from early schooling.",
      image: "/pp1.jpg",
      age: "3–5 yrs.old",
    },
    {
      title: "Kindergarten Program",
      description:
        "Provides students with life skills, knowledge, and Christian values.",
      image: "/kk1.jpg",
      age: "5–6 yrs.old",
    },
    {
      title: "Summer Class Program",
      description:
        "Serves students in primary and intermediate grade levels on Season of Summer.",
      image: "/sc.jpg",
      age: "3–10 yrs.old",
    },
  ];

  return (
    <>
    <div className="font-poppins text-slate-900 cursor-default">
      <section id="/"></section>

      {/* HERO */}
    <section className="relative overflow-hidden bg-linear-to-r from-black via-black to-black text-white ">

  <img
    src="/uu2.jpg"
    alt=""
    className="absolute h-100% w-full object-cover[100%] opacity-45 blur-xs"
  />

<div className="relative w-full px-4 py-40 sm:px-6 lg:px-15">
  <div className="flex items-center justify-between">
    <div className="flex flex-col items-start text-left max-w-1xl gap-4">
      <div className="flex items-center gap-3 border-l-4 border-green-700 pl-4 mb-15">
        <p className="text-lg font-extrabold uppercase tracking-[0.25em] text-cgaLightGreen">
          Admissions now open
        </p>
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs text-white font-extrabold">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-300"></span>
          <p>S.Y : 2026 - 2027</p>
        </div>
      </div>

      <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
        Discover a joyful preschool journey with faith, play, and learning.
      </h2>

      <p className="mt-4 text-base sm:text-lg leading-8 text-emerald-100">
        "For it is by grace you have been saved, through faith—and this is not from yourselves,<br></br> it is the gift of God— not by works, so that no one can boast."
        <b> Ephesians 2:8-9 (NIV)</b>
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">

        <Link
          to="/Form"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-cgaGreen hover:bg-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        >
          ENROLL NOW →
        </Link>

        <div className="h-10 w-px bg-white/50"></div>

        <Link
          to="/Admission"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-cgaGreen hover:bg-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        >
          ADMISSION →
        </Link>

        <div className="h-10 w-px bg-white/50"></div>

        <Link
          to="/#videos"
          className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm hover:bg-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        >
          LEARN MORE →
        </Link>

      </div>
    </div>

    <div className="hidden lg:block">
      <img
        src="/r3.png"
        alt="Student"
        className="w-200 h-full object-contain drop-shadow-2xl hover:scale-105 transition duration-700"
      />
      </div>
    </div>
  </div>
</section>

      {/* 3 CARDS 
      <section className="mx-auto w-full px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8 text-left">

    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-green-900">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen mb">
        Who We Are
      </p>

      <h3 className="mt-4 min-h-80px text-2xl font-bold text-slate-900 mb-10">
        A caring Christian preschool community
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        Grace Christian Academy of Cavite Inc. Preschool Department is dedicated to guiding young learners ages 3 to 6 through joyful discovery, values-based instruction, and a faith-filled environment.
      </p>
    </div>

    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-green-900">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">
        Our Mission
      </p>

      <h3 className="mt-4 min-h-80px text-2xl font-bold text-slate-900 mb-10">
        Teach with love, faith, and excellence
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        We provide high-quality preschool education rooted in Christian values, academic readiness, strong character development, and a nurturing atmosphere.
      </p>
    </div>

    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-green-900">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">
            Why Parents Choose Us
          </p>

          <h3 className="mt-4 min-h-80px text-2xl font-bold text-slate-900 mb-10">
            A safe, joyful, and structured experience
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Parents trust us for our caring teachers, meaningful learning activities, engaging community, and strong support for every child's emotional and spiritual growth.
          </p>
        </div>
      </div>
</section> */}

        {/* Academic Programs */}
        <section id="Academic" className="py-12 px-6 bg-linear-to-b from-slate-100 bg-cgaDark/10 mt-10 cursor-default">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          <GraduationCap size={75} className="inline-block mr-2" />
          <div className="font-extrabold text-5xl text-green-700 uppercase tracking-[0.20em] mb-20">
            Academic Programs
          </div>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programData.map((program, index) => (
            <div
              key={index}
              className="group bg-black/25 rounded-2xl overflow-hidden border-2 border-transparent shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-100 object-cover transition duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-red-600 mb-3">
                  {program.title}
                </h3>

                <p className="text-black font-bold text-sm mb-4">
                  {program.description}
                </p>

                <div className="flex mt-10 bg-cgaGreen rounded-md w-32 shadow-lg justify-center-safe text-center ">
                  <p className="font-bold text-white text-l transition-colors duration-300 text-left ">
                    {program.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto w-full px-4 py-14 sm:px-6 lg:px-8">
  <BadgeInfoIcon size={75} className="inline-block mr-2" />

  <div className="font-extrabold text-5xl text-green-700 uppercase tracking-[0.20em] mb-12">
    About Us
  </div>
  <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
    <div className="grid md:grid-cols-2">
      
      {/* Vision */}
      <div className="flex-1 p-10 hover:bg-black/10">
      <div className="drop-shadow-2xl hover:scale-105 transition duration-600">
        <p className="text-m font-semibold uppercase tracking-[0.3em] text-cgaGreen">
          <Eye size={50} className="inline-block mr-2 text-gray-600"/>
          Our Vision
        </p>

        <h3 className="mt-4 text-3xl font-bold text-slate-900 mb-6">
          Raising Godly and Lifelong Learners
        </h3>

        <p className="leading-8 text-slate-900">
          To be a Christ-centered preschool that inspires young children to grow in faith, character, knowledge, and confidence.
           We envision a generation of lifelong learners who love God, respect others, 
           and are equipped with the skills and values needed to succeed in school and in life.
        </p>
      </div>
    </div>

      {/* Mission */}
      <div className="flex-1 p-10 border-l border-green-900 hover:bg-black/10 drop-shadow-2xl hover:scale-105 transition duration-600">
        <p className="text-m font-semibold uppercase tracking-[0.3em] text-cgaGreen">
          <Goal size={50} className="inline-block mr-2 text-red-600"/>
          Our Mission
        </p>

        <h3 className="mt-4 text-3xl font-bold text-slate-900 mb-6">
          Teach with Love, Faith, and Excellence
        </h3>

        <p className="leading-8 text-slate-900">
         To provide a safe, nurturing, and engaging learning environment where every child is encouraged to discover, learn, and grow. 
         Through quality early childhood education rooted in Christian values, we aim to develop each child's 
         spiritual, academic, social, emotional, and physical well-being while fostering a lifelong love for learning.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* VIDEO SECTION */}
      <section id="videos" className=" bg-linear-to-t from-slate-100 bg-cgaLightGreen py-14">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-left ml-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">
        GRACE CHRISTIAN ACADEMY
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Short video stories from campus
      </h2>
      <p className="mt-3 max-w-3xl text-slate-700">
        This clip presents the official theme songs of Grace Christian Academy, highlighting our commitment to Christ-centered education and holistic student development
      </p>
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
          <video
            className="w-full h-150 object-cover"
            controls
            poster=""
          >
            <source src="" type="" />
          </video>
        </div>
      </div>
      
      {/* WHY PARENTS CHOOSE US */}
      <div className="space-y-6 border border-slate-200 rounded-3xl bg-white p-6 shadow-lg">
        <div className="text-center text-bold text-green-700">
          <p className="text-1xl font-extrabold uppercase tracking-[0.3em] text-cgaGreen">
            WHY PARENTS CHOOSE US
          </p>
        </div>

        <div className="space-y-6">
            <div className="flex gap-4 items-start rounded-3xl bg-black/10 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <CheckCircle size={40} className="text-black shrink-0 mt-1" />
            <div className="text-center flex-1">
            <p className="text-sm uppercase tracking-[0.3em] font-bold">
                A safe, joyful, and structured experience
                </p>
            </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="flex gap-4 items-start rounded-3xl bg-black/10 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <CheckCircle size={40} className="text-black shrink-0 mt-1" />
            <div className="text-center flex-1">
            <p className="text-sm uppercase tracking-[0.3em] font-bold">
                Safe, supportive, and child-centered education
                </p>
            </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="flex gap-4 items-start rounded-3xl bg-black/10 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <CheckCircle size={40} className="text-black shrink-0 mt-1" />
            <div className="text-center flex-1">
            <p className="text-sm uppercase tracking-[0.3em] font-bold">
                Engaging activities that make learning meaningful and fun
                </p>
            </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="flex gap-4 items-start rounded-3xl bg-black/10 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <CheckCircle size={40} className="text-black shrink-0 mt-1" />
            <div className="text-center flex-1">
            <p className="text-sm uppercase tracking-[0.3em] font-bold">
                We help every child grow with confidence and values
                </p>
            </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="flex gap-4 items-start rounded-3xl bg-black/10 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <CheckCircle size={40} className="text-black shrink-0 mt-1" />
            <div className="text-center flex-1">
            <p className="text-sm uppercase tracking-[0.3em] font-bold">
                Focused on both education and character formation
                </p>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</section>


      {/* PARENT INFORMATION */}
        <section className="overflow-hidden bg-amber-200 bg-linear-to-b from-slate-50 to-cgaLightGreen/20 py-16">
      <div className="mx-auto ml-20 mr-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center max-w-3xl mx-auto">
              <Users size={80} className="inline-block mr-2 mb-10" />
          <p className="text-4xl font-extrabold uppercase tracking-[0.3em] text-cgaGreen">Parent Information</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🧠</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">Cognitive Development</h3>
                <p className="mt-2 text-slate-900">Learning through play strengthens problem-solving skills, memory, and the ability to think creatively and critically.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💪</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">Physical Health</h3>
                <p className="mt-2 text-slate-900">Active play and movement activities build strong muscles, coordination, and establish healthy habits for life.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="text-2xl">❤️</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">Emotional Well-being</h3>
                <p className="mt-2 text-slate-900">Safe spaces for self-expression and supportive relationships help children develop confidence and emotional resilience.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🤗</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">Social Skills</h3>
                <p className="mt-2 text-slate-900">Group activities teach sharing, cooperation, turn-taking, and empathy essential skills for healthy relationships.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">Creativity & Imagination</h3>
                <p className="mt-2 text-slate-900">Arts, dramatic play, and open-ended exploration encourage self-expression and divergent thinking.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✝️</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">Spiritual Growth</h3>
                <p className="mt-2 text-slate-900">Faith-based activities and Christian values help children develop a strong moral foundation rooted in love and kindness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* CONTACT 
      <section id="contact" className="bg-cgaGreen text-white">
      <div className="mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 text-left ml-10 mr-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Contact Us</p>
            <h2 className="mt-3 text-3xl font-bold">Reach out for admission details</h2>
            <p className="mt-4 max-w-xl text-slate-100">Visit our campus or send a message to learn about enrollment, curriculum, and our preschool programs.</p>
            <div className="mt-8 space-y-4 text-sm text-left">
              <div className="flex gap-4 rounded-3xl bg-white/10 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200/10 text-emerald-200  hover:bg-red-900">
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
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200/10 text-emerald-200  hover:bg-gray-900">
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
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200/10 text-emerald-200  hover:bg-gray-900 ">
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
    </section> */}
  </div>
  </>
  );
}

export default Home;