import React from 'react';
import { Button, Navbar } from 'react-bulma-components';

interface CategoryMenuProps {
  activeCategory: number | null;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ activeCategory }) => {
  const categories = [
    'Bundles',
    'Salads',
    'Hot Power Bowls',
    'Vegan Menu',
    'Rainbow Wraps',
    'Snacks & Sides',
    'Smoothies, shakes & juice',
    'Cold Drinks',
    'Yoghurt & fruit'
  ];

  return (
    <Navbar className="sticky-nav px-6 py-2 tab-bar" aria-label="main navigation" role="navigation">
      <Navbar.Brand className="mx-6">
        {categories.map((category, index) => (
          <Navbar.Item key={index}>
            <Button
              size={'small'}
              inverted={activeCategory !== index}
              rounded
              className="is-borderless tab-btn"
              color={activeCategory === index ? 'primary' : ''}
            >
              {category}
            </Button>
          </Navbar.Item>
        ))}
      </Navbar.Brand>
    </Navbar>
  );
};

export default CategoryMenu;
