import "./navbar.css";

export default function Navbar()
{
    return <nav className="nav">
        <ul>
            <li>
                <a href="/pokemon">Pokemon</a>
            </li>
            <li>
                <a href="/trainers">Trainers</a>
            </li>
        </ul>
    </nav>
}