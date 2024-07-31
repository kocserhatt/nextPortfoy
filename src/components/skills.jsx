import Image from 'next/image'

export default function Skills(){

    return (
      <>
        <div id="yetenekler" className="skill">
            <span className="spn-1">Yetenekler</span>
            <h1 className="h1-1">Neler yapabilirim?</h1>
            <div className="logo">
                <Image className="img-1" src="/html logo.jpg" alt=""/>
                <Image className="img-1" src="/css logo.jpg" alt=""/>
                <Image className="img-1" src="/js logo.jpg" alt="" class="java"/>
            </div>
        </div>
</>
    )
}