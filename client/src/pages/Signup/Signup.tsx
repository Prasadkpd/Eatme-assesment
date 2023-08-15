import { useState } from 'react';
import { Button, Columns, Form, Hero } from 'react-bulma-components';
import NavBar from '../../components/navbar';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Columns.Column>
            <Form.Field>
              <Form.Label htmlFor="email">Email</Form.Label>
            </Form.Field>
            <Form.Control>
              <Form.Input placeholder="Email address" type="email" />
            </Form.Control>
          </Columns.Column>
        );
      case 2:
        return (
          <>
            <Columns.Column>
              <Form.Field>
                <Form.Label htmlFor="fname">First Name</Form.Label>
              </Form.Field>
              <Form.Control>
                <Form.Input placeholder="First Name" type="text" />
              </Form.Control>
            </Columns.Column>
            <Columns.Column>
              <Form.Field>
                <Form.Label htmlFor="lname">Last Name</Form.Label>
              </Form.Field>
              <Form.Control>
                <Form.Input placeholder="Last Name" type="text" />
              </Form.Control>
            </Columns.Column>
          </>
        );
      case 3:
        return (
          <>
            <Columns.Column>
              <Form.Field>
                <Form.Label htmlFor="password">Password</Form.Label>
              </Form.Field>
              <Form.Control>
                <Form.Input placeholder="Password" type="password" />
              </Form.Control>
            </Columns.Column>
            <Columns.Column>
              <Form.Field>
                <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
              </Form.Field>
              <Form.Control>
                <Form.Input placeholder="Confirm Password" type="password" />
              </Form.Control>
            </Columns.Column>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Hero className="is-fullheight login">
      <NavBar />
      <Hero.Body className="is-justify-content-center is-align-items-center">
        <Columns className="is-flex is-flex-direction-column form">
          <Columns.Column>
            <Form.Label size="large">SignUp</Form.Label>
          </Columns.Column>
          {renderFormStep()}
          <Columns.Column>
            <Button
              onClick={handleContinue}
              className="is-primary is-fullwidth has-text-weight-semibold"
            >
              Continue
            </Button>
          </Columns.Column>
        </Columns>
      </Hero.Body>
    </Hero>
  );
};

export default Signup;
