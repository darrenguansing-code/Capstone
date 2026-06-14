import { Link } from 'react-router-dom';

function Header() {
  return (
  <header className="bg-white shadow-sm sticky top-0 z-20">
    <div className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Grace Christian Academy" className="h-12 w-12 rounded-full object-cover bg-green-100" />
          <div className="flex flex-col justify-center leading-tight">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-900">Grace Christian Academy of Cavite Inc.</p>
            <p className="text-lg text-left font-semibold text-cgaDark">Grace Christian Academy</p>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <nav className="hidden items-center gap-5 font-semibold text-slate-900 md:flex">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-extrabold text-cgaGreen hover:bg-green-300 transition-all duration-300"
          >
            HOME
          </Link>
          <Link
            to="/Admission"
            className="inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-extrabold text-cgaGreen hover:bg-green-300 transition-all duration-300"
          >
            ADMISSION
          </Link>
        </nav>

        <Link to="/login" className="rounded-full bg-cgaGreen px-5 py-2 ml-20 mr-15 text-sm font-semibold text-white shadow hover:bg-emerald-600">
          Login
        </Link>
      </div>
    </div>
  </header>
  );
}

export default Header;