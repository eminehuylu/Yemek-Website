import { Context } from "../context/context";
import { useContext, useState } from "react";

const Signup = () => {
  const context = useContext(Context);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = () => {
    const body = {
      email,
      password
    }
    context.signup(body);
  };

  return (
    <div class="container mt-5 bg-gray-700" id="element-id">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <div id="signupModal" class="signup-box modal-content account-form">
                <form onSubmit={handleRegister}>
                  <div class="form-group">
                    <label htmlFor="email">E-posta:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="form-control" required />
                  </div>
                  <div class="form-group">
                    <label htmlFor="sifre">Sifre:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="sifre" class="form-control" required />
                  </div>
                  <div class="form-group d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary mx-auto">Kaydol</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};


export default Signup;
