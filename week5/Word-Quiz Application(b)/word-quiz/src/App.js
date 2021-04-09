/*
-user interaction 
Bize json datasindaki verileri kullanarak bir word-quiz yapmaniz istendi. Ekrana random olarak Almanca bir kelime ve 4 tane secenek gelecek. (Seceneklerden biri Almanca kelimenin dogru karsiligi olacak diger secenekler yanlis olmali). Sorularin cevaplanmasiyla diger soruya gecilecek ve her soruya gecildiginde skor güncellenecek.

- technical details

. react dosyasi olusturulur.(npx create-react-app)
. component dosyasi olusturulup altindaki dosyalarve data ana dosyaya import edilir.
. stateler belirlenir.(data,true ve false sayisi, toplam soru sayisi ve step)
. stateler alt dosyalara gonderilir.

 */
import "./App.css";
import Quiz from "./components/quiz";

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;
