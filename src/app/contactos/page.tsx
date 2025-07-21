'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servico: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui você pode adicionar a lógica real de envio
    console.log('Form data:', formData);
    
    setIsSubmitting(false);
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      servico: '',
      mensagem: ''
    });
    
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
  };

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
            className="text-center max-w-4xl mx-auto"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Fale Connosco
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Entre em 
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#01a0e2] to-[#0190d2] bg-clip-text text-transparent">
                Contacto
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pronto para transformar seu negócio? 
              <span className="text-[#01a0e2] font-semibold"> Nossa equipe está aqui</span> para 
              ajudar com as melhores soluções tecnológicas
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center px-3 py-1 bg-[#01a0e2]/10 text-[#01a0e2] rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Formulário de Contacto
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Envie sua <span className="text-[#01a0e2]">Mensagem</span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Preencha o formulário abaixo e nossa equipe entrará em contacto em até 24 horas
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nome */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <label htmlFor="nome" className="block text-sm font-semibold text-gray-900 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] transition-colors duration-200"
                        placeholder="Seu nome completo"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] transition-colors duration-200"
                        placeholder="seu@email.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Telefone */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label htmlFor="telefone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] transition-colors duration-200"
                        placeholder="+244 xxx xxx xxx"
                      />
                    </motion.div>

                    {/* Empresa */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label htmlFor="empresa" className="block text-sm font-semibold text-gray-900 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] transition-colors duration-200"
                        placeholder="Nome da sua empresa"
                      />
                    </motion.div>
                  </div>

                  {/* Serviço */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="servico" className="block text-sm font-semibold text-gray-900 mb-2">
                      Serviço de Interesse *
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] transition-colors duration-200"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="videovigilancia">Sistema de Videovigilância</option>
                      <option value="biometria">Controlo Biométrico de Acessos</option>
                      <option value="website">Desenvolvimento de Website</option>
                      <option value="cacimbo">Sistema CACIMBO</option>
                      <option value="consultoria">Consultoria Tecnológica</option>
                      <option value="manutencao">Manutenção e Suporte</option>
                      <option value="outro">Outro Serviço</option>
                    </select>
                  </motion.div>

                  {/* Mensagem */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-900 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#01a0e2] focus:border-[#01a0e2] transition-colors duration-200 resize-vertical"
                      placeholder="Descreva detalhadamente suas necessidades e como podemos ajudar..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#01a0e2] to-[#0190d2] text-white font-semibold py-4 px-8 rounded-xl hover:from-[#0190d2] hover:to-[#0180c2] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Enviar Mensagem
                      </div>
                    )}
                  </motion.button>

                  {/* Form Footer */}
                  <motion.p
                    className="text-sm text-gray-500 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Responderemos em até <span className="font-semibold text-[#01a0e2]">24 horas</span>. 
                    Seus dados estão seguros conosco.
                  </motion.p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#01a0e2] via-[#0190d2] to-[#0180c2] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Contacto Direto</h3>
                  <div className="space-y-6">
                    {/* Phone */}
                    <motion.a
                      href="tel:+244928990138"
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">+244 928 990 138</p>
                        <p className="text-sm opacity-90">Ligue agora</p>
                      </div>
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                      href="https://wa.me/244928990138"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-sm opacity-90">Chat direto</p>
                      </div>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                      href="mailto:geral@softservice-ao.com"
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">geral@softservice-ao.com</p>
                        <p className="text-sm opacity-90">Envie um email</p>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações do Escritório</h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#01a0e2] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p className="text-gray-600">
                        Rua Góis Pinto<br />
                        Cuíto, Província do Bié<br />
                        Angola
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#01a0e2] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Segunda - Sexta: 08:00 - 17:00</p>
                        <p>Sábado: 08:00 - 12:00</p>
                        <p>Domingo: Fechado</p>
                        <p className="text-[#01a0e2] font-medium">Suporte 24/7 disponível</p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#01a0e2] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tempo de Resposta</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Email: Até 24 horas</p>
                        <p>Telefone: Imediato</p>
                        <p>WhatsApp: Até 2 horas</p>
                        <p>Emergências: Imediato</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Atendimento</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Luanda', 'Benguela', 'Lubango', 'Huambo', 'Cuíto', 'Moxico', 'Cuanza Sul', 'Cuando Cubango'].map((city, index) => (
                    <motion.div
                      key={city}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#01a0e2] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{city}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#01a0e2]/10 text-[#01a0e2] rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Localização
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Visite nosso <span className="bg-gradient-to-r from-[#01a0e2] to-[#0190d2] bg-clip-text text-transparent">Escritório</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa sede está localizada no coração do Bié, em Cuíto. Venha nos visitar!
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[500px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.8!2d16.9413611!3d-12.3897222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIzJzIzLjAiUyAxNsKwNTYnMjguOSJF!5e0!3m2!1spt!2sao!4v1640000000000!5m2!1spt!2sao"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização SoftService Angola"
                className="filter saturate-100 contrast-110"
              />
            </div>
            
            {/* Map Overlay */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-sm">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-[#01a0e2] rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-bold text-gray-900">SoftService Angola</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Rua Góis Pinto, Cuíto<br />
                Província do Bié, Angola
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-12.389722,16.941361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#01a0e2] text-white text-sm font-semibold rounded-xl hover:bg-[#0190d2] transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Como Chegar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#01a0e2]/10 text-[#01a0e2] rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Perguntas <span className="bg-gradient-to-r from-[#01a0e2] to-[#0190d2] bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Qual é o tempo de resposta para suporte técnico?",
                answer: "Oferecemos suporte 24/7 para emergências. Para questões gerais, o tempo de resposta é de até 2 horas durante o horário comercial e até 24 horas fora do horário comercial."
              },
              {
                question: "Vocês atendem em todas as províncias de Angola?",
                answer: "Atualmente atendemos em 8 províncias principais: Luanda, Benguela, Lubango, Huambo, Cuíto, Moxico, Cuanza Sul e Cuando Cubango. Estamos em constante expansão para outras regiões."
              },
              {
                question: "Como funciona o processo de orçamento?",
                answer: "O orçamento é gratuito e personalizado. Após o contacto inicial, nossa equipe agenda uma visita técnica para avaliar suas necessidades e apresentar a melhor solução."
              },
              {
                question: "Que tipo de garantia vocês oferecem?",
                answer: "Oferecemos garantia de 12 meses para equipamentos e 6 meses para serviços de instalação. Também disponibilizamos contratos de manutenção preventiva."
              },
              {
                question: "Posso personalizar os sistemas de acordo com minha empresa?",
                answer: "Sim! Todos os nossos sistemas são personalizáveis. Desenvolvemos soluções sob medida para atender às necessidades específicas de cada cliente."
              },
              {
                question: "Qual é o prazo médio para implementação de um projeto?",
                answer: "O prazo varia conforme a complexidade do projeto. Sistemas simples podem ser implementados em 1-2 semanas, enquanto projetos mais complexos podem levar de 1-3 meses."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
