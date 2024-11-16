"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from "react";
import Image from "next/image";
// import { SpeakerWaveIcon, SpeakerXMarkIcon } from "outline";


// import useSWR from 'swr';
interface Corse_lest{
  corse_id: number
  name: string;
  url: string;
  count: number;
}


const Fetch = () => {
  const [photos, setPhotos] = useState([]);
  const [req_states, getStates] = useState<Number>();
  const url = "https://secend-pr.shuttleapp.rs/todos";
  

  useEffect(() => {
  if (typeof window !== 'undefined') {
    // console.log('we are running on the client')
    let auth = localStorage.getItem("Authorization")
      if (auth == null){
    
      }else{
    
        //   fetch('https://jsonplaceholder.typicode.com/photos')
          fetch(`${url}/corses`,{
            method: "GET",
            credentials: "same-origin",
            headers: {
              'Content-type': 'application/json',
              'Authorization': auth
              // 'Authorization': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InVzZXIgbmFtZSIsImVtYWlsIjoia2FzZGpmQGdtYWlsLmNvbSIsImV4cCI6MTczODMyNjUzMn0.tj5fkprrtbR8OvXRcNolqgklaAxI9z_ewot792Q8oN8`, // notice the Bearer before your token
              // 'Authorization': autho, // notice the Bearer before your token
            },
          })
      
          
            .then((res) => {
              // localStorage.setItem("state", res.status.toString());
    
              // console.log("request status ")
              // console.log(res.status)
            getStates(res.status);
    
              return res.json();
            })
            .then((data) => {
              // console.log(data);
              setPhotos(data);
            });
      }
    } 
  }, []);

    const corse_lest: Corse_lest[] =  photos;
    if( req_states == 401){
      return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <h1>Error 401</h1>
            </main>
            </div>
      );
    } else if (req_states == 404){
      return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <h1>Error 404</h1>
            </main>
            </div>
      );
  
    }else{
  
    const isNull = !corse_lest.filter(Boolean).length
  
    if (isNull){
      return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
          <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1> it is no a date</h1>
           </main>
        </div>
      )
    }else{
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-sm">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <h1>Date: {date.toDateString()}</h1> */}
          <div>
{/*   
        {photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
        ))} */}
              {corse_lest.map((post) => {
              return (
  // <div className=" backdrop-blur-sm max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" max-w-sm rounded-lg shadow " key={post.name}>
          {/* <a href="#">
          {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> *
              
              <img 
                      src={post.url}
                      
                      className="rounded-t-lg"
                      // width={100}
                      // height={24}
                      // priority 
                      alt={''} />

          </a> */}
    <div className="p-5 ">
    {/* <div className=" h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" > */}

        <a href="#">
            {/* <h5>Noteworthy technology acquisitions 2021</h5> justify-items-center flex-1 w-64  inline-flex items-center*/}
            <h2  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.name}</h2>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className='flex flex-col flex-wrap'>
        <button className="inline-flex items-center mb-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
          <Link href={`/research/${post.corse_id}`} className="linck" >الابحاث    {post.count}</Link></button>
        <button className="inline-flex items-center mb-3 flex-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link href={`/research/${post.corse_id}`} className="linck" >
        
        الشيتات 
        </Link></button>
        <button className="inline-flex mb-3  items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link href={`/research/${post.corse_id}`} className="linck" >
        
        التكاليف 
        </Link></button>
        <button className="inline-flex mb-3  items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link href={`/research/${post.corse_id}`} className="linck" >
        
        quizes 
        </Link></button>
        </div>
        {/* <div className='flex flex-col flex-wrap'>
        <button className="inline-flex items-center mb-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link href={`/research/${post.corse_id}`} className="linck" >
        
        الابحاث <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link></button>
        <button className="inline-flex items-center mb-3 flex-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link href={`/research/${post.corse_id}`} className="linck" >
        
        الشيتات <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link></button>
        <button className="inline-flex mb-3  items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link href={`/research/${post.corse_id}`} className="linck" >
        
        التكاليف <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link></button>
        <button className="inline-flex mb-3  items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link href={`/research/${post.corse_id}`} className="linck" >
        
        quizes <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link></button>
        </div> */}
        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
    </div>
</div>
    )
  })}

      </div>
      </main>
      </div>
    );
  }
  }
};
  export default Fetch;
// export default async function Page() {
    
//     return(
//         <div></div>
//     )

// }