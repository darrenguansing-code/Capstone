import { Link } from "react-router-dom";

function About() {
  return (
    <div className= "bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-r from-cgaGreen via-emerald-600 to-teal-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">  
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-200 shadow-inner">
          Exciting Learning
        </div>
        <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">Daily Activities & Learning</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-200 ">Discover the joyful moments, creative play, and meaningful learning that happens every day at Grace Christian Academy.</p>
      </div>
    </div>
  </section>

      {/* ACTIVITIES */}
    <section className="overflow-hidden bg-linear-to-b from-transparent to-blue-50/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">Category 1</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Creative Arts & Expression</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">Through painting, drawing, and craft activities, children explore their imagination and develop fine motor skills while having fun.</p>
        </div>  

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-pink-200 to-rose-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🎨</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Painting & Drawing</h3>
              <p className="mt-2 text-sm text-slate-600">Children create beautiful artworks using various colors, textures, and techniques to express their creativity.</p>
            </div>
          </div>

        <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-amber-200 to-yellow-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">✨</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Crafts & Building</h3>
              <p className="mt-2 text-sm text-slate-600">Hands-on craft projects and block building activities that enhance spatial awareness and problem-solving skills.</p>
            </div>
          </div>

        <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-purple-200 to-violet-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🎭</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Dramatic Play & Role Play</h3>
              <p className="mt-2 text-sm text-slate-600">Interactive pretend play scenarios where children explore different roles and develop social and communication skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  
      <section className="overflow-hidden bg-linear-to-b from-transparent to-green-50/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">Category 2</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Physical Development & Movement</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">Active games and movement activities that strengthen muscles, improve coordination, and promote healthy development.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-orange-200 to-red-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">⚽</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Outdoor Play & Sports</h3>
              <p className="mt-2 text-sm text-slate-600">Running, jumping, playing with balls, and outdoor adventures that build gross motor skills and encourage active play.</p>
            </div>
          </div>

        <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-blue-200 to-cyan-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🤸</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Dance & Movement Classes</h3>
              <p className="mt-2 text-sm text-slate-600">Fun dance sessions and movement activities that improve rhythm, coordination, and boost confidence and joy.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-green-200 to-emerald-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🧗</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Climbing & Obstacle Course</h3>
              <p className="mt-2 text-sm text-slate-600">Safe climbing structures and fun obstacle courses that challenge balance, strength, and encourage children to try new skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="overflow-hidden bg-linear-to-b from-transparent to-yellow-50/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">Category 3</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Academic & Cognitive Learning</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">Engaging lessons and activities that build foundational skills in literacy, numeracy, colors, shapes, and critical thinking.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-indigo-200 to-blue-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">📚</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Reading & Storytelling</h3>
              <p className="mt-2 text-sm text-slate-600">Interactive story time with colorful books, puppet shows, and storytelling circles that ignite a love of reading.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-red-200 to-pink-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🔢</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Numbers & Math Fun</h3>
              <p className="mt-2 text-sm text-slate-600">Playful math activities using songs, games, and manipulatives to learn counting, shapes, and basic number concepts.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-teal-200 to-cyan-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🔬</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Science & Discovery</h3>
              <p className="mt-2 text-sm text-slate-600">Hands-on science experiments and nature exploration where children learn about the world through observation and play.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="overflow-hidden bg-linear-to-b from-transparent to-rose-50/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">Category 4</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Social Skills & Faith Development</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">Character-building activities rooted in Christian values where children learn kindness, sharing, cooperation, and gratitude.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-red-200 to-pink-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🤝</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Circle Time & Sharing</h3>
              <p className="mt-2 text-sm text-slate-600">Group discussions, sharing personal stories, and taking turns speaking to develop communication and listening skills.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-yellow-200 to-orange-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">⛪</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Bible Stories & Prayer</h3>
              <p className="mt-2 text-sm text-slate-600">Daily devotions, Bible storytelling, prayer time, and faith-building lessons rooted in Christian values and teachings.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <div className="h-48 bg-linear-to-br from-green-200 to-emerald-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">❤️</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Kindness & Community Service</h3>
              <p className="mt-2 text-sm text-slate-600">Activities teaching empathy, helping others, sharing with friends, and caring for their community and environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">Sample Schedule</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">A Typical Day at GCA</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">Here's what a joyful, structured day looks like at our preschool.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 text-center lg:text-center">
              <p className="text-900 font-semibold uppercase tracking-[0.3em] text-cgaGreen">Morning Schedule</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-cgaLightGreen/20 to-blue-50 p-6 shadow-lg">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">1</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">7:30 - 8:30 AM: Arrival & Morning Circle</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Welcome song, prayer, pledge, and morning announcements to start the day with joy and purpose.</p>
                  </div>
                </div>
              
                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">2</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">8:30 - 9:15 AM: Literacy & Language</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Letter recognition, phonics, storytelling, and reading activities tailored to each child's level.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">3</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">9:15 - 10:00 AM: Math & Numeracy</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Counting games, shape recognition, number songs, and manipulative-based learning activities.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">4</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">10:00 - 10:30 AM: Snack & Rest Time</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Nutritious snacks and quiet activities to recharge before outdoor play.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 text-center lg:text-center">
              <p className="text-900 font-semibold uppercase tracking-[0.3em] text-cgaGreen">Afternoon Schedule</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-cgaLightGreen/20 to-blue-50 p-6 shadow-lg">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">5</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">10:30 - 11:15 AM: Creative Arts & Play</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Painting, drawing, crafts, and imaginative play time where creativity flourishes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">6</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">11:15 AM - 12:00 PM: Outdoor Activities</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Physical play, sports, games, and exploration in our safe outdoor learning environment.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">7</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">12:00 - 12:30 PM: Lunch & Conversation</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Healthy lunch time with opportunities for social interaction and table manners practice.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0;">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cgaGreen text-white font-bold text-sm">8</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm text-left">12:30 - 1:00 PM: Closing Circle & Prayer</h3>
                    <p className="mt-1 text-slate-600 text-sm text-left">Reflection, gratitude sharing, songs, prayer, and preparation for dismissal with joy and purpose.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden bg-linear-to-b from-slate-50 to-cgaLightGreen/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cgaGreen">Parent Information</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Why These Activities Matter</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">Each activity is thoughtfully designed to support your child's holistic development.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Cognitive Development</h3>
                <p className="mt-2 text-slate-600">Learning through play strengthens problem-solving skills, memory, and the ability to think creatively and critically.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💪</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Physical Health</h3>
                <p className="mt-2 text-slate-600">Active play and movement activities build strong muscles, coordination, and establish healthy habits for life.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-4xl">❤️</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Emotional Well-being</h3>
                <p className="mt-2 text-slate-600">Safe spaces for self-expression and supportive relationships help children develop confidence and emotional resilience.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🤗</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Social Skills</h3>
                <p className="mt-2 text-slate-600">Group activities teach sharing, cooperation, turn-taking, and empathy—essential skills for healthy relationships.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✨</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Creativity & Imagination</h3>
                <p className="mt-2 text-slate-600">Arts, dramatic play, and open-ended exploration encourage self-expression and divergent thinking.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✝️</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Spiritual Growth</h3>
                <p className="mt-2 text-slate-600">Faith-based activities and Christian values help children develop a strong moral foundation rooted in love and kindness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cgaGreen text-white py-14">
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">Ready to See Your Child Thrive?</h2>
      <p className="mt-4 max-w-3xl mx-auto text-emerald-100">Join our Grace Christian Academy community and give your child a joyful, nurturing, and enriching preschool experience.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/#contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-cgaGreen shadow hover:bg-slate-300 scroll-smooth">
          Visit Our Campus
        </Link>
        <Link to="/enroll" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
          Enroll Today
        </Link>
      </div>
    </div>
  </section>
    </div>
  );
}

export default About;