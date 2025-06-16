import { useEffect, useState } from 'react';
import ProviderCard from '../components/ProviderCard';
import SearchBar from '../components/SearchBar';
import { fetchProviders } from '../api/fetchProviders';

const ProviderList = () => {
	const [providers, setProviders] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetchProviders().then((data) => setProviders(data));
	}, []);

	const filteredProviders = providers.filter((provider) => {
		const term = searchTerm.toLowerCase();
		return (
			provider.name.toLowerCase().includes(term) ||
			provider.specialization.toLowerCase().includes(term)
		);
	});

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-10 text-center">Learning Support Providers</h1>
			<SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />

{filteredProviders.length === 0 ? (
	<p className="text-gray-500">No providers found.</p>
) : (
	<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{filteredProviders.map((provider) => (
			<ProviderCard key={provider.id} provider={provider} />
		))}
	</div>
)}
		</div>
	);
};

export default ProviderList;
