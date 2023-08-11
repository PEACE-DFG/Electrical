import React, { useState, useEffect } from 'react';

const AdvertisementPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the pop-up on mount
    setShowPopup(true);

    // Show the pop-up every 5 minutes (adjust the interval as needed)
    const popupInterval = setInterval(() => {
      setShowPopup(true);
    }, 3 * 60 * 1000); // 5 minutes in milliseconds

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(popupInterval);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const popupStyle = {
    animation: showPopup ? 'slide-in 0.5s ease-in-out forwards' : '',
    position: 'fixed',
    bottom: '20px',
    right: showPopup ? '20px' : '-300px', // Start off-screen
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '10px',
    boxShadow: '10px 10px 100px rgba(0, 0, 0, 0.3),5px 5px 50px green',
    zIndex: 1000,
  };

  return (
    <div style={popupStyle}>
      {showPopup && (
        <>
          <button onClick={closePopup} className=' text-light' style={{ position: 'absolute', top: '150px', right: '10px', border: 'none', background: 'none', borderRadius:'50px', cursor: 'pointer',backgroundColor:'rgb(0,0,0,0.6)' }}>
            <span aria-hidden="true" style={{fontSize:"25px",fontWeight:'700'}} className='p-2 align-items-center '>&times;</span>
          </button>
          <h4>Contact For Tutorials</h4>
          <hr />
          <p>Phone: 08116405518</p>
          <p>Email: awofesobipeace@gmail.com</p>
          <p><i class="fa-brands fa-whatsapp text-success fs-5"></i> <a href="https://wa.me/qr/WZWX2LR6FJFPB1">WhatsApp</a></p>
        </>
      )}
    </div>
  );
};

export default AdvertisementPopup;
