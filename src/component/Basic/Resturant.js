import React,{ useState } from 'react'
import "./Style.css"
import Menu from './menuApi'
import MenuCard from './menuCard'
import Navb from './Navb'
const uniqueList = [ `All`,
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];
const Resturant = () => {
const [MenuData , setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);
const filterItem = (category) => {
  if (category === "All") {
    setMenuData(Menu);
    return;
  }

  const updatedList = Menu.filter((curElem) => {
    return curElem.category === category;
  });

  setMenuData(updatedList);
}
  return (
    <>
     <Navb filterItem={filterItem} menuList={menuList}/>    
        <h1 className='text-center text-danger fst-italic py-4' id='head'>HUNZA FOOD</h1>
    <MenuCard MenuData={MenuData}/> 
    </>
  )
}
export default Resturant
