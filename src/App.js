
import './App.css';
import MainRouter from './components/MainRouter';
import FetchProvider from './provider/FetchProvider';
import MainProvider from './provider/MainProvider';

function App() {
  return (
    <MainProvider >
    
    <FetchProvider>
        <MainRouter />
    </FetchProvider>
    </MainProvider>
  );
}

export default App;
