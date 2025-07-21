'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicosPage() {
  const services = [
    {
      id: 'videovigilancia',
      title: 'Sistema de Videovigilância',
      shortDesc: 'Monitoramento 24/7 com tecnologia de ponta',
      fullDesc: 'Sistemas completos de videovigilância com câmeras IP de alta resolução, gravação em nuvem e acesso remoto. Proteja seu patrimônio com a mais avançada tecnologia de segurança.',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      features: [
        'Câmeras IP Full HD e 4K',
        'Gravação em nuvem segura',
        'Acesso remoto via app',
        'Detecção de movimento inteligente',
        'Visão noturna avançada',
        'Alertas em tempo real'
      ],
      benefits: [
        'Proteção 24/7 do patrimônio',
        'Redução de furtos e roubos',
        'Evidências para seguros',
        'Monitoramento remoto',
        'Deterrência visual',
        'Conformidade legal'
      ],
      color: 'from-blue-500 to-[#01a0e2]',
      bgColor: 'bg-blue-50',
      delay: 0.1
    },
    {
      id: 'biometria',
      title: 'Controlo Biométrico de Acessos',
      shortDesc: 'Controle de acesso seguro e inteligente',
      fullDesc: 'Sistemas de controle de acesso biométrico com leitura de impressão digital, facial e cartão de proximidade. Gerencie quem entra e sai da sua empresa com máxima segurança.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      features: [
        'Leitura de impressão digital',
        'Reconhecimento facial',
        'Cartões de proximidade',
        'Controle de horários',
        'Relatórios detalhados',
        'Integração com folha de ponto'
      ],
      benefits: [
        'Segurança máxima',
        'Eliminação de cartões perdidos',
        'Controle de jornada',
        'Relatórios automáticos',
        'Redução de custos',
        'Conformidade trabalhista'
      ],
      color: 'from-[#01a0e2] to-[#0190d2]',
      bgColor: 'bg-[#01a0e2]/5',
      delay: 0.2
    },
    {
      id: 'websites',
      title: 'Desenvolvimento de Websites',
      shortDesc: 'Presença digital profissional e moderna',
      fullDesc: 'Criação de websites responsivos e modernos para empresas que desejam marcar presença no mundo digital. Do design à implementação, cuidamos de todos os detalhes.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      features: [
        'Design responsivo moderno',
        'Otimização para SEO',
        'Painel administrativo',
        'Integração com redes sociais',
        'Formulários de contacto',
        'Hospedagem e domínio'
      ],
      benefits: [
        'Presença digital profissional',
        'Aumento da visibilidade',
        'Geração de leads',
        'Credibilidade da marca',
        'Acesso 24/7',
        'Competitividade no mercado'
      ],
      color: 'from-[#0190d2] to-purple-600',
      bgColor: 'bg-purple-50',
      delay: 0.3
    },
    {
      id: 'cacimbo',
      title: 'Sistema CACIMBO',
      shortDesc: 'Gestão empresarial completa e integrada',
      fullDesc: 'Sistema proprietário de gestão empresarial que integra vendas, estoque, financeiro e recursos humanos. Uma solução completa para modernizar sua empresa.',
      icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      features: [
        'Gestão de vendas e clientes',
        'Controle de estoque',
        'Módulo financeiro',
        'Recursos humanos',
        'Relatórios gerenciais',
        'Dashboard executivo'
      ],
      benefits: [
        'Centralização de dados',
        'Decisões baseadas em dados',
        'Redução de erros',
        'Aumento da produtividade',
        'Controle total do negócio',
        'Crescimento sustentável'
      ],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 py-24 pt-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#01a0e2] rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-[#0190d2] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#01a0e2] rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#01a0e2]/20 rounded-full text-sm font-medium text-[#01a0e2] mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Soluções Tecnológicas Empresariais
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Nossos 
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#01a0e2] to-[#0190d2] bg-clip-text text-transparent">
                Serviços
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Oferecemos soluções tecnológicas completas para empresas de todos os portes, 
              <span className="text-[#01a0e2] font-semibold"> desde segurança até gestão empresarial</span>
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "4", label: "Serviços Principais" },
                { number: "100+", label: "Projetos Realizados" },
                { number: "24/7", label: "Suporte Técnico" },
                { number: "5+", label: "Anos de Experiência" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-[#01a0e2] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#01a0e2]/10 text-[#01a0e2] rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Portfolio de Soluções
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Soluções <span className="bg-gradient-to-r from-[#01a0e2] to-[#0190d2] bg-clip-text text-transparent">Completas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada serviço é desenvolvido com tecnologia de ponta e adaptado às necessidades específicas do seu negócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#01a0e2]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: service.delay }}
                whileHover={{ y: -5 }}
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#01a0e2] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.fullDesc}
                </p>

                {/* Features & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#01a0e2] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Características
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[#01a0e2] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Benefícios
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 4).map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <Link
                    href="/contactos"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Solicitar Orçamento</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-[#01a0e2]">Orçamento gratuito</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#01a0e2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#0190d2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#01a0e2]/10 text-[#01a0e2] rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Como Trabalhamos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nosso <span className="bg-gradient-to-r from-[#01a0e2] to-[#0190d2] bg-clip-text text-transparent">Processo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um processo estruturado e transparente para garantir o sucesso do seu projeto
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Análise de Necessidades',
                description: 'Reunimos com você para entender suas necessidades específicas e objetivos do projeto.',
                icon: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0v6a2 2 0 002 2h6a2 2 0 002-2v-6m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v6z'
              },
              {
                step: '02',
                title: 'Proposta Personalizada',
                description: 'Desenvolvemos uma proposta técnica e comercial personalizada para sua empresa.',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              },
              {
                step: '03',
                title: 'Implementação',
                description: 'Nossa equipe técnica especializada implementa a solução com qualidade e agilidade.',
                icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              },
              {
                step: '04',
                title: 'Treinamento e Suporte',
                description: 'Oferecemos treinamento completo e suporte contínuo para garantir o melhor uso da solução.',
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="flex items-start space-x-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#01a0e2] to-[#0190d2] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#01a0e2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#01a0e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-12 bg-gradient-to-b from-[#01a0e2] to-[#0190d2] opacity-30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#01a0e2]/10 text-[#01a0e2] rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Diferencial SoftService
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Por que nos <span className="bg-gradient-to-r from-[#01a0e2] to-[#0190d2] bg-clip-text text-transparent">Escolher?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mais de 5 anos de experiência transformando empresas angolanas com tecnologia de ponta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Confiabilidade',
                description: 'Mais de 100 projetos concluídos com sucesso e clientes satisfeitos em todo Angola.'
              },
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Inovação',
                description: 'Utilizamos as mais recentes tecnologias do mercado para oferecer soluções de ponta.'
              },
              {
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                title: 'Suporte 24/7',
                description: 'Equipe técnica disponível 24 horas para suporte e manutenção de emergência.'
              },
              {
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Custo-Benefício',
                description: 'Soluções personalizadas com o melhor custo-benefício do mercado angolano.'
              },
              {
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                title: 'Cobertura Nacional',
                description: 'Atendemos em 8 províncias de Angola com equipes técnicas especializadas.'
              },
              {
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                title: 'Experiência Local',
                description: 'Conhecimento profundo do mercado angolano e suas necessidades específicas.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#01a0e2]/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-[#01a0e2]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#01a0e2]/20 transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#01a0e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#01a0e2] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#01a0e2] via-[#0190d2] to-[#0180c2] text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-40 translate-y-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Solicite seu Orçamento
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Pronto para Modernizar 
              <span className="block">sua Empresa?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Entre em contacto connosco e descubra como nossas soluções podem 
              <span className="font-semibold"> transformar seu negócio</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="/contactos"
                className="group inline-flex items-center justify-center px-10 py-4 bg-white text-[#01a0e2] font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Solicitar Orçamento
              </motion.a>
              
              <motion.a
                href="tel:+244928990138"
                className="group inline-flex items-center justify-center px-10 py-4 border-2 border-white/50 text-white font-semibold rounded-2xl hover:bg-white hover:text-[#01a0e2] transition-all duration-300 backdrop-blur-sm hover:border-white transform hover:scale-105 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ligar Agora
              </motion.a>
            </div>

            {/* Additional info */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Orçamento Gratuito
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Resposta em 24h
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Suporte 24/7
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
