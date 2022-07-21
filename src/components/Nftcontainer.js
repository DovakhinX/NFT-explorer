import React from 'react';
import  './Nftcontainer.css';

function Nftcontainer({nftData,loadState}){
    if(!nftData&&loadState===false){
        return <h2>No NFT Exists</h2>
    }
    return (
        <>
        <div className='nftCard'>
        {  
        nftData.map((item,i)=>(
            <div key={i} className='itemcard'>
                <p>{item.metadata.name}</p>
                <img src={item.metadata.image} className="img" alt='nft'/>
                <p>{item.metadata.description}</p>
                </div>

        ))}
      
        </div>
        </>
    )
}

export default Nftcontainer;