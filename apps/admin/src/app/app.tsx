import './app.module.css';
import { Banner } from '@nx-react-starter/common-ui';

export function App() {
  return (
    <div>
      <Banner text="Welcome to our admin app!" />
      <button onClick={() => console.log('button clicked!')}>Click me!</button>
    </div>
  );
}

export default App;
