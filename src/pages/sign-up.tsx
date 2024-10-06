import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../sign-up";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, { data, loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Call the mutation with user input
      await signUp({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });
      console.log("User signed up successfully:", data);
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
               <h2 className="text-center">SignUp</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="form-control my-2"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="form-control my-2"
                  required
                />
                <button type="submit" disabled={loading} className="btn btn-success">
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
                {error && <p>Error: {error.message}</p>}
                {data && (
                  <p>Signed up successfully with email: {data.signUp.email}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
