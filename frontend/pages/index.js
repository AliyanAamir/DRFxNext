import Head from "next/head";


import Landingpage from "@/Components/Landing Page/Landingpage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cryptaprint</title>
        
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  style={{ backgroundColor: "white" }}>
       
        <Landingpage />
      </div>
      
      </>
  );
}
