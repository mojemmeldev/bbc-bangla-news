import React from 'react';

const ArticelPage = async ({ params }: {params:{articelId:string}}) => {
  const {articelId}= await params
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${articelId}`)
  const data= await res.json()
  const artData=data.data
  console.log("art",artData);
  
if (!artData){
    return (
        <p>no data found</p>
    )
}

    
    
    
    return (
        <div>
           <h2>{artData.title}</h2>
           <img src={artData.imageUrl} alt="imag" />
           <p>{artData.text}</p>
        </div>
    );
};

export default ArticelPage;