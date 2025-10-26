import { Github, Linkedin, FileText, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sarthak9140",
      label: "GitHub",
      color: "hover:text-primary hover:shadow-glow-primary",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sarthak-singh-9523a7287",
      label: "LinkedIn",
      color: "hover:text-secondary hover:shadow-glow-secondary",
    },
    {
      icon: FileText,
      href: "/resume.pdf",
      label: "Resume",
      color: "hover:text-primary hover:shadow-glow-primary",
    },
  ];

  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-center md:text-left"
          >
            <p className="flex items-center gap-2">
              © {currentYear} Sarthak Singh
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full border border-border/50 transition-all duration-300 ${link.color}`}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground"
        >
          <p>Designed & Built by Sarthak Singh | MERN Stack Developer</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
