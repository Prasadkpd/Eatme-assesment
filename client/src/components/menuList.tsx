import { useState } from 'react';
import CategoryMenu from './catergoryMenu';
import FoodList from './foodList';

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div>
      <CategoryMenu activeCategory={activeCategory} />
      <FoodList setActiveCategory={setActiveCategory} />
    </div>
  );
};

export default MenuList;
