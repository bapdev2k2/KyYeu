'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface ThankYouPageProps {
  guestName: string;
}

export function ThankYouPage({ guestName }: ThankYouPageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Trigger confetti effect
    if (canvasRef.current) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    // Falling flowers animation
    const flowers = ['🌻', '🌸', '🌼', '🌺', '🌷'];
    for (let i = 0; i < 20; i++) {
      const flower = document.createElement('div');
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.position = 'fixed';
      flower.style.left = Math.random() * 100 + '%';
      flower.style.top = '-50px';
      flower.style.fontSize = Math.random() * 20 + 20 + 'px';
      flower.style.opacity = '1';
      flower.style.pointerEvents = 'none';
      flower.style.zIndex = '10';
      document.body.appendChild(flower);

      const animation = flower.animate(
        [
          { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 },
        ],
        {
          duration: 4000 + Math.random() * 2000,
          easing: 'ease-in',
        }
      );

      animation.onfinish = () => {
        flower.remove();
      };
    }
  }, []);

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center bg-[url('/background-texture.png')] bg-cover bg-center justify-center min-h-screen px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* <canvas ref={canvasRef} /> */}

      {/* Main Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center hidden md:block"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Image
            src="/hihi.png"
            alt="Cô gái học sinh"
            width={280}
            height={400}
            className="object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-2/3">
        {/* Emoji celebration */}
        <motion.div
          className="mb-8 text-6xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎉
        </motion.div>

        {/* Thank you text */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Thanh Huyền cảm ơn bạn
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {guestName}!
        </motion.p>

        {/* Message */}
        <motion.div
          className="space-y-4 text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p>
            Cảm ơn vì đã đồng hành cùng mình trong suốt những năm tháng thanh xuân.
          </p>
{/* Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center xs:block md:hidden"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Image
            src="/hihi.png"
            alt="Cô gái học sinh"
            width={280}
            height={400}
            className="object-contain drop-shadow-lg"
            priority
          />
        </motion.div>
          <p className="text-lg font-semibold text-purple-600">
            Hẹn gặp bạn trong buổi chụp kỷ yếu nhé! 🌻
          </p>

          <p className="text-sm text-gray-600">
            28/06/2026 - 9:00 AM tại Trường THPT Vĩnh Lộc
          </p>
        </motion.div>

        {/* Decorative flowers */}
        <motion.div
          className="flex justify-center space-x-4 text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2 }}>
            🌸
          </motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5 }}>
            🌻
          </motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2 }}>
            🌺
          </motion.span>
        </motion.div>
        </div>
      </motion.div>

      {/* Small note */}
      <motion.p
        className="absolute bottom-8 px-3 text-sm text-gray-600 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Những kỷ niệm đẹp bắt đầu từ những quyết định dũng cảm ✨
      </motion.p>
    </motion.div>
  );
}
