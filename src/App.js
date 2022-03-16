// import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import PlaceCard from './components/PlaceCard'
import data from './data';

function App() {
      console.log("App component rendered")
      const PlaceCards = data.map( item => {
                                          return <PlaceCard 
                                                    key = {item.id}
                                                    {...item}
                                                  />
                                        }
                                  )
  
  return (
    <>
      <Head/>
      {PlaceCards}
    </>
  );
}

export default App;
