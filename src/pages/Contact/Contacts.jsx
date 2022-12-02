import React, { useState, useEffect } from "react";
import './Contact.scss';
import ModalPattern from '../../components/ModalPattern/ModalPattern';
import * as ContactService from '../../services/ContactService';
import Header from "../../components/Header/Header";

const Contacts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contactColl, setContactColl] = useState([]);

    useEffect(() => {
        ContactService.getAllContacts().then(({ data }) => {

            data = data.map(({ date, ...props }) => {
                date = date?.split("T")[0]?.toString();

                return { date, ...props };
            }).reverse();


            setContactColl(data);
        });

    }, [contactColl,isOpen]);

    const changeResult = (id, result) => {
        ContactService.markResultAsSuccess(id, result).then(() => {
            setContactColl(prevData => [...prevData]);
        })
    }


    return (
        <>
            <Header />
            <section className="content">
                <div className='itemsContainer'>
                    <ul>
                        {contactColl.map(contact => {
                            return (
                                <li key={contact?.id}>
                                    <button className="success" onClick={() => changeResult(contact?.id, "Rejected")}></button>
                                    <div className="info">
                                        <table>
                                            <tr>
                                                <td className={(contact?.result == "Accepted") ? 'accepted' : 'rejected'} colSpan="4">{contact?.result}</td>
                                            </tr>
                                            <tr>
                                                <th>Company</th>
                                                <td colSpan="3">{contact?.company?.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Oportunity</th>
                                                <td colSpan="3">{contact?.oportunity?.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Type</th>
                                                <td>{contact?.type}</td>
                                                <th>Date</th>
                                                <td>{contact?.date}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <button className="failure" onClick={() => changeResult(contact?.id, "Accepted")}></button>
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