import React, { useState } from 'react'

const FormEvent = () => {
  const [nations, setNations] = useState([])
  const [countryName, setCountryName] = useState('')
  const [countryCode, setCountryCode] = useState('')

  const handleAddCountry = () => {
    if (countryName.trim() && countryCode.trim()) {
      setNations([...nations, { name: countryName, code: countryCode }])
      setCountryName('')
      setCountryCode('')
    } else {
      alert('Please provide both country name and code.')
    }
  }

  const handleSelection = (event) => {
    console.log('Selected Country:', event.target.value)
  }

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2>Country Dropdown Menu</h2>
      <select
        onChange={handleSelection}
        style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
      >
        <option value="" disabled selected>
          Select a country
        </option>
        {nations.map((nation, index) => (
          <option key={index} value={nation.code}>
            {nation.name}
          </option>
        ))}
      </select>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Country Name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          style={{
            padding: '8px',
            marginRight: '5px',
            width: 'calc(50% - 10px)',
          }}
        />
        <input
          type="text"
          placeholder="Country Code"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          style={{
            padding: '8px',
            marginRight: '5px',
            width: 'calc(50% - 10px)',
          }}
        />
        <button onClick={handleAddCountry} style={{ padding: '8px 15px' }}>
          Add Country
        </button>
      </div>
    </div>
  )
}

export default FormEvent
