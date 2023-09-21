import Carousel from './Carousel';
import List from './List';
import './App.css';

function App() {
  return (
    <div>
    <div className="container">
      <h1>Just Choose your ideal vacation</h1>
    </div>
    <div >
      <Carousel/>
      </div>
      <div>
      <List/>
    </div>
    </div>
  );
}

export default App;
