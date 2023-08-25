const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');


const VerVentaPage = () => {

    let { id } = useParams();
    const [venta, setVenta] = useState({});
    const [ingresos, setIngresos] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventas/' + id
        }).done(response => setVenta(response.entity))
        client({
            method: 'GET',
            path: '/api/ventas/' + id + '/formacion'
        }).done(response => setIngresos(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Venta</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{venta.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Marca</th>
                    </tr>
                </thead>
                <tbody>

                    {ingresos.map(ingreso=>{
                        return(
                            <tr key={ingreso.ID}>
                                <td>{ingreso.PRODUCTO}</td>
                                <td>{ingreso.MARCA}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-venta/${id}/nuevo-ingreso`}>Nuevos Ingresos</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerVentaPage;