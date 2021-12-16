import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import items from './scifi.json'
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

function App() {
  return (
    
    <div>
      <MyNavbar brand="Strivebook" />
      <WarningSign  text ={'Dangerous Alert'}/>
      <MyBadge text={'Successfully'} color={'danger'} />
      <SingleBook book={items[0]}/>
      <BookList books = {items}/>
    </div> 
    
  );
}

export default App;
