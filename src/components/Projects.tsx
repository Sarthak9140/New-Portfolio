import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  features: string[];
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
    details: "Built a comprehensive e-commerce platform from scratch with modern web technologies. Implemented advanced features like real-time inventory management, dynamic pricing, and personalized recommendations using machine learning algorithms. The platform handles thousands of concurrent users with optimized database queries and caching strategies.",
    features: [
      "Secure user authentication with JWT tokens",
      "Product catalog with advanced filtering and search",
      "Shopping cart with persistent sessions",
      "Stripe payment integration with webhook handling",
      "Admin dashboard for inventory management",
      "Email notifications for orders and shipping",
      "Responsive design for all device sizes",
      "SEO optimized for better search rankings"
    ],
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
    details: "Developed a feature-rich social media application that connects people through real-time interactions. Implemented WebSocket connections for instant messaging and live updates. The app uses advanced state management and optimistic UI updates for a seamless user experience.",
    features: [
      "Real-time messaging with Socket.io",
      "Post creation with image and video uploads",
      "Like, comment, and share functionality",
      "User profiles with customizable themes",
      "Friend requests and connection management",
      "News feed with intelligent content ranking",
      "Story feature with 24-hour expiration",
      "Push notifications for important updates"
    ],
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
    details: "Created an enterprise-level task management system designed for modern teams. Features drag-and-drop kanban boards, advanced analytics, and team collaboration tools. Integrated with popular productivity tools and provides detailed insights into project progress and team performance.",
    features: [
      "Kanban board with drag-and-drop functionality",
      "Team collaboration with role-based permissions",
      "Deadline tracking with automated reminders",
      "Progress analytics and reporting dashboards",
      "File attachments and comments on tasks",
      "Time tracking and productivity metrics",
      "Integration with Slack and email",
      "Custom workflows and automation rules"
    ],
    images: [
      new URL("@/assets/project3-1.jpg", import.meta.url).href,
      new URL("@/assets/project3-2.jpg", import.meta.url).href,
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://tasks-demo.com",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
  },
];

const ProjectCard = ({ project, onOpenDetails }: { project: Project; onOpenDetails: (project: Project) => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary flex flex-col h-full">
        {/* Image Carousel */}
        <div 
          className="relative h-64 overflow-hidden cursor-pointer"
          onClick={() => onOpenDetails(project)}
        >
          {project.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${project.title} - Screenshot ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentImageIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Image indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "w-8 bg-primary shadow-glow-primary"
                    : "w-1.5 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 
            className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors cursor-pointer"
            onClick={() => onOpenDetails(project)}
          >
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/30 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
          
          {/* View Details Button */}
          <Button
            variant="ghost"
            size="sm"
            className="mt-3 text-muted-foreground hover:text-primary w-full"
            onClick={() => onOpenDetails(project)}
          >
            View Full Details →
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectDetailsDialog = ({ project, open, onOpenChange }: { project: Project | null; open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative h-80 rounded-lg overflow-hidden border border-border">
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
            
            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "w-12 bg-primary shadow-glow-primary"
                      : "w-2 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm rounded-full bg-primary/10 border border-primary/30 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Details</h3>
            <p className="text-muted-foreground leading-relaxed">{project.details}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                View Live Demo
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

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
            <ProjectCard key={project.id} project={project} onOpenDetails={handleOpenDetails} />
          ))}
        </div>
      </div>

      <ProjectDetailsDialog 
        project={selectedProject} 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
};

export default Projects;
