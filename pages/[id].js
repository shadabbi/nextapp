import Image from 'next/image'
// var fs = require('fs');

function user(props) {

    return (
      <div className="row justify-content-center">

        <div className="col-md-4">

      <div className="card ">

        <Image src="https://images.unsplash.com/photo-1564149504298-00c351fd7f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzA2MzR8MHwxfHNlYXJjaHw0N3x8c3BpY2V8ZW58MHx8fHwxNjM2MzU4ODk5&ixlib=rb-1.2.1&q=80&w=1080" alt="Vercel Logo"  
    
        width={`300px`}
        height={`200px`} />
    
        <div className="card-body">
            <h5 className="card-title">{ props.data?.seo_title }</h5>
            {/* <p className="card-text">{props.data.body}</p> */}
        </div>
    </div>
        </div>
      </div>
    )
}

export default user;


export async function getStaticProps({ params }) {

  console.log('this is test in static props');

    const res = await fetch(`https://www.chukde.com/api/v1/re/single/${params.id}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      // will be passed to the page component as props
      props: { data },
      revalidate: 10
    }
  }

  // This function gets called at build time
export async function getStaticPaths() {


  // const path = require('path');
  // const fs = require('fs');

  // console.log(path.join(__dirname,'../'),'this is path')
  // fs.renameSync(path.join(__dirname, '../'),`${path.join(__dirname,'../')}s`)

  // fs.rename('sample.txt', 'sample_old.txt', function (err) {
  //   if (err) throw err;
  //   console.log('File Renamed.');
  // });
 
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.chukde.com/api/v1/re/products')
  let posts = await res.json()

  // const id = JSON.parse(process.env.npm_config_argv).original[2].split("=")[1];
  // console.log(process.argv);
  // console.log(`id is ${id}`)
  
  // posts = posts.slice(0,3);
    // console.log('this is test in static paths');
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: `${post.slug}` },
    }))
   
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }