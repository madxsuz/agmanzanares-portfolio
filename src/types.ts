import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  milestones: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
