import { motion } from "framer-motion";
import { Code2, Palette, Sparkles } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Proficient in MERN stack with expertise in building scalable web applications from concept to deployment.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Strong emphasis on creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "Passionate about learning new technologies and implementing creative solutions to complex problems.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Hey there! I'm <span className="text-primary font-semibold">Sarthak Singh</span>, 
              a passionate MERN Stack Developer who believes that great code is an art form. 
              My journey into the world of web development started with a simple curiosity about 
              how websites work, and it has evolved into a deep love for creating digital experiences 
              that are both functional and beautiful.
            </p>
            <p>
              I specialize in building full-stack applications using MongoDB, Express.js, React, 
              and Node.js. But beyond the technical stack, what drives me is the intersection of 
              logic and creativity. I'm constantly exploring new technologies, design patterns, and 
              best practices to deliver solutions that not only meet requirements but exceed expectations.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
              open-source projects, or brainstorming innovative ideas for the next big thing. 
              I believe in continuous growth, collaboration, and building products that make a difference.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="mb-4 inline-block p-3 rounded-xl bg-primary/10 text-primary group-hover:shadow-glow-primary transition-all duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
