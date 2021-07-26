import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Products } from './pages/Products';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  )
}
