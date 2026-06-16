'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


interface GreetingPageProps {
  onContinue: () => void;
}

export function GreetingPage({ onContinue }: GreetingPageProps) {
  const [isButtonShaking, setIsButtonShaking] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonShaking(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
        setIsMusicPlaying(true);
      }
    } catch (error) {
      console.error('Không thể phát nhạc:', error);
    }

    onContinue();
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        await audioRef.current.play();
        setIsMusicPlaying(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 bg-[url('/background-texture.png')] bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Audio */}
      <audio
        ref={audioRef}
        src="/ttx.mp3"
        loop
        preload="auto"
      />

      {/* Envelope Icon */}
      <motion.div
        className="mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-6xl">📩</div>
      </motion.div>

      {/* Main Text */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Xin chào 👋
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
          Mình có một điều muốn gửi đến bạn...
        </p>
      </motion.div>

      {/* Button */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <motion.button
          onClick={handleOpenInvitation}
          className={`px-8 py-4 cursor-pointer bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
            isButtonShaking ? 'animate-pulse-scale' : ''
          }`}
          animate={isButtonShaking ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.6, repeat: Infinity }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Mở thư mời
        </motion.button>
      </div>

      {/* Music Toggle */}
      {/* <motion.button
        onClick={toggleMusic}
        className="absolute bottom-8 left-8 p-3 rounded-full bg-white/80 shadow-md hover:shadow-lg transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMusicPlaying ? '🔊' : '🔇'}
      </motion.button> */}
    </motion.div>
  );
}