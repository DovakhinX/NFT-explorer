import React from 'react';
import  './Nftcontainer.css';

function Nftcontainer({nftData,loadState}){
  
    return (
        <>
        {nftData?(
        <div className='nftCard'>
        {  
        nftData.map((item,i)=>(
            <div key={i} className='itemcard'>
                <p>{item.metadata.name}</p>
                <img src={item.metadata.image} className="img" alt='nft'/>
                <p>{item.metadata.description}</p>
                </div>

        ))}
      
        </div>):<h2>NO NFT EXISTS</h2>}
        </>
    )
}

export default Nftcontainer;