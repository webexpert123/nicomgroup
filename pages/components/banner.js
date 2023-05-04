import Image from "next/image";

export default function Banner() {
    return (
        <>
            
                <div className="banner content-center my-10" id="banner">                    
                    <Image src="/banner.jpg" className='mx-auto'
                    width={1000}
                    height={100}
                    />
                </div>
            
        </>
    )
}