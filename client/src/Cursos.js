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

function Idioma(){
    const [idio, setidio] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/4")
        .then(res => {
            console.log(res)
            setidio(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    idio.map(idio => (<div key={idio.id_curso}>{idio.idioma}</div>
                        ))}
            </ul>
        </div>
    )
}


function Duracion1(){
    const [dura, setdura] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/1")
        .then(res => {
            console.log(res)
            setdura(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    dura.map(dura => (<div key={dura.id_curso}>{dura.duracion}</div>
                        ))}
            </ul>
        </div>
    )
}
function Duracion2(){
    const [dura, setdura] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/2")
        .then(res => {
            console.log(res)
            setdura(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    dura.map(dura => (<div key={dura.id_curso}>{dura.duracion}</div>
                        ))}
            </ul>
        </div>
    )
}

function Duracion3(){
    const [dura, setdura] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/3")
        .then(res => {
            console.log(res)
            setdura(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    dura.map(dura => (<div key={dura.id_curso}>{dura.duracion}</div>
                        ))}
            </ul>
        </div>
    )
}

function Duracion4(){
    const [dura, setdura] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/cursos/4")
        .then(res => {
            console.log(res)
            setdura(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    dura.map(dura => (<div key={dura.id_curso}>{dura.duracion}</div>
                        ))}
            </ul>
        </div>
    )
}
function Empresa1(){
    const [empra, setempra] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/empresas_cert/1")
        .then(res => {
            console.log(res)
            setempra(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    empra.map(empra => (<div key={empra.id_empresa}>{empra.nombre}</div>
                        ))}
            </ul>
        </div>
    )
}

function Empresa3(){
    const [empra, setempra] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/empresas_cert/3")
        .then(res => {
            console.log(res)
            setempra(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    empra.map(empra => (<div key={empra.id_empresa}>{empra.nombre}</div>
                        ))}
            </ul>
        </div>
    )
}
function Empresa4(){
    const [empra, setempra] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/empresas_cert/4")
        .then(res => {
            console.log(res)
            setempra(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    empra.map(empra => (<div key={empra.id_empresa}>{empra.nombre}</div>
                        ))}
            </ul>
        </div>
    )
}
function Empresa2(){
    const [empra, setempra] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:3300/empresas_cert/2")
        .then(res => {
            console.log(res)
            setempra(res.data)   
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
    <div>
            <ul>
                {
                    empra.map(empra => (<div key={empra.id_empresa}>{empra.nombre}</div>
                        ))}
            </ul>
        </div>
    )
}
export default Curso;
export {Curso2,Curso3,Curso4,Duracion1,Duracion2,Duracion3,Duracion4,Empresa1,Empresa2,Idioma,Empresa3,Empresa4};