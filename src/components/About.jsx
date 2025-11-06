import { motion } from 'framer-motion';

export default function About() {
  const items = [
    {
      title: 'Education & Workshops',
      desc: 'I simplify complex AI topics into practical, project-based learning for creators and developers.'
    },
    {
      title: 'Content & Storytelling',
      desc: 'Cinematic tutorials and narrative-driven demos that make emerging tech engaging and accessible.'
    },
    {
      title: 'Engineering & Systems',
      desc: 'Full‑stack builds, LLM workflows, and automation pipelines for scalable, reliable products.'
    }
  ];

  return (
    <section id="about" className="relative w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          What I Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          I help people and teams leverage AI through education, content, and hands‑on engineering. From quickstart guides to production‑ready systems, we make ideas tangible.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:bg-white/[0.06]"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
