import React, {useEffect, useState} from 'react';
import '../css/Comentarios.css'

function Notes() {
    
    const [notes, setNotes] = useState([{
        title: '',
        content:''
    }])

    useEffect(() =>{
        fetch("https://finalapismart.herokuapp.com/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })
    return <div className='container'>
        <h1 className='color-white'> Comentarios </h1>
        <h4 className='color-white margin-b-50'>En esta sección podes enviarnos recomendaciones, preguntas o compentario para el desarrolo y la mejora del sitio y nosotros la publicamos para que sepas que trabajamos en ello</h4>
        <h5 className='color-white center-cc margin-b-50'> Comunicate con nosotros mediante este mail smartbytesdev@gmail.com</h5>
        {notes.map(note =>
            <div className='formulario'>
                <h1 className="color-white note-title center-cc">{note.title}</h1>
                <p className="color-white note-content center-cc">{note.content}</p>
                
            </div>
        )}
    </div>
}

export default Notes;