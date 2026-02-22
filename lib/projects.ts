export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  year?: string;
  domain?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NOTES ON VISION",
    category: "12 IMAGES",
    image:
      "https://images.unsplash.com/photo-1542272201-98782a20b8f4?q=80&w=1887&auto=format&fit=crop",
    description:
      "An exploration of visual perception through modern lens and abstract forms.",
    year: "2024",
    domain: "www.notesonvision.com",
  },
  {
    id: 2,
    title: "UNDESIGNATED",
    category: "08 IMAGES",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    description:
      "Challenging the boundaries of conventional design systems in public spaces.",
    year: "2023",
    domain: "www.undesignated.studio",
  },
  {
    id: 3,
    title: "FLORENCE",
    category: "23 IMAGES",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
    description:
      "A digital renaissance showcasing the intersection of history and modern tech.",
    year: "2024",
    domain: "www.florence-digital.it",
  },
  {
    id: 4,
    title: "COHERENCE",
    category: "15 IMAGES",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Finding harmony in chaos through minimal art and strategic branding.",
    year: "2023",
    domain: "www.coherence-agency.com",
  },
  {
    id: 5,
    title: "WESTERN",
    category: "10 IMAGES",
    image:
      "https://images.unsplash.com/photo-1529139574466-a302d20525a9?q=80&w=2576&auto=format&fit=crop",
    description:
      "Redefining the western aesthetic for a global digital audience.",
    year: "2024",
    domain: "www.western-redefined.com",
  },
];
