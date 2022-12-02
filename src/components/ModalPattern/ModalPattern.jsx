import React, { useEffect, useState } from "react";
import styles from "./ModalPattern.module.scss";
import { RiCloseLine } from "react-icons/ri";

import * as CompanyService from '../../services/CompanyService';
import * as OportunityService from '../../services/OportunityService';
import * as ContactService from '../../services/ContactService';

const ModalPattern = ({ setIsOpen }) => {
  const [ oportunityColl , setOportunityColl] = useState([]);
  const [ companyColl , setCompanyColl] = useState([]);

  useEffect(() => {        
      OportunityService.getAllOportunities().then( ({data}) => {
          setOportunityColl(data)
      });       
 
      CompanyService.getAllCompanies().then( ({data}) => {
          setCompanyColl(data)
      });       

  }, []);

  const sendContactData = (e) => {
    e.preventDefault();

    let formFields = e.target;
    let newContact = {};

    Object.keys(formFields).forEach( key => {
        const { name, value} = formFields[key];

        value && (newContact[name] = value);
    });

    newContact["user_id"] = "1";

    ContactService.saveContact(newContact)
    .then( res => {} )
    .catch( err => {} )
    .finally( () => setIsOpen(false))
  }
  
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
              <form className={styles.fieldsContainer} onSubmit={sendContactData}>                
                <fieldset>
                  <div className={styles.formField}>
                      <label>Type of Contact</label>
                      <select name="type">
                        <option value="Call">Call</option>
                        <option value="Email">Email</option>
                        <option value="Sale Visit">Sale Visit</option>
                      </select>
                  </div>
                  <div className={styles.formField}>
                      <label>Date</label>
                      <input type="date" name="date" />
                  </div>
                  <div className={styles.formField}>
                      <label>Result</label>
                      <select name="result">
                        <option value="Accepted">Accepted</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                  </div>
                </fieldset>
                <fieldset>
                  <div className={styles.formField}>
                      <label>Company</label>
                      <select name="company_id">
                          {companyColl.map( company => <option value={company.id}>{company.name}</option> )}
                      </select>
                  </div>
                  <div className={styles.formField}>
                      <label>Oportunity</label>
                      <select name="oportunity_id">
                          {oportunityColl.map( oportunity => <option value={oportunity.id}>{oportunity.name}</option> )}
                      </select>
                  </div>
                </fieldset>
                <div className={styles.modalActions}>
                  <div className={styles.actionsContainer}>
                    <button type="submit" className={styles.deleteBtn}>
                      Create
                    </button>
                    <button
                      className={styles.cancelBtn}
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ModalPattern;