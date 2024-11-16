"use client";
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Image from "next/image";


interface Getname{
  name: string
  
  }
export const Naveber = () => {
  const [ isClick, setisClick ] = useState(false);

  const toogleNavbar = () => {
    setisClick(!isClick)
    // document.getElementById("myNav").style.width = "100%";
  }

//  const router = useRouter();
const [data, setData] = useState([]);
const [dataUser, setDataUser] = useState([]);

const [isDisabled, setIsDisabled] = useState(false);
const url = "https://secend-pr.shuttleapp.rs/todos";



 useEffect(() => {
  let auth = localStorage.getItem("Authorization")
  // console.log("Authantacation")
  // console.log(auth);
  if(auth != null){
    const fatching = async () => {
      const reqponse = fetch(`${url}/user/decode-token`,{
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
        // if(data == 200){
        //   // localStorage.setItem("Authorization",data.token);
        //     // router.push('/react')
        //     console.log(data);
    
    
        // }
        setData(data);
        return data
      }).catch((error) => {
        console.log(error)
      });
    }
    fatching();
  }
  // let auth = localStorage.getItem("Authorization")
  // console.log("Authantacation")
  // console.log(auth);
  if(auth != null){
    const fatching = async () => {
      const reqponse = fetch(`${url}/user/userData`,{
        method: "GET",
  credentials: "same-origin",
  headers: {
    'Content-type': 'application/json',
    'Authorization': auth
  },
      })  .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        // if(data == 200){
        //   // localStorage.setItem("Authorization",data.token);
        //     // router.push('/react')
        //     console.log(data);
    
    
        // }
        setDataUser(data);
        return data
      }).catch((error) => {
        console.log(error)
      });
    }
    fatching();
  }
  
  
   
}, [])

const corse_lest: Getname[] = dataUser;
console.log(corse_lest)

// alert(photos);
  let reqpo:any = data;
  return (
    <>
    {/* <nav className='bg-rgba(40, 55, 89, 0.57)  fixed w-screen mt-5 relative z-40'>  */}
    <nav className='bg-rgba(40, 55, 89, 0.57)  fixed w-screen mt-5  z-40'> 
        {/* //rgba(40, 55, 89, 0.57) */}
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-`6' >
                <div className='flex items-ecnter'>
                    <div className='flex-shrink-0'>
                        <a href='/' className='text-white'> <Image className='w-16' src="/logo.png" alt="Next.js Logo" width={180} height={37} priority/> </a>
                    </div>
                </div>
                <div className='hidden md:block '>
                    <div className='ml-4 flex items-center space-x-4 '>
        {/* className={errors.dateStart && touched.dateStart ? "input-error" : "text-sm w-screen" } */}

                        <a href='/adding' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Add</a>
                        <a href='/Events' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Event</a>
                        <a href='/Events' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>{corse_lest.map((post) => post.name)}</a>
                        <a href='/accounts/login' className={reqpo == 200 ? "invisible hidden" : 'text-white hover:bg-white hover:text-black rounded-lg p-2 '}>login</a>
                        <button className={reqpo != 200 ? "invisible" : 'text-white hover:bg-white hover:text-black rounded-lg p-2 '} 
                        onClick={() => {setIsDisabled(true);setTimeout(() => {localStorage.removeItem("departmentStatus");localStorage.removeItem("Authorization");window.location.reload(); setIsDisabled(false);},2000); }} disabled={isDisabled}>logout</button>
                        
                        {/* <a href='/accounts/login' className={reqpo != 200 ?  'text-white hover:bg-white hover:text-black rounded-lg p-2 ':"invisible hidden" }>l2ogin</a> */}
                        {/* <button className='text-white hover:bg-white hover:text-black rounded-lg p-2 ' onClick={() => {setIsDisabled(true);setTimeout(() => {localStorage.removeItem("Authorization");window.location.reload(); setIsDisabled(false);},2000); }} disabled={isDisabled}>logout</button> */}
                        {/* <a href='/accounts/login' className='text-white hover:bg-white hover:text-black rounded-lg p-2 '>logout</a> */}
                        {/* <a href='/accounts/login' className={reqpo != 200 ? "invisible" : 'text-white hover:bg-white hover:text-black rounded-lg p-2 '}>logout</a> */}
                       
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={toogleNavbar}
                  >{isClick ? (
                    
                    <svg 
                    className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  ) : (
                  <svg
                  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>

                  )}</button>
                </div>
              </div>
          </div>
      {isClick && (
        // <div id="myNav" className="overlay">

        // {/* <!-- Button to close the overlay navigation --> */}
       // {/* <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a> */}
      
      //  {/* <!-- Overlay content --> */}
        // //{/* <div className="overlay-content">
        //   <a href="#">About</a>
        //   <a href="#">Services</a>
        //   <a href="#">Clients</a>
        //   <a href="#">Contact</a>
        // </div>
      
    //   </div> */}
        // <div className="md:hidden overflow-hidden h-full w-full fixed left-[0] top-[0]  overflow-x-hidden [transition:0.5s] bg-[linear-gradient(45deg,_#7da8c5,_#5d7b90,_#3f515e,_#222a30,_#000000)]" onClick={toogleNavbar}>
        <div className="md:hidden overflow-hidden h-full w-full  left-[0] z-40 top-[0]  overflow-x-hidden [transition:0.5s]  bg-[rgba(0,0,0,0.9)]" onClick={toogleNavbar}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   gap-16  font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white float-left"
            onClick={toogleNavbar}
          >{isClick ? (
            <svg 
            className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
          <svg
          className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>

          )}</button>

          <a href='/adding' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Add</a>
          <a href='/Events' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Event</a>
          <a href='/accounts/login' className={reqpo == 200 ? "invisible hidden" : 'text-white hover:bg-white hover:text-black rounded-lg p-2 '}>login</a>
          <button className={reqpo != 200 ? "invisible" : 'text-white hover:bg-white hover:text-black rounded-lg p-2 '}
           onClick={() => {setIsDisabled(true);setTimeout(() => {localStorage.removeItem("departmentStatus"); localStorage.removeItem("Authorization");window.location.reload(); setIsDisabled(false);},2000); }} disabled={isDisabled}>logout</button>
                      </main>
                      </div>  
            {/* <a href='/adding' className='text-white hover:bg-white block hover:text-black rounded-lg p-2'>Add</a>
            <a href='/accounts/login' className='text-white hover:bg-white block hover:text-black rounded-lg p-2'>login</a> */}
            {/* <a href='/accounts/login' className='text-white hover:bg-white block hover:text-black rounded-lg p-2'>login</a>
           // <a href='/accounts/login' className='text-white hover:bg-white block hover:text-black rounded-lg p-2'>login</a> */}
          </div>
        </div>

      )}
      {/* </nav> */}
    {/* <nav className='bg-rgba(40, 55, 89, 0.57) bg-black'> 
        {/* //rgba(40, 55, 89, 0.57) *}
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-`6' >
                <div className='flex items-ecnter'>
                    <div className='flex-shrink-0'>
                        <a href='/react' className='text-white'>Logo</a>
                    </div>
                </div>
                <div className='hidden md:block '>
                    <div className='ml-4 flex items-center space-x-4 '>
                        <a href='/adding' className='text-white'>Add</a>
                        <a href='/accounts/login' className='text-white'>login</a>
                    </div>
                </div>
              </div>
          </div>
          */}
    </nav> 
      
      </>
  ) };
  
