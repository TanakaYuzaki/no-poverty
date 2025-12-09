import './Navbar.css'
import logo from '../../assets/logo.png'
export default function Navbar(){
    return(
        <nav className = "nav">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <a href="/no-poverty/" className="site-title">Trang Chủ</a>
            <ul>
                <li>
                    <a href="/no-poverty/video">Poster và Phim</a>
                </li>
                <li>
                    <a href="/no-poverty/about">Về nhóm chúng mình</a>
                </li>
                <li>
                    <a href="/no-poverty/contract">Hợp đồng</a>
                </li>
            </ul>
        </nav>
    )
}