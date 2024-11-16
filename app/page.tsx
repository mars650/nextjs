"use client";

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import React from "react";
import Image from "next/image";
import useSWR from 'swr'
import Carousel from './Carousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Corse_lest{
  corse_id: number
  name: string;
  department: string;
  url: string;
  count: number;
  count_r: number,
  count_q: number,
  count_s: number,
  count_e: number,
}

const Fetch = () => {
  const [corses, setCorses] = useState([]);
  const [error, setError] = useState();
  const [depart, setDepart] = useState("");
  const [departStatus, setDepartStatus] = useState("");
  const [tokenstatus, setTokenStatus] = useState("");
  const [check_token, setChekToken] = useState(false);

  const [req_states, getStates] = useState<Number>();
  
  useEffect(() => {
 let auth = localStorage.getItem("Authorization")
 let department = localStorage.getItem("department")
 let departmentStatus = localStorage.getItem("departmentStatus")
//  localStorage.setItem("departmentStatus","")
 if(departmentStatus == null){
  localStorage.setItem("departmentStatus","false")
 }else{
  setDepartStatus(departmentStatus);
 }
 if(department != null){
  setDepart(department);
 }
    
  if (typeof window !== 'undefined') {
//   fetch('https://jsonplaceholder.typicode.com/photos')
const fetchDataAu = async () => {
if(auth != null){
// await fetch("http://192.168.0.102:8070/corsesAu",{
await fetch("https://secend-pr.shuttleapp.rs/todos/corsesAu",{

  method: "GET",
  credentials: "same-origin",
  headers: {
    'Content-type': 'application/json',
    'Authorization': auth
  },
}).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  getStates(res.status);
    return res.json();
  })
  .then((data) => {
    setCorses(data);
  }).catch((error) => {
  setError(error);

    console.log(error)
  });
}
  }

const fetchData = async () => {
// await fetch("http://192.168.0.102:8070/corses",{
await fetch("https://secend-pr.shuttleapp.rs/todos/corses",{
  method: "GET",
  credentials: "same-origin",
 
}).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  getStates(res.status);
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    setCorses(data);
    // setLoding(data);
  }).catch((error) => {
  setError(error);

    console.log(error)
  });
}
// fetchData();
    if(auth != null){
    const fatching = async () => {
    // const reqponse = fetch("http://192.168.0.102:8070/user/decode-token",{
    const reqponse = fetch("https://secend-pr.shuttleapp.rs/todos/user/decode-token",{
      method: "POST",
      body: JSON.stringify({
        "token": auth
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })  .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      setTokenStatus(data);
      // console.log(data);
      return data
    }).catch((error) => {
      console.log(error)
    });
    let ts = await reqponse;
    if(ts == "200"){
      localStorage.removeItem("department")
      localStorage.setItem("departmentStatus","true")
      setChekToken(true);

      fetchDataAu()
    }else{
      fetchData()
    }
    }
    fatching();
  }else{
    
    fetchData()
    }
      }   
  }, []);
  // console.log(tokenstatus);



  const corse_lest: Corse_lest[] =  corses;


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
      if(error){
        return(
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
            <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <h1 >server error</h1>
             </main>
          </div>
        )
      }else{
        return(
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
            <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <h1>تحميل...</h1>
             </main>
          </div>
        )
  
      }
    }else{
      let t ;
      if(departStatus == "false" ){
        t  = false;
      }else if(departStatus == "true"){
        t  = true;
      }
    return (
  <div>
 
  

  {t ? "": 
  // <div className=' h-full w-full fixed left-[0] top-[0]  overflow-x-hidden [transition:0.5s] bg-[rgb(0,212,255)] bg-[radial-gradient(circle,_rgba(0,212,255,1)_0%,_rgba(9,9,121,1)_54%,_rgba(9,10,10,1)_100%)]'>
  <div className='overflow-hidden h-full w-full fixed left-[0] top-[0]  overflow-x-hidden [transition:0.5s] bg-[linear-gradient(45deg,_#7da8c5,_#5d7b90,_#3f515e,_#222a30,_#000000)] z-50'>
    
    {/* <div className='relative h-15 flex flex-col items-center'> */}
    <div className="grid z-42 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   gap-16  font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
             
    {/* <div className='m-0 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-64 h-20'> */}
    {/* <button className='flex items-center  items-center bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(9,9,121,1)_35%,_rgba(0,212,255,1)_100%)] shadow-[#50d71e] border-[0] rounded-[8px] [box-shadow:rgba(151,_65,_252,_0.2)_0_15px_30px_-5px] box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4' onClick={() => {localStorage.setItem("department","1");localStorage.setItem("departmentStatus","true");window.location.reload() }}>قسم ارشاد فندقي</button> */}
    <button className='shadow-[#000000] rounded-[8px] shadow-lg box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4' onClick={() => {localStorage.setItem("department","1");localStorage.setItem("departmentStatus","true");window.location.reload() }}>قسم ارشاد فندقي</button>
    <button className='rounded-[8px] shadow-lg  shadow-[#000000] box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4' onClick={() => {localStorage.setItem("department","2");localStorage.setItem("departmentStatus","true");window.location.reload() }}>قسم دراسات فندقية</button>
    <button className='rounded-[8px] shadow-lg shadow-[#000000] box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4' onClick={() => {localStorage.setItem("department","3");localStorage.setItem("departmentStatus","true");window.location.reload() }}>قسم دراسات سياحية</button>
      {/* </div> */}
      
            </main>
            </div>
  </div> 
  }

      <Carousel />
      {/* <div className="grid grid-rows-[20px_1fr_20px] bg-[rgb(26,_28,_30)] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-sm"> */}
      <div className="grid grid-rows-[20px_1fr_20px] bg-[linear-gradient(45deg,_#7da8c5,_#5d7b90,_#3f515e,_#222a30,_#000000)] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-sm">
      {/* <AliceCarousel  items={sildes} /> */}
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >
          {/* <h1 className='text-center element m-auto'>{time_}</h1> */}
          {/* <Carousel /> */}
          
          {/* </Carousel> */}
          {/* <Carousel >
          {sildes.map((s) => (
            <div>{s}</div>
            ))}

          </Carousel> */}
          <div>
              {corse_lest
              .filter(
            (d) => {if(depart == "2" && tokenstatus != "200"){ 
              return d.department == "2" 
            }else if(depart == "1" && tokenstatus != "200"){
              return d.department == "1" 
            }else if(depart == "3" && tokenstatus != "200"){
              return d.department == "3" 
            }
          else{
            // console.log(d);
            return d
          }
    })
    .map((post) => {
      return (
          <div className=" max-w-sm rounded-lg shadow " key={post.corse_id}>
          {/* <a href="#">
              <img 
              src={post.url}
              className="rounded-t-lg"
              alt={''} />
          </a> */}

    <div className="p-5  mb-4">
        {/* <a href="#"> */}
            <h2  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-14 mb-16  shadow-lg">{post.name}</h2>
        {/* </a> */}
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        <div className='flex flex-col flex-wrap'>
          {/* <a href={`/query/research/${post.corse_id}`} className="inline-flex items-center mb-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           الابحاث    {post.count_r}</a>  */}
          <a href={`/query/research/${post.corse_id}`} className="shadow-[#000000] border rounded-[8px] shadow-lg box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full  my-4">
           الابحاث    <div className='mx-8'>{post.count_r}</div></a> 
           <a href={`/query/sheet/${post.corse_id}`} className="shadow-[#000000] border rounded-[8px] shadow-lg box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full  my-4" 
           > الشيتات <div className='mx-8'>{post.count_s}</div></a>
           {/* <a href={`/query/sheet/${post.corse_id}`} className="inline-flex items-center mb-3 flex-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
           > الشيتات {post.count_s}</a> */}
          <a href={`/query/exam/${post.corse_id}`} className="shadow-[#000000] border rounded-[8px] shadow-lg box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full  my-4" >
          التكاليف <div className='mx-8'>{post.count_e}</div>
        </a>
          {/* <a href={`/query/exam/${post.corse_id}`} className="inline-flex items-center mb-3 flex-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
          التكاليف {post.count_e}
        </a> */}
        <a href={`/query/quiz/${post.corse_id}`} className="shadow-[#000000] border rounded-[8px] shadow-lg box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full  my-4">
        quizes <div className='mx-8'>{post.count_q}</div>
        </a>
        </div>
        <hr></hr>
      
    </div>
</div>
    )
  })}

      </div>
      </main>
      </div>
      </div>
    );
  }
  }
};
  export default Fetch;
  