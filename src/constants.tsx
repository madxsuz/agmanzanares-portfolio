
import { 
  Code2, 
  Workflow, 
  Layout
} from 'lucide-react';
import type { Service, Experience, SkillCategory, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'creative-automation',
    title: 'Asset Generation Systems',
    description: 'Specialized automation for After Effects and Photoshop. Building systems that bulk-manipulate properties on structured templates to generate thousands of unique assets in minutes.',
    icon: Workflow
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Architecture',
    description: 'Developing robust Laravel and React platforms. Engineering the middleware that connects enterprise databases to creative production pipelines.',
    icon: Code2
  },
  {
    id: 'ui-ux-engineering',
    title: 'Systems & Interfaces',
    description: 'Designing intuitive UXP panels and web dashboards. Focusing on structured data entry that translates directly into high-fidelity creative output.',
    icon: Layout
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    company: 'Thy Web Development Inc.',
    position: 'Senior Software Engineer (Automation Specialist)',
    period: '2021 - Present',
    description: [
      'Engineered automated workflows for After Effects using ExtendScript and UXP.',
      'Developed "Bulk Property Injectors" that programmatically update text, colors, and keyframes across hundreds of template variants.',
      'Built a centralized dashboard for managing theme-driven asset production pipelines.'
    ],
    milestones: ['Bulk Rendering Engine', 'JSON-to-Composition Middleware']
  },
  {
    id: 'exp-2',
    company: 'DataViz PH Inc.',
    position: 'Full Stack Developer',
    period: '2018 - 2021',
    description: [
      'Architected structured data systems for student and payroll management.',
      'Implemented template-based report generation engines for high-volume data export.',
      'Reduced manual data entry time by 85% through smart property mapping and automated validation.'
    ],
    milestones: ['Dynamic Template Engine', 'Automated Payroll Reporter']
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Creative Automation',
    skills: ['ExtendScript', 'Adobe UXP', 'After Effects Scripting', 'Photoshop DOM', 'Batch Processing']
  },
  {
    category: 'Full-Stack Stack',
    skills: ['React', 'Laravel', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    category: 'Technical Workflow',
    skills: ['Middleware Design', 'JSON Schema', 'REST APIs', 'Git', 'CI/CD Pipelines']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Thorne',
    role: 'Lead Designer at Visionary Media',
    content: "Angelo didn't just build a tool; he built an entire production engine. We went from manual rendering of 50 versions to automated generation of 2,000 variants overnight. His bulk property logic is flawless.",
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    id: 't2',
    name: 'Isabella Grant',
    role: 'Product Owner at ContentScale',
    content: "The way Angelo maps structured data to Photoshop layers is pure magic. Our branding team can now update thousands of social assets by simply editing a spreadsheet.",
    avatar: 'https://picsum.photos/seed/isabella/100/100'
  },
  {
    id: 't3',
    name: 'Julian Reyes',
    role: 'Creative Tech Lead at MotionPro',
    content: "He bridged the gap between our Laravel backend and After Effects compositions perfectly. His middleware handles complex keyframe manipulation and property updates with incredible precision.",
    avatar: 'https://picsum.photos/seed/julian/100/100'
  }
];
