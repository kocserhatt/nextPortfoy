import Image from 'next/image'
export default function Projects(){

    return (
      <>
        <div id="projeler" className="projects">
            <span className="spn-2">Projeler</span>
            <h1 className="h1-2">Ne yaptım?</h1>
            <div className="cards">
                <a href="https://kocserhatt.github.io/daily/">
                    <div className="card">   
                        <Image className="image-2" src="/gunluk.png" alt="" width={300} height={300}/>
                        <h2 className="h2-1">Daily</h2>
                        <p className="p-1">Günlük Web Site</p>
                    </div>
                </a>
                <a href="https://kocserhatt.github.io/e-ticaret-sitesi/">
                    <div className="card">   
                        <Image className="image-2" src="/e-ticaret.png" alt="" width={300} height={300}/>
                        <h2 className="h2-1">E-Ticaret Sitesi</h2>
                        <p className="p-1">E-Ticaret Web Sitesi</p>
                    </div>
                </a>
                <a href="https://kocserhatt.github.io/github-card/">
                    <div className="card">   
                        <Image className="image-2" src="/githubCard.png" alt="" width={100} height={100}/>
                        <h2 className="h2-1">Github Card</h2>
                        <p className="p-1">Serhat Koc GitHub Kart</p>
                    </div>
                </a>
                <a href="https://kocserhatt.github.io/memory-game/">
                    <div className="card">   
                        <Image className="image-2" src="/hafizaOyunu.png" alt="" width={100} height={100}/>
                        <h2 className="h2-1">memory-game</h2>
                        <p className="p-1">Hafıza Oyunu</p>
                    </div>
                </a>
                <a href="https://kocserhatt.github.io/akademi-sinav/">
                    <div className="card">   
                        <Image className="image-2" src="/sinav.png" alt="" width={100} height={100}/>
                        <h2 className="h2-1">responsive-tasarim</h2>
                        <p className="p-1">Figma responsive tasarım çalışması.</p>
                    </div>
                </a>
                <a href="https://kocserhatt.github.io/comment-figma/">
                    <div className="card">   
                        <Image className="image-2" src="/yorum.png" alt="" width={300} height={300}/>
                        <h2 className="h2-1">comment-figma</h2>
                        <p className="p-1">LFigma Yorum Site Çalışması.</p>
                    </div>
                </a>
            </div>
        </div>
</>
    )
}