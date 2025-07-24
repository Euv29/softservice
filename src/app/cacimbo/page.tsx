'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function CacimboPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoLicenca: '',
    observacoes: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tiposLicenca = [
    { 
      value: 'basico', 
      label: 'Básico', 
      modulos: ['Vendas', 'Stock', 'Relatórios Básicos'],
      preco: 'Sob consulta'
    },
    { 
      value: 'profissional', 
      label: 'Profissional', 
      modulos: ['Vendas', 'Stock', 'Compras', 'Contabilidade', 'Relatórios Avançados'],
      preco: 'Sob consulta'
    },
    { 
      value: 'empresarial', 
      label: 'Empresarial', 
      modulos: ['Vendas', 'Stock', 'Compras', 'Contabilidade', 'RH', 'Loja Online', 'Relatórios Completos'],
      preco: 'Sob consulta'
    },
    { 
      value: 'premium', 
      label: 'Premium', 
      modulos: ['Todos os módulos', 'Multi-empresa', 'API Integração', 'Suporte Prioritário', 'Customizações'],
      preco: 'Sob consulta'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulação de envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50 text-gray-900 py-24 pt-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#e7003b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#e7003b] rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#e7003b]/20 rounded-full text-sm font-medium text-[#e7003b] mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/cacimbologo.png"
                  alt="CACIMBO Logo"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Sistema de Gestão Empresarial
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Software de gestão</span>
                <br />
                <span className="text-gray-900">que se adapta ao seu</span>
                <br />
                <span className="bg-gradient-to-r from-[#e7003b] to-red-600 bg-clip-text text-transparent">
                  negócio.
                </span>
              </h1>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                O CACIMBO ERP é uma solução de gestão integrada, tecnologicamente avançada e funcionalmente completa, projetada para atender às necessidades dos empreendedores mais exigentes.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="/contactos"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#e7003b] text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Solicitar licença
                </motion.a>
              </motion.div>
              
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/images/cacimbo-mobile.webp"
                  alt="CACIMBO Mobile App"
                  width={400}
                  height={600}
                  className="object-contain"
                  priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e7003b]/20 to-red-600/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <Image
                  src="/images/cacimbo-mobile-loja.webp"
                  alt="CACIMBO Loja Mobile"
                  width={400}
                  height={600}
                  className="object-contain"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e7003b]/20 to-red-600/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-[#e7003b]/10 text-[#e7003b] rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                CACIMBO ERP Product
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Crie a sua <span className="bg-gradient-to-r from-[#e7003b] to-red-600 bg-clip-text text-transparent">loja</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Desperte o seu potencial empreendedor e crie já a sua loja conosco para expor seus produtos aos seus clientes.
              </p>

              <motion.a
                href="/contactos"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#e7003b] text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Saiba mais
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HR Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-[#e7003b]/10 text-[#e7003b] rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Recursos Humanos
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Gestão de <span className="bg-gradient-to-r from-[#e7003b] to-red-600 bg-clip-text text-transparent">recursos humanos</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Potencialize sua gestão de recursos humanos: estratégia, talento e eficiência, com a agilidade da transformação digital.
              </p>

              <motion.a
                href="/contactos"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#e7003b] text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Saiba mais
              </motion.a>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <Image
                  src="/images/cacimbo-mobile-rh.svg"
                  alt="CACIMBO RH Mobile"
                  width={400}
                  height={600}
                  className="object-contain"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e7003b]/20 to-red-600/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#e7003b]/10 text-[#e7003b] rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Vantagens do CACIMBO ERP
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Benefícios para o seu <span className="bg-gradient-to-r from-[#e7003b] to-red-600 bg-clip-text text-transparent">negócio</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                title: 'Melhora o teu atendimento ao cliente',
                description: 'Com total controle sobre o seu stock, sempre saberá quais produtos estão disponíveis e quais estão em falta, permitindo-lhe que atenda às demandas dos clientes com precisão e rapidez.'
              },
              {
                icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
                title: 'Reduz perdas e evita desperdícios',
                description: 'Uma gestão de stock eficaz minimiza o excesso, evitando assim o desperdício de recursos e maximizando a eficiência.'
              },
              {
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                title: 'Inibe roubos',
                description: 'Ao acompanhar o seu inventário em tempo real, nosso aplicativo ajuda a identificar e prevenir possíveis furtos, garantindo a segurança dos seus produtos.'
              },
              {
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Melhora a utilização do capital de giro',
                description: 'Um stock bem gerenciado pode liberar capital de giro que pode ser reinvestido em outras áreas do seu negócio para impulsionar o crescimento e a rentabilidade.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#e7003b]/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#e7003b]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#e7003b]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#e7003b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#e7003b] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#e7003b]/10 text-[#e7003b] rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Testemunhos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nosso compromisso com a <span className="bg-gradient-to-r from-[#e7003b] to-red-600 bg-clip-text text-transparent">excelência</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Nosso compromisso com a excelência se reflete em cada projeto tendo os nossos clientes como prioridade. Buscamos constantemente proporcionar excelentes experiências e enfrentar os desafios que eles enfrentam.
            </p>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Não confie apenas nas nossas declarações
              </h3>
              <p className="text-lg text-gray-600">
                Confie nos nossos clientes espalhados por todos os cantos de Angola.
              </p>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 text-center border border-gray-200">
              <svg className="w-20 h-20 text-[#e7003b] mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Mapa CACIMBO ERP</h4>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Clientes satisfeitos em todas as províncias de Angola, desde Luanda até ao Cuando Cubango, 
                confiando no CACIMBO ERP para suas necessidades de gestão empresarial.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-24 bg-gradient-to-br from-[#e7003b] via-red-600 to-[#e7003b] text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-40 translate-y-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                Comece Hoje Mesmo
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transforme sua Gestão 
                <span className="block">com o CACIMBO ERP</span>
              </h2>
              
              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                Solicite uma demonstração gratuita e veja como o CACIMBO ERP pode 
                <span className="font-semibold"> revolucionar sua empresa</span>
              </p>

              {/* Features */}
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  'Demonstração Gratuita',
                  'Implementação Rápida',
                  'Suporte Completo',
                  'Treinamento Incluído'
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center text-sm opacity-90">
                    <svg className="w-4 h-4 mr-3 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Solicitar Licença</h3>
                    <p className="text-white/80 text-sm">Preencha o formulário e nossa equipe entrará em contacto</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="nome">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="telefone">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        placeholder="+244 xxx xxx xxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="empresa">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="tipoLicenca">
                      Tipo de Licença *
                    </label>
                    <select
                      id="tipoLicenca"
                      name="tipoLicenca"
                      value={formData.tipoLicenca}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="" className="text-gray-900">Selecione o tipo de licença</option>
                      {tiposLicenca.map(tipo => (
                        <option key={tipo.value} value={tipo.value} className="text-gray-900">
                          {tipo.label} - {tipo.modulos.join(', ')}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.tipoLicenca && (
                    <motion.div 
                      className="bg-white/10 rounded-xl p-4 border border-white/20"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-semibold mb-2">
                        {tiposLicenca.find(t => t.value === formData.tipoLicenca)?.label}
                      </h4>
                      <p className="text-sm text-white/80 mb-2">Módulos incluídos:</p>
                      <div className="flex flex-wrap gap-2">
                        {tiposLicenca.find(t => t.value === formData.tipoLicenca)?.modulos.map(modulo => (
                          <span key={modulo} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                            {modulo}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="observacoes">
                      Observações
                    </label>
                    <textarea
                      id="observacoes"
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Conte-nos mais sobre suas necessidades..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-[#e7003b] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#e7003b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Solicitar Licença
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Solicitação Enviada!</h3>
                  <p className="text-white/80 mb-6">
                    Obrigado pelo seu interesse no CACIMBO ERP. Nossa equipe entrará em contacto em breve.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        nome: '', email: '', telefone: '', empresa: '', tipoLicenca: '', observacoes: ''
                      });
                    }}
                    className="inline-flex items-center px-6 py-3 bg-white/20 border border-white/30 text-white font-medium rounded-xl hover:bg-white/30 transition-all duration-200"
                  >
                    Nova Solicitação
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
