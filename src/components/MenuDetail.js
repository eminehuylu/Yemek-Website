const MenuDetail = ({currentMenuDetail}) => {
    return(
        <div style={{color: 'white'}}>
            <h1>{currentMenuDetail.title}</h1>
            <ul>
                {
                    currentMenuDetail.content.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <button>
                Sepete Ekle
            </button>
        </div>
    )
}

export default MenuDetail;