import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from './data/data.js';
import { useNavigate } from 'react-router-dom';

const InVoice = () => {

    const invoices = getInvoices();

    const navigate = useNavigate();
    function handleNavigate(){
        navigate('/');
    }
    
    return (
        <div>
            <h2>Invoices</h2>
            <Outlet /> {/* This is used for nested routing */}

            <main className='text-center'>
                <div className="flex flex-col gap-3 border-red-100 border-4">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map(invoice => (
                                <tr key={invoice.number}>
                                    <td><Link className='bg-gray-200' to={`/invoices/${invoice.number}`}>{invoice.name}</Link></td>
                                    <td>{invoice.number}</td>
                                    <td>{invoice.amount}</td>
                                    <td>{invoice.due}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>




            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map(invoice =>(
                            <tr key={invoice.number} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {/* {invoice.name} */}
                                    <td><Link className='text-blue-600' to={`/invoices/${invoice.number}`}>{invoice.name}</Link></td>
                                </td>
                                <td className="px-6 py-4">
                                    {invoice.number}
                                </td>
                                <td className="px-6 py-4">
                                    {invoice.amount}
                                </td>
                                <td className="px-6 py-4">
                                    {invoice.due}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            

          <button className='bg-teal-600 rounded-md p-3' onClick={handleNavigate}>Home</button>

        </div>
    );
};

export default InVoice
