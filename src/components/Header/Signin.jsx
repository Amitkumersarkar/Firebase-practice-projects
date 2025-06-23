import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

const Signin = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log('ERROR', error)
            })
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
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;