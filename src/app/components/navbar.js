import data from '../data/servicio.json'

import MenuItems from './menuItems'

const menuList =  data.lista;

const Navbar = () => {
  return (
    <nav className='flex w-full items-center  px-4 bg-white'>
      {menuList.map((list) => (
        <ul className='menulist flex'>
          {Object.entries(list).map(([key, items]) => {
            return <MenuItems items={items} text={key}></MenuItems>;
          })}
        </ul>
      ))}
    </nav>
  )
}

export default Navbar;