import React, {useState} from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'
import SuccessPopup from '../SuccessPopup/SuccessPopup'
import * as FeedbackForm from '../../utils/FeedbackForm';

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Оставить заявку')

  function handlePopupOpen () {
    setPopupOpen(true);
  }

  function handlePopupClose () {
    setPopupOpen(false);
  }

  function handleSuccessPopupOpen () {
    setSuccessPopupOpen(true);
  }

  function handleSuccessPopupClose () {
    setSuccessPopupOpen(false);
  }

  function handleMobilePopupOpen() {
    setIsMobilePopupOpen(true);
  }

  function handleMobilePopupClose() {
    setIsMobilePopupOpen(false);
  }

  function feedbackFormSend (name, number, comment) {
    setSubmitButtonText('Отправка...')
    FeedbackForm.sendForm(name, number, comment)
    .then(() => {
      handlePopupClose();
      handleSuccessPopupOpen();
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setSubmitButtonText('Оставить заявку');
    });
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
        submitButtonText={submitButtonText}
      />

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onSendForm={feedbackFormSend}
        submitButtonText={submitButtonText}
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={handleSuccessPopupClose}
      />

    </div>
  );
}

export default App;
