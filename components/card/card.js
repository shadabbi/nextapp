

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'


function Card(props) {

    const router = useRouter();
    return(
        <div className="card">
            <Link href={router.basePath+props.slug} >

            
            <Image src={props.img} alt="Vercel Logo"  
            layout="responsive"
            width={700}
            objectFit="contain"
            height={475} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                {/* <p className="card-text">{props.body}</p> */}
               
            </div>
        </div>
    )
}

export default Card;