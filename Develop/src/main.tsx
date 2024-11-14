import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
// import CandidateSearchCard from './components/CandidateSearchCard'; // Import CandidateSearchCard
import SavedCandidates from './pages/SavedCandidates.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import CandidateSearch from './pages/CandidateSearch.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CandidateSearch 
                 />, // Use CandidateSearchCard as the main component
      },
      {
        path: '/SavedCandidates',
        element: <SavedCandidates />, // Pass empty props for now
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
