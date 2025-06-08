import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <main>
        <h2>Dictionary</h2>
        <Dictionary />
      </main>
      </div>
      <footer>Coded by Ida Friis-Mikkelsen, open-sourced on <a href="https://github.com/Ifriism/Dictionary-project">GitHub</a> and hosted on <a href="https://resonant-fudge-a825ff.netlify.app/">Netlify</a></footer>
    </div>
  );
}

export default App;
