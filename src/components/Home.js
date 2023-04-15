import React, { useEffect } from "react";
import AdminPanel from "./Admin" // import the AdminPanel component

const Home = ({ currentMenu, goToMenu }) => {

  useEffect(() => {
    console.log(currentMenu, '___currentMenu2');
  },[])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
        <h1 class="text-center mb-5 animated bounce" id="text">ENGELSİZ YEMEK SİTESİNE HOŞGELDİNİZ</h1>

      <h2 class="text-center mb-5">
        <i >En iyi sabah menüleri,öğlen menüleri,akşam menüleri</i>
      </h2>
      
          {/* render the AdminPanel component */}
          <AdminPanel />
          <div className="menu-box-content">
            {currentMenu.map((item, pageId) => (
                <div
                  key={pageId}
                  className="menu
                  -box-item d-inline-block mr-3 mb-3"
                  style={{
                    display: "inline-block",
                    marginRight: "20px",
                    marginTop: pageId === 1 ? "-50px" : 0,
                  }}
                >
                  <ul className="list-unstyled">
                    <li className="item-title font-weight-bold mb-3">
                      {item.name}
                    </li>
                    {item.items.map((item, menuId) => (
                      <li key={menuId}>
                        <a
                          href="/#"
                          onClick={() => goToMenu(pageId, menuId)}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

