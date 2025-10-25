import { motion } from "framer-motion";
import { Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  certificate?: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Web Development Intern",
    company: " Labmentix Edtech Pvt. Ltd.",
    location: "Remote",
    duration: "Jun 2025 - Present",
    description: "Building scalable web applications using MERN stack",
    achievements: [
      "Developed 3+ production-ready applications",
      "Improved application performance by 40%",
    ],
    certificate: new URL("@/assets/certificates/labmentix.png", import.meta.url)
      .href,
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "REST APIs",
      "Authentication",
      "UI/UX",
      "payment gateway integration",
    ],
  },
  {
    title: "Competition ",
    company: "Smart India Hackathon 2025",
    location: "India",
    duration: "Sept 2025",
    description: "Certification in College-level hackathon",
    achievements: [
      "Built innovative solution in 48 hours",
      "Led team of 4 developers",
      "Presented to panel of industry experts",
    ],
    certificate: "/certificates/cert2.jpg",
    skills: ["React vite", "Firebase", "UI/UX"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Plasmid.co.in",
    location: "remote",
    duration: "Jul 2025 - Sept 2025",
    description:
      "Developed and deployed features for MERN stack applications in a fast-paced, project-driven environment",
    achievements: [
      "MERN Stack enthusiast with basic project experience",
      "developed a full-stack web application for managing tasks and projects",
      "Presented to panel of industry experts",
    ],
    certificate: new URL("@/assets/certificates/plasmid.png", import.meta.url)
      .href,
    skills: [
      "React",
      "Node.js",
      "UI/UX",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "PrepCode - code for everyone",
    location: "onsite",
    duration: "Jul 2025 - Oct 2025",
    description:
      "As a Web Development Intern, I build and debug full-stack web applications using the MERN stack. I collaborate with a team on real-world projects to enhance my development skills.",
    achievements: [
      "MERN Stack enthusiast with basic project experience",
      "developed a full-stack web application for managing tasks and projects",
      "Presented to panel of industry experts",
    ],
    certificate: new URL("@/assets/certificates/prepcode.png", import.meta.url)
      .href,
    skills: [
      "React",
      "Node.js",
      "UI/UX",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and certifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-[1fr_auto] gap-6">
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col gap-2 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-primary" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {exp.certificate && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer"
                          >
                            <div className="relative w-40 h-52 rounded-lg overflow-hidden border-2 border-primary/30 shadow-glow-primary group-hover:shadow-glow-primary transition-all">
                              <img
                                src={exp.certificate}
                                alt={`${exp.title} certificate`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center p-2">
                                <span className="text-xs text-primary font-semibold">
                                  View Certificate
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm border-primary/20">
                          <img
                            src={exp.certificate}
                            alt={`${exp.title} certificate`}
                            className="w-auto max-h-screen m-20 rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
