import Link from 'next/link';
import React from 'react';


interface TNav{
    slug: string,
      title: string,
      topicId: string,
      url: string,
      scrapable: boolean,}


const resCatagoryDataFetch = async()=>{
    const res=await fetch('https://news-api-v2.vercel.app/api/categories');
    const datas=await res.json();
    return datas;

}


const Navber =async () => {
const data= await resCatagoryDataFetch();
const navData:TNav[]=data.data;

const navCat= navData.filter(n=> n.scrapable ===true);


    

    return (
        <div className='flex justify-center items-center gap-4 mt-10'>
            <Link href="/">হোম</Link>
            {
                navCat.map ((n,index)=><Link key={index}  href={`/category/${n.slug}`}>{n.title}</Link>)
            }
        </div>
    );
};

export default Navber;