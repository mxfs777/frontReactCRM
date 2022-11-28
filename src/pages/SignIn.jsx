import './SignIn.css';

const SignIn = () => {
    return ( 
        <div className='signInContainer'>
            <h3>Sign In</h3>
            <form action="">
                <div className='form-field'>
                    <input type="text" placeholder='Username' name="username" />
                </div>
                <div className='form-field'>
                    <input type="password" placeholder='Password' name="password" />
                </div>
                <button type="submit">Enter</button>
            </form>
        </div>
     );
}
 
export default SignIn;