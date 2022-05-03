import logo from './logo.svg';
import './App.css';
import HeadingSection from './components/Header/HeadingSection';
import SearchSection from './components/Search/SearchSection';

function App() {
  return (
    <div className='mainSection'>
      <HeadingSection />
      <SearchSection />
    </div>
  );
}

export default App;
