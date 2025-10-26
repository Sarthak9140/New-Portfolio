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
    title: "Document Signature Platform",
    description:
      "DOC_SIGN – A modern digital document signing app built with Vite + React + SCSS, featuring login/register, PDF editing, and secure digital signing capabilities.",
    details:
      "DOC_SIGN  is a modern digital document signing platform built with  Vite ,  React , and  Node.js . It allows users to securely  upload, edit, and sign PDF documents online , featuring authentication, cloud storage, and a smooth, responsive interface.",
    features: [
      "User authentication and authorization",
      "Upload any PDF file to sign",
      "Normal Sign: Type your name and select from multiple fonts",
      "Draw Sign: Draw your signature using a digital pad",
      "Download or save the document with the signature embedded",
      "Optimized for both desktop and mobile views with a clean, modern look",
      "Responsive design for all devices",
    ],
    images: [
      new URL("@/assets/Doc_sign/login.png", import.meta.url).href,
      new URL("@/assets/Doc_sign/signing.png", import.meta.url).href,
      new URL("@/assets/Doc_sign/signup.png", import.meta.url).href,
      new URL("@/assets/Doc_sign/uploadPdf.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/DOC_SIGN-Client",
    liveUrl: "https://doc-sign-client-1jja.vercel.app",
    tags: ["Vite", "Node.js", "MongoDB", "SASS", "Express"],
  },
  {
    id: 2,
    title: "Plant Doctor — Smart India Hackathon Project",
    description:
      "Plant Doctor is an AI-powered platform built with React, TypeScript, Vite, and Tailwind CSS that helps farmers and gardeners detect plant diseases, get AI-based treatment advice, and access real-time agricultural insights through a modern dashboard. ",
    details:
      "Plant Doctor is an AI-driven plant health analysis platform that empowers farmers and gardeners to identify plant diseases, receive treatment recommendations, and access real-time agricultural insights.Developed using React, TypeScript, and Tailwind CSS, the platform blends an intuitive user interface with powerful machine learning models and an integrated AI chatbot to deliver an intelligent and interactive experience.",
    features: [
      "🌾 AI Disease Detection — Instantly identify plant diseases by uploading a leaf image",
      "💬 AI Chatbot Assistance — Provides real-time advice, fertilizer suggestions, and crop guidance",
      "📸 Camera & Upload Support — Capture live photos or upload existing images for analysis",
      "🧠 ML-Powered Diagnosis — Utilizes trained machine learning models for accurate predictions",
      "📊 Plant Health Dashboard — View detailed reports, treatment history, and personalized recommendations",
      "🪴 Responsive Design — Fully optimized for desktop and mobile devices",
      "🌍 Multi-Language Support (Optional) — Enhance accessibility for regional users",
    ],
    images: [
      new URL("@/assets/plant/dashboard1.png", import.meta.url).href,
      new URL("@/assets/plant/dashboard2.png", import.meta.url).href,
      new URL("@/assets/plant/crop.png", import.meta.url).href,
      new URL("@/assets/plant/login.png", import.meta.url).href,
      new URL("@/assets/plant/chatbot.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/Plant-Doctor-SIH",
    liveUrl: "https://plant-doctor-sih.vercel.app",
    tags: [
      "React (TypeScript) ",
      "Vite",
      "MongoDB",
      "shadcn/ui",
      "AI Chatbot",
      "API Integration",
    ],
  },
  {
    id: 3,
    title: "BMW UI ",
    description:
      "A dynamic, modern BMW-inspired user interface built with React, TypeScript, and Tailwind CSS. This project includes an interactive 360° car view, smooth animations, and an integrated AI chatbot for real-time user interaction.",
    details:
      "A dynamic, modern BMW-inspired user interface built with React, TypeScript, and Tailwind CSS. This project includes an interactive 360° car view, smooth animations, and an integrated AI chatbot for real-time user interaction.",
    features: [
      "🚗 360° Car View — Fully interactive rotation and zoom for BMW models",
      "🖱️ Dynamic Cursor Effects — Smooth transitions and motion effects",
      "🎨 Responsive Design — Fully optimized for all screen sizes",
      "⚙️ TypeScript-Powered — Reliable, maintainable, and type-safe codebase",
    ],
    images: [
      new URL("@/assets/bmw/dashboard.png", import.meta.url).href,
      new URL("@/assets/bmw/dashboard2.png", import.meta.url).href,
      new URL("@/assets/bmw/dashboard3.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/BMW-UI",
    liveUrl: "https://bmw-ui-taupe.vercel.app",
    tags: [
      "React (TypeScript) ",
      "Vite",
      "MongoDB",
      "shadcn/ui",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "DevLinks Web Application",
    description:
      "DevLinks is a responsive app built with React vite that lets users add, edit, and preview social links with auto-save and optional backend support.",
    details:
      "DevLinks is a modern, interactive platform where you can customize and manage your social media links all in one place — with a live mobile preview UI.Designed for developers, creators, and professionals who want to share multiple profiles quickly.",
    features: [
      "Real-time Add/edit/remove multiple social/profile links",
      "Choose from popular platforms (GitHub, LinkedIn, YouTube, etc.)",
      "Live mobile preview while editing",
      "Auto-save to localStorage",
      "Clean and responsive design",
      "Optional backend (Node.js + MongoDB) support for persistent storage",
    ],
    images: [
      new URL("@/assets/devlink/home.png", import.meta.url).href,
      new URL("@/assets/devlink/login.png", import.meta.url).href,
      new URL("@/assets/devlink/oneLink.png", import.meta.url).href,
      new URL("@/assets/devlink/preview.png", import.meta.url).href,
      new URL("@/assets/devlink/register.png", import.meta.url).href,
      new URL("@/assets/devlink/twolink.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/NewsMonkey",
    liveUrl:
      " https://devlinks-client-g1tt-e4we94v2g-sarthak9140s-projects.vercel.app/",
    tags: ["Vite", "Node.js", "MongoDB", "SASS", "Express"],
  },
  {
    id: 5,
    title: "Bug Tracker System",
    description:
      "Bug Tracker is a full-stack web app built with React, Node.js, and MongoDB that allows users to report, manage, and track bugs with authentication, real-time updates, and role-based access control.",
    details:
      "A full-stack Bug Tracking System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This project allows users to report, track, assign, and resolve bugs efficiently in real-time. It is ideal for teams working on software projects who need a centralized platform for managing and monitoring application issues.",
    features: [
      "Authentication: Register & login with secure JWT tokens",
      "Bug Management: Add, edit, delete bugs with title, description, priority, and status",
      "User Management: Assign bugs to registered users",
      "Real-time Updates: Changes reflect instantly with optimized API calls",
      "Filtering & Sorting: Search bugs by title, priority, status, and more",
      "Role-based Access (Optional): Admin vs regular user permissions",
      "Clean and responsive design",
    ],
    images: [
      new URL("@/assets/BugTracker/Bug_list.png", import.meta.url).href,
      new URL("@/assets/BugTracker/create_bug.png", import.meta.url).href,
      new URL("@/assets/BugTracker/Edit_bug.png", import.meta.url).href,
      new URL("@/assets/BugTracker/login.png", import.meta.url).href,
      new URL("@/assets/BugTracker/Register.png", import.meta.url).href,
      new URL("@/assets/BugTracker/view_bugs.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/Bug-Tracker",
    liveUrl: "https://tasks-demo.com",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
  },

  {
    id: 6,
    title: "Note Hub",
    description:
      "NoteHub is a full-stack note management system built using the MERN stack (MongoDB, Express.js, React, Node.js). It enables users to register, login, create personal notes with images, and manage them through an intuitive dashboard.",
    details:
      "NoteHub is a full-stack note management system built using the MERN stack (MongoDB, Express.js, React, Node.js). It enables users to register, login, create personal notes with images, and manage them through an intuitive dashboard.",
    features: [
      "🔐 Authentication: Secure JWT-based login & signup",
      "🗂️ Notes CRUD: Create, Read, Update, Delete personal notes",
      "🖼️ Image Upload: Upload and preview images with your notes",
      "📱 Responsive UI: Styled with SCSS, optimized for mobile and desktop",
      " 📄 Card Grid: Clean 3-column layout for note cards",
      "📸 Dynamic Media: Notes can include visual content for better recall",
    ],
    images: [
      new URL("@/assets/note/Add.png", import.meta.url).href,
      new URL("@/assets/note/dashboard.png", import.meta.url).href,
      new URL("@/assets/note/edit.png", import.meta.url).href,
      new URL("@/assets/note/note.png", import.meta.url).href,
      new URL("@/assets/note/register.png", import.meta.url).href,
      new URL("@/assets/note/login.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/Note-Hub",
    liveUrl: "https://vercel.com/sarthak9140s-projects/note-hub",
    tags: [
      "React Vite ",
      "Node.js",
      "MongoDB",
      "Express js",
      "JWT Auth",
      "Multer for Image Upload",
      "SCSS",
    ],
  },
  {
    id: 7,
    title: "News Hub",
    description:
      "A modern news application built with React and SCSS that delivers up-to-date international news from a reliable API. It features dynamic content updates, responsive design, and an intuitive interface, allowing users to browse global headlines, read detailed articles, and stay informed with the latest events happening around the world.",
    details:
      "A modern news application built with React and SCSS that delivers up-to-date international news from a reliable API. It features dynamic content updates, responsive design, and an intuitive interface, allowing users to browse global headlines, read detailed articles, and stay informed with the latest events happening around the world.",
    features: [
      "🔹 Live and updated international news fetched via API",
      "🔹 Category-wise news sections (Business, Sports, Technology, Health, etc.)",
      "🔹 Loading bar or spinner while fetching news",
      "🔹 Secure API key management using environment variables",
      "🔹 Modern UI built with React and SCSS / Bootstrap",
      "🔹 Fast performance and optimized builds for deployment",
      "🔹 Pagination for browsing multiple pages of news",
    ],
    images: [
      new URL("@/assets/News/Dashboard.png", import.meta.url).href,
      new URL("@/assets/News/image.png", import.meta.url).href,
      new URL("@/assets/News/News.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/NewsMonkey",
    liveUrl: "https://github.com/Sarthak9140/NewsMonkey",
    tags: [
      "React ",
      "API Integration",
      "Responsive Design",
      "Dynamic Content Updates",
      "SCSS",
    ],
  },
  {
    id: 8,
    title: "Shifra Virtual Assistant",
    description:
      "Shifra is a voice-controlled virtual assistant built using HTML, CSS, and JavaScript. It uses the Web Speech API to recognize spoken commands and respond via speech synthesis. Designed as a personal browser-based assistant, Shifra can greet you, open websites, tell the time or date, and much more.",
    details:
      "Shifra is a voice-controlled virtual assistant built using HTML, CSS, and JavaScript. It uses the Web Speech API to recognize spoken commands and respond via speech synthesis. Designed as a personal browser-based assistant, Shifra can greet you, open websites, tell the time or date, and much more.",
    features: [
      "🎤 Voice Recognition: Listens and processes your voice using Web Speech API.",
      "🗣️ Speech Output: Speaks back using Speech Synthesis API.",
      "🕐 Greets Based on Time: Good Morning / Afternoon / Evening / Night.",
      "🔗 Quick Access to Sites: Opens YouTube, Google, Instagram, WhatsApp, Calculator, etc.",
      "📅 Tells Time and Date: Responds with real-time data.",
      "❤️ Conversational Responses: Reacts to phrases like I love you, thank you, who are you , etc.",
      "🔎 Smart Fallback: Searches Google when no command matches.",
    ],
    images: [
      new URL("@/assets/assistant/Dashboard.png", import.meta.url).href,
      new URL("@/assets/assistant/image.png", import.meta.url).href,
      new URL("@/assets/assistant/voice.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/Shifra_Assistant",
    liveUrl: "https://shifra-assistant.vercel.app",
    tags: ["HTML ", "CSS", "JavaScript", "Web Speech API"],
  },
  {
    id: 9,
    title: "Foodie - Where Flavor Meets Experience",
    description:
      "Welcome to Foodie, the ultimate destination for food lovers! Our platform allows users to seamlessly book tables and order lunch at suitable prices, ensuring an exceptional dining experience.",
    details:
      "Welcome to Foodie, the ultimate destination for food lovers! Our platform allows users to seamlessly book tables and order lunch at suitable prices, ensuring an exceptional dining experience.",
    features: [
      "Table Booking: Reserve a table at your favorite restaurant effortlessly.",
      "Lunch Ordering: Browse the menu and order delicious meals at affordable prices.",
      "User-Friendly Interface: Enjoy a seamless and interactive experience.",
      "Responsive Design: Optimized for desktops, tablets, and mobile devices.",
    ],
    images: [
      new URL("@/assets/restraunt/restraunt.png", import.meta.url).href,
      new URL("@/assets/restraunt/category.png", import.meta.url).href,
      new URL("@/assets/restraunt/desc.png", import.meta.url).href,
      new URL("@/assets/restraunt/offer.png", import.meta.url).href,
      new URL("@/assets/restraunt/list.png", import.meta.url).href,
      new URL("@/assets/restraunt/review.png", import.meta.url).href,
      new URL("@/assets/restraunt/footer.png", import.meta.url).href,
    ],
    githubUrl: "https://github.com/Sarthak9140/Restaurant-",
    liveUrl: "https://foodie-pi.vercel.app",
    tags: ["HTML ", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
  },
];

const ProjectCard = ({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: (project: Project) => void;
}) => {
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
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
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

const ProjectDetailsDialog = ({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
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
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Details
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.details}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Key Features
            </h3>
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
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Live Demo
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
            Here are some of my recent works showcasing my expertise in
            full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
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
