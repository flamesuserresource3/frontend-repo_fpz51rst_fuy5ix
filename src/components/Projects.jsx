import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI-Powered Video Storyteller',
    tag: 'Generative Media',
    desc: 'A pipeline that transforms scripts into narrated, animated sequences with style‑transfer and voice cloning.',
    link: '#'
  },
  {
    title: 'LLM Classroom Toolkit',
    tag: 'Education',
    desc: 'A set of templates and agents for grading, curriculum planning, and interactive Q&A sessions.',
    link: '#'
  },
  {
    title: 'Realtime Multimodal Chat',
    tag: 'Full‑Stack',
    desc: 'Streaming chat application that blends text, vision, and audio using modern web sockets and GPU inference.',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-black to-zinc-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-white/70">A snapshot of builds that combine narrative, interaction, and applied machine learning.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 md:inline-flex">Work with me</a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{p.tag}</span>
                <svg className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
