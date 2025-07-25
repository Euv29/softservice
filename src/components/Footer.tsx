import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                SoftService <span className="text-[#01a0e2]">Angola</span>
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Líder em soluções tecnológicas empresariais em Angola, oferecendo sistemas de segurança, 
                controlo biométrico e desenvolvimento web desde 2020.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577138932736" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-[#01a0e2] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/softservice.ao/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-[#01a0e2] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="mailto:geral@softservice-ao.com" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-[#01a0e2] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none"/>
                </svg>
              </a>
              <a href="tel:+244928990138" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-[#01a0e2] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Serviços</h4>
            <ul className="space-y-3">
              <li><Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Videovigilância</Link></li>
              <li><Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Controlo Biométrico</Link></li>
              <li><Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Desenvolvimento Web</Link></li>
              <li><Link href="/cacimbo" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Sistema CACIMBO ERP</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Links Úteis</h4>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Sobre Nós</Link></li>
              <li><Link href="/#portfolio" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Portfólio</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Suporte</Link></li>
              <li><Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 SoftService Angola. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Desenvolvido com ❤️ em Angola
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
