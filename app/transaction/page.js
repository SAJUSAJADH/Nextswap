'use client'

import { Header } from '@/components/navigations'
import React,{useEffect, useState} from 'react'
import { ethers } from 'ethers'
import { Table } from 'antd';
import { contractABI,contractAddress } from '@/utils/constants'
import { TransactioDetails } from '@/components/transactionDetails';


function Transactions() {


    

    


  return (
    <>
    <Header/>
    <div className='container flex flex-col pt-32 justify-center  px-3 mx-auto'>
        <div className='pb-5 flex justify-center w-full bg-white'>
        <p className='text-2xl lg:text-5xl text-[#FF4FB8] font-bold font-marryweather'>Live Transactions</p>
        </div>
        <div className=''>
            <TransactioDetails/>
        </div>
        

    </div>
    </>
  )
}

export default Transactions