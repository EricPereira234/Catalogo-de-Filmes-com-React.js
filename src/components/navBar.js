import {Link} from 'react-router-dom';



export default function nav() {
    return (
        <div className='barra' >
        <Link to='/'  className='link' > Home </Link>
        <Link to='/playlist' className='link' >Playlist </Link>
        </div>
        
    )
}