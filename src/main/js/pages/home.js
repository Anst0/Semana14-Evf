const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { marcas: [], productos: [], ventas: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/ventas' }).done(response => {
			this.setState({ ventas: response.entity._embedded.ventas });
		});

	}

	render() {
		return (
			<>
				<h1>Semana 14 Evf Juan Angel Monzon Velasquez(componente: HomePage)</h1>
				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Ventas" emoji="👩🏼‍🎤" />
						<BandaList ventas={this.state.ventas} />
						<Link to="/nueva-venta">Nueva Venta</Link>
					</div>
				</div>
			</>
		)
	}
}


const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class VentaList extends React.Component {
	render() {
		const ventas = this.props.ventas.map(venta =>
			<venta key={venta._links.self.href} venta={venta} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Marca</th>
					</tr>
					{ventas}
				</tbody>
			</table>
		)
	}
}


class Venta extends React.Component {
	render() {
		const id = this.props.venta._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.venta.nombre}</td>
				<td>
					<Link to={"/ver-venta/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;