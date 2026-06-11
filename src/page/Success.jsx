import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Success() {
    
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleDone = () => {
    setShowPopup(true);

    setTimeout(() => {
    console.log("navigating...");
      navigate("/");    
    },);
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
    <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-0">
          <img src="/logo.jpg" alt="Grace Christian Academy" className="h-12 w-20 rounded-full object-cover bg-green-100" />
          <div>
          <p className="text-xs uppercase tracking-[0.20em] text-slate-500">Grace Christian Academy of Cavite Inc.</p>
          <p className="text-lg text-left font-semibold text-cgaDark">Grace Christian Academy</p>
        </div>
        </div>
      </div>
    </div>
</header>

      {/* GREEN STATUS BAR */}
      <div className="bg-green-600 text-white text-center py-2 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2">
        <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-xs">
          ✓
        </span>

        Your Application Has Been Submitted
      </div>

      {/* POPUP */}
        {showPopup && (
            <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-3xl shadow-lg z-50 animate-pop-up">
                Registered Successfully ✓
            </div>
        )}

      {/* CONTENT */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          
          {/* ICON */}
          <div className="relative w-55 h-57 mx-auto">
            
            {/* CHECK CIRCLE */}
            <div className="absolute top-0 left-25 -translate-x-1/2 w-20 h-20 rounded-full border-[5px] border-green-600 flex items-center justify-center bg-[#f3f3f3] z-0">
              <span className="text-5xl text-green-600 font-bold">✓</span>
            </div>

            {/* ENVELOPE */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rotate-[-10deg] justify-center">
            <div className="relative w-45 h-32">

            {/* BODY */}
            <div className="absolute inset-0 border-[6px] border-black bg-transparent"></div>

            {/* TOP FLAP */}
            <div className="absolute top-10 left-10 w-full h-full overflow-hidden">
            </div>

            {/* LEFT INNER LINE */}
            <div className="absolute top-0 left-0 w-[66%] border-t-[6px] border-black rotate-38 origin-top-left"></div>

            {/* RIGHT INNER LINE */}
            <div className="absolute top-0 right-0 w-[66%] border-t-[6px] border-black rotate-[-38deg] origin-top-right"></div>
        </div>
    </div>
</div>

          {/* TITLE */}
          <h2 className="mt-10 text-3xl font-extrabold uppercase text-black">
            Thank You For Submitting Your Application
          </h2>

          {/* GREEN LINE */}
          <div className="w-80 h-1 bg-green-600 mx-auto mt-4 rounded-full" />

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-700 text-sm leading-relaxed">
            Please allow one (1) to two (2) working days for the enrollment
            details to be sent to your registered email address.
          </p>

          {/* BUTTON */}
        <button
            onClick={handleDone}
            className="mt-10 bg-green-700 hover:bg-green-800 transition text-white font-bold text-2xl px-12 py-3 rounded-2xl shadow-md"
          >
            DONE
          </button>
        </div>
      </main>
    </div>
  );
}