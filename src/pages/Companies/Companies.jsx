import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import * as CompanyService from '../../services/CompanyService';

import './Companies.scss';

const Companies = () => {
    const [ companyColl, setCompanyColl ] = useState([]);

    useEffect(() => {
        CompanyService.getAllCompanies().then(({ data }) => {
            setCompanyColl(data);
        });

    }, []);

    return (
        <>
            <Header />
            <section className="contentCont">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr>
                    {companyColl.map( ({id,name,tel,email}) => {return (                        
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{tel}</td>
                            <td>{email}</td>
                        </tr>
                    )})}
                </table>
            </section>
        </>
    );
}
 
export default Companies;