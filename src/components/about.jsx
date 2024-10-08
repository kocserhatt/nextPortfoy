import Image from "next/image"

export default function About() {
    return(
        <div id="hakkimda" className="about">
            <Image src="/CodeTypinGamico1.png" alt="" className="right" width={500} height={500}/>
            <div className="left">
                <span className="about-span">Hakkında</span>
                <h1 className="about-header">Benim hakkımda?</h1>
                <p className="about-paragraph">Merhaba, ben Serhat, 20 yaşındayım ve lise mezunuyum. Yaklaşık 6 aydır yazılımla ilgileniyorum ve Acunmedya Akademide eğitim alıyorum. HTML, CSS ve JavaScript dillerinde temel seviyede deneyim ve bilgiye sahibim. Boş zamanlarımda web siteleri tasarlar ve eski projelerimi düzenlerim. Projelerim bölümünden projelerimi inceleyebilirsiniz.</p>
            </div>
        </div>
    )
}