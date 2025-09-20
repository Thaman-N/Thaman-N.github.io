import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Github, ExternalLink, Mail, Linkedin, Moon, Sun, Menu, X, Palette } from 'lucide-react';

// Import custom components
import TrueFocus from './TrueFocus';
import DecryptedText from './DecryptedText';
import MagicBento from './MagicBento';
import Particles from './Particles';
import useTheme from './useTheme';
import PixelCard from './PixelCard';

const Portfolio = () => {
  const { darkMode, toggleDarkMode, currentTheme, setTheme, availableThemes, getThemeName, colors } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const FancyVideoSkeleton = () => (
    <PixelCard 
      variant="theme"
      themeColors={[colors.primary || '#3b82f6', colors.secondary || '#1e40af', colors.accent || '#6366f1']}
      width="w-full"
      height="aspect-video"
      aspectRatio=""
      className="rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] group"
    >
      <div style={{ position: 'absolute' }} className="text-center space-y-3 transition-all duration-300 group-hover:scale-105">
        <div className="w-16 h-16 rounded-full bg-muted-foreground/20 mx-auto flex items-center justify-center animate-pulse group-hover:bg-muted-foreground/30 transition-colors duration-300">
          <svg className="w-8 h-8 text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-24 mx-auto group-hover:animate-pulse" />
          <Skeleton className="h-2 w-16 mx-auto group-hover:animate-pulse" />
        </div>
        <div className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors duration-300 opacity-0 group-hover:opacity-100 mt-2">
          Demo Coming Soon
        </div>
      </div>
      
      {/* Subtle overlay hint */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      
      {/* Corner indicator */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse group-hover:bg-primary/50 transition-colors duration-300" />
    </PixelCard>
  );

  const navigation = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#hero' },
  ];

  const projects = [
    {
      title: "ErzürNet",
      description: "Real-time violence detection system combining RandAugment and YOLOv8-based spatial cropping with an optimized X3D backbone enhanced by a custom Motion Enhancement module",
      highlights: [
        "Sets new SOTA benchmark of 94.25% validation accuracy on RWF-2000 dataset",
        "Sets new SOTA benchmark of 99.75% validation accuracy on RLVS dataset",
        "SOTA performance of 100% validation accuracy on ViolentFlows & Hockey Fight datasets",
        "High generalizability with 80-90% cross-dataset accuracy",
        "30-50× faster than other SOTA methods while being upto 80 times more efficient"
      ],
      tech: ["PyTorch", "TensorFlow", "OpenCV", "FastAPI", "React", "YOLOv8"],
      github: "https://github.com/Thaman-N/TDISS",
      media: "/tdissold.mp4",
      demo: "#"
    },
    {
      title: "Legal Contract Analysis System",
      description: "Comprehensive LLM-based legal contract analysis system implementing various NLP techniques, prompt engineering approaches, RAG, multimodal inputs, and QLoRA fine-tuning",
      highlights: [
        "Multi-modal document processing for text, images, documents and audio recordings",
        "QLoRA fine-tuning implementation of smaller open-source models giving the model domain-specific knowledge",
        "Advanced RAG architecture allowing for context-aware responses from large documents"
      ],
      tech: ["PyTorch", "Transformers", "PEFT", "Tesseract", "NLTK", "LangChain"],
      github: "https://github.com/Thaman-N/ACAS",
      media: "",
      demo: "#"
    },
    {
      title: "The Mirror",
      description: "Intelligent WordPress plugin that deploys AI to engage toxic commenters in sophisticated banter until they abandon their hostile behavior, making trolls unwilling participants in boosting SEO metrics.",
      highlights: [
        "Eliminates toxic or hate comments while retaining traffic for SEO benefits",
        "Sophisticated AI responses that outclass trolls with wit and condescension", 
        "RAG-powered context awareness of post instructions and content",
        "Configurable escalation system with progressive snark levels"
      ],
      tech: ["WordPress", "PHP", "Python", "HuggingFace Transformers", "JavaScript"],
      github: "#",
      media: "",
      demo: "#"
    },
    {
      title: "Context Bridge for Web AI Platforms",
      description: "Context bridging system that automatically injects local repository-specific context into LLM conversations across AI provider websites, eliminating manual copy-paste workflows.",
      highlights: [
        "Eliminates manual copy-paste, tab switching workflows",
        "Cross-platform compatibility",
        "Seamless content injection using advanced web automation & context repository mapping",
        "Privacy-first design with local processing"
      ],
      tech: ["Python", "TypeScript", "Continue.dev"],
      github: "https://github.com/Thaman-N/continue",
      media: "",
      demo: "#"
    }
  ];

  const skills = {
    "AI & Machine Learning": {
      items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "LangChain", "OpenCV", "Scikit-learn"],
      description: "Deep learning, NLP, computer vision"
    },
    "Languages": {
      items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL", "Go", "Bash"],
      description: "Full-stack development"
    },
    "Frontend": {
      items: ["React", "Next.js", "Vite", "Tailwind CSS", "Three.js", "WebGL"],
      description: "Modern web interfaces"
    },
    "Backend & Infrastructure": {
      items: ["FastAPI", "Flask", "Express.js", "PostgreSQL", "Redis", "Docker", "Kafka"],
      description: "Scalable systems"
    }
  };

  const certifications = [
    {
      title: "Natural Language Processing Specialization",
      issuer: "DeepLearning.AI",
      credential: "https://coursera.org/verify/specialization/QR4RDZYWW7HS",
      description: "Comprehensive coverage of NLP techniques including Naïve Bayes, HMMs, Word embeddings, Siamese networks, encoder-decoder models, causal and self-attention models. Hands-on experience with modern transformer architectures.",
      skills: ["NLP", "Transformers", "Word Embeddings", "Attention Mechanisms"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      credential: "https://www.credential.net/c37a7c9f-e1fd-4493-a20f-330dd8f296a2#gs.cyychh",
      description: "Professional exam testing proficiency in CNNs, GRU, LSTMs, RNNs, and integrating machine learning into tools and applications. Covers computer vision, NLP tasks, and time series forecasting.",
      skills: ["TensorFlow", "CNN", "RNN", "Computer Vision", "Time Series"]
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      credential: "https://coursera.org/verify/specialization/WCM7KMMBLQ89",
      description: "Built and trained CNNs, used NLP word embeddings, implemented HuggingFace transformers for NER and question answering. Comprehensive understanding of deep neural networks and their applications.",
      skills: ["Deep Learning", "CNN", "NLP", "HuggingFace", "Neural Networks"]
    },
    {
      title: "TensorFlow Developer",
      issuer: "DeepLearning.AI",
      credential: "https://coursera.org/verify/professional-cert/JUAMFJNG8A2Y",
      description: "Professional certification demonstrating proficiency in CNNs, GRU, LSTMs, RNNs, and integrating machine learning into tools and applications. Covers computer vision, NLP tasks, and time series forecasting.",
      skills: ["TensorFlow", "CNN", "RNN", "Computer Vision", "Time Series"]
    },
    {
      title: "Linux System Administration",
      issuer: "Udemy",
      credential: "https://coursera.org/verify/specialization/QR4RDZYWW7HS",
      description: "Proficiency in system administration, shell scripting, networking, disk management, system access, and file systems. Essential DevOps and infrastructure management skills.",
      skills: ["Linux", "Shell Scripting", "Networking", "System Administration"]
    }
  ];

  return (
    <>
      <style>{`
        .card-hover {
          transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.1);
        }
        [data-theme="dark"] .card-hover:hover {
          box-shadow: 0 8px 25px -8px rgba(255, 255, 255, 0.1);
        }
        .badge-variant-1 { opacity: 1; }
        .badge-variant-2 { opacity: 0.8; }
        .badge-variant-3 { opacity: 0.9; }
        .badge-variant-4 { opacity: 0.7; }
        .badge-variant-5 { opacity: 0.85; }
        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
        }
        .content-wrapper {
          position: relative;
          z-index: 1;
        }
        .bento-container-large {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: none;
        }
        .bento-container-large .bento-section {
          max-width: 90rem;
          width: 100%;
        }

        /* Base responsive container */
        .container {
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Large Desktop - 1536px+ */
        @media (min-width: 1536px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        /* Desktop - 1280px to 1535px */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        /* Small Desktop/Large Tablet Landscape - 1024px to 1279px */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          
          /* Slightly reduce bento grid padding */
          .bento-container-large .grid {
            padding: 2rem;
          }
        }

        /* CRITICAL: Tablet Portrait Mode - 768px to 1023px (iPad range) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Force column layout for project cards */
          .flex.flex-col.lg\\:flex-row.lg\\:items-start.lg\\:justify-between.gap-4 {
            flex-direction: column !important;
          }
          
          /* Remove fixed width and set full width */
          .lg\\:w-80 {
            width: 100% !important;
            order: -1;
            max-width: 100%;
          }
          
          /* Fix button container layout */
          .flex.flex-wrap.gap-2.items-center.justify-between {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          
          .flex.gap-2.ml-auto {
            margin-left: 0 !important;
            justify-content: center;
            width: 100%;
          }
          
          /* Hero button adjustments */
          .mt-10.flex.items-center.justify-center.gap-x-6.flex-wrap {
            flex-direction: column;
            gap: 0.75rem;
            align-items: stretch;
          }
          
          .mt-10.flex.items-center.justify-center.gap-x-6.flex-wrap > * {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }
          
          /* Content containment */
          .card-hover {
            max-width: 100%;
            overflow: hidden;
          }
          
          .space-y-4.flex-1 {
            min-width: 0;
            max-width: 100%;
          }
          
          /* Typography adjustments for tablets */
          .text-4xl.font-bold.tracking-tight.sm\\:text-6xl.md\\:text-7xl {
            font-size: 2.5rem;
            line-height: 1.2;
          }
          
          .text-3xl.font-bold.tracking-tight.sm\\:text-4xl {
            font-size: 2.25rem;
          }
          
          /* Bento grid adjustments */
          .bento-container-large .grid {
            padding: 1.5rem;
          }
        }

        /* Mobile Large - 640px to 767px */
        @media (min-width: 640px) and (max-width: 767px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .flex.flex-col.lg\\:flex-row.lg\\:items-start.lg\\:justify-between.gap-4 {
            flex-direction: column;
          }
          
          .lg\\:w-80 {
            width: 100%;
            order: -1;
          }
          
          .flex.flex-wrap.gap-2.items-center.justify-between {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          
          .flex.gap-2.ml-auto {
            margin-left: 0;
            flex-direction: row;
            justify-content: center;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          
          .mt-10.flex.items-center.justify-center.gap-x-6.flex-wrap {
            gap: 0.75rem;
          }
          
          .text-4xl.font-bold.tracking-tight.sm\\:text-6xl.md\\:text-7xl {
            font-size: 2.25rem;
          }
        }

        /* Mobile Small - up to 639px */
        @media (max-width: 639px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .flex.flex-col.lg\\:flex-row.lg\\:items-start.lg\\:justify-between.gap-4 {
            flex-direction: column;
          }
          
          .lg\\:w-80 {
            width: 100%;
            order: -1;
          }
          
          .flex.flex-wrap.gap-2.items-center.justify-between {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          
          .flex.gap-2.ml-auto {
            margin-left: 0;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .flex.gap-2.ml-auto > * {
            width: 100%;
            justify-content: center;
          }
          
          .mt-10.flex.items-center.justify-center.gap-x-6.flex-wrap {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .mt-10.flex.items-center.justify-center.gap-x-6.flex-wrap > * {
            width: 100%;
            justify-content: center;
          }
          
          .text-4xl.font-bold.tracking-tight.sm\\:text-6xl.md\\:text-7xl {
            font-size: 2rem;
            line-height: 1.2;
          }
          
          .text-3xl.font-bold.tracking-tight.sm\\:text-4xl {
            font-size: 1.875rem;
          }
          
          /* Bento grid mobile adjustments */
          .bento-container-large .grid {
            padding: 1rem;
          }
        }

        /* Universal fixes for all screen sizes */
        @media (max-width: 1023px) {
          /* Fix project card content containment */
          .card-hover {
            max-width: 100%;
            overflow: hidden;
          }
          
          .card-hover .flex.flex-wrap {
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-word;
          }
          
          /* Ensure tech badges don't overflow */
          .flex.flex-wrap.gap-2 {
            max-width: 100%;
          }
          
          /* Constrain card content */
          .space-y-4.flex-1 {
            min-width: 0;
            max-width: 100%;
          }
        }

        /* Shimmer effect */
        .shimmer-card {
          position: relative;
          overflow: hidden;
        }

        .shimmer-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        [data-theme="dark"] .shimmer-card::before {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
          );
        }

        .shimmer-card:hover::before {
          left: 100%;
        }

        /* Performance optimizations */
        * {
          box-sizing: border-box;
        }
        
        .card-hover,
        .shimmer-card {
          will-change: transform;
        }
      `}</style>
      
      {/* Particles Background for entire page with reactive colors */}
      <div className="particles-container">
        <Particles
          particleColors={[colors.primary || '#3b82f6', colors.secondary || '#1e40af']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="min-h-screen bg-background text-foreground content-wrapper">
        {/* Header with shadcn Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="font-bold text-xl">Portfolio</div>
            </div>
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              {/* Theme Picker */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Palette className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {availableThemes.map((theme) => (
                    <DropdownMenuItem
                      key={theme}
                      onClick={() => setTheme(theme)}
                      className={currentTheme === theme ? 'bg-accent' : ''}
                    >
                      {getThemeName(theme)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dark Mode Toggle */}
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-background">
              <nav className="container py-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section with reactive TrueFocus */}
        <section id="hero" className="container py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Building AI Systems
              <TrueFocus 
                sentence=" That Work"
                manualMode={false}
                blurAmount={5}
                borderColor={colors.primary || '#3b82f6'}
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Computer Science student passionate about AI and machine learning.
              From achieving SOTA benchmarks in computer vision tasks to building LLM-powered workflows, I love turning research concepts into working applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <Button size="lg" asChild>
                <a href="https://github.com/Thaman-N" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Work
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/thaman-n-538984274/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const email = 'lordthaman' + '@' + 'gmail.com';
                  window.location.href = 'mailto:' + email;
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
            </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-16">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ongoing Research & Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Building functional AI systems with real-world impact
              </p>
            </div>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
    <div className="space-y-4 flex-1">
      <div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="mt-2 text-base">
          {project.description}
        </CardDescription>
      </div>
      
      <div className="space-y-2">
        {project.highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-center text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
            {highlight}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <Badge key={tech} variant="secondary" className={`badge-variant-${(techIndex % 5) + 1}`}>
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          {project.media ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <div className="aspect-video rounded-lg overflow-hidden">
                  {project.media.endsWith('.mp4') || project.media.endsWith('.webm') ? (
                    <video 
                      src={project.media}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <img 
                      src={project.media}
                      alt={`${project.title} demo`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Button variant="outline" size="sm" disabled>
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
    
    <div className="lg:w-80 pt-10">
      {project.media ? (
        <Dialog>
          <DialogTrigger asChild>
            <div className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
              {project.media.endsWith('.mp4') || project.media.endsWith('.webm') ? (
                <video 
                  src={project.media}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img 
                  src={project.media}
                  alt={`${project.title} demo`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full">
            <div className="aspect-video rounded-lg overflow-hidden">
              {project.media.endsWith('.mp4') || project.media.endsWith('.webm') ? (
                <video 
                  src={project.media}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <img 
                  src={project.media}
                  alt={`${project.title} demo`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <FancyVideoSkeleton />
      )}
    </div>
  </div>
</CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section with reactive MagicBento */}
        <section id="skills" className="container py-16">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Expertise</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Deep AI/ML focus with full-stack development capabilities
              </p>
            </div>

            <div className="bento-container-large">
              <MagicBento 
                textAutoHide={false}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={400}
                particleCount={15}
                glowColor={colors.primaryRgb || '59, 130, 246'}
              >
                <div className="grid md:grid-cols-2 gap-10 p-12">
                  {Object.entries(skills).map(([category, { items, description }]) => (
                    <div key={category} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">{category}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, skillIndex) => (
                          <Badge key={skill} variant="outline" className={`badge-variant-${(skillIndex % 5) + 1}`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </MagicBento>
            </div>

            {/* Certifications with Accordion */}
            <Card className="card-hover mt-16">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>
                  Professional development and specialization credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {certifications.map((cert, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div>
                          <div className="font-medium">{cert.title}</div>
                          <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                      <div className="space-y-3 pt-2">
                        <p className="text-muted-foreground">{cert.description}</p>
                        {cert.credential && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Credential
                            </a>
                          </Button>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge key={skill} variant="outline" className={`text-xs badge-variant-${(skillIndex % 5) + 1}`}>
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Learning and building AI systems for real-world applications
              </p>
            </div>

            <Card className="card-hover shimmer-card">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <DecryptedText 
                      text="I'm Thaman, a Computer Science student who's passionate about machine learning and its practical applications. Through coursework, certifications, and personal projects, I've been exploring everything from computer vision to natural language processing."
                      speed={100}
                      maxIterations={10}
                      animateOn="view"
                      className="text-lg leading-relaxed text-muted-foreground"
                    />
                    <DecryptedText 
                      text="My projects span real-time computer vision systems, finetune LLM workflows, and distributed computing platforms.I'm drawn to the challenge of taking cutting-edge research and making it work in practice - whether that's optimizing model performance, building user-friendly interfaces, or solving scalability challenges."
                      speed={150}
                      maxIterations={10}
                      animateOn="view"
                      className="text-lg leading-relaxed text-muted-foreground"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="text-lg">Current Focus</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Deepening my understanding of AI systems while building projects that solve real problems and preparing for my transition into the industry.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="text-lg">Approach</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          I learn best by building. I combine academic knowledge with hands-on experimentation, focusing on creating systems that work and deliver measurable results.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container py-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} • Thaman Nutakki • Built with React</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;