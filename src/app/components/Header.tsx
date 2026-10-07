import Image from 'next/image';
import Link from 'next/link';
import React from 'react';






const Header = () => {
    const date = new Date().toLocaleDateString("bn-DB", {
        dateStyle: "full"
    })

    return (
        <div className='mt-10 '>
            <div className=' mx-auto grid max-w-[1280px] grid-cols-3 items-center '>
                <div ></div>

                <div className='flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-2'>
                    <Image src={"/logo.webp"} width={50} height={50} alt='logo'></Image>

                    <div className='flex flex-col item'>
                        <h1 className=' font-bold text-3xl text-red-800'>Bangla News 24</h1>
                        <p>{date}</p>
                    </div>
                </div>

                <div className=' flex items-center justify-end gap-3 tex-sm'>
                    <Link href="/"> <button className='btn'>সাইন ইন</button></Link>
                    <Link href="/"> <button className='btn bg-red-600 text-white'>সাইন আপ</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;