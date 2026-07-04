// js/checkout.js

const checkoutForm = document.getElementById('checkout-form');
const payBtn = document.getElementById('pay-btn');
const successModal = document.getElementById('success-modal');

checkoutForm.addEventListener('submit', function(event) {
  // Page ko reload hone se roko
  event.preventDefault();

  // Button ka text change karke "Processing..." dikhao
  const originalText = payBtn.textContent;
  payBtn.textContent = "Processing payment...";
  payBtn.style.opacity = "0.7";
  payBtn.style.pointerEvents = "none";

  // 2 second (2000ms) ka fake delay lagao taaki real payment jaisa feel ho
  setTimeout(() => {
    // Modal display karo
    successModal.style.display = "flex";
    
    // Button ko wapas normal kar do (in case they close it)
    payBtn.textContent = originalText;
    payBtn.style.opacity = "1";
    payBtn.style.pointerEvents = "auto";
  }, 2000);
});