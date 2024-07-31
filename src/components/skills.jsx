import Image from 'next/image'

export default function Skills(){

    return (
      <>
        <div id="yetenekler" className="skill">
            <span className="spn-1">Yetenekler</span>
            <h1 className="h1-1">Neler yapabilirim?</h1>
            <div className="logo">
                <Image className="img-1" src="/htmlLogo.jpg" alt="" width={300} height={300}/>
                <Image className="img-1" src="/cssLogo.jpg" alt="" width={300} height={300}/>
                <Image className="img-1 java" src="/jsLogo.jpg" alt="" width={300} height={300}/>
            </div>
        </div>
</>
    )
}