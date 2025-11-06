import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks for reaching out! I will get back to you soon.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Let’s Connect
        </motion.h2>
        <p className="mt-2 max-w-2xl text-white/70">Opportunities, collaborations, speaking, or consulting — drop a note and I’ll reply shortly.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="mb-2 block text-sm text-white/70">Name</label>
            <input required className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input type="email" required className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-white/70">Message</label>
            <textarea required rows="5" className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30" placeholder="Tell me about your project or idea..." />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:shadow-lg hover:shadow-white/20">Send message</button>
            {status && <span className="ml-4 text-sm text-white/70">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
