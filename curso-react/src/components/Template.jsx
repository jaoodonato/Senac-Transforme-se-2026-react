import { Link } from 'react-router'

export function Template ({children}) {
    return(
        <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="flex items-center gap-8">
          <span className="text-xl font-black tracking-tight text-gray-900">
            Safe<span className="text-red-600">Work</span>
          </span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">Sobre</a>
            <a href="#prices" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">Preços</a>
            <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">Benefícios</a>
          </div>
        </div>
        <Link to="/auth" className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 hover:shadow transition-all">
          Acessar Sistema
        </Link>
      </nav>
      {children}
      <footer>
        site created by JV
      </footer>
        
        </>
    )}