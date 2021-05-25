import React, {useState, useEffect} from 'react';
import {getAllPosts} from '../../services/post'
import Post from '../Post/Post.jsx'
import NavBar from '../NavBar/NavBar'

import './Posts.css'

export default function Posts() {
  const [post, setPost] = useState([]) 

  useEffect(async () => {
      const posts = await getAllPosts()
      setPost(posts);
    }, []);

    if (!post[0]) {
      return "Loading..."
    } else {
      return (
			  <>
				<NavBar />
				<div className="todo">
					<div className="cards">
						{post && post.map((p) => 
                 <Post 
                  id= {p.id}
                  titulo = {p.titulo}
                  fecha={p.fecha}
                  descripcionCorta={p.descripcionCorta}
                  ubicacion={p.descripcionLarga}
                  descripcionLarga={p.descripcionLarga}
                  precio={p.precio}
                  stock={p.stock}
                  codigoPostal={p.codigoPostal}
                  imagen={p.imagen}
                /> 
            )}
					</div>
				</div>
			</>
		);
  }
}


