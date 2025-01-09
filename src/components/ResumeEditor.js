import React, { useState } from 'react'
import useResumeDispatch from '../hooks/ResumeDispatch'

function ResumeEditor() {
  const [skill, setSkill] = useState('')
  const [education, setEducation] = useState({ name: '', link: '' })
  const [experience, setExperience] = useState('')
  const [interest, setInterest] = useState('')
  const [extracurricular, setExtracurricular] = useState('')

  const resumedispatch = useResumeDispatch()

  const handleAddSkill = () => {
    if (skill.trim()) {
      resumedispatch({ type: 'ADDRESUME', section: 'skills', payload: skill })
      setSkill('')
    }
  }

  const handleAddEducation = () => {
    if (education.name.trim()) {
      resumedispatch({
        type: 'ADDRESUME',
        section: 'education',
        payload: education,
      })
      setEducation({ name: '', link: '' })
    }
  }

  const handleAddExperience = () => {
    if (experience.trim()) {
      resumedispatch({
        type: 'ADDRESUME',
        section: 'experience',
        payload: experience,
      })
      setExperience('')
    }
  }

  const handleAddInterest = () => {
    if (interest.trim()) {
      resumedispatch({
        type: 'ADDRESUME',
        section: 'interests',
        payload: interest,
      })
      setInterest('')
    }
  }

  const handleAddExtracurricular = () => {
    if (extracurricular.trim()) {
      resumedispatch({
        type: 'ADDRESUME',
        section: 'extracurriculars',
        payload: extracurricular,
      })
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
