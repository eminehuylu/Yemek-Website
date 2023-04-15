import React, { useEffect, useState } from 'react';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import MenuDetail from './components/MenuDetail';
import Login from './components/Login';
import AdminPanel from './components/Admin';

function App() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [currentPage, setCurrentPage] = useState("home");
  const [currentMenu, setCurrentMenu] = useState([]);
  const [currentMenuDetail, setCurrentMenuDetail] = useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function showModal() {
    setIsModalOpen(true);
  }

  const menus = [
    {
      name: 'Sabah Menüsü',
      items: [
        {
          title: 'Pazar Kahvaltısı',
          id: 0,
          content: [
            'Yöresel Peynirler',
            'Dalından Zeytinler',
            'Sucuklu Yumurta',
            'Organik Reçeller',
            'Karakovan Balı',
            'Ciğer Şiş',
            'Pideler',
            'Meyve suyu',
          ]
        },
        {
          title: 'Köy Kahvaltısı',
          id: 1,
          content: [
            'Kaşarlı Yumurta',
            'Pastırmalı Yumurta',
            'Sahanda Yumurta',
            'Muhlama',
            'Menemen',
            'Otlu Peynirli,Sebzeli Gözleme',
            'Sıkma Portakal Suyu',
            'Demlik Çay',
            'Soda',
            'Türk Kahvesi',
          ]
        },
        {
          title: 'Serpme Kahvaltısı',
          id: 2,
          content: [
            'Beyaz Peynir-Taze Kaşar-Erzincan Tulumu',
            'Zeytin Tabağı',
            'Macar Salam-Hindi Füme',
            'Yeşillik Tabağı',
            'Ekmek-Poğaça-Pişi-Kruvasan-Simit',
            'Çay',
          ]
        },
      ]
    },
    {
      name: 'Öğle Menüsü',
      items: [
        {
          title: 'Hafif Öğle',
          id: 0,
          content: [
            'Mercimek Çorbası',
            'Sebzeli Tavuk',
            'Pilav Yeşil Salata',
            'Sütlü Tatlı',

          ]
        },
        {
          title: 'Akdeniz Mutfağı Menü',
          id: 1,
          content: [
            'Ekşi Krema Soslu Etli Pazı Sarma',
            'Girit Ezmesi',
            'Bakla Borani',
            'Su Peltesi',
            'Kuskus Salatası',

          ]
        },
        {
          title: 'Diyet Menü',
          id: 2,
          content: [
            'Etli Sebze Yemeği',
            'Tahıllı Ekmek',
            'Kuru Meyve',
            'Kefir',
            'Yeşillik',

          ]
        },
      ]
    },
    {
      name: 'Akşam Menüsü',
      items: [
        {
          title: 'Küçük Tabaklar',
          id: 0,
          content: [
            'Yengeçli Mini Burgerler',
            'Dana Döş ve Mısır Püresi',
            'Kremalı Mantar Çorbası',
            'Humus',

          ]
        },
        {
          title: 'Büyük Tabaklar',
          id: 1,
          content: [
            'Midyeler ve Kızartmalar',
            'Mühürlenmiş Somon',
            'Biftek ve Patates',
            'Izgara Tavuk',
            'Fırın Kuzu',
          ]
        },
        {
          title: 'Karışık Tabaklar',
          id: 2,
          content: [
            'Elma Dilim Patates',
            'Mısır Çorbası',
            'Buharda Midye',
            'Londra Kızartmasi',
            'Chicago Usulü Pizza',
          ]
        },
      ]
    },
  ];

  useEffect(() => {
    // setMenuArray();
  }, [])

  function setMenuArray() {
    const hour = new Date().getHours();
    let newMenu = [...menus];
    if (hour <= 11) {
      newMenu[1] = menus[0];
      newMenu[0] = menus[1];
    } else if (hour > 12 && hour < 17) {
      newMenu[1] = menus[1];
    } else if (hour >= 17) {
      newMenu[1] = menus[2];
      newMenu[2] = menus[1];
    }
    console.log(newMenu, 'new menu')
    setCurrentMenu(newMenu);
  }

  useEffect(() => {
    console.log(currentMenu);
  }, [currentMenu]);

  const goToMenu = (pageId, itemId) => {
    console.log(pageId, 'PAGE ID')
    console.log(itemId, 'ITEM ID')
    setCurrentMenuDetail(menus[pageId].items[itemId]);
    setCurrentPage("menu-detail");
  }

  return (
    
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="container">
        {
          currentPage === "home" && (
            <Home
              currentMenu={currentMenu}
              goToMenu={goToMenu}
            />
          )
        }
        {
          currentPage === "menu-detail" && (
            <MenuDetail
              currentMenuDetail={currentMenuDetail}
            />
          )
        }
        {
          currentPage === "login" && (
            <Login />
          )
        }
        {
          currentPage === "signup" && (
            
            <Signup />
          )
        }
        {
          currentPage === "contact" && (
            <Contact />
          )
        }

        {currentPage==="admin-panel" && (
          <AdminPanel/>
        )}
        <form>
          <input type="text" placeholder="E-posta adresi " value={email} onChange={e=>setEmail(e.target.value)}/> <br />
        </form>
      </div>
    </>
  );
}





export default App;
