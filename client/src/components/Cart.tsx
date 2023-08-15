import { Box, Button, Columns, Hero } from 'react-bulma-components';
import { BsCart4 } from 'react-icons/bs';

const Cart = () => {
  return (
    <Columns.Column>
      <Box className="p-0 sticky-box">
        <Hero>
          <Hero.Body className="p-0 pt-4 has-text-centered is-flex-direction-column is-justify-content-center">
            <Columns className="has-text-centered my-0">
              <Columns.Column>
                <BsCart4 size={48} />
              </Columns.Column>
            </Columns>
            <Columns className="has-text-centered my-0">
              <Columns.Column className="has-text-weight-semibold">
                Your basket is empty
              </Columns.Column>
            </Columns>
            <Columns.Column>
              <Button
                type="submit"
                className="is-dark is-fullwidth has-text-weight-semibold"
                disabled
              >
                Go to Checkout
              </Button>
            </Columns.Column>
          </Hero.Body>
        </Hero>
      </Box>
    </Columns.Column>
  );
};

export default Cart;
