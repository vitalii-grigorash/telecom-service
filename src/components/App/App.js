import React, {useState} from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);

  function handleSendForm(name, number, description) {
    console.log(name, number, description);
  }

  function handlePopupOpen () {
    setPopupOpen(true);
  }

  function handlePopupClose () {
    setPopupOpen(false);
  }

  function handleMobilePopupOpen() {
    setIsMobilePopupOpen(true);
  }

  function handleMobilePopupClose() {
    setIsMobilePopupOpen(false);
  }
  
  return (
    <div className="app">

      <Main
        onMobilePopupOpen={handleMobilePopupOpen}
        onMobilePopupClose={handleMobilePopupClose}
        onOpenPopup={handlePopupOpen}
        isMobilePopupOpen={isMobilePopupOpen}
      />

      <Footer
        onSendForm={handleSendForm}
      />

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onSendForm={handleSendForm}
      />

    </div>
  );
}

export default App;
