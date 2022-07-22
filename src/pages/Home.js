import React, { useState } from "react";
import Moralis from "moralis";
import  Searchbar from '../components/Searchbar';
import Nftcontainer from "../components/Nftcontainer";

function Home() {
 
  const [add, setadd] = useState(null);
  const [nft, setnft] = useState(null);
 const [load,setload]=useState(false);
  const addChange=(e)=>{
    setadd(e.target.value);
  }

  const getNFT = async () => {
    try {
     setload(true);
      const options = {
        chain: "mumbai",
        address: add,
      };
      const NFT = await Moralis.Web3API.account.getNFTs(options);


if (NFT.result) {
        const data = NFT.result.map((item) => {
          item.metadata = JSON.parse(item.metadata);
          return item;
        });
        setnft(data);
        console.log(data);
        
      }
    } catch (error) {
      console.log(error);
      
      
      
    }
  };

  return (
    <>
     <Searchbar
     address={addChange}
     getdata={ getNFT}
     />

     {load?<Nftcontainer 
     nftData={nft}
     loadState={load}
     
     />:null}
    </>
  );
}

export default Home;
