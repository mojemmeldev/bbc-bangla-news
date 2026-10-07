import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"



interface TMar{
    title:string,
    id:string,
}


const marqueeDataFetch=async()=>{
    const res = await fetch ('https://news-api-v2.vercel.app/api/news?limit=10');
    const datas = await res.json();
    return datas;
}


const Marquee =async () => {

    const data=await marqueeDataFetch();
    const headlines:TMar[] =data.data;

  

    return (
        <div className='bg-red-600 text-white mt-5'>
            <div className='max-w-7xl mx-auto flex '>
                <div className='bg-red-900 py-1 px-2'>সর্বশেষ</div>
            <MarqueeText className='py-1' direction='right' duration={10} >
            {
                headlines.map((h,index)=>
                <Link key={index} href={`/articel/${h.id}`} >
                
                <span > {h.title}
                <span className='mx-5'>•</span>
                </span>
                </Link>
                )

            }
            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;