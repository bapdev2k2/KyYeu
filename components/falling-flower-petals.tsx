'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export function FallingFlowerPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate initial petals
    const initialPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
    }));
    setPetals(initialPetals);

    // Continuously generate new petals
    const interval = setInterval(() => {
      setPetals((prev) => {
        const newPetal = {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 6 + Math.random() * 4,
        };
        // Keep only last 30 petals to avoid memory issues
        return [...prev.slice(-29), newPetal];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-6 h-6"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: 'linear',
          }}
        >
          {/* Flower petal shape - using rotation of leaf shape */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Flame/Petal shape */}
            <path
              d="M12 2C12 2 8 8 8 14C8 18.4183 9.79086 20 12 20C14.2091 20 16 18.4183 16 14C16 8 12 2 12 2Z"
              fill="#FF69B4"
              opacity="0.8"
            />
            <path
              d="M12 4C12 4 9 8 9 13C9 16.3137 10.3431 18 12 18C13.6569 18 15 16.3137 15 13C15 8 12 4 12 4Z"
              fill="#FF1493"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
