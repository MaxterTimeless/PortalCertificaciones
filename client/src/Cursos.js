import React,{useState,useEffect} from "react";
import axios from 'axios';

function Curso(){
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
                    nom.map(nom => (<div key={nom.id_curso}>{nom.nombre}</div>
                        ))}
            </ul>
        </div>
    )
}

 function Curso2(){
    const [nom, setnom] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/2")
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


 function Curso3(){
    const [nom, setnom] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/3")
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

function Curso4(){
    const [nom, setnom] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/4")
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

export default Curso;
export {Curso2,Curso3,Curso4};