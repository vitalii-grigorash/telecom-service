import React, {useState} from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'
import * as FeedbackForm from '../../utils/FeedbackForm';

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);

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

  function feedbackFormSend (name, number, comment) {
    FeedbackForm.sendForm(name, number, comment)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    })
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
        onSendForm={feedbackFormSend}
      />

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onSendForm={feedbackFormSend}
      />

    </div>
  );
}

export default App;
