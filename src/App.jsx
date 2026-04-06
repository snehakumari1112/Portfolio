import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code,
  Database,
  Figma,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: ["React.js", "Tailwind", "React Native", "Framer Motion", "Vite.js"]
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter (GetX)"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "Firebase"]
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Postman", "Figma", "VS Code", "GitHub"]
  },
  {
    title: "Integrations",
    icon: BriefcaseBusiness,
    items: ["Razorpay", "Shiprocket", "Reelo"]
  }
];

const experienceTimeline = [
  {
    title: "Full Stack Developer",
    organization: "Muncho Technologies (Remote)",
    period: "Nov 2025 - Present",
    points: [
      "Led development of a Flutter waiter management app, improving usability and workflows.",
      "Built React.js dashboard modules including QR code designer.",
      "Integrated REST APIs and third-party services.",
      "Developed backend services using Node.js and Express.",
      "Worked with MySQL and Firebase for data management.",
      "Contributed in a fast-paced startup environment."
    ]
  },
  {
    title: "Flutter Developer Intern",
    organization: "Muncho Technologies (Remote)",
    period: "Mar 2025 - Oct 2025",
    points: [
      "Built UI for waiter management app from scratch.",
      "Integrated backend APIs for dynamic features.",
      "Used GetX for state management.",
      "Worked with Firebase for real-time data.",
      "Developed reusable components."
    ]
  }
];

const educationItem = {
  title: "Bachelor of Engineering - Information Science",
  organization: "AMC Engineering College, Bangalore",
  period: "2020 - 2024",
  cgpa: "8.92"
};

const experienceEducationTimeline = [
  ...experienceTimeline.map((item) => ({ ...item, type: "experience" })),
  { ...educationItem, type: "education" }
];

const projects = [
  {
    title: "Chat Application",
    description:
      "A real-time chat experience with authentication, media support, and scalable Firebase-backed messaging pipelines.",
    stack: ["Flutter", "Firebase", "FCM"],
    live: "https://github.com/snehakumari1112/Chat-App",
    code: "https://github.com/snehakumari1112/Chat-App"
  },
  {
    title: "Travel Website",
    description:
      "A conversion-focused travel platform with responsive booking flows and polished visual storytelling for modern agencies.",
    stack: ["React", "HTML", "CSS", "Bootstrap"],
    live: "https://viewtemples.com/  ",
    code: "https://github.com/snehakumari1112"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function Reveal({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function TypeTitle() {
  const labels = useMemo(() => ["Full Stack Developer", "Product Builder", "API + Systems Focused"], []);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const word = labels[index];
    let cursor = 0;
    const timer = setInterval(() => {
      cursor += 1;
      setText(word.slice(0, cursor));
      if (cursor >= word.length) {
        clearInterval(timer);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % labels.length);
          setText("");
        }, 1600);
      }
    }, 55);
    return () => clearInterval(timer);
  }, [index, labels]);

  return (
    <p className="min-h-7 text-sm uppercase tracking-[0.22em] text-white/70 sm:text-base">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}

function BackgroundAura() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#06070b]" />
      <div className="absolute inset-0 bg-aura" />
      <div className="grid-overlay" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/20 blur-[90px] animate-floatA" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent2/20 blur-[100px] animate-pulseGlow" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px] animate-floatA" />
    </div>
  );
}

function ExperienceEducationTimeline() {
  return (
    <div className="relative mt-8 border-l border-white/15 pl-6 md:pl-10">
      {experienceEducationTimeline.map((item) => (
        <Reveal key={`${item.type}-${item.title}`} className="relative mb-10 last:mb-0">
          <span className="absolute -left-[2.1rem] top-2 h-3 w-3 rounded-full border border-accent/60 bg-black shadow-glow md:-left-[2.7rem]" />
          <Card className="hover:border-white/25">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Badge variant="accent" className="mb-2 inline-flex items-center gap-1.5">
                    {item.type === "experience" ? (
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                    ) : (
                      <GraduationCap className="h-3.5 w-3.5" />
                    )}
                    {item.type === "experience" ? "Experience" : "Education"}
                  </Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-1">{item.organization}</CardDescription>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/55">{item.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              {item.type === "experience" ? (
                <ul className="space-y-2 text-sm leading-relaxed text-white/75">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-white/75">CGPA: {item.cgpa}</p>
              )}
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState({ type: "idle", message: "" });

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const submitToFormspree = async () => {
      try {
        setSubmitState({ type: "loading", message: "Sending your message..." });

        const response = await fetch("https://formspree.io/f/mjgpjeov", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: contactForm.name,
            email: contactForm.email,
            message: contactForm.message
          })
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        setSubmitState({
          type: "success",
          message: "Message sent successfully. Thank you for reaching out!"
        });
        setContactForm({ name: "", email: "", message: "" });
      } catch (error) {
        setSubmitState({
          type: "error",
          message: "Unable to send right now. Please try again in a moment."
        });
      }
    };

    submitToFormspree();
  };

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const ratio = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, ratio)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <BackgroundAura />

      <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-white/10">
        <motion.div className="h-full bg-gradient-to-r from-accent to-accent2" animate={{ width: `${progress}%` }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#hero" className="text-sm font-semibold tracking-[0.18em] text-white/90">
            SNEHA.K
          </a>
          <nav className="hidden gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === item.id ? "bg-white/12 text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="section-wrap pt-24 md:pt-28">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Open to impactful product engineering roles
            </Badge>
          </Reveal>

          <Reveal className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Sneha Kumari
              <span className="mt-2 block bg-gradient-to-r from-white to-white/55 bg-clip-text text-transparent">
                Building scalable web and mobile experiences
              </span>
            </h1>
          </Reveal>

          <Reveal className="mt-5">
            <TypeTitle />
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/SnehaKumari_Resume.pdf" target="_blank" rel="noreferrer">
              <Button size="lg">My Resume</Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="secondary">
                Contact Me
              </Button>
            </a>
          </Reveal>
        </section>

        <section id="about" className="section-wrap">
          <Reveal>
            <p className="section-kicker">About</p>
            <h2 className="section-title">About Me</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              Full Stack Developer with experience in Flutter, React.js, Node.js, and scalable application development.
              I have worked in startup environments shipping real-world products, integrating APIs, and contributing to
              maintainable system design.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <h3 className="section-title">Experience & Education</h3>
          </Reveal>
          <ExperienceEducationTimeline />
        </section>

        <section id="skills" className="section-wrap">
          <Reveal>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">Engineering stack and integrations</h2>
          </Reveal>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((group) => (
              <motion.div key={group.title} variants={fadeUp}>
                <Card className="h-full hover:-translate-y-1 hover:border-white/25 hover:shadow-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <group.icon className="h-4 w-4 text-accent" />
                      {group.title}
                    </CardTitle>
                    <CardDescription>Focused, production-ready toolset</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="projects" className="section-wrap">
          <Reveal>
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected product-focused builds</h2>
          </Reveal>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Card className="group h-full overflow-hidden hover:-translate-y-1 hover:border-white/30 hover:shadow-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 text-white/45 transition group-hover:text-accent" />
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="accent">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <Button size="sm">Live</Button>
                      </a>
                      <a href={project.code} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="secondary">
                          GitHub
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="section-wrap pb-12">
          <Reveal>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let us build something meaningful</h2>
          </Reveal>

          <Reveal className="mt-8">
            <Card className="p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-white/70">
                    I am open to collaborating on scalable products, full stack systems, and high-impact startup features.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-white/85">
                    <a className="flex items-center gap-3 hover:text-accent" href="mailto:visionsneha5@gmail.com">
                      <Mail className="h-4 w-4" /> visionsneha5@gmail.com
                    </a>
                    <a
                      className="flex items-center gap-3 hover:text-accent"
                      href="https://www.linkedin.com/in/sneha-kumari-4b6056232/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                    <a
                      className="flex items-center gap-3 hover:text-accent"
                      href="https://github.com/snehakumari1112"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </div>
                </div>

                <form className="grid gap-3" onSubmit={handleContactSubmit}>
                  <input
                    className="glass rounded-xl px-4 py-3 text-sm outline-none ring-accent/20 transition focus:ring"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                  <input
                    className="glass rounded-xl px-4 py-3 text-sm outline-none ring-accent/20 transition focus:ring"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                  <textarea
                    className="glass min-h-28 rounded-xl px-4 py-3 text-sm outline-none ring-accent/20 transition focus:ring"
                    name="message"
                    placeholder="Message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                  />
                  <div>
                    <Button disabled={submitState.type === "loading"}>
                      {submitState.type === "loading" ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                  {submitState.type === "success" ? <p className="text-sm text-emerald-300">{submitState.message}</p> : null}
                  {submitState.type === "error" ? <p className="text-sm text-rose-300">{submitState.message}</p> : null}
                </form>
              </div>
            </Card>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Designed and engineered by Sneha Kumari. © 2026 All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}
