import { useState } from 'react';
import CardList from './CardList';
import NavigationBar from './categoryNavBar';

const ListView = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div>
      <NavigationBar activeCategory={activeCategory} />
      <CardList setActiveCategory={setActiveCategory} />
    </div>
  );
};

export default ListView;
