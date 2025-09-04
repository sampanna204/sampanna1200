import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            setVisibleSkills(prev => [...new Set([...prev, skillId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('[data-skill-id]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Category cards data
  const categoryCards = [
    {
      title: 'Programming Languages',
      tags: ['Programming', 'OOP', 'Logic', 'Algorithms'],
      description: 'Mastering core programming concepts'
    },
    {
      title: 'Web Technologies',
      tags: ['HTML', 'CSS', 'JavaScript'],
      description: 'Building modern web applications'
    },
    {
      title: 'Design Tools',
      tags: ['Figma', 'UI/UX Design'],
      description: 'Creating beautiful user interfaces'
    }
  ];

  // Individual skill cards
  const skillCards = [
    {
      name: 'C Programming',
      category: 'System Programming',
      description: 'Low-level programming and system development',
      proficiency: 85,
      icon: '💻',
      color: '#3B82F6'
    },
    {
      name: 'C++',
      category: 'Object Oriented Programming',
      description: 'Advanced programming with OOP paradigms',
      proficiency: 80,
      icon: '⚡',
      color: '#8B5CF6'
    },
    {
      name: 'Java',
      category: 'Enterprise Development',
      description: 'Cross-platform application development',
      proficiency: 75,
      icon: '☕',
      color: '#F59E0B'
    },
    {
      name: 'C#',
      category: '.NET Framework',
      description: 'Microsoft technology stack development',
      proficiency: 70,
      icon: '#️⃣',
      color: '#10B981'
    },
    {
      name: 'HTML',
      category: 'Web Structure',
      description: 'Semantic markup and web page structure',
      proficiency: 95,
      icon: '🌐',
      color: '#EF4444'
    },
    {
      name: 'CSS',
      category: 'Styling',
      description: 'Modern styling and responsive design',
      proficiency: 90,
      icon: '🎨',
      color: '#3B82F6'
    },
    {
      name: 'JavaScript',
      category: 'Web Development',
      description: 'Interactive web applications and DOM manipulation',
      proficiency: 85,
      icon: '⚡',
      color: '#F59E0B'
    },
    {
      name: 'Figma',
      category: 'UI/UX Design',
      description: 'User interface design and prototyping',
      proficiency: 75,
      icon: '🎨',
      color: '#8B5CF6'
    },
    {
      name: 'WordPress',
      category: 'Content Management',
      description: 'Website development and content management systems',
      proficiency: 80,
      icon: '📝',
      color: '#21759B'
    },
    {
      name: 'Bootstrap',
      category: 'CSS Framework',
      description: 'Responsive web design and component library',
      proficiency: 85,
      icon: '🚀',
      color: '#7952B3'
    },
    {
      name: 'React.js',
      category: 'JavaScript Library',
      description: 'Building dynamic user interfaces and single-page applications',
      proficiency: 80,
      icon: '⚛️',
      color: '#61DAFB'
    }
  ];

  // Core technologies
  const coreTools = [
    { name: 'Systems', icon: '💻', description: 'Core / OS' },
    { name: 'Enterprise', icon: '🏢', description: 'Java / .NET' },
    { name: 'Frontend', icon: '🌐', description: 'HTML / CSS' },
    { name: 'Interactive', icon: '⚡', description: 'JavaScript' },
    { name: 'Design', icon: '🎨', description: 'Figma' }
  ];

  return (
    <section id="skills" className="skills-section-modern">
      <div className="container">
        <div className="skills-header-modern">
          <h2 className="skills-title-modern">Skills & Technologies</h2>
          <p className="skills-subtitle-modern">
            A comprehensive overview of my programming languages, web development skills, and design capabilities
          </p>
        </div>

        {/* Category Cards */}
        <div className="category-cards-grid">
          {categoryCards.map((category, index) => (
            <div key={index} className="category-card-large" data-skill-id={`category-${index}`}>
              <div className="category-card-image">
                <div className="category-placeholder-image">
                  <span className="category-icon-large">
                    {index === 0 ? '💻' : index === 1 ? '🌐' : '🎨'}
                  </span>
                </div>
                <div className="category-overlay">
                  <div className="category-tags">
                    {category.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="category-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="category-card-content">
                <h3 className="category-card-title">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Skill Cards */}
        <div className="skills-cards-grid">
          {skillCards.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card-detailed ${visibleSkills.includes(`skill-${index}`) ? 'visible' : ''}`}
              data-skill-id={`skill-${index}`}
            >
              <div className="skill-card-header">
                <div className="skill-icon-container" style={{ backgroundColor: skill.color }}>
                  <span className="skill-icon-emoji">{skill.icon}</span>
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-category">{skill.category}</p>
                </div>
              </div>
              <p className="skill-description-text">{skill.description}</p>
              <div className="skill-proficiency">
                <div className="proficiency-header">
                  <span>Proficiency</span>
                  <span className="proficiency-percentage">{skill.proficiency}%</span>
                </div>
                <div className="proficiency-bar">
                  <div 
                    className="proficiency-fill" 
                    style={{ 
                      width: visibleSkills.includes(`skill-${index}`) ? `${skill.proficiency}%` : '0%',
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Technologies Section */}
        <div className="core-technologies-section">
          <h3 className="core-tech-title">Core Technologies & Tools</h3>
          <p className="core-tech-subtitle">
            My expertise spans across multiple programming paradigms, web technologies, and design tools
          </p>
          <div className="core-tools-grid">
            {coreTools.map((tool, index) => (
              <div key={index} className="core-tool-card">
                <div className="core-tool-icon">
                  <span>{tool.icon}</span>
                </div>
                <div className="core-tool-info">
                  <h4 className="core-tool-name">{tool.name}</h4>
                  <p className="core-tool-description">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;