import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [overview, setOverview] = useState({});
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [overviewRes, skillsRes, educationRes, projectsRes, experienceRes] = await Promise.all([
          fetch('http://localhost:8000/overview').then((res) => res.json()),
          fetch('http://localhost:8000/skills').then((res) => res.json()),
          fetch('http://localhost:8000/education').then((res) => res.json()),
          fetch('http://localhost:8000/projects').then((res) => res.json()),
          fetch('http://localhost:8000/experience').then((res) => res.json()),
        ]);

        setOverview(overviewRes);
        setSkills(skillsRes);
        setEducation(educationRes);
        setProjects(projectsRes);
        setExperience(experienceRes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <section className="personal-info">
        <h2>Lior Kozai</h2>
        <p>Humber Polytechnic Computer Programming Graduate</p>
        <p>Email: l.b.kozai@gmail.com</p>
      </section>
      <section className="section">
        <h2>Overview</h2>
        <p>{overview.bio}</p>
      </section>
      <section className="section">
        <h2>Summary of Relevant Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.skill}</li>
          ))}
        </ul>
      </section>
      <section className="section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.school}</h3>
            <ul>
              <li>{edu.degree} ({edu.dates})</li>
            </ul>
          </div>
        ))}
      </section>
      <section className="section">
        <h2>Academic Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.language}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
      <section className="section">
        <h2>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.company}</h3>
            <ul>
              <li>{exp.role} ({exp.duration})</li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
