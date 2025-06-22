import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        console.log('signin using google');
    }
    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mb-5 text-center">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4" onClick={handleSignIn}>Login</button>
        </fieldset>
    );
};

export default Login;