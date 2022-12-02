import React, { useState, useEffect } from "react";
import * as OportunityService from '../../services/OportunityService';
import Header from "../../components/Header/Header";

const Oportunities = () => {
    const [ oportunityColl, setOportunityColl ] = useState([]);

    useEffect(() => {
        OportunityService.getAllOportunities().then(({ data }) => {
            setOportunityColl(data);
        });

    }, []);

    return (
        <>
            <Header />
            <section className="content">
                <div className=''>
                    <ul>
                        {oportunityColl.map( ({id,name}) => <li key={id}>{name}</li>)}
                    </ul>
                </div>
            </section>
        </>
    );
}
 
export default Oportunities;