import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieReducer from './reducers/movieReducer'
import { Layout} from 'antd';
import sider from './components/sider';

const { Header, Footer, Sider, Content } = Layout;

const store = createStore(movieReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,}}>{sider}
                </Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>

      </Provider>

    </div>
  );
}

export default App;
