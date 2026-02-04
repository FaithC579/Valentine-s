'use client';

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, PartyPopper, Quote, Play } from "lucide-react";
import confetti from "canvas-confetti";

// Floating Hearts Background Component
const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 6,
    size: 12 + Math.random() * 24,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "-120vh",
            opacity: [0, heart.opacity, heart.opacity, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            size={heart.size}
            className="text-pink-500 fill-pink-500/30"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 rounded-full bg-rose-400/10 blur-[100px] animate-pulse" style={{ animationDelay: "-1.5s" }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="relative">
            <Heart 
              size={60}
              className="text-pink-500 fill-pink-500 animate-pulse md:w-20 md:h-20" 
              strokeWidth={1}
            />
            <Sparkles 
              size={18}
              className="absolute -top-2 -right-2 text-rose-400 animate-pulse md:w-6 md:h-6" 
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-rose-400 text-sm md:text-lg lg:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 md:mb-4 block">
            A Special Question
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6 px-4">
            <span className="bg-linear-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
              Will You Be
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">My Valentine?</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Every moment with you feels like a dream I never want to wake from. 
          Let me ask you something special...
        </motion.p>
      </div>
    </section>
  );
};

// Video Memory Section Component
const VideoMemorySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 md:w-175 md:h-175 rounded-full bg-rose-500/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-full md:max-w-2xl lg:max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl bg-linear-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-3 md:mb-4 font-bold px-4">
            A Special Memory
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg px-4">
            Captured moments of you being absolutely perfect
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Decorative frame corners */}
          <div className="absolute -top-2 -left-2 w-8 h-8 md:-top-4 md:-left-4 md:w-12 md:h-12 border-t-2 border-l-2 border-pink-500/50 rounded-tl-lg z-20" />
          <div className="absolute -top-2 -right-2 w-8 h-8 md:-top-4 md:-right-4 md:w-12 md:h-12 border-t-2 border-r-2 border-pink-500/50 rounded-tr-lg z-20" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 md:-bottom-4 md:-left-4 md:w-12 md:h-12 border-b-2 border-l-2 border-pink-500/50 rounded-bl-lg z-20" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 md:-bottom-4 md:-right-4 md:w-12 md:h-12 border-b-2 border-r-2 border-pink-500/50 rounded-br-lg z-20" />

          {/* Video wrapper with gradient border effect */}
          <div className="relative backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-gray-200/20 dark:border-gray-700/20 rounded-2xl md:rounded-3xl p-2 md:p-4 overflow-hidden">
            {/* Gradient border glow */}
            <div className="absolute inset-0 bg-linear-to-r from-pink-500/20 via-rose-500/20 to-red-500/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Video element */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gray-900">
              <video
                ref={videoRef}
                className="w-full h-auto object-contain"
                onClick={handlePlayClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                playsInline
              >
                <source src="/Video 1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer"
                    onClick={handlePlayClick}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-r from-pink-500 via-rose-500 to-red-500 flex items-center justify-center shadow-2xl shadow-pink-500/50"
                    >
                      <Play size={32} className="text-white fill-white ml-1 md:w-12 md:h-12 md:ml-2" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating hearts on video */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 30}%`,
                      bottom: "-20px",
                    }}
                    animate={{
                      y: [0, -300],
                      opacity: [0, 0.6, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  >
                    <Heart size={20} className="text-pink-500 fill-pink-500 md:w-6 md:h-6" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Caption below video */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 md:mt-6 text-center"
            >
              <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg italic flex items-center justify-center gap-2">
                <Heart size={16} className="text-pink-500 fill-pink-500 md:w-5 md:h-5" />
                <span>You make every moment magical</span>
                <Heart size={16} className="text-pink-500 fill-pink-500 md:w-5 md:h-5" />
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative sparkles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-8 right-8 md:top-16 md:right-16 z-20"
        >
          <Sparkles size={24} className="text-rose-400/50 md:w-8 md:h-8" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20"
        >
          <Sparkles size={20} className="text-pink-400/50 md:w-7 md:h-7" />
        </motion.div>
      </div>
    </section>
  );
};

// Love Message Section Component
const LoveMessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    "Your smile lights up my entire world",
    "Every day with you is an adventure",
    "You make me want to be a better person",
    "Your laugh is my favorite sound",
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-48 px-4 mt-16 md:mt-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 md:w-150 md:h-150 rounded-full bg-pink-500/5 blur-[150px]" />
      </div>

      {/* Polaroid Images - Decorative */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -12 }}
        animate={isInView ? { opacity: 1, x: 0, rotate: -8 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1 sm:left-2 md:left-8 -top-16 -md:top-18 z-20"
      >
        <div className="bg-white p-1.5 sm:p-2 md:p-3 shadow-2xl rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300 w-30 md:w-48">
          <img 
            src="/Memory 1.jpeg"
            alt="Memory 1"
            className="w-full h-auto object-cover"
          />
          <div className="text-center mt-0.5 sm:mt-1 md:mt-2 text-gray-700 text-[8px] sm:text-xs md:text-sm italic">
            Beautiful you 💕
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 12 }}
        animate={isInView ? { opacity: 1, x: 0, rotate: 6 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-1 sm:right-2 md:right-8 -bottom-30 -md:bottom-18 z-20"
      >
        <div className="bg-white p-1.5 sm:p-2 md:p-3 shadow-2xl rotate-6 hover:rotate-2 transition-transform duration-300 w-30 md:w-48">
          <img 
            src="/Memory 2.jpeg"
            alt="Memory 2"
            className="w-full h-auto object-cover"
          />
          <div className="text-center mt-0.5 sm:mt-1 md:mt-2 text-gray-700 text-[8px] sm:text-xs md:text-sm italic">
            My sunshine ☀️
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-gray-200/20 dark:border-gray-700/20 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-16 text-center"
        >
          <Quote size={36} className="text-rose-400/50 mx-auto mb-4 md:mb-6 md:w-12 md:h-12" />
          <blockquote className="text-xl sm:text-2xl md:text-4xl text-gray-900 dark:text-white leading-relaxed mb-4 md:mb-6">
            "You make me so happy I can’t really explain it most 
            of the time, and I love you so much for it."  
          </blockquote>
          <cite className="text-gray-600 dark:text-gray-300 text-base md:text-lg">— Egbugwo Daniel</cite>
        </motion.div>

        {/* Reasons section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-3 md:mb-4 font-bold px-4">
            Why I Love You
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg px-4">
            Just a few of the million reasons...
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-gray-200/20 dark:border-gray-700/20 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 group hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart size={18} className="text-pink-500 fill-pink-500/50 md:w-5 md:h-5" />
              </div>
              <p className="text-base md:text-lg text-gray-900 dark:text-white">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Valentine Question Section Component
const ValentineQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleYesClick = () => {
    setAnswered(true);
    
    // Fire confetti!
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ["#c44569", "#e17055", "#d4a373", "#ffd6e0", "#fff"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Heart burst from center
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
      shapes: ["circle"],
    });
  };

  const handleNoHover = () => {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 100;
    setNoButtonPosition({ x, y });
  };

  return (
    <section ref={ref} className="relative py-16 md:py-32 px-4 min-h-screen flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 md:w-200 md:h-200 rounded-full bg-pink-500/5 blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-gray-200/20 dark:border-gray-700/20 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6 md:mb-8"
              >
                <Heart 
                  size={48}
                  className="text-pink-500 fill-pink-500 md:w-16 md:h-16" 
                  strokeWidth={1}
                />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 dark:text-white mb-3 md:mb-4 font-bold px-2">
                So, what do you say?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 px-2">
                Lota will you be my Valentine?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative min-h-25 sm:min-h-20">
                {/* Yes Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="relative group px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-linear-to-r from-pink-500 via-rose-500 to-red-500 text-white font-bold text-lg sm:text-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Yes! <Heart size={18} className="fill-current sm:w-5 sm:h-5" />
                  </span>
                  <Sparkles 
                    size={18}
                    className="absolute -top-2 -right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity sm:w-5 sm:h-5" 
                  />
                </motion.button>

                {/* No Button - runs away! */}
                <motion.button
                  animate={noButtonPosition}
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-8 sm:px-12 py-3 sm:py-4 rounded-full border border-gray-400/30 text-gray-600 dark:text-gray-300 font-bold text-lg sm:text-xl hover:border-pink-500/50 transition-colors w-full sm:w-auto"
                >
                  No...
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-gray-200/20 dark:border-gray-700/20 rounded-2xl md:rounded-3xl p-6 md:p-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 360] }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-6 md:mb-8"
              >
                <PartyPopper size={60} className="text-rose-400 md:w-20 md:h-20" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-6xl bg-linear-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-bold mb-4 md:mb-6"
              >
                YES!!!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-6 md:mb-8 px-4"
              >
                You've made me the happiest person in the world! 💕
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4"
              >
                I can't wait to spend Valentine's Day with you!
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="mt-8 md:mt-12 flex justify-center gap-2 md:gap-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                  >
                    <Heart 
                      size={24}
                      className="text-pink-500 fill-pink-500 md:w-8 md:h-8" 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="relative py-12 md:py-16 px-4 text-center">
      <div className="flex items-center justify-center gap-2 md:gap-3 text-gray-600 dark:text-gray-300">
        <span className="text-base md:text-lg">Made with</span>
        <Heart size={18} className="text-pink-500 fill-pink-500 animate-pulse md:w-5 md:h-5" />
        <span className="text-base md:text-lg">just for you</span>
      </div>
      <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
        Valentine's Day 2026
      </p>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-serif relative overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <VideoMemorySection />
      <LoveMessageSection />
      <ValentineQuestion />
      <Footer />
    </div>
  );
}