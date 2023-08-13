import { ConfigProvider } from 'antd';
import './assets/styles/main.scss';
import { getGoogleOAuthURL } from './utils/getGoogleUrl';

function App () {
  return (
    <ConfigProvider>

      <a style={ { color: 'red' } } href={getGoogleOAuthURL() }>Hello</a>
    </ConfigProvider>
  )
}

export default App;