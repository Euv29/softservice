"use client"
import Image from "next/image";
import Link from "next/link";
import { motion, animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Componente Popup CACIMBO
function CacimboPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        className="relative bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#e7003b] rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br  rounded-2xl flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <Image
                src="/cacimbologo.png"
                alt="CACIMBO Logo"
                width={100}
                height={200}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sistema <span className="bg-gradient-to-r from-[#e7003b] to-red-600 bg-clip-text text-transparent">CACIMBO ERP</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Transforme sua gestão empresarial com o sistema 100% angolano
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', text: 'Comércio e POS' },
              { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', text: 'Controle de Estoque' },
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Tesouraria' },
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', text: 'Recursos Humanos' }
            ].map((feature) => (
              <div key={feature.text} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-[#e7003b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e7003b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/cacimbo"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#e7003b] to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver Mais Detalhes
            </Link>
            <Link
              href="/contactos"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center px-6 py-4 border-2 border-[#e7003b] text-[#e7003b] font-semibold rounded-xl hover:bg-[#e7003b] hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Solicitar Licença
            </Link>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Agende uma demonstração gratuita e veja como o CACIMBO ERP pode transformar seu negócio
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Componente para números animados
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [showCacimboPopup, setShowCacimboPopup] = useState(false);

  // Mostrar popup após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCacimboPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowCacimboPopup(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Popup CACIMBO */}
      <CacimboPopup isOpen={showCacimboPopup} onClose={handleClosePopup} />
      {/* Hero Section */}
      <section className="relative">
        {/* Content Container */}
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="text-center">
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="block">SOLUÇÕES TECNOLÓGICAS</span>
              <span className="block" style={{ color: '#01a0e2' }}>EMPRESARIAIS</span>
              <span className="block">EM ANGOLA</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="mt-8 max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A <strong className="text-gray-900">SoftService Angola</strong> oferece soluções tecnológicas 
              profissionais para empresas que procuram excelência operacional através de 
              sistemas de segurança, controlo de acesso e automação empresarial.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contacto"
                className="px-8 py-4 rounded font-medium text-sm uppercase tracking-wide text-white transition-colors duration-200"
                style={{ backgroundColor: '#01a0e2' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0190d2'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#01a0e2'; }}
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="/servicos"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded font-medium text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors duration-200"
              >
                Conhecer Serviços
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-12">
                Experiência Comprovada desde 2020
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {/* Service Icons */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center uppercase tracking-wide">Videovigilância</span>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center uppercase tracking-wide">Controlo Biométrico</span>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center uppercase tracking-wide">Desenvolvimento Web</span>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center uppercase tracking-wide">Sistema CACIMBO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              A <span className="text-[#01a0e2]">SoftService Angola</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Líder em soluções tecnológicas empresariais com foco em excelência operacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Left */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
            <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#01a0e2' }}>
              Empresa
            </span>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 leading-tight uppercase tracking-wide">
                  Quem Somos
                </h3>
              </motion.div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <motion.p 
                  className="text-base"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Fundada em <strong className="text-gray-900">2015</strong> com sede no Cuito, província do Bié, 
                  a SoftService Angola é especializada em soluções tecnológicas empresariais que promovem 
                  a excelência operacional e a modernização de processos organizacionais.
                </motion.p>
                
                <motion.p 
                  className="text-base"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Oferecemos sistemas integrados de <strong className="text-gray-900">segurança empresarial</strong>, 
                  <strong className="text-gray-900">controlo biométrico</strong> e soluções de <strong className="text-gray-900">gestão 
                  empresarial</strong> através do nosso sistema proprietário CACIMBO.
                </motion.p>
                
                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 gap-6 mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-center p-6 bg-white rounded border border-gray-200">
                    <div className="text-3xl font-bold text-[#01a0e2]">5+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide mt-2">Anos Experiência</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded border border-gray-200">
                    <div className="text-3xl font-bold text-[#01a0e2]">100+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide mt-2">Projetos Executados</div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Link
                  href="/sobre"
                  className="inline-flex items-center text-[#01a0e2] font-medium text-sm uppercase tracking-wide hover:text-[#0190d2] transition-colors duration-200"
                >
                  Conhecer Empresa
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Right */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Main Image Container */}
                <motion.div 
                  className="relative bg-gradient-to-br from-[#e6f7ff] to-[#cceeff] rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/sobre-nos.jpg"
                    alt="Sobre Nós - SoftService Angola"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-[#99ddff] rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.7, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.7, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Soluções <span className="text-[#01a0e2]">Empresariais</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Oferecemos soluções tecnológicas profissionais para otimização de processos e segurança empresarial
            </p>
            
            {/* Coverage Areas */}
            <div className="text-center mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Áreas de Cobertura</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {['Lubango', 'Benguela', 'Luanda', 'Moxico', 'Cuanza Sul', 'Cuando Cubango', 'Huambo', 'Saurimo'].map((area) => (
                  <span key={area} className="px-4 py-2 bg-[#01a0e2] text-white rounded-full text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Videovigilância Card */}
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded p-8 text-center hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#01a0e2] rounded mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Videovigilância
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Sistemas de monitoramento profissional com tecnologia HD e acesso remoto para segurança empresarial.
              </p>
              <div className="text-[#01a0e2] font-medium text-xs uppercase tracking-wide">
                Saber Mais
              </div>
            </motion.div>

            {/* Controlo Biométrico Card */}
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded p-8 text-center hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#01a0e2] rounded mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Controlo Biométrico
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Sistemas de acesso por impressão digital e reconhecimento facial para controle seguro de entrada.
              </p>
              <div className="text-[#01a0e2] font-medium text-xs uppercase tracking-wide">
                Saber Mais
              </div>
            </motion.div>

            {/* Desenvolvimento Web Card */}
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded p-8 text-center hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#01a0e2] rounded mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Desenvolvimento Web
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Websites modernos, e-commerce e aplicações web personalizadas para presença digital profissional.
              </p>
              <div className="text-[#01a0e2] font-medium text-xs uppercase tracking-wide">
                Saber Mais
              </div>
            </motion.div>

            {/* Sistema CACIMBO Card */}
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded p-8 text-center hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#01a0e2] rounded mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Sistema CACIMBO
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Sistema completo de gestão empresarial desenvolvido especialmente para o mercado angolano.
              </p>
              <div className="text-[#01a0e2] font-medium text-xs uppercase tracking-wide">
                Saber Mais
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/servicos"
              className="bg-[#01a0e2] text-white px-8 py-4 rounded font-medium text-sm uppercase tracking-wide hover:bg-[#0190d2] transition-colors duration-200"
            >
              Ver Todos os Serviços
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Parceiros Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Parceiros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Empresas que <span className="text-[#01a0e2]">Confiam</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Colaboramos com organizações líderes no mercado angolano
            </p>
          </motion.div>

          {/* Partners Carousel */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Fade gradients on left and right */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <motion.div 
              className="flex gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First Set of Partners */}
              <div className="flex gap-8 min-w-fit">
                {/* Partner 1 - Sonangol */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      SONANGOL
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Energia</div>
                  </div>
                </div>

                {/* Partner 2 - ENDIAMA */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      ENDIAMA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Diamantes</div>
                  </div>
                </div>

                {/* Partner 3 - BAI */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      BAI
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Banco</div>
                  </div>
                </div>

                {/* Partner 4 - UNITEL */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      UNITEL
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Telecom</div>
                  </div>
                </div>

                {/* Partner 5 - TAAG */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      TAAG
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Aviação</div>
                  </div>
                </div>

                {/* Partner 6 - BFA */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      BFA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Banco</div>
                  </div>
                </div>

                {/* Partner 7 - NOVA CIMANGOLA */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-700 uppercase tracking-wide">
                      NOVA CIMANGOLA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Cimento</div>
                  </div>
                </div>

                {/* Partner 8 - ENSA */}
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      ENSA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Seguros</div>
                  </div>
                </div>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="flex gap-8 min-w-fit">
                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      SONANGOL
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Energia</div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      ENDIAMA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Diamantes</div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      BAI
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Banco</div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      UNITEL
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Telecom</div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      TAAG
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Aviação</div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      BFA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Banco</div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-700 uppercase tracking-wide">
                      NOVA CIMANGOLA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Cimento</div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded hover:border-gray-300 transition-colors duration-200 min-w-[240px]">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-700 uppercase tracking-wide">
                      ENSA
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Seguros</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#01a0e2] mb-2">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Clientes Ativos</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#01a0e2] mb-2">
                <AnimatedCounter value={100} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Projetos Concluídos</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#01a0e2] mb-2">
                <AnimatedCounter value={5} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Anos de Mercado</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#01a0e2] mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Suporte Técnico</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#01a0e2]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Main CTA Heading */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transforme sua <span className="text-[#cceeff]">Empresa</span> Hoje
            </motion.h2>
            
            {/* CTA Subtitle */}
            <motion.p 
              className="text-lg text-[#cceeff] max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Solicite uma consulta gratuita e descubra como nossas soluções tecnológicas 
              podem otimizar seus processos empresariais.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/contacto"
                className="bg-white text-[#01a0e2] px-8 py-4 rounded font-medium text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors duration-200"
              >
                Solicitar Orçamento
              </Link>
              
              <Link
                href="/servicos"
                className="border border-white text-white px-8 py-4 rounded font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-[#01a0e2] transition-colors duration-200"
              >
                Ver Soluções
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.p 
              className="text-[#99ddff] text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              ✓ Resposta em 24 horas • ✓ Orçamento sem compromisso • ✓ Suporte pós-venda garantido
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Testemunhos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Clientes <span className="text-[#01a0e2]">Satisfeitos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empresas que confiam em nossas soluções tecnológicas profissionais
            </p>
          </motion.div>

          {/* Feedbacks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feedback 1 */}
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded p-8 hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Feedback Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 text-sm">
                &ldquo;A SoftService entregou soluções tecnológicas de alta qualidade que otimizaram significativamente nossos processos operacionais.&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="font-medium text-gray-900 text-sm uppercase tracking-wide">Ana Martins</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Diretora Geral</div>
              </div>
            </motion.div>

            {/* Feedback 2 */}
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded p-8 hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Feedback Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 text-sm">
                &ldquo;O sistema de videovigilância instalado pela SoftService superou expectativas. Qualidade excelente e suporte técnico sempre disponível.&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="font-medium text-gray-900 text-sm uppercase tracking-wide">João Silva</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Gerente de Segurança</div>
              </div>
            </motion.div>

            {/* Feedback 3 */}
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded p-8 hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Feedback Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 text-sm">
                &ldquo;Profissionalismo exemplar e soluções tecnológicas sob medida. A SoftService compreende as necessidades do mercado angolano.&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="font-medium text-gray-900 text-sm uppercase tracking-wide">Maria Costa</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Diretora Executiva</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contactos Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Contactos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Entre em <span className="text-[#01a0e2]">Contacto</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Estamos prontos para transformar sua empresa com soluções tecnológicas profissionais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
                  Informações de Contacto
                </h3>
              </div>

              {/* Address */}
              <motion.div 
                className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-[#01a0e2] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide mb-2">Endereço</h4>
                  <p className="text-gray-600 text-sm">
                    Rua Góis Pinto<br />
                    Cuíto, Província do Bié<br />
                    República de Angola
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#01a0e2] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide mb-2">Telefone</h4>
                  <p className="text-gray-600 text-sm">
                    +244 928 990 138<br />
                    +244 935 202 641
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#01a0e2] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide mb-2">Email</h4>
                  <p className="text-gray-600 text-sm">
                    geral@softservice-ao.com<br />
                    suporte@softservice-ao.com
                  </p>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-[#01a0e2] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide mb-2">Horário</h4>
                  <p className="text-gray-600 text-sm">
                    Segunda - Sexta: 08:00 - 17:00<br />
                    Sábado: 08:00 - 12:00
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Solicitar Orçamento
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] hover:border-gray-300 transition-all duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] hover:border-gray-300 transition-all duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] hover:border-gray-300 transition-all duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] hover:border-gray-300 transition-all duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="+244 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] hover:border-gray-300 transition-all duration-200 text-gray-900"
                  >
                    <option value="" className="text-gray-500">Selecione um serviço</option>
                    <option value="videovigilancia" className="text-gray-900">Videovigilância</option>
                    <option value="biometrico" className="text-gray-900">Controlo Biométrico</option>
                    <option value="web" className="text-gray-900">Desenvolvimento Web</option>
                    <option value="cacimbo" className="text-gray-900">Sistema CACIMBO</option>
                    <option value="outros" className="text-gray-900">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] hover:border-gray-300 transition-all duration-200 placeholder-gray-500 resize-vertical text-gray-900"
                    placeholder="Descreva brevemente suas necessidades..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#01a0e2] text-white px-8 py-4 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#0190d2] focus:bg-[#0190d2] focus:ring-4 focus:ring-[#01a0e2]/20 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Enviar Solicitação
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
