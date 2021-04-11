/*
-user interaction 
JSON dokümandaki bilgileri, REACT componentlerini kullanarak ekranda uygun formatta göstermemiz istendi.

- technical details

. react dosyasi olusturulur.(npx create-react-app)
.vcomponent dosyasi olusturulup altindaki ana dosya import edilir.
. JSON dokumani app.js te import edilip dosya props yapisi ile diger dosyaya gonderilir.
. Her componente test yazilir.
 */

import "./App.css";
import Foreigner from "./data/foreigners.json";
import Person from "./components/profil";
function App() {
  return (
    <div className="App">
      <Person personList={Foreigner} />{" "}
      {/* json dosyasi profil.js e gonderilir */}
    </div>
  );
}

export default App;
