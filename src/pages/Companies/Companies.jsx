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
            <section className="content">
                <div className=''>
                    <ul>
                        {companyColl.map( ({id,name}) => <li key={id}>{name}</li>)}
                    </ul>
                </div>
            </section>
        </>
    );
}
 
export default Companies;