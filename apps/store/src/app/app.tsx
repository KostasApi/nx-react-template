// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Banner } from '@nx-react-starter/common-ui';
import { exampleProducts } from '@nx-react-starter/products';

export function App() {
  return (
    <>
      <Banner text="Welcome to the store!" />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
