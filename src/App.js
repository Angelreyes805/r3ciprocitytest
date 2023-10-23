import logo from './logo.svg';
import './App.css';

function App() {
  return (
<section>
  <h1> This is a test form </h1>
  <div className="FormHolder">
    <iframe 
      width="100%" 
      height="100%" 
      src="https://forms.gle/pyhAGgKwisAfq5fC8" 
      frameBorder="0" 
      marginWidth="0" 
      marginHeight="0" 
      style={{border: 'none', maxWidth: '100%', maxHeight: '100%'}} 
      allowFullScreen 
      webkitallowfullscreen="true" 
      mozallowfullscreen="true" 
      msallowfullscreen="true">
  </iframe>
  </div>
</section>
  );
}

export default App;
