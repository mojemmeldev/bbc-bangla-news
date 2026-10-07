import React from 'react';
import MainNews from './homeShare/MainNews';
import OtherNews from './homeShare/OtherNews';

const newsDataFecth = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
    const datas = await res.json();
    return datas;
}

const HomePage = async () => {

    const newsData = await newsDataFecth();
    const data = newsData.data;
    const mainNews = data[0].articles;
    // console.log("articels", mainNews);

    const otherNews = data.slice(1);
    console.log("others", otherNews);

    return (
        <div >
            <div className='grid grid-cols-3 max-w-7xl mx-auto '>
                <div className='grid  col-span-2'>1
                    <MainNews news={mainNews}></MainNews>
                    <div >
                        <OtherNews otherNews={otherNews}></OtherNews>
                    </div>
                </div>
                <div className='col-span-1'>2</div>
            </div>
        </div>
    );
};

export default HomePage;