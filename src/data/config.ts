export const site = {
  name: "Trever Fuhrer",
  email: "treverfuhrer@gmail.com",
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.jpg",

  socials: [
    { label: "GitHub", href: "https://github.com/TreverFuhrer" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/treverfuhrer/" },
    { label: "YouTube", href: "https://www.youtube.com/@TreverFuhrer" },
  ],

  projects: [
    {
      title: "Only-Woodcutting (Fabric)",
      href: "https://github.com/TreverFuhrer/only-woodcutting",
      blurb: "Stonecutter-style woodcutter for wood recipes; minimal code.",
      tech: ["Java", "Fabric", "MC 1.21.x"],
    },
    {
      title: "Parkour Fall Detector",
      href: "https://github.com/TreverFuhrer/<repo>",
      blurb: "Streams tick data → predicts falls ~10 ticks ahead with XGBoost.",
      tech: ["Python", "XGBoost", "Fabric"],
    },
   
  ],
} as const;