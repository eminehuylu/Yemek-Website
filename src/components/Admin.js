import React from "react";
import { useState } from "react";

const AdminPanel = () => {
    const [showForm, setShowForm] = useState(false);



  
return (
<div className="admin-panel d-flex flex-column align-items-center">
<h1>Menü Ekle</h1>
<hr />
<div className="d-flex justify-content-around gap-4 align-items-center flex-wrap">
<button className="btn btn-primary mb-2 flex-grow-" style={{ backgroundImage: 'url(https://cdn.kisikates.com.tr/image-cache/cache/post_content/https---cdn.kisikates.com.tr/editor-image/Lezzet%2520Avcisi/pastobursa.JPG)', backgroundSize: 'cover', width: '300px', height: '200px', fontSize: '40px', fontWeight: 'bold' }} onClick={() => setShowForm(true)}>Sabah</button>
<button className="btn btn-primary mr-2 mb-2" style={{ backgroundImage: 'url(https://images.deliveryhero.io/image/fd-tr/LH/r15a-hero.jpg)', backgroundSize: 'cover',  width: '300px', height: '200px', fontSize: '40px', fontWeight: 'bold' }}onClick={() => setShowForm(true)} >Öğlen</button>
<button className="btn btn-primary mb-2" style={{ backgroundImage: 'url(https://iasbh.tmgrup.com.tr/01382c/650/344/0/35/1365/751?u=https://isbh.tmgrup.com.tr/sbh/2020/02/20/lezzetli-bir-aksam-yemegi-icin-pratik-yemek-tarifleri-1582185048536.jpg)', backgroundSize: 'cover',  width: '300px', height: '200px', fontSize: '40px', fontWeight: 'bold' }}onClick={() => setShowForm(true)}>Akşam</button>

</div>
{showForm ? (
  <form className="menu-form mt-5">
    <div className="form-group">
      <label htmlFor="title">Başlık:</label>
      <input type="text" id="title" className="form-control" />
    </div>
    <div className="form-group">
      <label htmlFor="content">İçerik:</label>
      <textarea id="content" className="form-control"></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="price">Fiyat:</label>
      <input type="number" id="price" className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary">
      Ekle
    </button>
  </form>
) : null}
</div>
);
};
export default AdminPanel;