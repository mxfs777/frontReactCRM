import React, { useState, useEffect } from "react";
import * as ContactService from '../../services/ContactService';

const Customers = () => {
    const [customerColl, setCustomerColl] = useState([]);

    useEffect(() => {
        ContactService.getAllCustomers().then(({ data }) => {
            
            data = data.map( ({date,...props}) => {
                date = date.split("T")[0].toString();              

                return {date, ...props};
            }).reverse();


            setCustomerColl(data);
        });

    }, [customerColl]);

    return ( 
        <section className="content">
            <div className='itemsContainer'>
                <ul>
                    {customerColl.map( customer => {
                        return (
                            <li key={customer?.id}>
                                <button className="success">

                                </button>
                                <div className="info">
                                    <table>
                                        <tr>
                                            <td className='rejected' colspan="4">{customer?.result}</td>
                                        </tr>
                                        <tr>
                                            <th>Company</th>
                                            <td colspan="3">{customer?.company?.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Oportunity</th>
                                            <td colspan="3">{customer?.oportunity?.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Type</th>
                                            <td>{customer?.type}</td>
                                            <th>Date</th>
                                            <td>{customer?.date}</td>
                                        </tr>
                                    </table>
                                </div>
                                <button className="failure">

                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
     );
}
 
export default Customers;