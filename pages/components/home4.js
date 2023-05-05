import Image from "next/image";

export default function Home4() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 align-center home4" id="section4">
                <div className="column-right align-middle">                    
                    <Image src="/group-img.jpg" className="object-cover object-center w-full"
                    width="1000"
                    height="100"
                    />
                    
                </div>
                <div className="column-left max460  home3right text-center">
                    <h3 className='font22 pb-7 pt-7 leading-none'>ÖFFNUNGSZEITEN</h3>
                    <p className='pb-7'>Besuchen Sie uns</p>
                    <p className=''>Mo. - Fr.: 9:00 - 16:00 Uhr</p>
                </div>
            </div>
        </>
    )
}