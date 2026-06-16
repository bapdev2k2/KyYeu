'use client';

import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background } from '@/components/background';
import { FallingFlowerPetals } from '@/components/falling-flower-petals';
import { GreetingPage } from '@/components/greeting-page';
import { InvitationLetter } from '@/components/invitation-letter';
import { GuestForm } from '@/components/guest-form';
import { ThankYouPage } from '@/components/thank-you-page';

type PageState = 'greeting' | 'letter' | 'form' | 'thankyou';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>('greeting');
  const [guestName, setGuestName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (data: { name: string; class: string; message: string }) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setGuestName(data.name);
    setIsSubmitting(false);
    setCurrentPage('thankyou');
  };
const audioRef = useRef<HTMLAudioElement>(null);
const [isMusicPlaying, setIsMusicPlaying] = useState(false);

const startMusic = async () => {
  if (!audioRef.current) return;

  try {
    await audioRef.current.play();
    setIsMusicPlaying(true);
  } catch (err) {
    console.error(err);
  }
};

const toggleMusic = async () => {
  if (!audioRef.current) return;

  if (isMusicPlaying) {
    audioRef.current.pause();
    setIsMusicPlaying(false);
  } else {
    await audioRef.current.play();
    setIsMusicPlaying(true);
  }
};
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/background-texture.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <audio
  ref={audioRef}
  src="/ttx.mp3"
  loop
  preload="auto"
/>
      <Background />
      <FallingFlowerPetals />

      {currentPage === 'greeting' && (
        <GreetingPage
  onContinue={async () => {
    await startMusic();
    setCurrentPage('letter');
  }}
/>
      )}

      <AnimatePresence>
        {currentPage === 'letter' && (
          <InvitationLetter key="letter" onContinue={() => setCurrentPage('form')} />
        )}

        {currentPage === 'form' && (
          <GuestForm
            key="form"
            onSubmit={handleFormSubmit}
            isLoading={isSubmitting}
          />
        )}

        {currentPage === 'thankyou' && (
          <ThankYouPage key="thankyou" guestName={guestName} />
        )}
      </AnimatePresence>
      <button
  onClick={toggleMusic}
  className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-white/80 shadow-lg hover:shadow-xl transition-all"
>
  {isMusicPlaying ? '🔊' : '🔇'}
</button>
    </div>
  );
}
