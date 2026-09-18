import React from "react";
import ReactDOM from "react-dom/client";
import Select from "react-select";
import "./styles.css";

const skills = [
"HTML5",
"CSS3",
"JavaScript (ES6+)",
"TypeScript",
"React.js",
"Redux",
"Zustand",
"Tailwind CSS",
"Bootstrap",
"Material UI",
"REST API",
"Node.js",
"Express",
"MongoDB",
"SQL",
"Git",
"GitHub",
];



const experience = [
"Developed and maintained front-end features for an AI Assistant Platform using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
"Built responsive, user-friendly interfaces across desktop and mobile devices.",
"Integrated REST APIs to connect front-end components with backend services.",
"Created reusable React components to improve code maintainability and development efficiency.",
"Collaborated with the team to deliver new features and resolve UI/UX issues in a timely manner.",
];

const subjectOptions = [
{
value: "frontend-developer",
label: "Frontend Developer Opportunity",
},
{
value: "react-developer",
label: "React Developer Opportunity",
},
{
value: "junior-react",
label: "Junior React Developer",
},
{
value: "frontend-job",
label: "Frontend Developer Job",
},
{
value: "internship",
label: "Internship Opportunity",
},
{
value: "freelance",
label: "Freelance Project",
},
{
value: "website-development",
label: "Website Development",
},
{
value: "collaboration",
label: "Collaboration",
},
{
value: "project-discussion",
label: "Project Discussion",
},
{
value: "other",
label: "Other",
},
];

function App() {
return ( <div className="app">

```
  {/* Navbar */}
  <header className="navbar">
    <a className="logo" href="#home">
      PZ<span></span>
    </a>

    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>

    {/* Hero */}
    <section id="home" className="hero section">

      <div className="hero-copy">

        <p className="eyebrow">
          FULL STACK DEVELOPER
        </p>

        <h1>
          Hi, I'm <span>Pratiksha Zine.</span>
        </h1>

        <p className="hero-text">
          I build responsive, user-friendly web applications with
          React.js, JavaScript, HTML, CSS and modern UI technologies.
        </p>

      <div className="actions">

  <a className="btn primary" href="#projects">
    View Projects <span>→</span>
  </a>

  <a className="btn secondary" href="#contact">
    Contact Me <span>→</span>
  </a>

</div>

        <div className="quick-links">

          <a
            href="https://www.linkedin.com/in/pratiksha-zine-b7890621b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/zinepratiksha3-debug/pratiksha-portfolio1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </div>

      <div className="hero-card">

        <div className="avatar">
  <img
    src="/asserts/image.png"
    alt="Pratiksha Zine"
  />
</div>

        <p>Frontend Developer</p>

        <strong>
          React.js · JavaScript
        </strong>

        <span>
          Responsive UI · REST APIs
        </span>

      </div>

    </section>

    {/* About */}
    <section id="about" className="section">

      <div className="section-heading">

        <p className="eyebrow">
          ABOUT ME
        </p>

        <h2>
          Building clean and practical web experiences.
        </h2>

      </div>

      <div className="about-grid">

        <p>
          I am a B.Tech graduate with a strong foundation in front-end
          and web development technologies. I have 1 year of hands-on
          experience building production-grade applications and working
          with React.js, JavaScript, HTML, CSS and Tailwind CSS.
        </p>

        <div className="stats">

          {/* <div>
            <strong>1+</strong>
            <span>Year Experience</span>
          </div> */}

          <div>
            <strong>17+</strong>
            <span>Technical Skills</span>
          </div>

          <div>
            <strong>2</strong>
            <span>Featured Projects</span>
          </div>

        </div>

      </div>

    </section>

    {/* Skills */}
    <section id="skills" className="section">

      <div className="section-heading">

        <p className="eyebrow">
          TECHNICAL SKILLS
        </p>

        <h2>
          Tools I work with.
        </h2>

      </div>

      <div className="skills">

        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}

      </div>

    </section>

    {/* Experience */}
    <section id="experience" className="section">

      <div className="section-heading">

        <p className="eyebrow">
          EXPERIENCE
        </p>

        <h2>
          Professional experience.
        </h2>

      </div>

      <article className="timeline-card">

        <div className="timeline-top">

          <div>

            <h3>
              Frontend Developer
            </h3>

            <p>
              Primal Infosys
            </p>

          </div>

          <span>
            1 Year
          </span>

        </div>

        <ul>

          {experience.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}

        </ul>

      </article>

    </section>

    {/* Projects */}
    <section id="projects" className="section">

      <div className="section-heading">

        <p className="eyebrow">
          PROJECTS
        </p>

        <h2>
          Selected work.
        </h2>

      </div>

      <div className="project-grid">

        {/* Project 1 */}
        <article className="project-card featured">

          <div className="project-number">
            01
          </div>

          <h3>
            Agri Assistant Platform
          </h3>

          <p>
            An AI-powered Agri Assistant Platform designed to provide
            farmers with smart agricultural guidance and support.
          </p>

          <ul>
            <li>Crop recommendations</li>
            <li>Weather updates</li>
            <li>Farming tips</li>
            <li>REST API integration</li>
            <li>Responsive React UI</li>
            <li>Reusable components</li>
          </ul>

          <div className="tags">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
            <span>REST API</span>
          </div>

        </article>

        {/* Project 2 */}
        <article className="project-card">

          <div className="project-number">
            02
          </div>

          <h3>
            CRM Application
          </h3>

          <p>
            A customer relationship management application for organizing
            customer information, leads, follow-ups, sales activities and
            customer interactions in one place.
          </p>

          <ul>
            <li>Customer management</li>
            <li>Lead and follow-up tracking</li>
            <li>REST API based frontend</li>
            <li>Responsive dashboard UI</li>
          </ul>

          <div className="tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>

          <p className="note">
            Add your GitHub repository link here after publishing the project.
          </p>

        </article>

{/* Project 3 */}
<article className="project-card featured">

  <div className="project-number">
    03
  </div>

  <h3>
    Activity Companion Platform
  </h3>

  <p>
    A modern activity companion platform designed to help users
    discover, manage and participate in activities through a
    simple and user-friendly interface.
  </p>

  <ul>
    <li>User registration and signup flow</li>
    <li>Video verification</li>
    <li>Activity management</li>
    <li>Responsive user interface</li>
    <li>React Router navigation</li>
    <li>Cloud storage integration</li>
  </ul>

  <div className="tags">
    <span>React.js</span>
    <span>TypeScript</span>
    <span>Tailwind CSS</span>
    <span>React Router</span>
    <span>Cloudflare R2</span>
  </div>

</article>

      </div>

    </section>

    {/* Contact */}
    <section id="contact" className="section contact">

      <div className="section-heading">

        <p className="eyebrow">
          CONTACT
        </p>

        <h2>
          Let's build something useful.
        </h2>

      </div>

      <p className="contact-text">
        I am open to frontend development opportunities and projects where
        I can contribute with React.js and modern web technologies.
      </p>

      {/* Contact Information */}
      <div className="contact-info">

        <a href="tel:9322895709">
          📱 +91 93228 95709
        </a>

        <a href="mailto:zinepratiksha3@gmail.com">
          📧 zinepratiksha3@gmail.com
        </a>

      </div>

      {/* Contact Form */}
      <form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
      >

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="name">
              Full Name *
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="email">
              Email Address *
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>

        </div>

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />

          </div>

          <div className="form-group">

            <label>
              Subject *
            </label>

            <Select
              options={subjectOptions}
              placeholder="Search or select subject..."
              isSearchable
              isClearable
              className="subject-select"
              classNamePrefix="subject"
            />

          </div>

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message *
          </label>

          <textarea
            id="message"
            rows="6"
            placeholder="Write your message..."
            required
          />

        </div>

        <button
          type="submit"
          className="btn primary submit-btn"
        >
          Send Message
        </button>

      </form>

      {/* Direct Contact */}
      <div className="contact-actions">

        <a
          className="btn primary"
          href="mailto:zinepratiksha3@gmail.com"
        >
          Email Me
        </a>

        <a
          className="btn secondary"
          href="https://www.linkedin.com/in/pratiksha-zine-b7890621b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>

      </div>

    </section>

  </main>

  {/* Footer */}
  <footer>

    <p>
      © {new Date().getFullYear()} Pratiksha Zine. Built with React.
    </p>

    <a href="#home">
      Back to top ↑
    </a>

  </footer>

</div>


);
}

ReactDOM.createRoot(
document.getElementById("root")
).render(
<React.StrictMode> <App />
</React.StrictMode>
);
