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
            <section className="contentCont">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {oportunityColl.map( ({id,name,description}) => {return (                        
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{description}</td>
                        </tr>
                    )})}
                </table>
            </section>
        </>
    );
}
 
export default Oportunities;