import { Calendar, Mail, Phone, Globe, Users, Brain, BarChart3, Palette, Cloud, Shield, Code, Target, Award, Zap, Linkedin } from 'lucide-react';

function App() {
  const schedule = [
    { day: 0, title: 'Ice Breaker & Orientation', icon: Users },
    { day: 1, title: 'The IT World – Then & Now', icon: Globe },
    { day: 2, title: 'Product & Management Roles', icon: Target },
    { day: 3, title: 'Design & Creativity in Tech', icon: Palette },
    { day: 4, title: 'Data & Analytics', icon: BarChart3 },
    { day: 5, title: 'Cloud, Networking & Support', icon: Cloud },
    // { day: 6, title: 'Cybersecurity & Testing', icon: null, image: '/Group 1171275671.png' },
    { day: 6, title: 'Cybersecurity & Testing', icon: Shield },
    { day: 7, title: 'Languages & Tools of the Trade', icon: Code },
    { day: 8, title: 'Modern Tech & Career Mapping', icon: Brain },
    { day: 9, title: 'Skill-Up & Personal Branding', icon: Zap },
    { day: 10, title: 'Mock Interviews & Feedback', icon: Award },
  ];

  const benefits = [
    { icon: Target, text: 'Explore 10+ IT domains — not just coding' },
    { icon: Brain, text: 'Learn how the industry actually works' },
    { icon: Zap, text: 'Build clarity & confidence for your next step' },
    { icon: Award, text: 'Get a Certificate of Participation from EAtek' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <div className="inline-block mb-6">
            <img src="/Logo.png" alt="EAtek Logo" className="w-52 h-auto mx-auto mb-4" />
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="inline-block bg-cyan-400/20 px-4 py-1 rounded-full mb-4">
              <span className="text-cyan-300 text-sm font-semibold">EATek Presents</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Exposure Bootcamp
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
              Discover IT Beyond Coding!
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A 10-day online journey into the real world of IT — explore every domain, from design to data to cybersecurity!
            </p>
          </div>
        </header>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 text-cyan-400" />
            10-Day Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {schedule.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.day}
                  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-xl p-5 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg p-3 shrink-0 flex items-center justify-center w-12 h-12">
                      {item.image ? (
                        <img src={item.image} alt="Day icon" className="w-6 h-6" />
                      ) : (
                        Icon && <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-cyan-300 font-bold mb-1">Day {item.day}</div>
                      <div className="text-white font-medium">{item.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-cyan-400" />
            Why Join?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full p-4 shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-cyan-400/50 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Calendar className="w-8 h-8 text-cyan-400" />
              Event Details
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/30">
                <Calendar className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-gray-300 text-sm mb-1">Dates</div>
                <div className="text-xl font-bold">Nov 10 – 21, 2025</div>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/30">
                <Globe className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <div className="text-gray-300 text-sm mb-1">Mode</div>
                <div className="text-xl font-bold">Online 7PM - 9PM</div>
              </div>
              <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/30">
                <Award className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-gray-300 text-sm mb-1">Fee</div>
                <div className="text-3xl font-bold text-cyan-300">₹499</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-pink-400/50 rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h3>
            <a
              href="https://forms.gle/tECszstGC7uuQ1F67"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 mb-8"
            >
              Register Now
            </a>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-sm text-gray-300">+91 88385 67933</div>
                  <div className="text-sm text-gray-300">+91 99524 10021</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400 shrink-0" />
                <div className="text-sm text-gray-300 break-all">
                  eatekofficial@gmail.com
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* <Globe className="w-6 h-6 text-pink-400 shrink-0" /> */}
                <Linkedin className="w-6 h-6 text-pink-400 shrink-0" />
                <a href="https://www.linkedin.com/company/eatek" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-300 hover:text-cyan-200 ">
                  EATek
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8">
            <p className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              "Let's discover what IT truly means — Beyond the Code, Beyond the Binary."
            </p>
            <div className="text-sm">Education • Art • Technology</div>
            <p className="text-sm text-purple-300 mt-2 italic">Beyond the Binary.</p>
          </div>
        </footer>
      </div>

      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}

export default App;
