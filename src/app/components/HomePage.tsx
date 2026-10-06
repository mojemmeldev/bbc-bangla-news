import React from 'react';
import MainNews from './homeShare/MainNews';

const newsDataFecth = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
    const datas = await res.json();
    return datas;
}

const HomePage = async () => {

    const newsData = await newsDataFecth();
    const data = newsData.data;
    const mainNews = data[0].articles;
    console.log("articels", mainNews);

    return (
        <div >
            <div className='grid grid-cols-3 max-w-7xl mx-auto '>
                <div className='grid  col-span-2'>1
                    <MainNews news={mainNews}></MainNews>
                </div>
                <div className='col-span-1'>2</div>
            </div>
        </div>
    );
};

export default HomePage;