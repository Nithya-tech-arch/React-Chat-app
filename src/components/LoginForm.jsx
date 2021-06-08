import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'ProjectID' : "2e54d9ad-0dbc-481c-bde0-fc1f3ea171c4", 'User-Name': username, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});

            localStorage.setItem(username: 'username');
            localStorage.setItem(upassword: 'password');

            window.location.reload();

        } catch (error) {
            setError("Oops! Incorrect credentials. ")
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className= "input" placeholder = "Username" required/>
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className= "input" placeholder = "Password" required/>
                <div align="center">
                    <button type = "submit" className = "button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm;