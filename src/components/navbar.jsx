export default function Navbar() {
    return (
        <div className="container">
        <div className="fix">
        <div className="navbar">
            <a href="index.html" className="name">Serhat Koç</a>
            <ul className="items">
                <li><a href="#anasayfa" className="item">Anasayfa</a></li>
                <li><a href="#hakkimda" className="item">Hakkımda</a></li>
                <li><a href="#yetenekler" className="item">Yetenekler</a></li>
                <li><a href="#projeler" className="item">Projeler</a></li>
                <li><a href="#baglantilar" className="item">Bağlantılar</a></li>
            </ul>
            <image src="/Group.svg" alt="" className="hamburger-menu" />
        </div>
    </div>    
</div>
    )
}