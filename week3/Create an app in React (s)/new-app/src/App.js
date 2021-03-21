import logo from './logo.svg';
import './App.css';
/*
-user interaction 

REACT kullanarak basit bir web sayfasi olusturmanizi istendi. 

- technical details

React dosyasini olusturduk.
src/app.js verilen taglar yazilir.
*/
function App() {
  return (
    <div className="App">
     <p><strong>Input Format</strong></p>
     <p>First line contains <em><strong className="Big">N.N</strong></em> lines follow,each having a PAN number.</p>
     <p><strong>Constraints</strong></p>
     <ul className="Madde">
       <li className="Big"><strong>1  &#8804; <em>N</em>  &#8804; 10 </strong></li>
       <li>Each char is an uppercase letter,ie.,<strong className="Big"><em>char</em> &isin; ['A','Z'].</strong></li>
       <li>Each digit lies between 0 and 9,i.e.,<strong><em>digit</em> &isin; [0,9].</strong></li>
       <li>The length of the PAN number is always 10,i.e.,<strong><em className="Big">length (PAN)</em>=10</strong></li>
       <li>Every character in PAN is either char or digit satisfying the above constraints.</li>
     </ul>
     <p><strong>Output Format</strong></p>
     <p>For every PAN number listed,print YES if it is valid and NO if it isn't.</p>
    </div>
  );
}

export default App;
