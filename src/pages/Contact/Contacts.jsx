import './Contact.scss';

const Contacts = () => {
    return (
        <>
            <section className="content">
                <div className='itemsContainer'>
                    <ul>
                        <li>
                            <button className="success">

                            </button>
                            <div className="info">
                                <table>
                                    <tr>
                                        <td className='rejected' colspan="4">Rejected </td>
                                    </tr>
                                    <tr>
                                        <th>Company</th>
                                        <td colspan="3">Microsoft </td>
                                    </tr>
                                    <tr>
                                        <th>Oportunity</th>
                                        <td colspan="3">Marketing Plan </td>
                                    </tr>
                                    <tr>
                                        <th>Type</th>
                                        <td>Email</td>
                                        <th>Date</th>
                                        <td>02/12/22</td>
                                    </tr>
                                </table>
                            </div>
                            <button className="failure">

                            </button>
                        </li>
                    </ul>
                </div>
                <button className='newContactButton'>NEW CONTACT</button>
            </section>
        </>
    );
}

export default Contacts;