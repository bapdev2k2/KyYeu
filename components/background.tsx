'use client';

import { useEffect, useState } from 'react';

export function Background() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50" />

      {/* Blurred school image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.3), transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 212, 229, 0.3), transparent 50%)',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-40 animate-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
          }}
        />
      ))}
    </div>
  );
}
