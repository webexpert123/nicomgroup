import Image from "next/image";

export default function Banner() {
    return (
        <>
            
                <div className="banner content-center" id="banner">                    
                    <Image src="/banner.jpg" className='mx-auto'
                    width={1000}
                    height={100}
                    />
                </div>
            
        </>
    )
}