import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Slider from '../components/slider/slider';
import Card from '../components/card/card';

export default function Home(props) {

 
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
      </Head>

      <main >
        <div className="container-fluid">

          <Slider sliders={props.sliders.slides}/>

          <div className="row" >

          {props.products.map(product=><div key={product.id}  className="col-md-3"><Card slug={product.slug} id={product.id} img={product.image} title={product.title}  /></div>)}
          </div>
        </div>
      </main>

     
    </div>
  )
}



export async function getStaticProps(context) {
  const res = await fetch(`https://www.chukde.com/api/v1/re/products`)
  // const sliderRes = await fetch(`http://local.nextjs.com/api/v1/re/sliders`)
  const sliderRes = await fetch(`https://www.chukde.com/api/v1/re/sliders`)

  const products = await res.json()
  const sliders = await sliderRes.json()

  if (!products || !sliders) {
    return {
      notFound: true,
    }
  }

  return {
    props: { products, sliders }, // will be passed to the page component as props
    revalidate: 10
  }
}