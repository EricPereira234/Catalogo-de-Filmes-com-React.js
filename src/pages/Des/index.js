import {React,useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

import api from '../../services/api'

export default function Fav() {
    const [filme,setFilme] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        async function Des() {
        const resulte = await api.get(`r-api/?api=filmes/${id}`);
        setFilme(resulte.data);

        }
        Des();
    },[id])

    return (
        <div className='container'>
        
                <>
                <h1>{filme.nome}</h1>
                <img src={filme.foto} />
                <p>{filme.sinopse}</p>
                <input type='submit' value='Salvar' /><hr/>
                </>
                
            
        
    </div>
    );
}