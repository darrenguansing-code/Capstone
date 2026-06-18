import { Link } from "react-router-dom";

import {ClipboardCheck, FileText, GraduationCap, ShieldCheck, Camera, FilePenLine, Mail, CalendarDays, BadgeCheck, ArrowRight, ListChecks  } from "lucide-react";

export default function AdmissionSection() {

  const requirements = [
    {
      icon: FileText,
      title: "PSA Birth Certificate",
    },
    {
      icon: GraduationCap,
      title: "Report Card",
    },
    {
      icon: ShieldCheck,
      title: "Good Moral Certificate",
    },
    {
      icon: Camera,
      title: "2x2 ID Picture",
    },
  ];

  const processSteps = [
    {
      icon: FilePenLine,
      title: "Fill Out Form",
      desc: "Complete the online admission application form.",
    },
    {
      icon: Mail,
      title: "Wait for the Email",
      desc: "Wait for the Confirmation Message.",
    },
    {
      icon: CalendarDays,
      title: "Schedule Visit",
      desc: "Choose your preferred date for document submission.",
    },
    {
      icon: BadgeCheck,
      title: "Requirements",
      desc: "The following requirements must be submitted.",
    },
    {
      icon: GraduationCap,
      title: "Enrollment",
      desc: "Complete enrollment and become part of GCA.",
    },
  ];

  return (
    <section className="bg-gray-200 py-20 cursor-default">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
              <ClipboardCheck
                size={30}
                className="text-green-700"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-left">
                Requirements
              </h2>
              <p className="text-gray-600">
                Prepare the following documents for admission.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {requirements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all delay-100 duration-300 hover:-translate-y-2 hover:border-green-700 hover:shadow-lg"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-green-100 p-4">
                      <Icon
                        size={36}
                        className="text-green-700"
                      />
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      
            
        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
            <ListChecks size={30} className="text-green-700"/>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-left">
              Admission Process
          </h2>

          <p className="text-gray-600">
            Follow these simple steps to complete your admission application.
          </p>
        </div>
      </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-10 hidden h-1 bg-green-100 lg:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center transition-all delay-100 duration-300 hover:-translate-y-2 hover:border-green-700"
                  >
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-green-700 text-white shadow-lg">
                      <Icon size={34} />
                    </div>

                    <div className="mt-4">
                      <span className="text-sm font-semibold text-green-700">
                        STEP {index + 1}
                      </span>

                      <h3 className="mt-1 text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 flex justify-end">
            <button className="group flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800">

              <Link to = "/Form ">
              Ready to Apply?
            </Link>

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


