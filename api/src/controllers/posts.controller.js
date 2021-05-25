const { conn } = require('../db.js');
const { Post } = require('../db');


// Agrega un nuevo post
const postAgregar = async (req, res) => {
    const post = await Post.create({
        fecha: req.body.fecha,
        titulo: req.body.titulo,
        descripcionCorta: req.body.descripcionCorta,
        descripcionLarga: req.body.descripcionLarga,
        ubicacion: req.body.ubicacion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
    });
    if(!post) {
        res.status(400).json({message: 'No se pudo agregar correctamente el post'});
    } else {
        res.status(200).json({message: 'Se agrego correctamente el post'});
    }
}

// Busca todos los post que estan en la db
const allPosts = async (req, res) => {
    const posts = await Post.findAll();
    if (!posts) {
        res.status(404).send({message: 'No hay post cargados'});
    } else {
        const result = [];
        result.push(posts);
        res.status(200).send(posts)
    }
}

// Elimina un post de la db pasandole su id
const deletePost = async (req, res) => {
    const post = await Post.findOne(
        { where: { id: req.params.id } }
    );
    if (!post) {
        res.status(400).send({message: 'No se encuentra el post'})
    } else {
        await post.destroy();
        res.status(200).send({message: 'Post eliminado correctamente'})
    }
}

// Edito un post de la db
const editPost = async (req, res) => {
    const post = await Post.findOne({
        where: { id: req.params.id}
    })
    if (!post) {
		res.status(400).send({ message: "No se encuentra el post" });
	} else {
		post.fecha = req.params.fecha;
		post.titulo = req.params.titulo;
		post.descripcionCorta = req.params.descripcionCorta;
		post.descripcionLarga = req.params.descripcionLarga;
		post.ubicacion = req.params.ubicacion;
		post.precio = req.params.precio;
		post.stock = req.params.stock;
		post.codigoPostal = req.params.codigoPostal;
		post.imagen = req.params.imagen;
		res.status(200).send({ message: "Post editado correctamente" });
	}
}
    

module.exports = {
    postAgregar,
    allPosts,
    deletePost,
    editPost,
}