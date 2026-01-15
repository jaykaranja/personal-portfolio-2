"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  ExternalLink,
  Github,
  Star,
  Users,
  Calendar,
  Zap,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: "web" | "mobile" | "desktop" | "ai";
  technologies: string[];
  status: "completed" | "in-progress" | "maintenance";
  featured: boolean;
  stats: {
    stars?: number;
    users?: number;
    duration?: string;
  };
  links: {
    github?: string;
    live?: string;
    case_study?: string;
  };
  year: string;
}

const projectList: ProjectProps[] = [
  {
    id: "iBusiness",
    title: "iBusiness",
    description:
      "Full-stack e-commerce solution for managing SMEs and small businesses",
    longDescription:
      "A complete e-commerce platform built with React, featuring real-time inventory management, AI-powered product recommendations, advanced analytics dashboard, and seamless payment integration.",
    image: "/projects/ecommerce-demo.jpg",
    category: "web",
    technologies: [
      "React",
      "TypeScript",
      "Microsoft Azure",
      ".NET Framework",
      "C#",
      "Redis",
    ],
    status: "completed",
    featured: true,
    stats: { users: 15000, duration: "6 months" },
    links: {
      github: "https://github.com/littu/nextcommerce",
      live: "https://nextcommerce-demo.littu.dev",
      case_study: "#",
    },
    year: "2024",
  },
  {
    id: "inccash",
    title: "IncCash",
    description:
      "A globally accessible fintech mobile app for money remittance and payments",
    longDescription:
      "A secure and user-friendly mobile application that enables users to send and receive money internationally, pay bills, and manage their finances with real-time exchange rates and AI-driven fraud detection.",
    image: "/projects/healthcare-demo.jpg",
    category: "mobile",
    technologies: ["React Native", "React", "Springboot", "Node.js", "MongoDB", "AWS"],
    status: "completed",
    featured: true,
    stats: { users: 8500, duration: "8 months" },
    links: {
      case_study: "#",
    },
    year: "2024",
  },
  {
    id: "littu",
    title: "Littu POS",
    description:
      "A modern point-of-sale web application for retail businesses",
    longDescription:
      "A sleek and intuitive POS system that streamlines sales, inventory management, and customer relationship management, featuring offline capabilities and AI-powered sales analytics.",
    image: "/projects/analytics-demo.jpg",
    category: "ai",
    technologies: [
      "React",
      "C#",
      ".NET Framework",
      "PostgreSQL",
      "Docker",
    ],
    status: "in-progress",
    featured: false,
    stats: { duration: "4 months" },
    links: {
      github: "https://github.com/littu/intellidash",
    },
    year: "2025",
  }
];

const categories: Array<{
  id: string;
  label: string;
  icon: "Layers" | "Globe" | "Smartphone" | "Monitor" | "Brain";
}> = [
  { id: "all", label: "All Projects", icon: "Layers" },
  { id: "web", label: "Web Apps", icon: "Globe" },
  { id: "mobile", label: "Mobile Apps", icon: "Smartphone" },
  { id: "desktop", label: "Desktop Apps", icon: "Monitor" },
  { id: "ai", label: "AI & ML", icon: "Brain" },
];

const statusConfig: Record<
  string,
  { label: string; color: string; icon: "Check" | "Clock" | "Settings" }
> = {
  completed: { label: "Completed", color: "bg-green-500", icon: "Check" },
  "in-progress": { label: "In Progress", color: "bg-blue-500", icon: "Clock" },
  maintenance: {
    label: "Maintenance",
    color: "bg-yellow-500",
    icon: "Settings",
  },
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projectList.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Our Featured
          <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text px-2">
            Projects
          </span>
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          Discover the innovative solutions we've built for our clients. From
          cutting-edge web applications to AI-powered platforms, each project
          showcases our commitment to excellence and innovation.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mt-16 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="h-10 px-4 py-2"
          >
            <Icon name={category.icon} size={16} className="mr-2" color={""} />
            {category.label}
          </Button>
        ))}
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <h3 className="text-2xl font-bold">Featured Projects</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredProject === project.id}
                onHover={setHoveredProject}
                featured={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-6 w-6 text-blue-500" />
            <h3 className="text-2xl font-bold">More Projects</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredProject === project.id}
                onHover={setHoveredProject}
                featured={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let's bring your vision
            to life with cutting-edge technology and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Start Your Project
              <ExternalLink className="ml-2 h-4 w-4 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectProps;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  featured: boolean;
}

const ProjectCard = ({
  project,
  isHovered,
  onHover,
  featured,
}: ProjectCardProps) => {
  const statusInfo = statusConfig[project.status];

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-100 hover:shadow-lg cursor-pointer ${
        featured ? "md:col-span-1 lg:col-span-1" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <Badge
            variant="secondary"
            className={`${statusInfo.color} text-white border-none`}
          >
            <Icon color="" name={statusInfo.icon} size={12} className="mr-1" />
            {statusInfo.label}
          </Badge>
          <Badge
            variant="outline"
            className="bg-black/20 text-white border-white/30"
          >
            {project.year}
          </Badge>
        </div>

        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-white/70">
          <div className="text-center">
            <Icon
              name="Image"
              size={40}
              color="currentColor"
              className="mx-auto mb-2"
            />
            <p className="text-sm">Project Screenshot</p>
          </div>
        </div>

        {/* Hover overlay with project links */}
        <div
          className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 z-30 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {project.links.live && (
            <Button size="sm" variant="secondary" asChild>
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button size="sm" variant="outline" asChild>
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {featured && (
            <Star className="h-5 w-5 text-yellow-500 fill-current flex-shrink-0" />
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Project Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          {project.stats.users && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{project.stats.users.toLocaleString()} users</span>
            </div>
          )}
          {project.stats.stars && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{project.stats.stars} stars</span>
            </div>
          )}
          {project.stats.duration && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{project.stats.duration}</span>
            </div>
          )}
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
