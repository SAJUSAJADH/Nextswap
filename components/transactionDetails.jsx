'use client'

import { Header } from '@/components/navigations'
import React,{useEffect, useState} from 'react'
import { ethers } from 'ethers'
import { Table } from 'antd';
import { contractABI,contractAddress } from '@/utils/constants'

const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
    key: 'key',
    render: (text) => <a>{text}</a>,
    width: 60,
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
    width: 110,
  },
  {
    title: 'Time',
    dataIndex: 'Timestamp',
    key: 'Timestamp',
    ellipsis: true,
  },
  {
    title: 'From',
    dataIndex: 'From',
    key: 'From',
    ellipsis: true,
  },
  {
    title: 'To',
    dataIndex: 'To',
    key: 'To',
    ellipsis: true,
  },
];

const initialData = [];


export function TransactioDetails(){

  const [data, setData] = useState([...initialData]);

 

    const [allTransaction, setAllTransaction] = useState([])

    useEffect(()=>{
        getAvailableTransaction()
    },[])

    const getEthereumContract = async () => {

        const provider = new ethers.BrowserProvider(ethereum)
    
        const signer = await provider.getSigner()
    
        const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
        
        return transactionContract
    
    }
    
    

    const getAvailableTransaction = async () => {
      try {
        const transactionContract = await getEthereumContract();
        const avilableTransaction = await transactionContract.getAllTransaction();
        setAllTransaction([...avilableTransaction]);
  
        const formattedTransactions = await Promise.all(
          avilableTransaction.map(async (transaction, index) => {
            try {
              const timestampInSeconds = Number(transaction[3]);
              const timestampInMilliseconds = timestampInSeconds * 1000;
              const formattedTimestamp = new Date(timestampInMilliseconds).toLocaleString();
              return {
                key: (index + initialData.length).toString(),
                From: transaction[0],
                To: transaction[1],
                Amount: `${ethers.formatUnits(transaction[2], 'ether')} ETH`,
                Timestamp: formattedTimestamp,
              };
            } catch (error) {
              console.log(`Error formatting transaction at index ${index}: ${error.message}`);
              return null; // Handle the error gracefully
            }
          })
        );
  
        setData((prevData) => [...prevData, ...formattedTransactions.filter(Boolean)]);
      } catch (error) {
        console.log(error);
      }
    };


    return(
        <>
          <Table columns={columns} dataSource={data.slice().reverse()}/>
        </>
    )
}