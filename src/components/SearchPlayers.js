import React, { useState } from 'react'

const SearchableList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const players = [
    'Sachin Tendulkar',
    'Virat Kohli',
    'MS Dhoni',
    'Rohit Sharma',
    'Jacques Kallis',
    'AB de Villiers',
    'Chris Gayle',
    'Kane Williamson',
    'Steve Smith',
    'Joe Root',
  ]

  const filteredPlayers = players.filter((player) =>
    player.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2>Searchable List</h2>
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
      />
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {filteredPlayers.map((player, index) => (
          <li
            key={index}
            style={{ padding: '5px 0', borderBottom: '1px solid #ccc' }}
          >
            {player}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchableList
