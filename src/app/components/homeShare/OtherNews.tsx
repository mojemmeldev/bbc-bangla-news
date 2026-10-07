import React from 'react';

const OtherNews = ({ otherNews }) => {


    return (
        <div>
            {
                otherNews.map((on) => {
                    return (
                        <div key={on.curationId}>
                            <h2 className='font-bold text-red-800 text-2xl border-b-2 py-2 pl-4 mb-5 mt-8'>{on.title}</h2>
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    on.articles.map((an) =>
                                        <div key={an.id} >
                                            <div className='  '>
                                                <div className="  card bg-base-100 shadow-sm">
                                                    <figure>
                                                        <img
                                                            src={an.imageUrl}
                                                            alt={"firstNews.imageAlt"}
                                                        />
                                                    </figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title">{an.title}</h2>
                                                        <p>{an.description}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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