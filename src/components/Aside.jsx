import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
    return ( 
        <aside className='aside'>
            <div className="avatarContainer">
                <div>
                    <img className="avatar" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar"  />
                    <h3>Name</h3>
                </div>
            </div>
            <ul className="menuItemsContainer">
                <li>
                    <Link to="/profile">
                        <div>
                            <i className="fa-regular fa-user fa-2xl"></i>
                            <p>Profile</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/contacts">
                        <div>
                            <i className="fa-regular fa-address-book  fa-2xl"></i>
                            <p>Contacts</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/oportunities">
                        <div>
                            <i className="fa-regular fa-lightbulb fa-2xl"></i>
                            <p>Oportunities</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/customers">
                        <div>
                            <i className="fa-solid fa-briefcase fa-2xl"></i>
                            <p>Customers</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </aside>
     );
}
 
export default Aside;