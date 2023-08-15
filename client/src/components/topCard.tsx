import { Button, Columns, Hero, Image } from 'react-bulma-components';
import { IoArrowBackSharp } from 'react-icons/io5';
const TopCard = () => {
  return (
    <Hero className="mx-2 top-card">
      <Hero.Body className="is-justify-content-center is-align-items-center py-2 mx-6">
        <Columns>
          <Button rounded color="primary" inverted className="has-text-weight-semibold">
            <IoArrowBackSharp className="mr-2" />
            Back
          </Button>
        </Columns>
        <Columns>
          <Hero>
            <Hero.Body>
              <Columns>
                <Columns.Column size={'three-quarters'}>
                  <Image
                    src="https://media.cnn.com/api/v1/images/stellar/prod/210211141204-05-classic-italian-dishes.jpg?q=w_5313,h_2988,x_0,y_0,c_fill/h_618"
                    className="top-card-img"
                  />
                </Columns.Column>
                <Columns.Column></Columns.Column>
              </Columns>
            </Hero.Body>
          </Hero>
        </Columns>
      </Hero.Body>
    </Hero>
  );
};

export default TopCard;
