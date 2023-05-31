import CONSTANT from '../data/constants.json'
const MenuItemsLink = ({ text }) => {
  function getFilteredText(text) {
    return CONSTANT[text];
  }
  return (
    <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
      {getFilteredText(text)}
    </a>
  );
}

export default MenuItemsLink;