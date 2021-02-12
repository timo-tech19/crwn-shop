import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Hompage';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
