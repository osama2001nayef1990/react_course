import './App.css';
import Header from './Header';
import Posts from './Posts';
import SideMenu from './SideMenu';
const ShowMenu = true;
function App() {
  return (
    <>
      <Header/>
      <div style={{margin: "10px", display: 'flex',justifyContent: 'center',}}>
        <Posts/>
        {ShowMenu ? <SideMenu/> : null}
      </div>
    </>
  );
}

export default App;
