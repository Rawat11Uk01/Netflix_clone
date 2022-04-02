import Row from './Row';
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
