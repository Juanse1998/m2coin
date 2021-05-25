import React, { useState, useEffect } from "react";
import "./AddPost.css";
import axios from "axios";
import NavBar from "../NavBar/NavBar";

class AddPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titulo: "",
			descripcionCorta: "",
			descripcionLarga: "",
			ubicacion: "",
			fecha: "",
			stock: "",
			codigoPostal: "",
			imagen: "",
		};


		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	async handleSubmit(event) {
		const datos = {
			titulo: this.state.titulo,
			fecha: this.state.fecha,
			descripcionCorta: this.state.descripcionCorta,
			descripcionLarga: this.state.descripcionLarga,
			precio: this.state.precio,
			stock: this.state.stock,
			codigoPostal: this.state.codigoPostal,
			imagen: this.state.imagen,
			ubicacion: this.state.ubicacion,
		};
		event.preventDefault();
		axios.post(`/addPost`, datos).then((res) => res);
	}
	render() {
		const {
			titulo,
			fecha,
			descripcionCorta,
			ubicacion,
			descripcionLarga,
			precio,
			stock,
			codigoPostal,
			imagen,
		} = this.state;
		return (
			<>
				<NavBar />
				<div className="contenedor">
					<form className="inputs" onSubmit={this.handleSubmit}>
						<div className="name">
							<b>Titulo:</b>
							<input
								type="text"
								name="titulo"
								value={titulo}
								onChange={this.handleChange}
							/>
						</div>
						<div className="description">
							<b> Descripcion corta:</b>
							<input
								type="text"
								name="descripcionCorta"
								value={descripcionCorta}
								onChange={this.handleChange}
							/>
						</div>
						<div className="fecha">
							<b> Fecha: </b>
							<input
								type="text"
								name="fecha"
								value={fecha}
								onChange={this.handleChange}
							/>
						</div>
						<div className="genero">
							<b> Descripcion Larga: </b>
							<input
								type="text"
								name="descripcionLarga"
								value={descripcionLarga}
								onChange={this.handleChange}
							/>
						</div>
						<div className="plataformas">
							<b> Ubicacion: </b>
							<input
								type="text"
								name="ubicacion"
								value={ubicacion}
								onChange={this.handleChange}
							/>
						</div>
						<div className="plataformas">
							<b> Precio: </b>
							<input
								type="text"
								name="precio"
								value={precio}
								onChange={this.handleChange}
							/>
						</div>
						<div className="plataformas">
							<b> stock: </b>
							<input
								type="text"
								name="stock"
								value={stock}
								onChange={this.handleChange}
							/>
						</div>
						<div className="plataformas">
							<b> Imagen: </b>
							<input
								type="text"
								name="imagen"
								value={imagen}
								onChange={this.handleChange}
							/>
						</div>
						<div className="bttn">
							<button type="submit"> Agregar </button>
						</div>
					</form>
				</div>
			</>
		);
	}
}
export default AddPost;
