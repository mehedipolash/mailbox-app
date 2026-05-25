'use client';
import Lottie from 'lottie-react';
// Import the JSON file directly using a relative path
import supportAnimation from '../public/assets/lottie/Support.json';

export default function LottieHero() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto">
      <Lottie animationData={supportAnimation} loop={true} autoplay={true} />
    </div>
  );
}