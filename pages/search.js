import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
function Search({results}) {
    //console.log(results)
    return (
        <div>
            <Head>
                <title>Search Page</title>
                <link ref="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
        </div>
    )
}

export default Search
 
 export async function getServerSideProps(context){
     const useDummyData = false;

     const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json() );
    

     //After the server has rendered .... Pass the results to the client ... 

     return{
         props:{
             results: data
         }
     }
 }