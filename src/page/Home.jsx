import { Link } from "react-router-dom";
function Home() {

  const programData = [
    {
      title: "Preschool Program",
      description:
        "Our preschool works closely with parents to ensure the maximum benefit from early schooling.",
      image: "src/image/p1.jpg",
      link: "/Form",
    },
    {
      title: "Kindergarten Program",
      description:
        "Provides students with life skills, knowledge, and Christian values.",
      image: "src/image/k1.jpg",
      link: "/Form",
    },
    {
      title: "Summer Class Program",
      description:
        "Serves students in primary and intermediate grade levels on Season of Summer.",
      image: "src/image/sc.jpg",
      link: "/Form",
    },
  ];

  return (
    <>
    <div className="font-poppins text-slate-900">
      <section id="/"></section>

      {/* HERO */}
    <section className="relative overflow-hidden bg-linear-to-r from-black via-black to-black text-white ">

  <img
    src="src/image/background.jpg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-[center_45%] opacity-45"
  />

  <div className="relative mx-auto w-full px-4 py-40 sm:px-6 lg:px-8">

    <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-5">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaLightGreen">
        Admissions now open
      </p>

      <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
        Discover a joyful preschool journey with faith, play, and learning.
      </h2>

      <p className="mt-4 text-base sm:text-lg leading-8 text-emerald-100">
        "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—  not by works, so that no one can boast."
        <b> Ephesians 2:8-9 (NIV)</b>
      </p>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <Link
          to="/Form"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-cgaGreen shadow hover:bg-slate-100"
        >
          Enroll Now
        </Link>

        <Link
          to="/#videos"
          className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
        >
          Watch Videos
        </Link>
      </div>

      <div className="mt-0 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-300"></span>
        <strong>2026–2027 school year</strong>
      </div>

    </div>

  </div>
</section>

      {/* 3 CARDS */}
      <section className="max-w-[450vh] mx-auto w-full px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8 text-left">

    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
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

    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
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

    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">
        Why Parents Choose Us
      </p>

      <h3 className="mt-4 min-h-80px text-2xl font-bold text-slate-900 mb-10">
        A safe, joyful, and structured experience
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        Parents trust us for our caring teachers, meaningful learning activities, engaging community, and strong support for every child’s emotional and spiritual growth.
      </p>
    </div>

  </div>
</section>

        <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Academic Programs
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programData.map((program, index) => (
            <div
              key={index}
              className="group bg-black/10 rounded-2xl overflow-hidden border-2 border-transparent shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-900 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-100 object-cover transition duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {program.description}
                </p>

                <Link
                  to={program.link}
                  className="font-semibold text-red-600 hover:text-red-800 text-md transition-colors duration-300"
                >
                  Enroll Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* VIDEO SECTION */}
      <section id="videos" className="bg-cgaLightGreen/80 py-14">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-left ml-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">
        CGA Learning Story
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Short video stories from campus
      </h2>
      <p className="mt-3 max-w-2xl text-slate-700">
        Tap any clip below to play a preview of our learning activities, celebrations, and classroom moments.
      </p>
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
          <video
            className="w-full h-145 object-cover"
            controls
            poster="img/video-poster.jpg"
          >
            <source src="videos/clip1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Grace Christian Academy Hymn :
          </h3>
          <span className="text-sm text-slate-500">
            Tap a clip below to switch videos.
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm hover:bg-cgaGreen/10">
            Morning prayer and circle time
          </button>
          <button className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm hover:bg-cgaGreen/10">
            Creative art activity
          </button>
          <button className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm hover:bg-cgaGreen/10">
            Outdoor learning adventure
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-lg text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">
            Quick facts
          </p>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cgaGreen"></span>
              Play-based learning for preschoolers.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cgaGreen"></span>
              Character development through stories and songs.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cgaGreen"></span>
              Small classes with caring teachers.
            </li>
          </ul>
        </div>

        {/* FEATURED STORY */}
        <div className="rounded-3xl bg-white p-6 shadow-lg text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">
            Featured story
          </p>
          <h3 className="mt-4 text-xl font-bold text-slate-900">
            GCA Learning Story
          </h3>
          <p className="mt-4 text-slate-600">
            See how young learners explore faith-based lessons, social skills, and creative play in a warm classroom community.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
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
    </section>
  </div>
  </>
  );
}

export default Home;