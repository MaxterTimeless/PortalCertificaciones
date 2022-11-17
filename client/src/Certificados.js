import React,{useState,useEffect} from "react";
import axios from 'axios';

function Certi (){
    const [nom, setnom] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/certificaciones/1")
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
                    nom.map(nom => (<div key={nom.id_curso}>{nom.nombre}</div>
                        ))}
            </ul>
        </div>
    )
}

function Tipo1 (){
    const [tipo, settipo] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/certificaciones/1")
        .then(res => {
            console.log(res)
            settipo(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <ul>
                {
                    tipo.map(tipo => (<div key={tipo.id_curso}>{tipo.tipo}</div>
                        ))}
            </ul>
        </div>
    )
}

function Area (){
    const [area, setarea] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/areas/1")
        .then(res => {
            console.log(res)
            setarea(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <ul>
                {
                    area.map(area => (<div key={area.id_curso}>{area.nombre}</div>
                        ))}
            </ul>
        </div>
    )
}

export default Certi;
export {Tipo1,Area};