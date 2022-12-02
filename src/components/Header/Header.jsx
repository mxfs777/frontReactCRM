const Header = () => {
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return ( 
        <header className="header">
            <div>
                <h2>{capitalizeFirstLetter(window.location.pathname.toString().substring(1))}</h2>
            </div>
        </header>
    );
}
 
export default Header;