import { Link } from "react-router-dom";
import './Header.css'


export default function Header() {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
        </div>
    )
}