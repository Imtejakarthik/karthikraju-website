"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionHeading>Unveiling the Code Alchemist</SectionHeading>
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/40 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 blur-3xl -z-10"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light text-justify text-gray-800 dark:text-gray-200 max-w-none">
            🧙‍♂️ Greetings, fellow digital adventurers! I'm not your average code wrangler – I'm a 3rd-year B.E./B.Tech student on a quest to unravel the mysteries of <span className="font-medium text-blue-600 dark:text-blue-400">Artificial Intelligence and Machine Learning</span>. Think of me as a modern-day tech alchemist, turning lines of code into digital gold! 🌟 🎭 By day, I'm a <span className="font-medium text-emerald-600 dark:text-emerald-400">full-stack sorcerer</span>, conjuring web wonders with React, Next.js, Node.js, and MongoDB. By night, I'm a TypeScript troubadour and a Prisma poet, composing symphonies of seamless software. 🧠 My mind is an ever-expanding universe of tech knowledge, always hungry for the next big breakthrough. I don't just solve problems – I befriend them, take them out for coffee, and then elegantly show them the exit. 🚀 When I'm not pushing pixels or training neural networks, you'll find me at <span className="font-medium text-purple-600 dark:text-purple-400">tech meetups and hackathons</span>, where I transform caffeine into code and dreams into demos. 🎸 Off the digital grid, I'm a time-traveling philosopher, strumming my guitar to the tunes of ancient wisdom and futuristic melodies. I volley ideas on the badminton court, each serve a metaphor for problem-solving in tech. 🎮 In the realm of pixels and polygons, I'm a strategic mastermind, applying game theory to both my code and my gaming. Every movie I watch is a lesson in storytelling, every cultural event a masterclass in user experience. 🌈 So, whether you're looking for a coding companion, a tech visionary, or just someone to debate the philosophical implications of AI over a game of badminton, I'm your human! Let's connect and create some digital magic together!
          </p>
        </div>
      </div>
    </motion.section>
  );
}

