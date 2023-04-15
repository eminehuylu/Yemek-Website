import React from "react";
import logo2 from "../assets/placeholder.png";
import logo3 from "../assets/email.png";
import logo4 from "../assets/phone-call.png";
const Contact = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title">İletişim</h1>
              <p>
                <img
                
                  src={logo2}
                  alt="Location icon"
                  style={{ width: "20px", height: "20px", verticalAlign: "middle" }}
                />
                Parsana, Boğazköy Sk, 42250 Turkey
              </p>
              <p>
                
                <img
                  src={logo3}
                  alt="Location icon"
                  style={{ width: "20px", height: "20px", verticalAlign: "middle" }}
                />
                
                info@engelsizyemek.com
              </p>
              <p>
                <img
                  src={logo4}
                  alt="Phone icon"
                  style={{ width: "20px", height: "20px", verticalAlign: "middle" }}
                />
                
                02125481515
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title">
                İletişim Yemek Siparişi - engelsizyemek.com
              </h1>
              <p>
                Sorularınız için lütfen bu iletişim formunu kullanın veya
                info@engelsizyemek.com adresinden bize ulaşabilirsiniz.
                Görüş
, öneri ve tüm sorularınız için info@engelsizyemek.com adresine eposta gönderebilirsiniz.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="email">E-posta:</label>
                  <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="sifre">Sifre:</label>
                  <input type="sif" id="sifre" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="mesaj">Mesaj:</label>
                  <input type="mesaj1" id="mesaj" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
