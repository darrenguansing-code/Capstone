import { Link } from "react-router-dom";
import Logo from "/logo.jpg";
import { User, Lock } from "lucide-react";

function Login() {
    return (
        <div className="flex w-screen h-screen items-center justify-center font-[Poppins] bg-gray-50 px-4">

            {/* Background Logo */}
            <img
                src={Logo}
                alt=""
                className="w-100 md:w-56 fixed opacity-10 -translate-y-20"
            />

            {/* LOGIN CARD */}
                <div className="relative z-10 flex flex-col items-center justify-center shadow-xl w-full max-w-md bg-white rounded-3xl p-8 space-y-6">

                {/* HEADER */}
                <div className="flex items-center gap-3 text-center">
                    <img src={Logo} alt="" className="w-14" />
                    <p className="leading-5 text-sm md:text-base font-[PoppinsBold]">
                        GRACE CHRISTIAN <br /> ACADEMY OF CAVITE INC.
                    </p>
                </div>

                {/* TITLE */}
                <div className="flex flex-col items-center w-full gap-6">
                    <h1 className="text-2xl md:text-3xl font-[PoppinsBold]">
                        LOGIN
                    </h1>

                    <p className="text-xs md:text-sm text-gray-500 text-center">
                        Login using your Grace Christian Academy Account
                    </p>

                    {/* USERNAME */}
                    <div className="relative w-full">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            id="teacherUsername"
                            className="w-full border rounded-md h-11 border-neutral-300 pl-10 pr-3 text-sm focus:outline-none focus:border-neutral-600"
                            placeholder="Username"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="relative w-full">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            id="teacherPassword"
                            className="w-full border rounded-md h-11 border-neutral-300 pl-10 pr-3 text-sm focus:outline-none focus:border-neutral-600"
                            placeholder="Password"
                        />
                    </div>

                    {/* BUTTON */}
                    <Link to="/Classes" className="w-full">
                        <div className="w-full h-11 flex items-center justify-center bg-[#1c882aa6] text-white font-[PoppinsBold] rounded-md hover:bg-[#1c882adc] transition">
                            LOGIN
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Login;