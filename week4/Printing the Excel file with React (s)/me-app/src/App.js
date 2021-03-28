/*
-user interaction 

Disardan eklenen bir excel dosyasini React.js de okuyup tablo olarak yazdirmamiz istendi.

- technical details

npm i xlsx (kutuphane indirilir).
exceli okumak icin services dosyasi altinda excelservice.js dosyasi olusturulur.
okunan dosya components dosyasi altindaki excelTablo.js te tabloya aktarilir.
 */

import "./App.css";
import Table from "./components/excelTable";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
