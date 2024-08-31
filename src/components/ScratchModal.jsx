import React, { useEffect, useState } from 'react';
import { ScratchCard } from 'next-scratchcard';
import Confetti from 'react-confetti';
import { gsap } from 'gsap';
import './Modal.css';

const ScratchCardModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    // Initialize the discount once when the component mounts
    const initialDiscount = Math.floor(Math.random() * 96) + 5;
    setDiscount(initialDiscount);

    const modalShown = sessionStorage.getItem('modalShown');
    const isEligible = checkUserEligibility();
    const showToRandomUser = shouldShowModal();

    if (!modalShown && isEligible && showToRandomUser) {
      setShowModal(true);
      sessionStorage.setItem('modalShown', 'true'); // Mark the modal as shown for this session
      saveModalDisplayDate(); // Save the date in localStorage
    }
  }, []);

  const checkUserEligibility = () => {
    const lastShownDate = localStorage.getItem('scratchCardLastShown');
    if (!lastShownDate) {
      return true;
    }

    const daysSinceLastShown = Math.floor((Date.now() - new Date(lastShownDate)) / (1000 * 60 * 60 * 24));
    return daysSinceLastShown >= 20; // User is eligible if 20 days have passed
  };

  const shouldShowModal = () => {
    const randomChance = Math.random(); // Generates a number between 0 and 1
    return randomChance < 0.5; // 50% chance to show the modal
  };

  const saveModalDisplayDate = () => {
    localStorage.setItem('scratchCardLastShown', new Date().toISOString());
  };

  const handleScratchComplete = () => {
    setShowConfetti(true);

    // Animate the elements
    gsap.to('.scratch-card-content', { opacity: 0, duration: 1, delay: 2 });
    gsap.to('.modal', { opacity: 0, duration: 1, delay: 4, onComplete: () => setShowModal(false) });
  };

  const scratchCardSettings = {
    width: 300,
    height: 300,
    image: 'https://ik.imagekit.io/ecombrand/JAWD%20Static%20Images/jawd_logo_white.png?updatedAt=1724558092677', // Replace with your overlay image
    finishPercent: 50, // Scratch completion percentage
    onComplete: handleScratchComplete,
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
          <div className="scratch-card-container">
            <div className="modal-content">
              <button className="close-btn" style={{color: "#000", fontSize: "13px"}} onClick={() => setShowModal(false)}>✕</button>
              <h1 style={{color: "#000", fontSize: "24px"}}>Scratch to Get Offer!</h1>
              <p style={{color: "#000"}}>Scratch the card below to reveal your discount!</p>
              <ScratchCard {...scratchCardSettings}>
                <div className="scratch-card-content">
                  <h1>₹{discount} OFF!</h1>
                </div>
              </ScratchCard>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScratchCardModal;
