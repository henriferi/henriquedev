import React, { useState, useEffect } from 'react';
import { Code2, Globe, ShoppingCart, MessageCircle, Mail, Github as GitHub, Linkedin, ChevronDown, CheckCircle, ArrowRight, Zap, Trophy, Users, Star } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const whatsappMessage = "Olá! Vim através do seu site e gostaria de conversar sobre um projeto. Você pode me ajudar?";
  const whatsappUrl = `https://wa.me/5581986223012?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Aplicações Web",
      description: "Sistemas online personalizados para automatizar e organizar seu negócio",
      features: ["Sistema de Vendas", "Controle de Estoque", "Gestão de Clientes", "Relatórios Automáticos"]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Landing Pages",
      description: "Páginas de alta conversão otimizadas para vendas e captação de leads",
      features: ["Design Responsivo", "SEO Otimizado", "Alta Performance", "Integração com CRM"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Lojas virtuais completas com sistema de pagamento e gestão de produtos",
      features: ["Pagamentos Online", "Gestão de Estoque", "Painel Admin", "Relatórios"]
    }
  ];

  const projects = [
    {
      title: "Landing Page Profissional",
      description: "Precisa de uma página que converta visitantes em clientes? Uma landing page bem feita pode triplicar suas vendas online",
      benefits: ["Mais Vendas", "Captação de Leads", "Credibilidade"],
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Dashboard Inteligente",
      description: "Quer visualizar seus dados de forma clara? Um dashboard personalizado transforma números confusos em insights valiosos",
      benefits: ["Controle Total", "Relatórios Visuais", "Decisões Rápidas"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "E-commerce Completo",
      description: "Quer vender online 24 horas por dia? Uma loja virtual bem estruturada pode multiplicar seu faturamento",
      benefits: ["Vendas 24h", "Gestão Automática", "Crescimento"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Automação de Processos",
      description: "Cansado de tarefas repetitivas? Automatize processos e economize horas preciosas do seu tempo",
      benefits: ["Economia de Tempo", "Menos Erros", "Produtividade"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Site Empresarial",
      description: "Precisa de presença digital profissional? Um site bem feito transmite credibilidade e atrai mais clientes",
      benefits: ["Credibilidade", "Mais Contatos", "Profissionalismo"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Sistema de Agendamento",
      description: "Agenda desorganizada? Um sistema de agendamento online facilita a vida dos seus clientes e organiza seu negócio",
      benefits: ["Organização", "Menos Faltas", "Satisfação"],
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    }
  ];

  const stats = [
    { number: "50+", label: "Projetos Entregues" },
    { number: "30+", label: "Clientes Satisfeitos" },
    { number: "3", label: "Anos de Experiência" },
    { number: "100%", label: "Satisfação" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-md border-b border-green-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              hFernandes.dev
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-green-400 transition-colors">Início</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-green-400 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-green-400 transition-colors">Projetos</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors">Contato</button>
            </div>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-green-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className={`relative z-10 text-center px-6 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Modern Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Code2 className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
            Fernandes Dev
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Desenvolvimento Full Stack especializado em <span className="text-green-400">aplicações web</span>, 
            <span className="text-green-400"> landing pages</span> e <span className="text-green-400">e-commerce</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Vamos Conversar
            </a>
            <a 
              onClick={() => scrollToSection('projects')}
              className="border-2 border-green-500 hover:bg-green-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Entrega Garantida</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="w-5 h-5 text-green-400" />
              <span>Desenvolvimento Rápido</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Sobre Mim
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais que realmente fazem a diferença 
                no negócio dos meus clientes. Com mais de 3 anos de experiência, já desenvolvi dezenas de projetos 
                que geraram resultados concretos.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Especialista em tecnologias modernas, meu foco é sempre 
                entregar código limpo, performático e que resolva problemas reais.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-green-400" />
                  <span>Qualidade Premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-400" />
                  <span>Suporte Contínuo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-green-400" />
                  <span>Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-green-400" />
                  <span>Satisfação 100%</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale Comigo
                </a>
                <a 
                  href="mailto:henriquefernandes.gouveia@gmail.com"
                  className="border border-green-500 hover:bg-green-500 px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-500/20 to-green-800/20 rounded-2xl p-8 backdrop-blur-sm border border-green-500/30">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-black/40 rounded-lg p-4 flex flex-col justify-center items-center hover:bg-black/60 transition-all">
                    <Code2 className="w-12 h-12 text-green-400 mb-2" />
                    <span className="text-sm text-center">Clean Code</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 flex flex-col justify-center items-center hover:bg-black/60 transition-all">
                    <Globe className="w-12 h-12 text-green-400 mb-2" />
                    <span className="text-sm text-center">Responsivo</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 flex flex-col justify-center items-center hover:bg-black/60 transition-all">
                    <Zap className="w-12 h-12 text-green-400 mb-2" />
                    <span className="text-sm text-center">Performance</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 flex flex-col justify-center items-center hover:bg-black/60 transition-all">
                    <CheckCircle className="w-12 h-12 text-green-400 mb-2" />
                    <span className="text-sm text-center">Qualidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-green-900/5 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Meus Serviços
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ofereço soluções completas para transformar suas ideias em realidade digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-green-900/20 to-black/50 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group-hover:gap-3 duration-300"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Exemplos de Soluções
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Soluções reais que podem te ajudar!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-green-900/20 to-black/50 rounded-2xl border border-green-500/30 overflow-hidden hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.benefits.map((benefit, idx) => (
                      <span key={idx} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    Quero uma solução assim
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-green-900/5 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Tenho uma ideia? Precisa de um site? Quer turbinar seu negócio online? 
            Vamos conversar e transformar sua visão em realidade!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4">Resposta rápida e atendimento personalizado</p>
              <span className="text-sm opacity-90">+55 (81) 98622-3012</span>
            </a>
            
            <a 
              href="mailto:henriquefernandes.gouveia@gmail.com"
              className="bg-gradient-to-br from-green-900/40 to-black/60 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-gray-300 mb-4">Para propostas mais detalhadas</p>
              <span className="text-sm text-green-400">henriquefernandes.gouveia@gmail.com</span>
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-8 rounded-2xl border border-green-500/30">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-gray-300 mb-6">
              Entre em contato agora mesmo e receba um orçamento personalizado para seu projeto!
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/30 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Henrique.dev
          </div>
          <p className="text-gray-400 mb-4">
            Desenvolvedor Full Stack • Soluções Web Personalizadas
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="mailto:henriquefernandes.gouveia@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Henrique Fernandes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;