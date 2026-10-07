import React from 'react';

interface TMainNews{
    category:string,
    id:string,
    imageUrl: string,
    imageAlt:string,
    title:string,
    description:string,

}

const MainNews = ({ news }:{news:TMainNews[]}) => {
    
    const firstNews = news[0];
    const otherNews = news.slice(1);
    
    return (
        <div className=' grid grid-cols-2 gap-3'>
            <div >
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={firstNews.imageUrl}
                            alt={"firstNews.imageAlt"}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description}</p>

                    </div>
                </div>
            </div>



            <div className='grid '>
                {
                    otherNews.slice(0, 4).map((oNews) => {
                        return (
                            <div key={oNews.id} className=' '>
                                <div className=' border border-gray-300 shadow-2xs py-6 px-4'>

                                    <h2 className='text-red-600 font-bold text-l'>{oNews.category}</h2>
                                    <h2 className=' font-bold text-2'>{oNews.title}</h2>
                                </div>
                            </div>
                    )
                       

                    })
                }
            </div>
        </div >
    );
};

export default MainNews;