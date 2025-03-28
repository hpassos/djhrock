import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, CloudCog as SoundCloud, Mail, Calendar, Play, Pause } from 'lucide-react';
import { NavLink } from './components/NavLink';
import { SocialLink } from './components/SocialLink';
import { EventCard } from './components/EventCard';
import { MixCard } from './components/MixCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                DJ H-ROCK
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#mixes">Mixagens</NavLink>
                <NavLink href="#events">Eventos</NavLink>
                <NavLink href="#about">Sobre</NavLink>
                <NavLink href="#contact">Contato</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#home" mobile>Home</NavLink>
              <NavLink href="#mixes" mobile>Mixagens</NavLink>
              <NavLink href="#events" mobile>Eventos</NavLink>
              <NavLink href="#about" mobile>Sobre</NavLink>
              <NavLink href="#contact" mobile>Contato</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
          <img
            src="https://images.unsplash.com/photo-1571266028243-3716f02d4b48?auto=format&fit=crop&q=80"
            alt="DJ Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            DJ NOME
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Versatilidade e energia em cada batida - Do techno ao hip-hop, 
            criando momentos únicos na pista
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            Contrate Agora
          </a>
        </div>
      </section>

      {/* Mixes Section */}
      <section id="mixes" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Últimas Mixagens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MixCard
              title="Tech House Summer Set"
              genre="Tech House"
              duration="1:20:00"
              image="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80"
            />
            <MixCard
              title="Hip-Hop Classics"
              genre="Hip-Hop"
              duration="45:00"
              image="https://images.unsplash.com/photo-1557787163-1635e2efb160?auto=format&fit=crop&q=80"
            />
            <MixCard
              title="Melodic Techno Journey"
              genre="Melodic Techno"
              duration="2:00:00"
              image="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Próximos Eventos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EventCard
              date="2024-04-15"
              title="Noite de Tech House"
              venue="Club XYZ"
              city="São Paulo"
              image="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80"
            />
            <EventCard
              date="2024-04-22"
              title="Festival de Verão"
              venue="Praia Grande"
              city="Santos"
              image="https://images.unsplash.com/photo-1557787163-1635e2efb160?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80"
                alt="DJ Profile"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-gray-300 mb-6">
                Com mais de uma década de experiência, minha jornada como DJ começou nas festas underground
                de São Paulo. Hoje, minha versatilidade me permite transitar entre diferentes gêneros,
                do tech-house ao hip-hop, sempre mantendo a pista em movimento.
              </p>
              <p className="text-gray-300">
                Influenciado por grandes nomes da cena eletrônica e do hip-hop, desenvolvi um estilo único
                que combina batidas envolventes com transições suaves, criando uma experiência musical
                memorável para qualquer ocasião.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                <SocialLink
                  href="https://instagram.com"
                  icon={<Instagram size={24} />}
                  label="Instagram"
                />
                <SocialLink
                  href="https://facebook.com"
                  icon={<Facebook size={24} />}
                  label="Facebook"
                />
                <SocialLink
                  href="https://soundcloud.com"
                  icon={<SoundCloud size={24} />}
                  label="SoundCloud"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 DJ H-ROCK. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
