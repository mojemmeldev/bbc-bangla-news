import ArticelPage from '@/app/articel/[articelId]/page';
import Link from 'next/link';
import React from 'react';



interface TDynamic {

    title: string,


    id: string,
    imageUrl: string,
    imageAlt: string,
    category: string
    description: string

}




const CategoryDaynamicIdPage = async ({ params }: { params: { categoryid: string } }) => {
    const { categoryid } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`)
    const data = await res.json();
    const catData: TDynamic[] = data.data;
    console.log("param data", catData);
    return (
        <div >
            <h2 className='mt-10 border-b-2 border-red-800 font-bold text-2xl'>{data.title}</h2>

            <div className='grid grid-cols-3 gap-3 mt-10'>
                {
                    catData.map((cd) =>
                        <Link key={cd.id} href={`/articel/${cd.id}`}>
                            <div >
                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img
                                            src={cd.imageUrl}
                                            alt={"cd.imageAlt"}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{cd.title}</h2>
                                        <p>{cd.description}</p>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>


        </div>
    );
};

export default CategoryDaynamicIdPage;