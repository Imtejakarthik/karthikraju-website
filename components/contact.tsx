"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { Button } from "@/component/ui/button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const handleSubmit = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full min-h-[500px] rounded-3xl bg-gray-900/90 backdrop-blur-sm p-8 shadow-xl">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            <p className="text-gray-400">In order to discuss the project in more detail, please contact me by phone or through social networks. The productivity will have a personal meeting, if you are in Novosibirsk.</p>
          </div>

          <form className="space-y-6" action={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="senderName"
                  required
                  maxLength={100}
                  placeholder="Your Name"
                  className="w-full bg-gray-800/50 text-white placeholder-gray-400 px-6 py-4 rounded-2xl border border-gray-700/50 focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="senderEmail"
                  required
                  maxLength={500}
                  placeholder="Your Email"
                  className="w-full bg-gray-800/50 text-white placeholder-gray-400 px-6 py-4 rounded-2xl border border-gray-700/50 focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-gray-800/50 text-white placeholder-gray-400 px-6 py-4 rounded-2xl border border-gray-700/50 focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium py-4 rounded-2xl transition-all duration-300 text-lg"
              >
                Send Message
              </Button>
            </div>
          </form>

        </div>
      </div>
    </motion.section>
  );
}

