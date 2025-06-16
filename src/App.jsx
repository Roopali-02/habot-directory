import {  } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';
import ProviderDetails from './pages/ProviderDetails';
function App() {
 

	return (
	 <Routes>
		<Route path="/" element={<ProviderList />} />
		<Route path="/providers/:id" element={<ProviderDetails />} />
	 </Routes>
	)
}

export default App
