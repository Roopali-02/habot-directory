import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProviders } from '../api/fetchProviders';
const ProviderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchProviders().then((data) => {
      const found = data.find((p) => p.id === Number(id));
      if (found) {
        setProvider(found);
      } else {
        setNotFound(true);
      }
    });
  }, [id]);

  if (notFound) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-red-500">Provider not found.</h2>
        <button
          className="mt-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );
  }

  if (!provider) {
    return <p className="p-4 text-gray-600">Loading...</p>;
  }

  const { name, specialization, location, rating, longDescription, contactEmail, phoneNumber } = provider;

  return (
    <div className='h-screen flex items-center bg-slate-100'>
    <div className="p-5 max-w-2xl sm:mx-auto bg-details rounded-2xl mx-6">
    <div className="text-3xl font-bold text-gray-800 mb-2 text-center">{name}</div>
    <p className="text-white mb-1">{specialization} · {location}</p>
    <p className="text-yellow-500 mb-4">⭐ {rating}</p>
    <p className="text-amber-300 mb-4">{longDescription}</p>

    <div className="bg-gray-300 p-4 rounded">
      <p className=''><strong>Email:</strong> {contactEmail}</p>
      <p><strong>Phone:</strong> {phoneNumber}</p>
    </div>

    <button
      className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-blue-700 w-full"
      onClick={() => navigate('/')}
    >
      ← Back to List
    </button>
  </div>
  </div>
  )
}

export default ProviderDetails