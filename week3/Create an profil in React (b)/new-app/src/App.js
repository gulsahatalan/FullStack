import './App.css';
import ProfilPage from './components/profil-aboutMe';
import Header from './components/profil-header';
import Profession from './components/profil-profession';
import Hobbies from './components/profil-hobbies';
import EducationHistory from './components/profil-education';
/*
-user interaction 

REACT kullanarak basit bir web sayfasi olusturmanizi istendi. 

- technical details

React dosyasini olusturduk.
src altinda components dosyasi olusturulur.
components in altinda fonksiyon dosyalari olusturulur.
fonksiyon dosyalari export edilir.
app js te import edilir.
*/
function App() {
  return (
    <div className="App">
      <Header/>
      <ProfilPage/>
      <Profession/>
      <EducationHistory/>
      <Hobbies/>
    
    </div>
  );
}

export default App;
