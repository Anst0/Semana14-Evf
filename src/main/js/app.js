const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoProductoPage = require('./pages/nuevo-producto');
const VerMarcaPage = require('./pages/ver-marca');
const NuevoMarcaPage = require('./pages/nuevo-marca');
const VerProductoPage = require('./pages/ver-producto');
//const EditarMarcaPage = require('./pages/editar-marca');
const VerVentaPage = require('./pages/ver-venta');
//const NuevoIngresoPage = require('./pages/nuevo-ingreso');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-marca/:id', element: <VerMarcaPage /> },
	{ path: '/nuevo-marca', element: <NuevoMarcaPage /> },
	{ path: '/ver-producto/:id', element: <VerProductoPage /> },
	{ path: '/nuevo-producto', element: <NuevoProductoPage /> },
	{ path: '/editar-marca/:id', element: <EditarMarcaPage /> },

	{ path: '/ver-venta/:id', element: <VerVentaPage /> },
	{ path: '/ver-venta/:id/nuevo-ingreso', element: <NuevoIngresoPage /> },
])



ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
