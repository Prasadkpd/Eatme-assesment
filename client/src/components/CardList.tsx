import { useEffect, useRef } from 'react';
import { Card, Columns } from 'react-bulma-components';
import Cart from './Cart';

// interface CardListProps {
//   setActiveCategory: React.Dispatch<React.SetStateAction<number | null>>;
// }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const CardListCom = ({ setActiveCategory }) => {
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

  const jsonData = [
    {
      itemId: '1',
      itemName: 'Product 1',
      description: 'This is the description for Product 1.',
      price: 19.99,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPn2zUylueZFtDOPLsrUoWkcf9LJL44haHbg&usqp=CAU'
    },
    {
      itemId: '2',
      itemName: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 29.99,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnbZEGD5_z5u1R_Oji_DDm7HtqNWGGShUxA&usqp=CAU'
    },
    {
      itemId: '3',
      itemName: 'Product 3',
      description: 'This is the description for Product 3.',
      price: 39.99,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUotFdbxG4yWhZV0vxU4HnxqRy6UUicp5ntg&usqp=CAU'
    },
    {
      itemId: '4',
      itemName: 'Product 4',
      description: 'This is the description for Product 4.',
      price: 49.99,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLk18JM-y5CMA_kelGhVzWTt8erE4b809nQ&usqp=CAU'
    }
  ];

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

export default CardListCom;
