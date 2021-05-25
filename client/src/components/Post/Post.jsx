import React, {useState} from 'react';
import './Post.css'
import { Link } from 'react-router-dom';
import { deletePost } from "../../services/post";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};


export default function Post(
	{	
		id,
		titulo,
		fecha,
		descripcionCorta,
		ubicacion,
		descripcionLarga,
		precio,
		stock,
		codigoPostal,
		imagen
	}){

	var subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}

	async function handleSubmit(id) {
		const res = await deletePost(id);
	}

	if (!titulo) {
		return "Loading ..."
	} else 
	return (
		<>
			<div class="card">
				<div className="card-body">
					<h5 className="card-title">{titulo}</h5>
					<div className="row">
						<div className="col-sm-4 col-md-4 col-lg-4">
							<img src={imagen} width="170" height="120" alt="" />
						</div>
					</div>
					<div>Precio: {precio}</div>
					<div style={{ marginTop: "10px" }}>Ubicacion: {ubicacion}</div>

					<button
						size="small"
						color="black"
						style={{
							backgroundColor: "#96eada",
							position: "absolute",
							marginTop: "26px",
							marginLeft: "120px",
							borderRadius: "5px",
						}}
						type="button"
						onClick={() => handleSubmit(id)}
					>
						Eliminar
					</button>
					<button
						size="small"
						color="black"
						style={{
							backgroundColor: "#96eada",
							position: "absolute",
							marginTop: "26px",
							marginLeft: "3px",
							borderRadius: "5px",
						}}
						type="button"
						onClick={() => openModal()}
					>
						Detalles
					</button>
					<Modal
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Example Modal"
					>
						<h2 ref={(_subtitle) => (subtitle = _subtitle)}>{titulo}</h2>
						<div style={{ marginTop: "10px" }}>
							Descripcion: {descripcionLarga}
						</div>
						<div style={{ marginTop: "10px" }}>Stock: {stock}</div>
						<div style={{ marginTop: "10px" }}>Fecha: {fecha}</div>
						<div style={{ marginTop: "10px" }}>Descripcion: {descripcionCorta}</div>
						<button style={{ marginTop: "10px" }} onClick={closeModal}>
							close
						</button>
					</Modal>
				</div>
			</div>
		</>
	);
};