import { Link } from 'react-router-dom';

function Header() {
  return (
    
  <header className="bg-white shadow-sm sticky top-0 z-20">
    <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-0">
            <Link to="/">
          <img src="/logo.jpg" alt="Grace Christian Academy" className="h-12 w-20 rounded-full object-cover bg-green-100" />
          </Link>
          <div>
          <p className="text-xs uppercase tracking-[0.20em] text-slate-1000">Grace Christian Academy of Cavite Inc.</p>
          <p className="text-lg text-left font-semibold text-cgaDark">Grace Christian Academy</p>
        </div>
        </div>
      </div>
      <nav className="md:flex gap-6 font-semibold text-slate-700 hidden">

  <nav className="md:flex gap-6 font-semibold text-slate-700 hidden ml-170">


</nav>

</nav>
      <div className="flex items-center gap-3 mr-30">
        <Link to="/login" className="rounded-full bg-cgaGreen px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600"> Login </Link>
      </div>
    </div>
  </header>
  );
}

export default Header;