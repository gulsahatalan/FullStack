/*
-user interaction 
Bize verilen data yapisini state kullanarak web sayfasina yazdirmamiz istendi.

- technical details

. react dosyasi olusturulur.(npx create-react-app)
. component dosyasi olusturulup altindaki dosyalarve data ana dosyaya import edilir.
. fishFarm objesi state olarak atanir.
 */

import "./App.css";

import Fishes from "./components/fishFarm";
function App() {
  return (
    <div className="App">
      <Fishes />
    </div>
  );
}

export default App;
