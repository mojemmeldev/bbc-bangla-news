import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TONews {

    curationId: string,
    title: string,
    id: string
    articles: {

        id: string,
        imageUrl: string,
        imageAlt: string,
        title: string,
        description: string
    }[],

}



const OtherNews = ({ otherNews }: { otherNews: TONews[] }) => {


    return (
        <div>
            {
                otherNews.map((on) => {
                    return (


                        <div  key={on.curationId}>
                            <h2 className='font-bold text-red-800 text-2xl border-b-2 py-2 pl-4 mb-5 mt-8'>{on.title}</h2>
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    on.articles.map((an) =>
                                        <Link key={an.id} href={`/articel/${an.id}`}>
                                            <div  >
                                                <div className='  '>
                                                    <div className="  card bg-base-100 shadow-sm">
                                                        <figure>
                                                            <img
                                                                src={an.imageUrl}
                                                                alt={"an.imageAlt"}

                                                            />
                                                        </figure>
                                                        <div className="card-body">
                                                            <h2 className="card-title">{an.title}</h2>
                                                            <p>{an.description}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    )

                                }
                            </div>
                        </div>


                    )
                })
            }
        </div>
    );
};

export default OtherNews;