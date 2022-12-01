import React, { useState, useEffect } from "react";
import './Contact.scss';
import ModalPattern from '../../components/ModalPattern/ModalPattern';
import * as ContactService from '../../services/ContactService';
function sqlToJsDate(sqlDate){
    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
    var sqlDateArr1 = sqlDate.split("-");
    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
    var sYear = sqlDateArr1[0];
    var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    var sqlDateArr2 = sqlDateArr1[2].split(" ");
    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
    var sDay = sqlDateArr2[0];
    var sqlDateArr3 = sqlDateArr2[1].split(":");
    //format of sqlDateArr3[] = ['hh','mm','ss.ms']
    var sHour = sqlDateArr3[0];
    var sMinute = sqlDateArr3[1];
    var sqlDateArr4 = sqlDateArr3[2].split(".");
    //format of sqlDateArr4[] = ['ss','ms']
    var sSecond = sqlDateArr4[0];
    var sMillisecond = sqlDateArr4[1];
     
    return new Date(sYear,sMonth,sDay,sHour,sMinute,sSecond,sMillisecond);
}

const Contacts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contactColl, setContactColl] = useState([]);

    useEffect(() => {
        ContactService.getAllContacts().then(({ data }) => {
            
            data = data.map( ({date,...props}) => {
                date = date.split("T")[0].toString();              

                return {date, ...props};
            }).reverse();


            setContactColl(data);
        });

    }, [contactColl]);

    return (
        <>
            <section className="content">
                <div className='itemsContainer'>
                    <ul>
                        {contactColl.map( contact => {
                            return (
                                <li key={contact?.id}>
                                    <button className="success">

                                    </button>
                                    <div className="info">
                                        <table>
                                            <tr>
                                                <td className='rejected' colspan="4">{contact?.result}</td>
                                            </tr>
                                            <tr>
                                                <th>Company</th>
                                                <td colspan="3">{contact?.company?.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Oportunity</th>
                                                <td colspan="3">{contact?.oportunity?.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Type</th>
                                                <td>{contact?.type}</td>
                                                <th>Date</th>
                                                <td>{contact?.date}</td>
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
                <button className='newContactButton' onClick={() => setIsOpen(true)}>NEW CONTACT</button>
                {isOpen && <ModalPattern setIsOpen={setIsOpen} />}


            </section>
        </>
    );
}

export default Contacts;