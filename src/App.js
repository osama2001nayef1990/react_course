import './App.css';
import Header from './Header';
import Post from './post';
import Button from './button';
function App() {
  return (
    <>
      <Header/>
      <div style={{margin: "10px", display: 'flex',justifyContent: 'center',}}>
        <div style={{width: '500px',}}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div style={{margin: '10px',width: '200px',height: '300px',padding: '10px', textAlign: 'center', border: '4px solid #017576'}}>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          
          

        </div>
      </div>
    </>
  );
}

export default App;
