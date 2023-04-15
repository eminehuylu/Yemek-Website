import logo from "../assets/food.svg";
import cartIcon from "../assets/sepet.png";

const Navbar = ({currentPage,setCurrentPage}) => {

    function handleClick(routeName){
        setCurrentPage(routeName);
    } 

    return (
        <nav  data-bs-theme="dark" class="px-4 navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="https://cdn-icons-png.flaticon.com/128/857/857681.png">
    <img src={logo} alt="Logo" className="navbar-logo"/> ENGELSİZ YEMEK
  </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a onClick={()=>handleClick("home")} class="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
              </li>
              <li class="nav-item">
                <a onClick={()=>handleClick("login")} class="nav-link" href="#">Giriş Yap</a>
              </li>
              
              <li class="nav-item dropdown">
                <a onClick={() => handleClick("signup")} class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kayıt Ol
                </a>
                
              </li>
              <li class="nav-item">
                <a onClick={()=>handleClick("contact")} class="nav-link active" aria-current="page" href="#">İletişim</a>
              </li>
              <li class="nav-item">
                <a onClick={()=>handleClick("admin-panel")} class="nav-link active" aria-current="page" href="#">Ekle</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;