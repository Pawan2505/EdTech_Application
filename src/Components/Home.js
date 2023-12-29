import React from 'react'
import { useEffect } from 'react';

export default function Home() {
  useEffect(
    ()=>{
          document.title="Home";
    },[]
  );
  return (
    <div className='text-center my-3'>
     <h1>Welcome</h1>
    </div>
  )
}
