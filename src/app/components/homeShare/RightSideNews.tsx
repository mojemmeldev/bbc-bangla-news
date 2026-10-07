import React from 'react';


interface TRnews {
    id:string,
    title: string,
    rank: number
}


const newsDataFecth = async ()=>{
    const res = await fetch ('https://news-api-v2.vercel.app/api/news/most-read');
    const datas = await res.json();
    return datas;
}

const RightSideNews =async () => {
    const data = await newsDataFecth();
    const newsData:TRnews[]= data.data;
    console.log( "rightside",newsData);

    return (
        <div className=' border border-gray-300 ml-6'>
            <h2 className=' font-bold text-2xl'>সর্বাধিক পঠিত</h2>
            {
                newsData.map((nd)=><div key={nd.id}>
                    <div className='flex  items-center gap-5 py-4  px-4'>
                        <h1 className='font-bold text-2xl text-red-700'>{nd.rank}</h1>
                        <p>{nd.title}</p>   
                    </div>
                </div>)
            }
        </div>
    );
};

export default RightSideNews;