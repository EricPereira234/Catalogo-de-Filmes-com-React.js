import { useEffect, useState} from "react";
import { Link } from "react-router-dom";


import api from "../../services/api";


export default function Home() {

    const [filme,setFilme] = useState([]);

    useEffect(()=>{
        async function Load() {
            const response = await api.get('r-api/?api=filmes');
            setFilme(response.data);
        }
        Load();
    },[])

    return (
        <div className='container'>
            {filme.map((item)=>{
                return (
                    <>
                    <h1>{item.nome}</h1>
                    <img src={item.foto} />
                   
                    <Link to={`filme/${item.id}`} className="input" >Descrição</Link>
                    <hr/>
                    </>
                    
                )
            })}
        
        </div>
    );
}