import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Routes
import Layout from './components/Layout';
import Root from './routes/root';
import Item from './routes/item';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Root />,
			},
			{
				path: '/category/:id',
				element: <Root />,
			},
			{
				path: '/item/:id',
				element: <Item />,
			},
			{
				path: '/cart',
				element: <div>Hello world!</div>,
			},
			// {
			// 	path: '/checkout',
			// 	element: <div>Hello world!</div>,
			// },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
