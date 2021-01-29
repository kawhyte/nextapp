import Link from "next/Link";


const NotFound = () => {
    return ( <div className ="not-found">
        
    <h1> Not found</h1>
    <h2> This page was not found </h2>
    <p> Go back to <Link href="/"><a>Zelda's Home</a></Link> </p>



        </div> );
}
 
export default NotFound;