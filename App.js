
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

const { products } = data;
const [cartItems, setCartItems] = useState([]);
const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="row">
                <Main></Main>
                <Basket></Basket>
            </div>
        </div>
    )
}

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)