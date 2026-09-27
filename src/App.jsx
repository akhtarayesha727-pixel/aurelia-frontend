import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Sparkles,
  Check,
  Mail,
  Phone,
  MapPin,
  Send,
  Palette,
  Layers,
  Zap,
  Heart,
  Quote,
  Code2,
  PenTool,
  Smartphone,
  Globe,
} from "lucide-react";

/* =========================================================
   AURELIA — MAIN APP
   Modern • Elegant • Responsive • Premium
========================================================= */

function App() {
  /* =======================================================
     NAVIGATION
  ======================================================= */

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  /* =======================================================
     WORK SLIDER
  ======================================================= */

  const projects = [
    {
      number: "01 / 04",
      title: "Digital Experiences",
      description:
        "Thoughtful digital experiences designed to feel intuitive, refined, and memorable across every screen.",
      tags: ["UX Design", "UI Design", "Strategy"],
      icon: Sparkles,
    },
    {
      number: "02 / 04",
      title: "Brand Identity",
      description:
        "Visual identities that bring clarity and personality to modern brands through purposeful design systems.",
      tags: ["Branding", "Visual Design", "Identity"],
      icon: Palette,
    },
    {
      number: "03 / 04",
      title: "Web Development",
      description:
        "Responsive and polished websites built with clean structure, thoughtful interactions, and performance in mind.",
      tags: ["React", "Frontend", "Responsive"],
      icon: Code2,
    },
    {
      number: "04 / 04",
      title: "Creative Strategy",
      description:
        "A strategic approach that connects design, technology, and communication to create meaningful digital products.",
      tags: ["Strategy", "Creative", "Digital"],
      icon: Layers,
    },
  ];

  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () => {
    setProjectIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setProjectIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const currentProject = projects[projectIndex];
  const ProjectIcon = currentProject.icon;

  /* =======================================================
     TESTIMONIAL SLIDER
  ======================================================= */

  const testimonials = [
    {
      quote:
        "Aurelia transformed our idea into an experience that feels effortless, polished, and genuinely thoughtful.",
      name: "Maya Richardson",
      role: "Creative Director",
    },
    {
      quote:
        "The process was clear from beginning to end. Every detail felt intentional, elegant, and beautifully executed.",
      name: "Daniel Morgan",
      role: "Founder & Entrepreneur",
    },
    {
      quote:
        "A rare combination of creativity and technical thinking. The final experience feels premium without feeling complicated.",
      name: "Sofia Bennett",
      role: "Brand Strategist",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setTestimonialIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const currentTestimonial = testimonials[testimonialIndex];

  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = "Please enter a valid email.";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please tell us a little about your project.";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  /* =======================================================
     SERVICES
  ======================================================= */

  const services = [
    {
      number: "01",
      icon: Palette,
      title: "Visual Design",
      description:
        "Elegant visual systems that create a consistent and memorable brand experience.",
    },
    {
      number: "02",
      icon: Code2,
      title: "Web Development",
      description:
        "Responsive interfaces built with clean code, thoughtful interactions, and modern technology.",
    },
    {
      number: "03",
      icon: Smartphone,
      title: "Digital Products",
      description:
        "Human-centered digital products designed around real users, real needs, and real outcomes.",
    },
    {
      number: "04",
      icon: PenTool,
      title: "Creative Direction",
      description:
        "A clear creative direction that brings strategy, storytelling, and visual identity together.",
    },
    {
      number: "05",
      icon: Globe,
      title: "Digital Strategy",
      description:
        "Practical digital strategies that turn ideas into meaningful and scalable experiences.",
    },
    {
      number: "06",
      icon: Zap,
      title: "Experience Design",
      description:
        "Smooth, intuitive experiences where every interaction has a clear purpose.",
    },
  ];

  /* =======================================================
     PRINCIPLES
  ======================================================= */

  const principles = [
    {
      title: "Purpose before decoration",
      text: "Every visual decision should serve a clear purpose.",
    },
    {
      title: "Simple, never ordinary",
      text: "We remove unnecessary complexity without removing personality.",
    },
    {
      title: "People at the center",
      text: "Every experience begins with understanding the people using it.",
    },
    {
      title: "Details matter",
      text: "Small interactions can create a surprisingly big difference.",
    },
    {
      title: "Built for tomorrow",
      text: "Flexible systems make digital experiences easier to evolve.",
    },
  ];

  return (
    <div className="app">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="background-grid"></div>
      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">
            <Sparkles size={19} />
          </span>

          <span>Aurelia</span>
        </button>

        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("principles")}>
            Approach
          </button>

          <button onClick={() => scrollToSection("work")}>
            Work
          </button>

          <button onClick={() => scrollToSection("testimonials")}>
            Stories
          </button>

          <button
            className="nav-cta"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </button>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section className="hero" id="home">
          <div className="container hero-grid">

            <div className="hero-content">

              <div className="eyebrow">
                <Sparkles size={13} />
                Digital studio
              </div>

              <h1>
                Ideas made
                <br />
                <span>beautifully</span>
                <br />
                digital.
              </h1>

              <p className="hero-description">
                Aurelia creates thoughtful digital experiences where
                strategy, design, and technology come together with
                intention.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("work")}
                >
                  Explore our work
                  <ArrowRight size={17} />
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("contact")}
                >
                  Start a project
                </button>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>24+</strong>
                  <span>Projects created</span>
                </div>

                <div>
                  <strong>12</strong>
                  <span>Brands transformed</span>
                </div>

                <div>
                  <strong>98%</strong>
                  <span>Client satisfaction</span>
                </div>
              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="hero-visual">

              <div className="visual-glow"></div>

              <div className="floating-card floating-one">
                ✦ Thoughtful design
              </div>

              <div className="floating-card floating-two">
                <Check size={14} />
                Built with purpose
              </div>

              <div className="visual-card">

                <div className="visual-header">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="visual-status">
                    <span className="status-dot"></span>
                    Creating
                  </div>

                </div>

                <div className="visual-content">

                  <div className="visual-icon">
                    <Sparkles size={29} />
                  </div>

                  <div className="visual-title">
                    A thoughtful
                    <br />
                    digital experience.
                  </div>

                  <div className="visual-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="visual-progress">
                    <p>Design progress</p>

                    <div className="progress-track">
                      <span></span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section className="services-section" id="services">
          <div className="container">

            <div className="section-heading">

              <div className="eyebrow">
                What we do
              </div>

              <h2>
                From first idea
                <br />
                to final experience.
              </h2>

              <p>
                A focused collection of creative and digital services
                designed to help ideas become clear, useful, and
                memorable.
              </p>

            </div>

            <div className="services-grid">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="service-card"
                    key={service.number}
                  >

                    <div className="service-icon">
                      <Icon size={22} />
                    </div>

                    <span className="service-number">
                      {service.number}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <ArrowRight
                      className="card-arrow"
                      size={19}
                    />

                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ===================================================
            PRINCIPLES
        =================================================== */}

        <section
          className="principles-section"
          id="principles"
        >
          <div className="container principles-wrapper">

            <div className="principles-intro">

              <div className="big-icon">
                <Heart size={27} />
              </div>

              <h2>
                Our way
                <br />
                of thinking.
              </h2>

              <p>
                Good design is more than appearance. It is clarity,
                intention, empathy, and the confidence to remove
                everything that does not belong.
              </p>

            </div>

            <div className="principles-list">

              {principles.map((principle, index) => (
                <div
                  className="principle"
                  key={principle.title}
                >

                  <span className="principle-number">
                    0{index + 1}
                  </span>

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>

                  <div className="principle-check">
                    <Check size={16} />
                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ===================================================
            WORK
        =================================================== */}

        <section className="work-section" id="work">
          <div className="container">

            <div className="section-heading">

              <div className="eyebrow">
                Selected work
              </div>

              <h2>
                A few things
                <br />
                we've made.
              </h2>

              <p>
                A glimpse into the kind of thoughtful digital work
                Aurelia brings to life.
              </p>

            </div>

            <div className="work-card" key={projectIndex}>

              <div className="work-info">

                <span className="work-number">
                  {currentProject.number}
                </span>

                <h3>{currentProject.title}</h3>

                <p>{currentProject.description}</p>

                <div className="work-tags">
                  {currentProject.tags.map((tag) => (
                    <span
                      className="work-tag"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="work-visual">

                <div className="work-orbit">

                  <div className="orbit-large"></div>
                  <div className="orbit-small"></div>

                  <div className="work-center">
                    <ProjectIcon size={39} />
                  </div>

                </div>

              </div>

            </div>

            <div className="slider-controls">

              <div>
                <button
                  className="slider-button"
                  onClick={previousProject}
                  aria-label="Previous project"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  className="slider-button"
                  onClick={nextProject}
                  aria-label="Next project"
                  style={{ marginLeft: "8px" }}
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="slider-dots">

                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${
                      index === projectIndex ? "active" : ""
                    }`}
                    onClick={() => setProjectIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            TESTIMONIALS
        =================================================== */}

        <section
          className="testimonial-section"
          id="testimonials"
        >
          <div className="container">

            <div className="section-heading">
              <div className="eyebrow">
                Client stories
              </div>

              <h2>
                Kind words from
                <br />
                good people.
              </h2>
            </div>

            <div className="testimonial-card">

              <div className="quote-mark">
                <Quote size={42} />
              </div>

              <blockquote>
                “{currentTestimonial.quote}”
              </blockquote>

              <div className="testimonial-author">

                <strong>
                  {currentTestimonial.name}
                </strong>

                <span>
                  {currentTestimonial.role}
                </span>
                </div>

              <div className="slider-controls" style={{ marginTop: "32px" }}>
                <div>
                  <button
                    className="slider-button"
                    onClick={previousTestimonial}
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    className="slider-button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    style={{ marginLeft: "8px" }}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className="slider-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`slider-dot ${
                        index === testimonialIndex ? "active" : ""
                      }`}
                      onClick={() => setTestimonialIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section className="contact-section" id="contact">
          <div className="container contact-grid">

            <div className="contact-info">
              <div className="eyebrow">
                Get in touch
              </div>

              <h2>
                Let's start something
                <br />
                <span>meaningful</span> together.
              </h2>

              <p>
                Have a project in mind, a question, or simply want to say hello? Send us a message and we'll be in touch soon.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <Mail size={18} />
                  <span>hello@aurelia.studio</span>
                </div>

                <div className="contact-detail">
                  <Phone size={18} />
                  <span>+1 (555) 234-5678</span>
                </div>

                <div className="contact-detail">
                  <MapPin size={18} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div className="form-success">
                  <Sparkles size={32} />
                  <h3>Message sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    className="secondary-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <span className="form-error">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <span className="form-error">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                    {formErrors.subject && (
                      <span className="form-error">{formErrors.subject}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                    />
                    {formErrors.message && (
                      <span className="form-error">{formErrors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="primary-button submit-button">
                    Send message
                    <Send size={16} />
                  </button>

                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="container footer-content">

          <div className="footer-brand">
            <span className="brand-mark">
              <Sparkles size={16} />
            </span>
            <span>Aurelia</span>
          </div>

          <p className="footer-copyright">
            © {new Date().getFullYear()} Aurelia Studio. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default App;
