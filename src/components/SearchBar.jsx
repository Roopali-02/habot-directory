import React from 'react'

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <input
    type="text"
    placeholder="Search by name or specialization..."
    value={searchTerm}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  )
}

export default SearchBar