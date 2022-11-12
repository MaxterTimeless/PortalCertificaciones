import React,{useState,useEffect} from "react";
import axios from 'axios';

function DataFetching(){
    const [nom, setnom] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/1")
        .then(res => {
            console.log(res)
            setnom(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <ul>
                {
                    nom.map(nom => (<li key={nom.id_curso}>{nom.nombre}</li>
                        ))}
            </ul>
        </div>
    )
}

export default DataFetching;


