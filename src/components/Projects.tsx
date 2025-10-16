import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  githubUrl: string;
  liveUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and secure payment integration.",
    images: [
      new URL("@/assets/project1-1.jpg", import.meta.url).href,
      new URL("@/assets/project1-2.jpg", import.meta.url).href,
    ],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Social Media App",
    description: "Interactive social platform featuring real-time messaging, post sharing, likes, comments, and user profiles with responsive design.",
    images: [
      new URL("@/assets/project2-1.jpg", import.meta.url).href,
      new URL("@/assets/project2-2.jpg", import.meta.url).href,
    ],
    githubUrl: "https://github.com/yourusername/social-app",
    liveUrl: "https://social-demo.com",
    tags: ["React", "Express", "Socket.io", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative project management tool with kanban boards, team features, deadline tracking, and progress analytics.",
    images: [
      new URL("@/assets/project3-1.jpg", import.meta.url).href,
      new URL("@/assets/project3-2.jpg", import.meta.url).href,
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://tasks-demo.com",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Carousel */}
        <div className="relative h-64 overflow-hidden">
          {project.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${project.title} - Screenshot ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentImageIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end justify-center pb-6 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </motion.div>

          {/* Image indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-muted border border-border text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
