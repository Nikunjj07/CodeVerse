import React, { useState, useEffect } from 'react';
import { Code, Play, Zap, Shield, Globe, ChevronRight, Github, Twitter, Users, Star, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompilerLanding: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing gradient orbs */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" 
           style={{ 
             left: '10%', 
             top: '20%',
             animation: 'drift 20s ease-in-out infinite',
           }} />
      <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" 
           style={{ 
             right: '10%', 
             top: '10%',
             animation: 'drift 25s ease-in-out infinite reverse',
           }} />
      <div className="absolute w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ 
             left: '60%', 
             bottom: '20%',
             animation: 'drift 18s ease-in-out infinite',
           }} />

      {/* Geometric flowing lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute opacity-10"
          style={{
            left: `${i * 15}%`,
            width: '2px',
            height: '100vh',
            background: 'linear-gradient(180deg, transparent, #8b5cf6, transparent)',
            animation: `wave ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Floating particles with varied sizes and speeds */}
      {[...Array(40)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.3 + 0.1;
        return (
          <div
            key={`particle-${i}`}
            className="absolute bg-purple-400 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: opacity,
              animation: `float ${8 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        );
      })}

      {/* Connected nodes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-2 h-2 bg-purple-500/40 rounded-full"
          style={{
            left: `${15 + (i % 4) * 20}%`,
            top: `${20 + Math.floor(i / 4) * 25}%`,
            animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Animated code symbols */}
      {['<', '>', '{', '}', '(', ')', '[]', '//', '/*'].map((symbol, i) => (
        <div
          key={`symbol-${i}`}
          className="absolute text-purple-300/20 font-mono text-lg select-none"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            animation: `codeFloat ${6 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          {symbol}
        </div>
      ))}

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -50px) scale(1.1); }
          50% { transform: translate(-20px, -100px) scale(0.9); }
          75% { transform: translate(-40px, -30px) scale(1.05); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(20px) scaleY(1.2); }
        }
        
        @keyframes float {
          0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }
        
        @keyframes codeFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 0.4; }
          50% { transform: translateY(-10px) rotate(-5deg); opacity: 0.6; }
          75% { transform: translateY(-30px) rotate(3deg); opacity: 0.3; }
        }
      `}</style>
    </div>
  );

  const CodeBlock = ({ className = '' }: { className?: string }) => (
    <div className={`bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 font-mono text-sm ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-purple-300">
        <span className="text-blue-400">function</span> <span className="text-yellow-300">compile</span>() {'{'}
        <div className="ml-4 text-gray-300">
          <div className="opacity-60">// Your code here</div>
          <div><span className="text-purple-400">return</span> <span className="text-green-400">"Ready to run!"</span>;</div>
        </div>
        {'}'}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden relative">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`
        }}
      />
      
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Code Verse
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={()=>{navigate('/signin')}} className="cursor-pointer text-gray-300 hover:text-white transition-colors">Sign In</button>
            <button onClick={()=>{navigate('/signup')}} className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Code Without
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Limits
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of online coding with our lightning-fast compiler. 
              Write, run, and share code instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2" onClick={() => navigate('/signin')}>
                <Play className="w-5 h-5" />
                Start Coding Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a className='flex justify-between items-center' href="https://github.com/Nikunjj07/CodeVerse" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 border border-purple-500/50 hover:border-purple-400 rounded-full font-semibold text-lg transition-all hover:bg-purple-500/10 flex items-center gap-2">
                  
                    <Github className="w-5 h-5" />
                    View on GitHub
                  
                </button>
              </a>
            </div>
          </div>

          {/* Interactive Code Demo */}
          <div className={`grid md:grid-cols-2 gap-8 items-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-purple-300">
                <Zap className="w-6 h-6" />
                <span className="text-lg font-semibold">Instant Execution</span>
              </div>
              
              <CodeBlock />
              
              <div className="flex gap-4">
                {['Python', 'JavaScript', 'C++', 'Java'].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-2xl"></div>
              <CodeBlock className="relative transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default CompilerLanding;