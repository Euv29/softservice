'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white text-gray-900 py-24 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wide">
              Sobre a <span className="text-[#01a0e2]">SoftService</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600">
              Empresa angolana líder em soluções tecnológicas empresariais, 
              comprometida com a inovação e excelência no atendimento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transformando Negócios <span className="text-[#01a0e2]">Através da Tecnologia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundada em 2020 na província do Bié, a SoftService Angola nasceu com o propósito 
                de democratizar o acesso à tecnologia empresarial em Angola. Nossa jornada começou 
                em Cuíto e hoje expandimos nossos serviços para as principais províncias do país.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Especializamo-nos em quatro áreas principais: sistemas de videovigilância, 
                controlo biométrico de acessos, desenvolvimento de websites e o nosso sistema 
                proprietário CACIMBO para gestão empresarial.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é capacitar empresas angolanas com soluções tecnológicas que 
                otimizam processos, aumentam a segurança e impulsionam o crescimento dos negócios.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#01a0e2] to-[#0190d2] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Nossos Números</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                    <div className="text-sm opacity-90">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">8</div>
                    <div className="text-sm opacity-90">Províncias Atendidas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                    <div className="text-sm opacity-90">Projetos Concluídos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Suporte Técnico</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Nossos Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que nos <span className="text-[#01a0e2]">Move</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-[#01a0e2] rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Missão</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Fornecer soluções tecnológicas inovadoras e acessíveis que transformem 
                a forma como as empresas angolanas operam, promovendo eficiência, 
                segurança e crescimento sustentável.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#01a0e2] rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Visão</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ser a empresa de referência em soluções tecnológicas empresariais 
                em Angola, reconhecida pela qualidade, inovação e compromisso com 
                o desenvolvimento do ecossistema tecnológico nacional.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-[#01a0e2] rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Valores</h3>
              <ul className="text-gray-600 text-center space-y-2">
                <li><strong>Excelência:</strong> Compromisso com a qualidade</li>
                <li><strong>Inovação:</strong> Busca constante por soluções</li>
                <li><strong>Integridade:</strong> Transparência em tudo</li>
                <li><strong>Parceria:</strong> Crescimento mútuo</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Especialistas <span className="text-[#01a0e2]">Dedicados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe é formada por profissionais qualificados e experientes, 
              comprometidos em oferecer o melhor em soluções tecnológicas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            {[
              {
                name: "Nome do Membro 1",
                position: "CEO & Fundador",
                imageUrl: "/team/member1.jpg", // Coloque aqui a URL da imagem
                social: {
                  facebook: "https://facebook.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/"
                }
              },
              {
                name: "Nome do Membro 2",
                position: "Diretor de Tecnologia",
                imageUrl: "/team/member2.jpg", // Coloque aqui a URL da imagem
                social: {
                  facebook: "https://facebook.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/"
                }
              },
              {
                name: "Nome do Membro 3",
                position: "Especialista em Segurança",
                imageUrl: "/team/member3.jpg", // Coloque aqui a URL da imagem
                social: {
                  facebook: "https://facebook.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/"
                }
              },
              {
                name: "Nome do Membro 4",
                position: "Desenvolvedor Sênior",
                imageUrl: "/team/member4.jpg", // Coloque aqui a URL da imagem
                social: {
                  facebook: "https://facebook.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/"
                }
              },
              {
                name: "Nome do Membro 5",
                position: "Especialista em Biometria",
                imageUrl: "/team/member5.jpg", // Coloque aqui a URL da imagem
                social: {
                  facebook: "https://facebook.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/"
                }
              },
              {
                name: "Nome do Membro 6",
                position: "Gerente de Suporte",
                imageUrl: "/team/member6.jpg", // Coloque aqui a URL da imagem
                social: {
                  facebook: "https://facebook.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/"
                }
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Photo */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback para quando a imagem não carregar
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#01a0e2] to-[#0190d2] hidden items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#01a0e2] font-medium mb-4">{member.position}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#01a0e2] hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#01a0e2] hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#01a0e2] hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Cobertura Nacional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Presentes em <span className="text-[#01a0e2]">Todo Angola</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Expandimos nossa presença para atender empresas em diversas províncias, 
              levando tecnologia e inovação para todo o território nacional
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Luanda', 'Benguela', 'Lubango', 'Huambo', 'Cuíto', 'Moxico', 'Cuanza Sul', 'Cuando Cubango', 'Saurimo'].map((city, index) => (
              <motion.div
                key={city}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#01a0e2] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">{city}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium text-[#01a0e2] uppercase tracking-wider mb-4 block">
              Localização
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Onde nos <span className="text-[#01a0e2]">Encontrar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa sede principal está localizada em Cuíto, província do Bié, no coração de Angola
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-[500px]">
                {/* Embedded Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.8!2d16.9413611!3d-12.3897222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIzJzIzLjAiUyAxNsKwNTYnMjguOSJF!5e0!3m2!1spt!2sao!4v1640000000000!5m2!1spt!2sao"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização SoftService Angola"
                />
              </div>
              
              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-[#01a0e2] rounded-full mr-2"></div>
                  <h4 className="font-bold text-gray-900">SoftService Angola</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Rua Góis Pinto, Cuíto<br />
                  Província do Bié, Angola
                </p>
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#01a0e2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Rua Góis Pinto<br />
                      Cuíto, Província do Bié<br />
                      Angola
                    </p>
                  </div>
                </div>

                {/* Coordinates */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#01a0e2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Coordenadas GPS</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Latitude: 12°23&apos;23.0&quot;S<br />
                      Longitude: 16°56&apos;28.9&quot;E
                    </p>
                    <p className="text-sm text-[#01a0e2] mt-2">
                      (-12.389722, 16.941361)
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#01a0e2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Contactos</h3>
                    <div className="space-y-1">
                      <a href="tel:+244928990138" className="text-gray-600 hover:text-[#01a0e2] transition-colors duration-200 block">
                        +244 928 990 138
                      </a>
                      <a href="tel:+244935202641" className="text-gray-600 hover:text-[#01a0e2] transition-colors duration-200 block">
                        +244 935 202 641
                      </a>
                      <a href="mailto:geral@softservice-ao.com" className="text-gray-600 hover:text-[#01a0e2] transition-colors duration-200 block">
                        geral@softservice-ao.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Directions Button */}
                <div className="pt-4">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-12.389722,16.941361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#01a0e2] text-white font-semibold rounded hover:bg-[#0190d2] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Como Chegar
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#01a0e2] to-[#0190d2] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Entre em contacto connosco e descubra como podemos ajudar sua empresa 
              a crescer com as melhores soluções tecnológicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+244928990138"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#01a0e2] font-semibold rounded hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ligar Agora
              </a>
              <a
                href="mailto:geral@softservice-ao.com"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#01a0e2] transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
