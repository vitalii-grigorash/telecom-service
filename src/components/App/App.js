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

  // function handleSendEmail(name, number, description) {
  //   console.log(name, number, description);
  // }
  
  return (
    <div className="app">

      <Main
        onOpenPopup={handlePopupOpen}
      />

      <Footer
        // onSendEmail={handleSendEmail}
      />

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        // onSendEmail={handleSendEmail}
      />

    </div>
  );
}

export default App;
