import MenuItemsLink from './menuItemsLink'
const MenuItems = ({ items, text }) => {
  return (
    <li>
      <MenuItemsLink text={text} />
      {items.length > 0 ? items.map((valuesub) => (
        <ul>
          {Object.entries(valuesub).map(([keysub]) => (
            <li>
              <MenuItemsLink text={keysub} />
            </li>
          ))}
        </ul>
      )) : null}
    </li>
  );
}

export default MenuItems;