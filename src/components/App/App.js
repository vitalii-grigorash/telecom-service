import React, {useState} from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  function handlePopupOpen () {
    setPopupOpen(true);
  }

  function handlePopupClose () {
    setPopupOpen(false);
  }
  
  return (
    <div className="app">

      <Main
        onOpenPopup={handlePopupOpen}
      />

      <Footer/>

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
      />

    </div>
  );
}

export default App;
