import Image from 'next/image'

function user(props) {

    return (
      <div className="row justify-content-center">

        <div className="col-md-4">

      <div className="card ">

        <Image src="https://images.unsplash.com/photo-1564149504298-00c351fd7f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzA2MzR8MHwxfHNlYXJjaHw0N3x8c3BpY2V8ZW58MHx8fHwxNjM2MzU4ODk5&ixlib=rb-1.2.1&q=80&w=1080" alt="Vercel Logo"  
    
        width={`300px`}
        height={`200px`} />
    
        <div className="card-body">
            <h5 className="card-title">{ props.data.seo_title }</h5>
            {/* <p className="card-text">{props.data.body}</p> */}
        </div>
    </div>
        </div>
      </div>
    )
}

export default user;


export async function getStaticProps({ params }) {

    const res = await fetch(`http://local.nextjs.com/api/v1/re/single/${params.id}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data },
       // will be passed to the page component as props
       revalidate: 10,
    }
  }

  // This function gets called at build time
export async function getStaticPaths() {
 
    // Call an external API endpoint to get posts
    const res = await fetch('http://local.nextjs.com/api/v1/re/products')
    const posts = await res.json()

    
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: `${post.slug}` },
    }))
   
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }