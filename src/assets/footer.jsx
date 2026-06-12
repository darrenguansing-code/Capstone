import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin, } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-gray-400 py-6 cursor-default font-poppins">
  <div className="mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8">

      {/* School Info */}
      <div>
        <div className="flex items-center gap-1">
          <img src="/logo.jpg" alt="Grace Christian Academy" className="h-10 w-10 rounded-full object-cover bg-green-100 flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold uppercase text-left">
            Grace Christian Academy
          </h2>
        </div>

        <p className="mt-2 text-m text-black text-left">
          Providing Christ-centered education that nurtures academic excellence, strong moral values, and lifelong learning. 
          We are committed to developing students with integrity, compassion, and leadership skills, 
          empowering them to succeed academically while growing in faith and character.
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-left">
        <h3 className="text-lg font-semibold mb-2 ml-15">
          [ Quick Links ]
          </h3>

        <div className="flex flex-col text-black gap-1 ml-15">

            <Link to="/" className="hover:text-cgaGreen">Home</Link>

            <Link to="/#Academic" className="hover:text-cgaGreen">Academic Programs</Link>

            <Link to="/tuition-fee" className="hover:text-cgaGreen">Tuition Fee</Link>

            <Link to="/transportation" className="hover:text-cgaGreen">Transportation</Link>

            <Link to="/login" className="hover:text-cgaGreen">Login</Link>
            
          </div>
        </div>

      {/* Contact */}
      <div>
            <h3 className="text-lg font-semibold mb-3 text-left">
              [ Contact Information ]
            </h3>

            <div className="space-y-2 text-sm text-black">

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>0992-641-8526</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>grace.cslife@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>Grace Christian Academy of Cavite Inc.</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>
                  Brgy. Cabuco, Trece Martires City,
                  Cavite, Philippines
                </span>
              </div>

            </div>
          </div>

        </div>
    <div className="border-t mt-4 pt-3 text-center text-xs text-gray-900">
      © 2026 Grace Christian Academy. All Rights Reserved.
    </div>
  </div>
</footer>
  );
}
