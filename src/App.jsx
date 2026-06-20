import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import profilePic from "./assets/profile.jpg";
import erpImg from "./assets/ERP.jpg";
import taskManagerImg from "./assets/task_managerapi.png";
import todoImg from "./assets/SAD.png";
import eduRiseImg from "./assets/Edu_rise.jpg";
import javaConsoleImg from "./assets/javaconsole.jpg";
import "./App.css";

const journey = [
  {
    title: "Basketball came first",
    meta: "Before tech",
    description:
      "For a long time, I only wanted basketball. It was the dream I was chasing until a knee injury changed the direction of my story and the fact that i couldn't get a visa to america to pursue my dreams.",
  },
  {
    title: "A creative detour",
    meta: "Finding another way to move",
    description:
      "I tried content creation, photography, Photoshop, video editing, and music production before I finally turned toward tech.",
  },
  {
    title: "Started with HTML and CSS",
    meta: "The first serious step",
    description:
      "Like many developers I watched online, I began with the basics, then joined ALX Backend Web Development to go deeper.",
  },
  {
    title: "The hackathon reset",
    meta: "Momentum returned",
    description:
      "When I doubted myself, a school hackathon pushed me back into motion. We reached the top 10 out of 60 teams.",
  },
  {
    title: "Built my first real client system",
    meta: "Work that shipped",
    description:
      "I collaborated with a friend to build a real erp system to sell it to local businesses, and it is still working in the shop.",
  },
  {
    title: "Now in Addis, looking for internship opportunities",
    meta: "The current chapter",
    description:
      "I’m still early in the journey, but I want strong mentors, real responsibility, and a chance to be productive.",
  },
  {
    title: "Full-stack and AI next",
    meta: "Forward direction",
    description:
      "Right now I work comfortably with Django and Tailwind CSS, and I want to grow into full-stack development and AI.",
  },
];

const projects = [
  {
    title: "NOAH ERP",
    image: erpImg,
    liveUrl: "https://dese-erp-last-version.onrender.com/",
    problem:
      "My brother’s mini market needed one system to handle stock, sales, purchasing, and reporting without jumping between tools.",
    solution:
      "I built a Django ERP workflow with real inventory tracking, POS checkout logic, profit calculation, and business analytics. It is live and actually used in the shop.",
    tech: ["Django", "PostgreSQL", "Business Logic"],
    learned:
      "Shipping something that runs in a real business taught me to care about stability, data flow, and responsibility.",
  },
  {
    title: "Task Manager API",
    image: taskManagerImg,
    liveUrl: "https://github.com/wenddii/my-api-project.git",
    problem:
      "I wanted a simple backend that could support a frontend or external client with predictable task operations.",
    solution:
      "I created a REST API for creating, updating, retrieving, and deleting tasks with structured endpoints and status tracking.",
    tech: ["Django REST Framework", "PostgreSQL", "API Design"],
    learned:
      "It sharpened my thinking around clear contracts, endpoint design, and maintainable backend structure.",
  },
  {
    title: "Simple To-Do Tracker",
    image: todoImg,
    liveUrl: "https://simple-todo-1-u0ir.onrender.com/",
    problem:
      "A lightweight daily planning tool needed a cleaner way to manage tasks without unnecessary complexity.",
    solution:
      "I built a focused Django app for creating, updating, and completing tasks with a straightforward interface.",
    tech: ["Django", "PostgreSQL", "Product Thinking"],
    learned:
      "The project reminded me that useful software is often about removing friction, not adding features.",
  },
  {
    title: "EDU_Rise Africa",
    image: eduRiseImg,
    liveUrl:
      "https://docs.google.com/presentation/d/17NSeV7U4q4EWbXAR91jyDv_hZh-LO1WmfU3ycoNOnlQ/edit",
    problem:
      "I wanted to explore how learning tools could work in low-connectivity environments for African students.",
    solution:
      "I built a concept prototype for an offline-first learning platform and developed the idea as a design document and presentation.",
    tech: ["Google Slides", "Miro", "Product Design"],
    learned:
      "It taught me to think about users, context, and access before code even starts.",
  },
  {
    title: "Java Student Registration System",
    image: javaConsoleImg,
    liveUrl: "https://github.com/wenddii/java_student_management.git",
    problem:
      "I needed a small structured program that could manage student records and grades from the command line.",
    solution:
      "I built a Java console application that registers students, stores academic data, and calculates final grades.",
    tech: ["Java", "Console App", "Problem Solving"],
    learned:
      "Even small tools helped me learn how to organize logic and data with more discipline.",
  },
];

const focusAreas = [
  "Backend Development",
  "System Design",
  "Business Software",
  "Content Creation",
];

const beyondCoding = ["Basketball", "Reading", "Building businesses", "Learning"];

const visualStory = [
  {
    title: "The basketball chapter",
    caption: "i am still a member in our schools basketball team. this photo was taken in Jimma university for the universities sport festival.",
    image: "/club1.jpg",
  },
  {
    title: "School clubs and teams",
    caption: "this photo shows me and Batch(ባች) club members,in this club we organize events related to church this photo was taken when we had a yearly trip to tana monastries..",
    image: "/club2.jpg",
  },
  {
    title: "The creative season",
    caption: "Before tech, I spent time in content creation, editing, design, and sound.",
    image: profilePic,
  },
  {
    title: "Learning in public",
    caption: "i used to make videos for students who wanted to apply to scholarships and other opportunities,now i am focused on documenting my journey.",
    image: "/youtube.jpg",
    link: "https://youtu.be/2w-9-nCaWrQ?si=Vf9RZYVB8-hvnWWP",
  },
];

const contactEndpoint = "https://formsubmit.co/ajax/wendwosen03@gmail.com";

function App() {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState("idle");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setEnquiryForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const submitEnquiry = async () => {
      setSubmitState("sending");

      try {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enquiryForm.name.trim(),
            email: enquiryForm.email.trim(),
            subject: enquiryForm.subject.trim() || "Portfolio enquiry",
            message: enquiryForm.message.trim(),
            _template: "table",
            _captcha: false,
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to send enquiry right now.");
        }

        setEnquiryForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitState("sent");
      } catch {
        setSubmitState("error");
      }
    };

    submitEnquiry();
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="story-page">
        <section id="intro" className="intro-section story-section">
          <motion.div
            className="intro-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow">Computer Science Student & Developer</p>
            <h1>Building software, learning business, and documenting the journey.</h1>
            <p className="intro-text">
              My name is Wendwosen Tessema. I am a 3rd year Information Systems student, and my
              story started on the basketball court. Injury changed that dream, so I spent time in
              creative work until tech became the place where I could keep building forward.
            </p>

            <div className="intro-meta">
              <span>Name: Wendwosen</span>
              <span>Current role: 3rd year Information Systems student & developer</span>
              <span>Mission: Build useful software, learn fast, and grow into a full-stack engineer.</span>
            </div>

            <div className="intro-actions">
              <a className="text-link" href="#projects">
                See selected work
              </a>
              <a className="text-link" href="#contact">
                Contact me
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="intro-panel"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <span className="panel-label">Now</span>
            <h2>In Addis, searching for an internship and trying to learn from the best mentors I can find.</h2>
            <p>
              I want to contribute with what I already know, stay productive, and keep moving
              toward full-stack development and AI.
            </p>
          </motion.aside>
        </section>

        <section id="story-photos" className="story-section">
          <div className="section-head">
            <p className="eyebrow">Story in Photos</p>
            <p>
              These photos show the parts of my life that shaped the way I think, build, and show up.
            </p>
          </div>

          <div className="visual-story-grid">
            {visualStory.map((item, index) => (
              <motion.article
                key={item.title}
                className="visual-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.image} alt={item.title} />
                  </a>
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
                <div className="visual-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="journey" className="story-section">
          <div className="section-head">
            <p className="eyebrow">Journey Timeline</p>
            <h2>The route from basketball to tech and back into confidence.</h2>
            <p>
              This timeline follows the real turning points: the injury, the creative detour,
              learning backend development, the hackathon, the ERP work, and the internship search.
            </p>
          </div>

          <div className="timeline-shell">
            {journey.map((step, index) => (
              <motion.article
                key={step.title}
                className="timeline-item"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <p className="timeline-meta">{step.meta}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="story-section">
          <div className="section-head">
            <p className="eyebrow">Selected Projects</p>
            <h2>Case studies with screenshots, live links, and the lessons behind them.</h2>
            <p>
              I wanted these to feel like real work, not generic cards. Each one shows the problem,
              solution, stack, and what happened after shipping.
            </p>
          </div>

          <div className="case-study-list">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="case-study"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="case-study-header">
                  <p className="case-number">0{index + 1}</p>
                  <h3>{project.title}</h3>
                </div>

                <div className="case-study-media">
                  <img src={project.image} alt={project.title} />
                  <div className="case-study-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live demo / demo link
                    </a>
                    {project.title === "NOAH ERP" && (
                      <span>Running in my brother’s mini market</span>
                    )}
                  </div>
                </div>

                <div className="case-study-grid">
                  <div>
                    <p className="case-label">Problem</p>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <p className="case-label">Solution</p>
                    <p>{project.solution}</p>
                  </div>
                  <div>
                    <p className="case-label">Technologies used</p>
                    <div className="chip-row">
                      {project.tech.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="case-label">What I learned</p>
                    <p>{project.learned}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="focus" className="story-section split-section">
          <div className="section-head">
            <p className="eyebrow">Current Focus</p>
            <h2>What I am learning and building now.</h2>
            <p>
              I keep this short on purpose. The goal is to show direction, not overwhelm with a
              long list.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => (
              <motion.div
                key={area}
                className="focus-item"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="beyond" className="story-section split-section">
          <div className="section-head">
            <p className="eyebrow">Beyond Coding</p>
            <h2>Small things that keep the work human.</h2>
            <p>
              Basketball still matters to me, and so does creative work, because they shaped how I
              handle pressure, rhythm, and consistency.
            </p>
          </div>

          <div className="beyond-grid">
            {beyondCoding.map((interest) => (
              <div key={interest} className="beyond-item">
                {interest}
              </div>
            ))}
          </div>

          <div className="youtube-strip">
            <a href="https://youtu.be/2w-9-nCaWrQ?si=Vf9RZYVB8-hvnWWP" target="_blank" rel="noreferrer">
              <img src="/youtube.jpg" alt="YouTube channel" />
              <span>My YouTube channel</span>
            </a>
          </div>
        </section>

        <section id="vision" className="story-section vision-section">
          <div className="section-head">
            <p className="eyebrow">Future Vision</p>
            <h2>In five years, I want to be building systems that matter.</h2>
          </div>

          <motion.div
            className="vision-panel"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I want to be the person who can move between backend engineering, product thinking,
              and the needs of a real business without losing clarity. My aim is to build tools
              that help teams work better, write about the process honestly, and keep learning in
              public as I grow.
            </p>
          </motion.div>
        </section>

        <section id="contact" className="story-section contact-section">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let's build something useful.</h2>
            <p>
              If you are hiring, collaborating, or just want to talk about software, business, or
              learning, I’m easy to reach.
            </p>
          </div>

          <div className="contact-layout">
            <form className="enquiry-form" onSubmit={handleFormSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={enquiryForm.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={enquiryForm.email}
                  onChange={handleFormChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={enquiryForm.subject}
                  onChange={handleFormChange}
                  placeholder="Internship, collaboration, enquiry"
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  value={enquiryForm.message}
                  onChange={handleFormChange}
                  placeholder="Write your enquiry here..."
                  rows="5"
                  required
                />
              </label>

              <div className="enquiry-actions">
                <button type="submit" className="contact-submit" disabled={submitState === "sending"}>
                  {submitState === "sending" ? "Sending..." : "Send enquiry"}
                </button>
                <p className="contact-note">
                  This sends directly to my email without opening your mail app.
                </p>
                {submitState === "sent" && <p className="contact-success">Thanks. Your message has been sent.</p>}
                {submitState === "error" && (
                  <p className="contact-error">
                    Something went wrong. Please try again or use the email link below.
                  </p>
                )}
              </div>
            </form>

            <div className="contact-links-panel">
              <a className="contact-link" href="mailto:wendwosen03@gmail.com">
                Email
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/wendwosen-tessema-3b8733274?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="contact-link" href="https://github.com/wendii" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;