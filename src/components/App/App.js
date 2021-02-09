import React, {useState, useCallback} from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  function handlePopupOpen () {
    setPopupOpen(true);
    document.addEventListener('keyup', memoizedOnKeyup);
  }

  function handlePopupClose () {
    setPopupOpen(false);
    document.removeEventListener('keyup', memoizedOnKeyup);
  }

  function handleEscClose (evt) {
    if (evt.key === 'Escape') {
      handlePopupClose();
    }
  }

  const memoizedOnKeyup = useCallback(handleEscClose, [handleEscClose]);

  const onOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      setPopupOpen(false);
    }
  }
  
  return (
    <div className="app">

      <Main
        onOpenPopup={handlePopupOpen}
      />

      <Footer />

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onOverlayClose={onOverlayClose}
      />

    </div>
  );
}

export default App;
