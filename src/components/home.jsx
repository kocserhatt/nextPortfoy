import Image from "next/image";

export default function HomePage() {   
    return (
        <div id="anasayfa" className="home">
            <div className="left">
                <span className="home-span">Herkese merhaba, ben</span>
                <h1 className="home-header">Serhat Koç</h1>
                <p className="home-paragraph">Bu da benim portföy projem. Benim hakkımda bilgi edinmek istersen, Hakkımda kısmını okuyabilir ya da CV mi indirerek özgeçmişim hakkında bilgi sahibi olabilirsin.</p>
                <div className="btns">
                    <a href="/serhat koç özgeçmiş.pdf" download="" className="btn">CV yi indir</a>
                    <a href="#" className="btn btn-ghost">Explore More</a>
                </div>
            </div>
            <Image src="/foto.png" alt="" className="right ben" width={300} height={300}/>
        </div>
    )}