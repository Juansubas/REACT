import React from 'react';
import './App.css';
import Modal from './PortalModal';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="App">
    <div id="modal-root"></div>
      {showModal && (
        <Modal id={'modal-root'}>
          Modal Content
          <button
            style = {{ background: 'gray' }}
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>show Modal</button>
    </div>
  );
}

export default App;