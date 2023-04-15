const Login = () => {
  function handleSubmit() {
    // your code here
  }

  return (
    <div  className="container mt-5"  >
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <div id="loginModal" className="login-box modal-content">
                <form onSubmit={handleSubmit} className="account-form">
                  <div className="form-group">
                    <label htmlFor="email">E-posta:</label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sifre">Sifre:</label>
                    <input type="sif" id="sifre" className="form-control" />
                  </div>
                  <div className="form-group row">
                    <div className="col-12 col-md-6">
                      <button type="submit" className="btn btn-primary btn-block" sty>
                        Giris Yap
                      </button>
                    </div>
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

export default Login;

