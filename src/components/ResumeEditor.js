import React, { useState } from 'react'

function ResumeEditor({ addData }) {
  const [skill, setSkill] = useState('')
  const [education, setEducation] = useState({ name: '', link: '' })
  const [experience, setExperience] = useState('')
  const [interest, setInterest] = useState('')
  const [extracurricular, setExtracurricular] = useState('')

  const handleAddSkill = () => {
    if (skill.trim()) {
      addData('skills', skill)
      setSkill('')
    }
  }

  const handleAddEducation = () => {
    if (education.name.trim()) {
      addData('education', education)
      setEducation({ name: '', link: '' })
    }
  }

  const handleAddExperience = () => {
    if (experience.trim()) {
      addData('experience', experience)
      setExperience('')
    }
  }

  const handleAddInterest = () => {
    if (interest.trim()) {
      addData('interests', interest)
      setInterest('')
    }
  }

  const handleAddExtracurricular = () => {
    if (extracurricular.trim()) {
      addData('extracurriculars', extracurricular)
      setExtracurricular('')
    }
  }

  return (
    <div className="ResumeEditor">
      <h2>Resume Editor</h2>

      {/* Skills Section */}
      <div>
        <label>Skill: </label>
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button onClick={handleAddSkill}>Add</button>
      </div>

      {/* Education Section */}
      <div>
        <label>Education Name: </label>
        <input
          type="text"
          value={education.name}
          onChange={(e) =>
            setEducation((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <label>Link: </label>
        <input
          type="text"
          value={education.link}
          onChange={(e) =>
            setEducation((prev) => ({ ...prev, link: e.target.value }))
          }
        />
        <button onClick={handleAddEducation}>Add</button>
      </div>

      {/* Experience Section */}
      <div>
        <label>Experience: </label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <button onClick={handleAddExperience}>Add</button>
      </div>

      {/* Interests Section */}
      <div>
        <label>Interest: </label>
        <input
          type="text"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <button onClick={handleAddInterest}>Add</button>
      </div>

      {/* Extracurricular Section */}
      <div>
        <label>Extracurricular: </label>
        <input
          type="text"
          value={extracurricular}
          onChange={(e) => setExtracurricular(e.target.value)}
        />
        <button onClick={handleAddExtracurricular}>Add</button>
      </div>
    </div>
  )
}

export default ResumeEditor
