import Image from 'next/image'

export default function Footer(){

    return (
      <>
        <div id="baglantilar" className="footer">
            <span className="spn-3">Bağlantı</span>
            <h1 className="h1-3">Bağlantı kurmak</h1>
            <p className="p-2">kocserhat671@gmail.com</p>
            <div className="icon">
                <a href="https://www.linkedin.com/in/serhat-ko%C3%A7-56b30929b/"><Image src="/LinkedIn.svg" alt="" width={300} height={300} /></a>
                <a href="https://github.com/kocserhatt"><Image src="/GitHub.svg" alt="" width={300} height={300} /></a>
                <a href="https://www.instagram.com/koc.serhatt/"><Image src="/Instagram.svg" alt="" width={300} height={300} /></a>
            </div>
            <p className="footer-end">Copyright © 2024. Develop & Designed by Serhat Koç</p>
        </div>
</>
    )
}