import React from 'react';

const About = () => {
  const personalInfo = [
    { label: "Name:", value: "Sampanna Ghimire" },
    { label: "📍 Location:", value: "Nepal" },
    { label: "📊 Status:", value: "Recent Graduate" }
  ];

  const educationInfo = [
    { label: "Level:", value: "Class 12 (SEE Passed)" },
    { label: "School:", value: "Adarsha Secondary School" },
    { label: "Focus:", value: "Science & Technology" }
  ];

  const interestsInfo = [
    { label: "Programming:", value: "Full-Stack Development" },
    { label: "Design:", value: "UI/UX with Figma" },
    { label: "Goal:", value: "Software Engineer" }
  ];

  const skillBadges = [
    { text: "🧩 Problem Solver", className: "problem-solver" },
    { text: "💻 Tech Enthusiast", className: "tech-enthusiast" },
    { text: "📚 Lifelong Learner", className: "lifelong-learner" }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" style={{color: '#4f46e5'}}>About Me</h2>
        <p className="section-subtitle">
          A dedicated student with a strong foundation in programming and a passion for learning new technologies
        </p>

        <div className="about-main-grid">
          <div className="my-story-card">
            <div className="story-header">
              <span className="story-icon">📖</span>
              <h3>My Story</h3>
            </div>
            <p>
              "Hello! I'm Sampanna Ghimire, currently studying in Class 12 at Adarsha Secondary School with an unwavering passion for technology and programming. My journey into the world of coding began with curiosity and has evolved into a deep commitment to creating innovative solutions."
            </p>
            <p>
              With expertise in multiple programming languages including C, C++, Java, and C#, along with web development skills in HTML, CSS, and JavaScript, I'm constantly expanding my technical knowledge. I've also developed skills in UI/UX design using Figma, allowing me to bridge the gap between design and development.
            </p>

            <div className="skill-badges">
              {skillBadges.map((badge, index) => (
                <span key={index} className={`skill-badge ${badge.className}`}>
                  {badge.text}
                </span>
              ))}
            </div>
          </div>

          <div className="profile-image-card">
            <img 
              src="/sampanna-new.jpg"
              alt="Sampanna Ghimire"
              className="profile-image"
            />
            <div className="profile-tag">Developer</div>
          </div>
        </div>

        <div className="info-cards-grid">
          <div className="info-card personal-info">
            <div className="card-header">
              <span className="card-icon">👤</span>
              <h4>Personal Info</h4>
            </div>
            <div className="info-list">
              {personalInfo.map((info, index) => (
                <div key={index} className="info-row">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card education">
            <div className="card-header">
              <span className="card-icon">🎓</span>
              <h4>Education</h4>
            </div>
            <div className="info-list">
              {educationInfo.map((info, index) => (
                <div key={index} className="info-row">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card interests">
            <div className="card-header">
              <span className="card-icon">💡</span>
              <h4>Interests</h4>
            </div>
            <div className="info-list">
              {interestsInfo.map((info, index) => (
                <div key={index} className="info-row">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;