"use client"
import Image from 'next/image'
import Header from './components/Header'
import { useEffect } from 'react';
import Browse from './components/Browse';
// import SecondaryContainer from './components/SecondaryContainer';

export default function Home() {

  return (
   <>
     {/* <Header />     */}
     <Browse />
   </>
  )
}
