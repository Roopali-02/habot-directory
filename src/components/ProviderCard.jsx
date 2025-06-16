import React from 'react'
import { Link } from 'react-router-dom';

const ProviderCard = ({ provider }) => {
  const { id, name, specialization, location, rating, shortDescription } = provider;
  return (
    <div className="bg-card rounded-xl shadow p-4 flex flex-col justify-between h-full">
    <div>
      <div className="font-semibold text-gray-200 text-xl mb-2">{name}</div>
      <p className="text-sm text-gray-900 font-semibold">{specialization} · <span className='text-zinc-300'>{location}</span></p>
      <p className="text-yellow-300 mt-1">⭐ {rating}</p>
      <p className="text-amber-100 text-sm mt-2">{shortDescription}</p>
    </div>
    <div className="mt-4">
      <Link
        to={`/providers/${id}`}
        className="inline-block px-3 py-2 bg-black text-white text-sm rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  </div>
);
}

export default ProviderCard