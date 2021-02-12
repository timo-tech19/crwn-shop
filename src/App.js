import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Hompage';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
