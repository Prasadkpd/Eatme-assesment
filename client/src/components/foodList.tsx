import { useEffect, useRef } from 'react';
import { Card, Columns } from 'react-bulma-components';
import jsonData from './../assets/data/foodData.json';
import Cart from './cart';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const FoodList = ({ setActiveCategory }) => {
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

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryIndex = cardRefs.current.indexOf(entry.target);
          setActiveCategory(categoryIndex);
          console.log(categoryIndex);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    cardRefs.current.forEach((card) => observer.observe(card));

    return () => {
      cardRefs.current.forEach((card) => observer.unobserve(card));
    };
  }, [setActiveCategory]);

  return (
    <Columns className="mx-6 mt-6">
      <Columns.Column size={'two-thirds'}>
        {categories.map((category, index) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
            <Columns>
              <Columns.Column size={12}>
                <Columns>
                  <Columns.Column size={12} className="ml-2 title mt-3 is-size-4 mb-0">
                    {category}
                  </Columns.Column>
                  {jsonData.map((product) => (
                    <Columns.Column key={product.itemId} size={'half'}>
                      <Card>
                        <Card.Content>
                          <Columns>
                            <Columns.Column>
                              <div className="content">
                                <p className="title is-size-5">{product.itemName}</p>
                                <p className="subtitle is-size-6">${product.price}</p>
                                <p className="is-size-6">{product.description}</p>
                              </div>
                            </Columns.Column>
                            <Columns.Column size={4}>
                              <Card.Image size="square" src={product.imageUrl} />
                            </Columns.Column>
                          </Columns>
                        </Card.Content>
                      </Card>
                    </Columns.Column>
                  ))}
                </Columns>
              </Columns.Column>
            </Columns>
          </div>
        ))}
      </Columns.Column>
      <Cart />
    </Columns>
  );
};

export default FoodList;
