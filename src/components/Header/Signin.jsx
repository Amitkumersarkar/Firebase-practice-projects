import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

const Signin = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error)
                setUser(null);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signOut Done');
                setUser(null);
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col items-center text-center">
                {/* Moved "Login now!" section here, outside the card but within the same flex column */}
                <div className="text-center mb-8"> {/* Added margin-bottom for spacing */}
                    <h1 className="text-5xl font-bold">SignIn now!</h1>
                    <p className="py-6 max-w-md mx-auto"> {/* Added max-width and auto margins for better centering */}
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                {/* --- */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-4">SignIn</button>
                            <button onClick={handleSignOut} className="btn btn-neutral mt-4">SignOut</button>
                            {user && <div>
                                <h4>{user.displayName}</h4>
                                <p>Email : {user.email}</p>
                                <img src={user.photoURL} alt="" />
                            </div>}
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;