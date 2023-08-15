import { Button, Columns, Form, Hero } from 'react-bulma-components';
import { FcGoogle } from 'react-icons/fc';
import NavBar from '../../components/navbar';
import { getGoogleOAuthURL } from '../../utils/getGoogleUrl';
const Login = () => {
  const googleOAuthURL = getGoogleOAuthURL();

  return (
    <>
      <Hero className="is-fullheight login">
        <NavBar />
        <Hero.Body className="is-justify-content-center is-align-items-center">
          <Columns className="is-flex is-flex-direction-column form">
            <Columns.Column>
              <Form.Label size="large">Login</Form.Label>
            </Columns.Column>
            <Columns.Column>
              <Form.Field>
                <Form.Label htmlFor="email">Email</Form.Label>
              </Form.Field>
              <Form.Control>
                <Form.Input placeholder="Email address" type="email" />
              </Form.Control>
            </Columns.Column>
            <Columns.Column>
              <Form.Field>
                <Form.Label htmlFor="password">Password</Form.Label>
              </Form.Field>
              <Form.Control>
                <Form.Input placeholder="Password" type="password" />
              </Form.Control>
            </Columns.Column>
            <Columns.Column>
              <Button type="submit" className="is-primary is-fullwidth has-text-weight-semibold">
                Login
              </Button>
            </Columns.Column>
            <Columns.Column className="is-fullwidth has-text-centered has-text-weight-semibold py-1">
              <Columns className="is-flex is-align-items-center">
                <Columns.Column>
                  <hr />
                </Columns.Column>
                <Columns.Column>Or</Columns.Column>
                <Columns.Column>
                  <hr />
                </Columns.Column>
              </Columns>
            </Columns.Column>
            <Columns.Column className="py-1">
              <a href={googleOAuthURL} className="button is-fullwidth has-text-weight-semibold">
                <FcGoogle className="mr-2" />
                Continue with Google
              </a>
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>
    </>
  );
};
export default Login;
