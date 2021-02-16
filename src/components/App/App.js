import React, {useState} from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'
// import * as SendEmailApi from '../../utils/SendEmailApi';

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);

  function handleSendForm(name, number, description) {

    const formData = {
      name: name,
      number: number,
      description: description,
    }

    const response = fetch ('../../../public/sendmail.php', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const result = response.json();
      console.log(result.message);
    } else {
      console.log('Ошибка');
    }

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
