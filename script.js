// Global functions - Define once to avoid duplicates
function toggleContactOptions() {
  const contactOptions = document.getElementById('contactOptions');
  const mainBtn = document.getElementById('contactMainBtn');
  if (contactOptions && mainBtn) {
      contactOptions.classList.toggle('active');
      mainBtn.classList.toggle('active');
  }
}

// Make all functions globally accessible immediately
window.setQuickAmount = function(amount) {
  const amountInput = document.getElementById('addFundsAmountInput');
  if (amountInput) {
    amountInput.value = amount;
    validateAddFundsAmount();
    document.querySelectorAll('.quick-amount-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
  }
};

window.closeAddFundsModal = function() {
  const modal = document.getElementById('addFundsOptionsModal');
  if (modal && modal.parentElement) {
    document.body.removeChild(modal);
  }
  showPage('addFundsPage');
};

window.openUPIAppGeneral = function() {
  const amountInput = document.getElementById('addFundsAmountInput');
  const amount = parseFloat(amountInput.value) || 0;
  
  if (amount >= 100 && amount <= 100000) {
    openAddFundsUPIApp(amount);
  } else {
    const upiID = 'kavita.5049-49@waicici';
    const note = 'Add Funds - India Social Panel';
    const upiUrl = 'upi://pay?pa=' + upiID + '&tn=' + encodeURIComponent(note) + '&cu=INR';
    window.location.href = upiUrl;
  }
};

// Most important - showPaymentPage function for the beautiful payment page
window.showPaymentPage = function(order) {
  const paymentModal = document.createElement('div');
  paymentModal.id = 'paymentModal';
  paymentModal.style.cssText = 
      'position: fixed;' +
      'top: 0;' +
      'left: 0;' +
      'right: 0;' +
      'bottom: 0;' +
      'background: rgba(0,0,0,0.8);' +
      'z-index: 10000;' +
      'display: flex;' +
      'align-items: center;' +
      'justify-content: center;' +
      'padding: 20px;' +
      'overflow-y: auto;' +
      'animation: modalFadeIn 0.3s ease;';

  paymentModal.innerHTML = 
      '<div class="payment-container" style="' +
          'width: 100%;' +
          'max-width: 450px;' +
          'background: white;' +
          'border-radius: 20px;' +
          'overflow: hidden;' +
          'box-shadow: 0 20px 40px rgba(0,0,0,0.3);' +
          'margin: auto;' +
          'max-height: 95vh;' +
          'overflow-y: auto;' +
      '">' +
          '<div class="payment-header" style="' +
              'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);' +
              'color: white;' +
              'padding: 25px;' +
              'text-align: center;' +
          '">' +
              '<h1 style="font-size: 22px; margin-bottom: 8px;">🎉 Order Placed Successfully!</h1>' +
              '<p style="margin: 0;">Complete your payment to activate the order</p>' +
              '<div class="order-id" style="' +
                  'background: rgba(255,255,255,0.2);' +
                  'padding: 8px 16px;' +
                  'border-radius: 20px;' +
                  'display: inline-block;' +
                  'font-weight: 600;' +
                  'margin-top: 10px;' +
                  'font-size: 14px;' +
              '">Order ID: ' + order.id + '</div>' +
          '</div>' +
          '<div class="order-summary" style="' +
              'background: #f8f9fa;' +
              'padding: 20px;' +
              'border-bottom: 1px solid #e9ecef;' +
          '">' +
              '<h3 style="margin-bottom: 15px; color: #333; font-size: 16px;">📋 Order Summary / ऑर्डर विवरण</h3>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Service ID / सेवा आईडी:</span>' +
                  '<strong>' + order.serviceId + '</strong>' +
              '</div>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Service / सेवा:</span>' +
                  '<strong>' + order.serviceName + '</strong>' +
              '</div>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Target Link / लिंक:</span>' +
                  '<strong style="word-break: break-all; max-width: 200px; display: inline-block;">' + order.link + '</strong>' +
              '</div>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Quantity / मात्रा:</span>' +
                  '<strong>' + order.quantity + '</strong>' +
              '</div>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Order Date / दिनांक:</span>' +
                  '<strong>' + order.date + '</strong>' +
              '</div>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Order Time / समय:</span>' +
                  '<strong>' + order.time + '</strong>' +
              '</div>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Status / स्थिति:</span>' +
                  '<strong style="color: #007bff;">🔄 Processing / प्रक्रिया में</strong>' +
              '</div>' +
              '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">' +
                  '<span>Start Time / शुरुआत:</span>' +
                  '<strong style="color: #28a745;">⏱️ 0-15 Minutes / मिनट</strong>' +
              '</div>' +
              '<div style="border-top: 2px solid #007bff; padding-top: 15px; margin-top: 15px; text-align: center;">' +
                  '<div style="font-size: 18px; font-weight: 700; color: #007bff;">💰 Total Amount / कुल राशि: ₹' + (order.charge || order.price || 0).toFixed(2) + '</div>' +
              '</div>' +  
          '</div>' +
          '<div class="payment-methods" style="padding: 25px;">' +
              '<h3 style="margin-bottom: 20px; color: #333; text-align: center; font-size: 18px;">💳 Choose Payment Method / भुगतान विधि चुनें</h3>' +
              '<div class="payment-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 15px;">' +
                  '<button onclick="showUPIAppsPayment()" style="background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; border: none; padding: 12px 8px; border-radius: 10px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; height: 60px; box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);">' +
                      '<i class="fab fa-google-pay" style="font-size: 18px;"></i>' +
                      '<span style="font-size: 11px; font-weight: 600;">UPI Apps</span>' +
                  '</button>' +
                  '<button onclick="showQRCodePayment()" style="background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); color: white; border: none; padding: 12px 8px; border-radius: 10px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; height: 60px; box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);">' +
                      '<i class="fas fa-qrcode" style="font-size: 18px;"></i>' +
                      '<span style="font-size: 11px; font-weight: 600;">QR Code</span>' +
                  '</button>' +
                  '<button onclick="showUPIIDPayment()" style="background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%); color: white; border: none; padding: 12px 8px; border-radius: 10px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; height: 60px; box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);">' +
                      '<i class="fas fa-at" style="font-size: 18px;"></i>' +
                      '<span style="font-size: 11px; font-weight: 600;">UPI ID</span>' +
                  '</button>' +
                  '<button onclick="showCardBankingPayment()" style="background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); color: white; border: none; padding: 12px 8px; border-radius: 10px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; height: 60px; box-shadow: 0 2px 8px rgba(156, 39, 176, 0.3);">' +
                      '<i class="fas fa-credit-card" style="font-size: 18px;"></i>' +
                      '<span style="font-size: 11px; font-weight: 600;">Card/Bank</span>' +
                  '</button>' +
              '</div>' +
              '<div style="text-align: center; margin-bottom: 15px;">' +
                  '<p style="margin: 0; font-size: 12px; color: #666;">Choose your preferred payment method</p>' +
              '</div>' +
              '<div class="payment-note" style="background: #e3f2fd; border-left: 4px solid #2196F3; padding: 15px; border-radius: 8px; margin-bottom: 20px;">' +
                  '<p style="margin: 0; font-size: 14px; color: #1565C0;"><strong>📌 Payment Instructions / भुगतान निर्देश:</strong></p>' +
                  '<ul style="margin: 10px 0 0 20px; font-size: 13px; color: #1565C0;">' +
                      '<li>Complete payment within 10 minutes / 10 मिनट में भुगतान पूरा करें</li>' +
                      '<li>Order will start automatically after payment / भुगतान के बाद ऑर्डर अपने आप शुरू हो जाएगा</li>' +
                      '<li>Save screenshot of payment for reference / भुगतान का स्क्रीनशॉट संदर्भ के लिए सेव करें</li>' +
                  '</ul>' +
              '</div>' +
              '<div class="action-buttons" style="display: flex; gap: 12px; justify-content: space-between;">' +
                  '<button onclick="cancelTransaction()" style="background: #f44336; color: white; border: none; padding: 15px 25px; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; flex: 1;">❌ Cancel Transaction</button>' +
                  '<button onclick="showQRCodePayment()" style="background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%); color: white; border: none; padding: 15px 25px; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; flex: 2;">⚡ Quick Pay</button>' +
              '</div>' +
          '</div>' +
      '</div>';

  window.closePaymentModal = function() {
      if (paymentModal && paymentModal.parentElement) {
          document.body.removeChild(paymentModal);
      }
      document.body.style.overflow = 'auto';
      showPage('dashboardHome');
  };
  
  window.showUPIAppsPayment = function() {
      showUPIAppsModal(order);
  };
  
  window.showQRCodePayment = function() {
      showQRCodeModal(order);
  };
  
  window.showUPIIDPayment = function() {
      showUPIIDModal(order);
  };
  
  window.showCardBankingPayment = function() {
      showCardBankingModal(order);
  };
  
  window.cancelTransaction = function() {
      showCancelConfirmationPopup(() => {
          if (paymentModal && paymentModal.parentElement) {
              document.body.removeChild(paymentModal);
          }
          document.body.style.overflow = 'auto';
          showPage('dashboardHome');
      });
  };

  paymentModal.addEventListener('click', function(e) {
      if (e.target === paymentModal) {
          window.cancelTransaction();
      }
  });
  
  document.body.appendChild(paymentModal);
};

function navigateToHomePage() {
  showPage('dashboardHome');
  forceEnableScrolling();
}

function navigateToServices() {
  showPage('servicesPage');
  forceEnableScrolling();
}

function showCancelConfirmationPopup(onConfirm) {
  if (confirm('Are you sure you want to cancel this transaction?')) {
    onConfirm();
  }
}

function showQRCodeModal(order) {
  // QR Code modal functionality without success notification
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100000;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    max-width: 400px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    animation: slideInRight 0.3s ease;
  `;

  switch(type) {
    case 'success':
      notification.style.background = '#28a745';
      break;
    case 'error':
      notification.style.background = '#dc3545';
      break;
    case 'warning':
      notification.style.background = '#ffc107';
      notification.style.color = '#333';
      break;
    default:
      notification.style.background = '#007bff';
  }

  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: none;
        border: none;
        color: inherit;
        font-size: 18px;
        cursor: pointer;
        margin-left: 10px;
      ">×</button>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification && notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Disable welcome popup functionality completely
function showWelcomePopup() {
  // Welcome popup disabled - ensure scrolling works
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
  console.log('Welcome popup disabled - proceeding to dashboard');
}

function navigateToHomePage() {
  showPage('dashboardHome');
  forceEnableScrolling();
}

function navigateToServices() {
  showPage('servicesPage');
  forceEnableScrolling();
}

const servicePackages = {
  youtube: [
      { id: 1001, name: "YouTube Channel Monetization - Basic", price: 15000, priceType: "fixed", desc: "Basic monetization setup", tier: "basic", deliveryTime: "7-15 days", guarantee: "90 days", quality: "Standard setup" },
      { id: 1002, name: "YouTube Channel Monetization - Premium", price: 19000, priceType: "fixed", desc: "Premium monetization with faster approval & support", tier: "premium", deliveryTime: "3-7 days", guarantee: "180 days", quality: "Premium setup" },
      { id: 1011, name: "YouTube Subscribers - Basic", price: 350, priceType: "per_k", desc: "Standard subscribers delivery", tier: "basic", deliveryTime: "3-5 days", guarantee: "90 days", quality: "Mixed accounts" },
      { id: 1012, name: "YouTube Subscribers - Standard", price: 400, priceType: "per_k", desc: "Real & active subscribers from worldwide", tier: "standard", deliveryTime: "2-3 days", guarantee: "180 days", quality: "Real accounts" },
      { id: 1013, name: "YouTube Subscribers - Premium", price: 520, priceType: "per_k", desc: "Premium active subscribers with high retention", tier: "premium", deliveryTime: "1-2 days", guarantee: "365 days", quality: "HQ active users" },
      { id: 1021, name: "YouTube Views - Basic", price: 200, priceType: "per_k", desc: "Standard video views", tier: "basic", deliveryTime: "12-24 hours", guarantee: "30 days", quality: "Basic retention" },
      { id: 1022, name: "YouTube Views - Standard", price: 250, priceType: "per_k", desc: "High retention views from real users", tier: "standard", deliveryTime: "6-12 hours", guarantee: "60 days", quality: "Good retention" },
      { id: 1023, name: "YouTube Views - Premium", price: 350, priceType: "per_k", desc: "Maximum retention views for better ranking", tier: "premium", deliveryTime: "3-6 hours", guarantee: "90 days", quality: "Max retention" },
      { id: 1031, name: "YouTube Shorts Views - Basic", price: 150, priceType: "per_k", desc: "Basic shorts views delivery", tier: "basic", deliveryTime: "6-12 hours", guarantee: "15 days", quality: "Standard views" },
      { id: 1032, name: "YouTube Shorts Views - Standard", price: 200, priceType: "per_k", desc: "Fast delivery shorts views", tier: "standard", deliveryTime: "3-6 hours", guarantee: "30 days", quality: "Good retention" },
      { id: 1033, name: "YouTube Shorts Views - Premium", price: 280, priceType: "per_k", desc: "Ultra-fast shorts views with viral potential", tier: "premium", deliveryTime: "1-3 hours", guarantee: "45 days", quality: "Viral quality" },
      { id: 1041, name: "YouTube Likes - Basic", price: 140, priceType: "per_k", desc: "Standard video likes", tier: "basic", deliveryTime: "2-4 hours", guarantee: "30 days", quality: "Mixed accounts" },
      { id: 1042, name: "YouTube Likes - Standard", price: 170, priceType: "per_k", desc: "Genuine likes from active accounts", tier: "standard", deliveryTime: "1-2 hours", guarantee: "60 days", quality: "Real accounts" },
      { id: 1043, name: "YouTube Likes - Premium", price: 220, priceType: "per_k", desc: "Premium likes with maximum engagement boost", tier: "premium", deliveryTime: "30-60 mins", guarantee: "90 days", quality: "HQ engaged users" },
      { id: 1051, name: "YouTube Watch Time - Standard", price: 5500, priceType: "per_k", unit: "hours", desc: "Standard watch time for monetization", tier: "standard", deliveryTime: "5-10 days", guarantee: "180 days", quality: "Real watch time" },
      { id: 1052, name: "YouTube Watch Time - Premium", price: 6500, priceType: "per_k", unit: "hours", desc: "Premium watch time with faster delivery", tier: "premium", deliveryTime: "3-7 days", guarantee: "365 days", quality: "HQ watch time" }
  ],
  instagram: [
      { id: 2001, name: "Instagram Followers - Basic", price: 150, priceType: "per_k", desc: "Standard followers with basic delivery", tier: "basic", deliveryTime: "24-48 hours", guarantee: "30 days", quality: "Mixed accounts" },
      { id: 2002, name: "Instagram Followers - Standard", price: 200, priceType: "per_k", desc: "High quality followers with profile pictures", tier: "standard", deliveryTime: "12-24 hours", guarantee: "90 days", quality: "Real accounts" },
      { id: 2003, name: "Instagram Followers - Premium", price: 280, priceType: "per_k", desc: "Premium followers with high engagement & retention", tier: "premium", deliveryTime: "6-12 hours", guarantee: "365 days", quality: "Active HQ accounts" },
      { id: 2011, name: "Instagram Likes - Basic", price: 15, priceType: "per_k", desc: "Quick likes delivery", tier: "basic", deliveryTime: "1-2 hours", guarantee: "7 days", quality: "Mixed accounts" },
      { id: 2012, name: "Instagram Likes - Standard", price: 20, priceType: "per_k", desc: "Instant likes from real accounts", tier: "standard", deliveryTime: "30 mins", guarantee: "30 days", quality: "Real accounts" },
      { id: 2013, name: "Instagram Likes - Premium", price: 35, priceType: "per_k", desc: "Ultra-fast premium likes with high retention", tier: "premium", deliveryTime: "15 mins", guarantee: "90 days", quality: "HQ active users" },
      { id: 2021, name: "Instagram Views - Basic", price: 18, priceType: "per_k", desc: "Standard video/reel views", tier: "basic", deliveryTime: "2-4 hours", guarantee: "7 days", quality: "Basic views" },
      { id: 2022, name: "Instagram Views - Standard", price: 25, priceType: "per_k", desc: "Video/Reel views with high retention", tier: "standard", deliveryTime: "1-2 hours", guarantee: "30 days", quality: "Good retention" },
      { id: 2023, name: "Instagram Views - Premium", price: 40, priceType: "per_k", desc: "Maximum retention views with organic pattern", tier: "premium", deliveryTime: "30 mins", guarantee: "60 days", quality: "Max retention" },
      { id: 2031, name: "Instagram Story Views - Basic", price: 15, priceType: "per_k", desc: "Basic story views delivery", tier: "basic", deliveryTime: "1-3 hours", guarantee: "No refill", quality: "Standard views" },
      { id: 2032, name: "Instagram Story Views - Standard", price: 20, priceType: "per_k", desc: "Story views from active users", tier: "standard", deliveryTime: "30-60 mins", guarantee: "24 hours", quality: "Active users" },
      { id: 2033, name: "Instagram Story Views - Premium", price: 30, priceType: "per_k", desc: "Instant story views from premium accounts", tier: "premium", deliveryTime: "15 mins", guarantee: "7 days", quality: "Premium accounts" },
      { id: 2041, name: "Instagram Reels Likes - Basic", price: 20, priceType: "per_k", desc: "Standard reels likes", tier: "basic", deliveryTime: "2-4 hours", guarantee: "7 days", quality: "Mixed accounts" },
      { id: 2042, name: "Instagram Reels Likes - Standard", price: 25, priceType: "per_k", desc: "Boost your reels engagement", tier: "standard", deliveryTime: "1-2 hours", guarantee: "30 days", quality: "Real accounts" },
      { id: 2043, name: "Instagram Reels Likes - Premium", price: 40, priceType: "per_k", desc: "Ultra-fast reels likes with maximum engagement", tier: "premium", deliveryTime: "30 mins", guarantee: "60 days", quality: "HQ engaged users" },
      { id: 2051, name: "Instagram Reels Views - Basic", price: 22, priceType: "per_k", desc: "Standard reels views", tier: "basic", deliveryTime: "2-4 hours", guarantee: "7 days", quality: "Basic retention" },
      { id: 2052, name: "Instagram Reels Views - Standard", price: 30, priceType: "per_k", desc: "High retention reel views", tier: "standard", deliveryTime: "1-2 hours", guarantee: "30 days", quality: "Good retention" },
      { id: 2053, name: "Instagram Reels Views - Premium", price: 45, priceType: "per_k", desc: "Maximum retention reels views for viral growth", tier: "premium", deliveryTime: "30 mins", guarantee: "60 days", quality: "Max retention" },
      { id: 2061, name: "Instagram Comments - Standard", price: 450, priceType: "per_k", desc: "Basic positive comments", tier: "standard", deliveryTime: "6-12 hours", guarantee: "30 days", quality: "Generic comments" },
      { id: 2062, name: "Instagram Comments - Premium", price: 600, priceType: "per_k", desc: "Custom positive comments with high engagement", tier: "premium", deliveryTime: "3-6 hours", guarantee: "60 days", quality: "Custom comments" },
      { id: 2071, name: "Instagram Saves - Standard", price: 80, priceType: "per_k", desc: "Standard post saves", tier: "standard", deliveryTime: "2-4 hours", guarantee: "30 days", quality: "Real users" },
      { id: 2072, name: "Instagram Saves - Premium", price: 120, priceType: "per_k", desc: "Premium post saves from engaged users", tier: "premium", deliveryTime: "1-2 hours", guarantee: "60 days", quality: "Engaged users" }
  ],
  facebook: [
      { id: 3001, name: "Facebook Monetization - Standard", price: 4500, priceType: "fixed", desc: "Standard page monetization setup", tier: "standard", deliveryTime: "5-10 days", guarantee: "180 days", quality: "Standard setup" },
      { id: 3002, name: "Facebook Monetization - Premium", price: 5500, priceType: "fixed", desc: "Premium monetization with priority support", tier: "premium", deliveryTime: "3-7 days", guarantee: "365 days", quality: "Premium setup" },
      { id: 3011, name: "Facebook Page Likes - Basic", price: 160, priceType: "per_k", desc: "Basic page likes delivery", tier: "basic", deliveryTime: "24-48 hours", guarantee: "60 days", quality: "Mixed accounts" },
      { id: 3012, name: "Facebook Page Likes - Standard", price: 200, priceType: "per_k", desc: "Real page likes from active users", tier: "standard", deliveryTime: "12-24 hours", guarantee: "90 days", quality: "Real accounts" },
      { id: 3013, name: "Facebook Page Likes - Premium", price: 260, priceType: "per_k", desc: "Premium page likes with high engagement", tier: "premium", deliveryTime: "6-12 hours", guarantee: "180 days", quality: "HQ active users" },
      { id: 3021, name: "Facebook Followers - Basic", price: 170, priceType: "per_k", desc: "Standard profile followers", tier: "basic", deliveryTime: "24-48 hours", guarantee: "60 days", quality: "Mixed accounts" },
      { id: 3022, name: "Facebook Followers - Standard", price: 200, priceType: "per_k", desc: "Profile followers from worldwide", tier: "standard", deliveryTime: "12-24 hours", guarantee: "90 days", quality: "Real accounts" },
      { id: 3023, name: "Facebook Followers - Premium", price: 270, priceType: "per_k", desc: "Premium followers with maximum retention", tier: "premium", deliveryTime: "6-12 hours", guarantee: "180 days", quality: "HQ engaged users" },
      { id: 3031, name: "Facebook Post Likes - Basic", price: 80, priceType: "per_k", desc: "Basic post likes", tier: "basic", deliveryTime: "2-4 hours", guarantee: "30 days", quality: "Mixed accounts" },
      { id: 3032, name: "Facebook Post Likes - Standard", price: 100, priceType: "per_k", desc: "Post likes with instant delivery", tier: "standard", deliveryTime: "1-2 hours", guarantee: "60 days", quality: "Real accounts" },
      { id: 3033, name: "Facebook Post Likes - Premium", price: 135, priceType: "per_k", desc: "Premium post likes for maximum engagement", tier: "premium", deliveryTime: "30 mins", guarantee: "90 days", quality: "HQ engaged users" },
      { id: 3041, name: "Facebook Video Views - Basic", price: 12, priceType: "per_k", desc: "Standard video views", tier: "basic", deliveryTime: "3-6 hours", guarantee: "15 days", quality: "Basic retention" },
      { id: 3042, name: "Facebook Video Views - Standard", price: 15, priceType: "per_k", desc: "Video views with high retention", tier: "standard", deliveryTime: "1-3 hours", guarantee: "30 days", quality: "Good retention" },
      { id: 3043, name: "Facebook Video Views - Premium", price: 22, priceType: "per_k", desc: "Maximum retention video views", tier: "premium", deliveryTime: "30-60 mins", guarantee: "45 days", quality: "Max retention" }
  ],
  whatsapp: [
      { id: 4001, name: "WhatsApp Blue Tick Verification", price: 40000, priceType: "fixed", desc: "Official business verification badge" },
      { id: 4002, name: "WhatsApp Channel Members", price: 300, priceType: "per_k", desc: "Real channel subscribers" },
      { id: 4003, name: "WhatsApp Poll Votes", price: 500, priceType: "per_k", desc: "Poll votes from active users" },
      { id: 4004, name: "WhatsApp Status Views", price: 200, priceType: "per_k", desc: "Status views from contacts" }
  ],
  twitter: [
      { id: 5001, name: "Twitter Followers", price: 250, priceType: "per_k", desc: "Real followers with profile pictures" },
      { id: 5002, name: "Twitter Likes", price: 50, priceType: "per_k", desc: "Tweet likes from active accounts" },
      { id: 5003, name: "Twitter Retweets", price: 150, priceType: "per_k", desc: "Retweets for better engagement" },
      { id: 5004, name: "Twitter Views", price: 30, priceType: "per_k", desc: "Tweet/Video views" },
      { id: 5005, name: "Twitter Comments", price: 800, priceType: "per_k", desc: "Custom positive replies" },
      { id: 5006, name: "Twitter Spaces Listeners", price: 300, priceType: "per_k", desc: "Live space listeners" }
  ],
  tiktok: [
      { id: 6001, name: "TikTok Followers", price: 300, priceType: "per_k", desc: "Real followers from worldwide" },
      { id: 6002, name: "TikTok Likes", price: 40, priceType: "per_k", desc: "Video likes with fast delivery" },
      { id: 6003, name: "TikTok Views", price: 35, priceType: "per_k", desc: "High retention video views" },
      { id: 6004, name: "TikTok Shares", price: 200, priceType: "per_k", desc: "Video shares for viral reach" },
      { id: 6005, name: "TikTok Comments", price: 700, priceType: "per_k", desc: "Custom positive comments" },
      { id: 6006, name: "TikTok Live Views", price: 400, priceType: "per_k", desc: "Live stream viewers" }
  ],
  telegram: [
      { id: 7001, name: "Telegram Channel Members", price: 150, priceType: "per_k", desc: "Real channel subscribers" },
      { id: 7002, name: "Telegram Group Members", price: 200, priceType: "per_k", desc: "Active group members" },
      { id: 7003, name: "Telegram Post Views", price: 25, priceType: "per_k", desc: "Channel post views" },
      { id: 7004, name: "Telegram Reactions", price: 100, priceType: "per_k", desc: "Post reactions/emojis" },
      { id: 7005, name: "Telegram Comments", price: 500, priceType: "per_k", desc: "Channel post comments" }
  ],
  linkedin: [
      { id: 8001, name: "LinkedIn Connections", price: 400, priceType: "per_k", desc: "Professional connections" },
      { id: 8002, name: "LinkedIn Page Likes", price: 350, priceType: "per_k", desc: "Company page followers" },
      { id: 8003, name: "LinkedIn Post Likes", price: 200, priceType: "per_k", desc: "Post engagement from professionals" },
      { id: 8004, name: "LinkedIn Views", price: 100, priceType: "per_k", desc: "Profile/post views" },
      { id: 8005, name: "LinkedIn Shares", price: 500, priceType: "per_k", desc: "Post shares in network" }
  ],
  snapchat: [
      { id: 9001, name: "Snapchat Followers", price: 400, priceType: "per_k", desc: "Real snapchat followers" },
      { id: 9002, name: "Snapchat Story Views", price: 150, priceType: "per_k", desc: "Story views from real users" },
      { id: 9003, name: "Snapchat Spotlight Views", price: 200, priceType: "per_k", desc: "Spotlight video views" }
  ],
  pinterest: [
      { id: 10001, name: "Pinterest Followers", price: 300, priceType: "per_k", desc: "Real Pinterest followers" },
      { id: 10002, name: "Pinterest Saves", price: 150, priceType: "per_k", desc: "Pin saves from active users" },
      { id: 10003, name: "Pinterest Likes", price: 100, priceType: "per_k", desc: "Pin likes with fast delivery" },
      { id: 10004, name: "Pinterest Views", price: 50, priceType: "per_k", desc: "Pin impressions and views" }
  ],
  reddit: [
      { id: 11001, name: "Reddit Upvotes", price: 200, priceType: "per_k", desc: "Post/comment upvotes" },
      { id: 11002, name: "Reddit Followers", price: 500, priceType: "per_k", desc: "Profile followers" },
      { id: 11003, name: "Reddit Comments", price: 800, priceType: "per_k", desc: "Custom positive comments" }
  ],
  discord: [
      { id: 12001, name: "Discord Server Members", price: 250, priceType: "per_k", desc: "Real server members" },
      { id: 12002, name: "Discord Online Members", price: 400, priceType: "per_k", desc: "Active online users" },
      { id: 12003, name: "Discord Reactions", price: 150, priceType: "per_k", desc: "Message reactions" }
  ],
  spotify: [
      { id: 13001, name: "Spotify Plays", price: 100, priceType: "per_k", desc: "Track plays with high retention" },
      { id: 13002, name: "Spotify Followers", price: 400, priceType: "per_k", desc: "Artist/playlist followers" },
      { id: 13003, name: "Spotify Likes", price: 200, priceType: "per_k", desc: "Track/album likes" },
      { id: 13004, name: "Spotify Playlist Followers", price: 300, priceType: "per_k", desc: "Playlist followers" }
  ],
  twitch: [
      { id: 14001, name: "Twitch Followers", price: 350, priceType: "per_k", desc: "Channel followers" },
      { id: 14002, name: "Twitch Live Views", price: 500, priceType: "per_k", desc: "Live stream viewers" },
      { id: 14003, name: "Twitch Likes", price: 200, priceType: "per_k", desc: "Video likes" },
      { id: 14004, name: "Twitch Chatters", price: 800, priceType: "per_k", desc: "Active chat participants" }
  ],
  threads: [
      { id: 15001, name: "Threads Followers", price: 250, priceType: "per_k", desc: "Meta Threads followers" },
      { id: 15002, name: "Threads Likes", price: 80, priceType: "per_k", desc: "Post likes from real users" },
      { id: 15003, name: "Threads Reposts", price: 200, priceType: "per_k", desc: "Post reposts/shares" },
      { id: 15004, name: "Threads Views", price: 50, priceType: "per_k", desc: "Post views and impressions" }
  ],
  "website-traffic": [
      { id: 16001, name: "Website Traffic - Worldwide", price: 500, priceType: "per_k", desc: "Real visitors from all countries" },
      { id: 16002, name: "Website Traffic - USA", price: 1000, priceType: "per_k", desc: "Targeted USA traffic" },
      { id: 16003, name: "Website Traffic - India", price: 300, priceType: "per_k", desc: "Indian targeted visitors" },
      { id: 16004, name: "Organic Search Traffic", price: 1500, priceType: "per_k", desc: "SEO organic visitors" }
  ],
  "google-reviews": [
      { id: 17001, name: "Google 5 Star Reviews", price: 1000, priceType: "per_review", desc: "Genuine 5-star business reviews" },
      { id: 17002, name: "Google Review Likes", price: 200, priceType: "per_k", desc: "Helpful votes on reviews" },
      { id: 17003, name: "Google Business Views", price: 100, priceType: "per_k", desc: "Business profile views" }
  ],
  "seo-services": [
      { id: 18001, name: "High DA Backlinks", price: 2000, priceType: "per_k", desc: "Quality backlinks from high DA sites" },
      { id: 18002, name: "Local Citations", price: 500, priceType: "per_k", desc: "Local business directory listings" },
      { id: 18003, name: "Social Signals", price: 300, priceType: "per_k", desc: "Social media mentions and shares" }
  ]
};
const content = {
  english: {
      // Navigation and Headers
      searchService: "Search Service",
      selectService: "Select Service", 
      selectPackage: "Select Package",
      placeOrder: "PLACE ORDER",
      newOrder: "New Order",
      massOrder: "Mass Order",
      currentBalance: "Current Balance",
      totalOrders: "Total Orders",
      deposit: "DEPOSIT NOW",
      lookingToDeposit: "Looking to Deposit?",
      totalSpendings: "Your total spendings",
      importantUpdate: "Important Update",
      mustRead: "Must Read",
      latestNews: "LATEST NEWS",
      congratulations: "Congratulations",
      memberText: "Member",
      orderHistory: "Order History",
      refillHistory: "Refill History",
      addFunds: "Add Funds",

      // Main Navigation Menu
      childPanels: "Child Panels",
      services: "Services",
      tickets: "Tickets",
      faq: "FAQ",
      api: "API",
      referEarn: "Refer & Earn",
      tutorialVideo: "Tutorial Video",
      signOut: "Sign Out",

      // Pages
      allServices: "All Services",
      userGuidelines: "User Guidelines",
      supportTickets: "Support Tickets",
      frequentlyAskedQuestions: "Frequently Asked Questions",
      apiDocumentation: "API Documentation",
      myProfile: "My Profile",

      // Forms and Inputs
      linkInput: "Link (Must be Public)",
      quantity: "Quantity",
      couponCode: "Coupon Code (Optional)",
      youWillPay: "You will pay",
      termsConditions: "Yes, I have confirmed the Terms & Conditions",

      // Payment and Balance
      enterAmount: "Enter Amount to Add",
      minimum: "Minimum",
      maximum: "Maximum",
      quickSelect: "Quick Select",
      paymentMethods: "Payment Methods",
      upiPayment: "UPI Payment",
      payWithGooglePay: "Pay with Google Pay, PhonePe, Paytm, etc.",
      instant: "Instant",
      creditDebitCard: "Credit/Debit Card",
      payWithCard: "Pay with your credit or debit card",
      bankTransfer: "Bank Transfer",
      directBankTransfer: "Direct bank account transfer",
      comingSoon: "Coming Soon",
      securePayment: "Secure payment with SSL encryption",

      // Service Categories
      instagramServices: "Instagram Services",
      facebookServices: "Facebook Services", 
      youtubeServices: "YouTube Services",
      whatsappServices: "WhatsApp Services",
      twitterServices: "Twitter/X Services",
      tiktokServices: "TikTok Services",
      telegramServices: "Telegram Services",
      linkedinServices: "LinkedIn Services",
      snapchatServices: "Snapchat Services",
      pinterestServices: "Pinterest Services",
      redditServices: "Reddit Services",
      discordServices: "Discord Services",
      spotifyServices: "Spotify Services",
      twitchServices: "Twitch Services",
      threadsServices: "Threads Services",
      websiteTraffic: "Website Traffic",
      googleReviews: "Google Reviews",
      seoServices: "SEO Services",
      newOffers: "New Service Offers",

      // Status and Messages
      processing: "Processing",
      completed: "Completed",
      cancelled: "Cancelled",
      pending: "Pending",
      success: "Success",
      failed: "Failed",

      // Common Actions
      create: "Create",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      back: "Back",
      next: "Next",
      close: "Close",
      copy: "Copy",
      generate: "Generate",
      test: "Test",

      // Order related
      orderId: "Order ID",
      serviceName: "Service Name",
      targetUrl: "Target URL",
      orderProgress: "Order Progress",
      estimatedTime: "Estimated Time",
      deliveryTime: "Delivery Time",
      guarantee: "Guarantee",
      quality: "Quality",
      dropRate: "Drop Rate",
      startTime: "Start Time",
      speed: "Speed",

      // Empty states
      noOrdersYet: "You haven't placed any orders yet.",
      startJourney: "Start your journey to social media success by placing your first order now!",
      placeFirstOrder: "Place Your First Order",
      noRefillsRequired: "No Refills Required",
      excellentRetention: "Excellent! All your orders are performing well with high retention rates. No refills have been necessary.",

      // Footer
      premiumSocialMedia: "Premium Social Media Services",
      registeredAgency: "India Social Panel is a registered digital marketing agency specializing in Website Development, Social Media Marketing, Graphic Design, and Meta & Google Ads services.",
      support: "Support",
      language: "Language",
      allRightsReserved: "All rights reserved.",

      // Contact and Support
      contactSupport: "Contact Support",
      phoneSupport: "Call Support", 
      whatsappSupport: "WhatsApp Support",
      telegramSupport: "Telegram Support",
      followUs: "Follow Us",
      aiAssistant: "AI Assistant"
  },
  hindi: {
      // Navigation and Headers
      searchService: "सेवा खोजें",
      selectService: "सेवा चुनें", 
      selectPackage: "पैकेज चुनें",
      placeOrder: "ऑर्डर दें",
      newOrder: "नया ऑर्डर",
      massOrder: "मास ऑर्डर",
      currentBalance: "वर्तमान बैलेंस",
      totalOrders: "कुल ऑर्डर",
      deposit: "अभी जमा करें",
      lookingToDeposit: "जमा करना चाहते हैं?",
      totalSpendings: "आपका कुल खर्च",
      importantUpdate: "महत्वपूर्ण अपडेट",
      mustRead: "जरूर पढ़ें",
      latestNews: "ताजा खबर",
      congratulations: "बधाई हो",
      memberText: "सदस्य",
      orderHistory: "ऑर्डर इतिहास",
      refillHistory: "रिफिल इतिहास",
      addFunds: "फंड जोड़ें",

      // Main Navigation Menu
      childPanels: "चाइल्ड पैनल",
      services: "सेवाएं",
      tickets: "टिकट",
      faq: "सामान्य प्रश्न",
      api: "एपीआई",
      referEarn: "रेफर करें और कमाएं",
      tutorialVideo: "ट्यूटोरियल वीडियो",
      signOut: "साइन आउट",

      // Pages
      allServices: "सभी सेवाएं",
      userGuidelines: "उपयोगकर्ता दिशानिर्देश",
      supportTickets: "सहायता टिकट",
      frequentlyAskedQuestions: "अक्सर पूछे जाने वाले प्रश्न",
      apiDocumentation: "एपीआई प्रलेखन",
      myProfile: "मेरी प्रोफाइल",

      // Forms and Inputs
      linkInput: "लिंक (पब्लिक होना चाहिए)",
      quantity: "मात्रा",
      couponCode: "कूपन कोड (वैकल्पिक)",
      youWillPay: "आप भुगतान करेंगे",
      termsConditions: "हां, मैंने नियम और शर्तों की पुष्टि की है",

      // Payment and Balance
      enterAmount: "जोड़ने के लिए राशि दर्ज करें",
      minimum: "न्यूनतम",
      maximum: "अधिकतम",
      quickSelect: "त्वरित चयन",
      paymentMethods: "भुगतान के तरीके",
      upiPayment: "यूपीआई भुगतान",
      payWithGooglePay: "Google Pay, PhonePe, Paytm आदि से भुगतान करें",
      instant: "तुरंत",
      creditDebitCard: "क्रेडिट/डेबिट कार्ड",
      payWithCard: "अपने क्रेडिट या डेबिट कार्ड से भुगतान करें",
      bankTransfer: "बैंक ट्रांसफर",
      directBankTransfer: "सीधे बैंक खाता स्थानांतरण",
      comingSoon: "जल्द आ रहा है",
      securePayment: "SSL एन्क्रिप्शन के साथ सुरक्षित भुगतान",

      // Service Categories
      instagramServices: "इंस्टाग्राम सेवाएं",
      facebookServices: "फेसबुक सेवाएं", 
      youtubeServices: "यूट्यूब सेवाएं",
      whatsappServices: "व्हाट्सएप सेवाएं",
      twitterServices: "ट्विटर/एक्स सेवाएं",
      tiktokServices: "टिकटॉक सेवाएं",
      telegramServices: "टेलीग्राम सेवाएं",
      linkedinServices: "लिंक्डइन सेवाएं",
      snapchatServices: "स्नैपचैट सेवाएं",
      pinterestServices: "पिंटरेस्ट सेवाएं",
      redditServices: "रेडिट सेवाएं",
      discordServices: "डिस्कॉर्ड सेवाएं",
      spotifyServices: "स्पॉटिफाई सेवाएं",
      twitchServices: "ट्विच सेवाएं",
      threadsServices: "थ्रेड्स सेवाएं",
      websiteTraffic: "वेबसाइट ट्रैफिक",
      googleReviews: "गूगल रिव्यू",
      seoServices: "एसईओ सेवाएं",
      newOffers: "नई सेवा ऑफर",

      // Status and Messages
      processing: "प्रक्रिया में",
      completed: "पूर्ण",
      cancelled: "रद्द",
      pending: "लंबित",
      success: "सफल",
      failed: "असफल",

      // Common Actions
      create: "बनाएं",
      edit: "संपादित करें",
      delete: "हटाएं",
      save: "सेव करें",
      cancel: "रद्द करें",
      confirm: "पुष्टि करें",
      back: "वापस",
      next: "आगे",
      close: "बंद करें",
      copy: "कॉपी करें",
      generate: "जेनरेट करें",
      test: "टेस्ट करें",

      // Order related
      orderId: "ऑर्डर आईडी",
      serviceName: "सेवा का नाम",
      targetUrl: "लक्षित URL",
      orderProgress: "ऑर्डर प्रगति",
      estimatedTime: "अनुमानित समय",
      deliveryTime: "डिलीवरी समय",
      guarantee: "गारंटी",
      quality: "गुणवत्ता",
      dropRate: "ड्रॉप दर",
      startTime: "शुरुआत का समय",
      speed: "गति",

      // Empty states
      noOrdersYet: "आपने अभी तक कोई ऑर्डर नहीं दिया है।",
      startJourney: "अभी अपना पहला ऑर्डर देकर सोशल मीडिया सफलता की यात्रा शुरू करें!",
      placeFirstOrder: "अपना पहला ऑर्डर दें",
      noRefillsRequired: "कोई रिफिल आवश्यक नहीं",
      excellentRetention: "बेहतरीन! आपके सभी ऑर्डर उच्च रिटेंशन दर के साथ अच्छा प्रदर्शन कर रहे हैं। कोई रिफिल आवश्यक नहीं रहा है।",

      // Footer
      premiumSocialMedia: "प्रीमियम सोशल मीडिया सेवाएं",
      registeredAgency: "इंडिया सोशल पैनल एक पंजीकृत डिजिटल मार्केटिंग एजेंसी है जो वेबसाइट डेवलपमेंट, सोशल मीडिया मार्केटिंग, ग्राफिक डिज़ाइन और मेटा और गूगल विज्ञापन सेवाओं में विशेषज्ञता रखती है।",
      support: "सहायता",
      language: "भाषा",
      allRightsReserved: "सभी अधिकार सुरक्षित।",

      // Contact and Support
      contactSupport: "संपर्क सहायता",
      phoneSupport: "फोन सहायता", 
      whatsappSupport: "व्हाट्सएप सहायता",
      telegramSupport: "टेलीग्राम सहायता",
      followUs: "हमें फॉलो करें",
      aiAssistant: "एआई सहायक"
  }
};

let currentLanguage = 'english'; // Default to English

function updateLanguage(language) {
    currentLanguage = language;

    // Update all text content based on selected language
    const langContent = content[language];

    // Update tab buttons
    const newOrderTab = document.getElementById('newOrderTab');
    const massOrderTab = document.getElementById('massOrderTab');
    if (newOrderTab) newOrderTab.textContent = `🛒 ${langContent.newOrder}`;
    if (massOrderTab) massOrderTab.textContent = `📦 ${langContent.massOrder}`;

    // Update form labels
    const searchLabel = document.querySelector('label[for="searchService"]');
    if (searchLabel) searchLabel.textContent = langContent.searchService;

    const serviceLabel = document.querySelector('label[for="serviceSelect"]');
    if (serviceLabel) serviceLabel.textContent = langContent.selectService;

    const packageLabel = document.querySelector('label[for="packageSelect"]');
    if (packageLabel) packageLabel.textContent = langContent.selectPackage;

    const linkLabel = document.querySelector('label[for="linkInput"]');
    if (linkLabel) linkLabel.textContent = langContent.linkInput;

    const quantityLabel = document.querySelector('label[for="quantityInput"]');
    if (quantityLabel) quantityLabel.textContent = langContent.quantity;

    const couponLabel = document.querySelector('label[for="couponInput"]');
    if (couponLabel) couponLabel.textContent = langContent.couponCode;

    // Update buttons
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) placeOrderBtn.textContent = langContent.placeOrder;

    const depositBtn = document.getElementById('depositBtnMain');
    if (depositBtn) depositBtn.textContent = langContent.deposit;

    const addFundsBtn = document.getElementById('dynamicAddFundsBtn');
    if (addFundsBtn) addFundsBtn.innerHTML = `<i class="fas fa-plus-circle"></i> ${langContent.addFunds}`;

    // Update navigation menu
    const navLinks = {
        'newOrderNav': langContent.newOrder,
        'childPanelsNav': langContent.childPanels,
        'ordersNav': langContent.orderHistory,
        'refillHistoryNav': langContent.refillHistory,
        'servicesNav': langContent.services,
        'addFundsNav': langContent.addFunds,
        'ticketsNav': `${langContent.tickets} <span class="badge">1</span>`,
        'faqNav': langContent.faq,
        'apiNav': langContent.api,
        'referEarnNav': langContent.referEarn,
        'tutorialVideoNav': langContent.tutorialVideo
    };

    Object.entries(navLinks).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) {
            const icon = element.querySelector('i');
            const iconHTML = icon ? icon.outerHTML : '';
            element.innerHTML = iconHTML + ' ' + text;
        }
    });

    // Update page headings
    const pageHeadings = {
        'orderHistoryPage': langContent.orderHistory,
        'servicesPage': langContent.allServices,
        'addFundsPage': langContent.addFunds,
        'userGuidePage': langContent.userGuidelines,
        'childPanelsPage': langContent.childPanels,
        'refillHistoryPage': langContent.refillHistory,
        'ticketsPage': langContent.supportTickets,
        'faqPage': langContent.frequentlyAskedQuestions,
        'apiPage': langContent.apiDocumentation,
        'referEarnPage': langContent.referEarn,
        'tutorialVideoPage': langContent.tutorialVideo,
        'userProfilePage': langContent.myProfile
    };

    Object.entries(pageHeadings).forEach(([pageId, heading]) => {
        const page = document.getElementById(pageId);
        if (page) {
            const h2 = page.querySelector('.page-header h2');
            if (h2) h2.textContent = heading;
        }
    });

    // Update balance section
    const balanceText = document.querySelector('.balance-card p');
    if (balanceText) balanceText.textContent = langContent.lookingToDeposit;

    const balanceHeading = document.querySelector('.balance-info h4');
    if (balanceHeading) balanceHeading.textContent = langContent.currentBalance;

    const spendingsText = document.querySelector('.balance-info p:last-child');
    if (spendingsText && (spendingsText.textContent.includes('spendings') || spendingsText.textContent.includes('खर्च'))) {
        spendingsText.textContent = `${langContent.totalSpendings} : ₹0.00`;
    }

    // Update service categories in dropdown
    const serviceOptions = document.querySelectorAll('.dropdown-option');
    serviceOptions.forEach(option => {
        const value = option.dataset.value;
        const span = option.querySelector('span');
        if (span && value) {
            switch(value) {
                case 'instagram':
                    span.firstChild.textContent = langContent.instagramServices;
                    break;
                case 'facebook':
                    span.firstChild.textContent = langContent.facebookServices;
                    break;
                case 'youtube':
                    span.firstChild.textContent = langContent.youtubeServices;
                    break;
                case 'whatsapp':
                    span.firstChild.textContent = langContent.whatsappServices;
                    break;
                case 'twitter':
                    span.firstChild.textContent = langContent.twitterServices;
                    break;
                case 'tiktok':
                    span.firstChild.textContent = langContent.tiktokServices;
                    break;
                case 'telegram':
                    span.firstChild.textContent = langContent.telegramServices;
                    break;
                case 'linkedin':
                    span.firstChild.textContent = langContent.linkedinServices;
                    break;
                case 'snapchat':
                    span.firstChild.textContent = langContent.snapchatServices;
                    break;
                case 'pinterest':
                    span.firstChild.textContent = langContent.pinterestServices;
                    break;
                case 'reddit':
                    span.firstChild.textContent = langContent.redditServices;
                    break;
                case 'discord':
                    span.firstChild.textContent = langContent.discordServices;
                    break;
                case 'spotify':
                    span.firstChild.textContent = langContent.spotifyServices;
                    break;
                case 'twitch':
                    span.firstChild.textContent = langContent.twitchServices;
                    break;
                case 'threads':
                    span.firstChild.textContent = langContent.threadsServices;
                    break;
                case 'website-traffic':
                    span.firstChild.textContent = langContent.websiteTraffic;
                    break;
                case 'google-reviews':
                    span.firstChild.textContent = langContent.googleReviews;
                    break;
                case 'seo-services':
                    span.firstChild.textContent = langContent.seoServices;
                    break;
                case 'new-offers':
                    span.firstChild.textContent = `🔥 ${langContent.newOffers}`;
                    break;
            }
        }
    });

    // Update price section
    const priceHeading = document.querySelector('.price-box h4');
    if (priceHeading) priceHeading.textContent = language === 'hindi' ? 'मूल्य' : 'Price';

    const descriptionHeading = document.querySelector('.description-box h4');
    if (descriptionHeading) descriptionHeading.textContent = language === 'hindi' ? 'विवरण' : 'Description';

    const paymentHeading = document.querySelector('.payment-section h4');
    if (paymentHeading) paymentHeading.textContent = langContent.youWillPay;

    // Update terms checkbox
    const termsLabel = document.querySelector('.checkbox-label');
    if (termsLabel) {
        const checkbox = termsLabel.querySelector('input[type="checkbox"]');
        const link = termsLabel.querySelector('a');
        const checkboxHTML = checkbox ? checkbox.outerHTML : '';
        const checkmarkHTML = termsLabel.querySelector('.checkmark') ? termsLabel.querySelector('.checkmark').outerHTML : '';
        const linkHTML = link ? `<a href="#" class="terms-link">${language === 'hindi' ? 'नियम और शर्तें' : 'Terms & Conditions'}</a>` : '';
        termsLabel.innerHTML = checkboxHTML + checkmarkHTML + langContent.termsConditions.replace('Terms & Conditions', linkHTML);
    }

    // Update news section
    const congratulationsText = document.getElementById('congratulationsText');
    if (congratulationsText) congratulationsText.textContent = `🎉 ${langContent.congratulations} 🎉`;

    const memberText = document.getElementById('memberText');
    if (memberText) memberText.textContent = langContent.memberText;

    const membershipText = document.getElementById('membershipText');
    if (membershipText) {
        membershipText.innerHTML = language === 'hindi' ? 
            `अब आप India Social Panel.in के <span class="member-text" id="memberText">${langContent.memberText}</span> हैं` :
            `Now You are a <span class="member-text" id="memberText">${langContent.memberText}</span> of India Social Panel.in`;
    }

    // Update footer
    const footerLogoSub = document.querySelector('.footer-logo-sub');
    if (footerLogoSub) footerLogoSub.textContent = langContent.premiumSocialMedia;

    const footerDescription = document.querySelector('.footer-section p');
    if (footerDescription && footerDescription.textContent.includes('India Social Panel')) {
        footerDescription.textContent = langContent.registeredAgency;
    }

    const supportHeading = document.querySelector('.footer-section h4');
    if (supportHeading && supportHeading.textContent === 'Support') {
        supportHeading.textContent = langContent.support;
    }

    const languageOption = document.querySelector('.support-item:last-child');
    if (languageOption && languageOption.querySelector('i.fa-language')) {
        languageOption.childNodes[1].textContent = langContent.language;
    }

    // Update contact widget tooltips
    const contactOptions = document.querySelectorAll('.contact-option');
    contactOptions.forEach(option => {
        if (option.classList.contains('phone')) {
            option.setAttribute('data-tooltip', langContent.phoneSupport);
        } else if (option.classList.contains('whatsapp')) {
            option.setAttribute('data-tooltip', langContent.whatsappSupport);
        } else if (option.classList.contains('telegram')) {
            option.setAttribute('data-tooltip', langContent.telegramSupport);
        } else if (option.classList.contains('instagram')) {
            option.setAttribute('data-tooltip', langContent.followUs);
        } else if (option.classList.contains('ai-support')) {
            option.setAttribute('data-tooltip', langContent.aiAssistant);
        }
    });

    // Update payment page elements
    const enterAmountHeading = document.querySelector('.amount-section h3');
    if (enterAmountHeading && enterAmountHeading.textContent.includes('Enter Amount')) {
        enterAmountHeading.textContent = langContent.enterAmount;
    }

    const quickSelectHeading = document.querySelector('.quick-amounts h4');
    if (quickSelectHeading && quickSelectHeading.textContent.includes('Quick Select')) {
        quickSelectHeading.textContent = `💡 ${langContent.quickSelect}`;
    }

    const paymentMethodsHeading = document.querySelector('.payment-methods h4');
    if (paymentMethodsHeading && paymentMethodsHeading.textContent === 'Payment Methods') {
        paymentMethodsHeading.textContent = langContent.paymentMethods;
    }

    // Update method cards
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach(card => {
        const h4 = card.querySelector('h4');
        const p = card.querySelector('p');
        if (h4 && h4.textContent === 'UPI Payment') {
            h4.textContent = langContent.upiPayment;
            if (p) p.textContent = langContent.payWithGooglePay;
        } else if (h4 && h4.textContent === 'Credit/Debit Card') {
            h4.textContent = langContent.creditDebitCard;
            if (p) p.textContent = langContent.payWithCard;
        } else if (h4 && h4.textContent === 'Bank Transfer') {
            h4.textContent = langContent.bankTransfer;
            if (p) p.textContent = langContent.directBankTransfer;
        }
    });

    // Update badges
    const instantBadges = document.querySelectorAll('.instant-badge');
    instantBadges.forEach(badge => {
        if (badge.textContent.includes('Instant')) {
            badge.textContent = `⚡ ${langContent.instant}`;
        }
    });

    const comingSoonBadges = document.querySelectorAll('.coming-soon-badge');
    comingSoonBadges.forEach(badge => {
        if (badge.textContent.includes('Coming Soon')) {
            badge.textContent = langContent.comingSoon;
        }
    });

    // Update security info
    const securityInfo = document.querySelector('.security-info span');
    if (securityInfo && securityInfo.textContent.includes('Secure payment')) {
        securityInfo.textContent = langContent.securePayment;
    }

    // Update empty states
    const emptyStates = document.querySelectorAll('.empty-state');
    emptyStates.forEach(state => {
        const h3 = state.querySelector('h3');
        const p = state.querySelector('p');
        const button = state.querySelector('button');

        if (h3 && h3.textContent.includes("haven't placed any orders")) {
            h3.textContent = langContent.noOrdersYet;
            if (p) p.textContent = langContent.startJourney;
            if (button) button.textContent = langContent.placeFirstOrder;
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', language);

    // Update any remaining static text based on language
    updateRemainingText(language, langContent);
}
let selectedService = '';
let selectedPackage = null;
let orderHistory = [];
let currentOrder = null;
let currentBalance = 0.00;

// Enhanced Timer Variables
let timerInstances = {};
let timerAnimationIntervals = {};
let profileStats = {
  totalOrders: 0,
  totalSpent: 0.00,
  currentBalance: 0.00,
  successRate: 100
};
const EMAILJS_CONFIG = {
  serviceId: 'service_placeholder',
  templateId: 'template_placeholder',
  publicKey: 'placeholder_public_key'
};
function initializeEmailJS() {
  if (EMAILJS_CONFIG.publicKey === 'placeholder_public_key') {
      return;
  }
  try {
      emailjs.init(EMAILJS_CONFIG.publicKey);
  } catch (error) {
  }
}
async function sendOrderNotificationEmail(orderData) {
  if (EMAILJS_CONFIG.publicKey === 'placeholder_public_key') {
      return true;
  }
  try {
      const emailTemplate = {
          to_email: 'achakumar00@gmail.com', // Your email
          order_id: orderData.id,
          service_name: orderData.serviceName,
          service_id: orderData.serviceId,
          target_link: orderData.link,
          quantity: orderData.quantity.toLocaleString(),
          amount: `₹${orderData.price.toFixed(2)}`,
          order_date: orderData.date,
          order_time: orderData.time,
          customer_ip: await getUserIP(),
          order_status: 'Processing - Will start in 0-15 minutes'
      };
      const response = await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          emailTemplate
      );
      showNotification('📧 Order notification sent to admin email!', 'success');
      return true;
  } catch (error) {
      return false;
  }
}
async function getUserIP() {
  try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
  } catch (error) {
      return 'Unknown';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  // Force enable scrolling first
  forceEnableScrolling();

  // Initialize language system
  initializeLanguageSystem();

  // Initialize everything
  updateBalanceDisplay();
  showDashboard();
  initializeEmailJS();

  // Show welcome popup on first load (if needed)
  // Removed welcome popup functionality as requested
  document.getElementById('hamburgerMenu')?.addEventListener('click', toggleSideNav);
  document.getElementById('closeNav')?.addEventListener('click', closeSideNav);
  document.getElementById('navOverlay')?.addEventListener('click', closeSideNav);
  document.getElementById('balanceBtn')?.addEventListener('click', () => showPage('addFundsPage'));
  document.getElementById('userAvatar')?.addEventListener('click', () => showPage('userProfilePage'));
  document.getElementById('darkModeToggle')?.addEventListener('click', toggleDarkMode);
  document.getElementById('serviceSelect')?.addEventListener('change', handleServiceChange);
  document.getElementById('packageSelect')?.addEventListener('change', handlePackageChange);
  document.getElementById('searchService')?.addEventListener('input', setupSearchFunctionality);
  document.getElementById('quantityInput')?.addEventListener('input', function() {
      calculateTotal();
      updatePlaceOrderButtonState();
      showCouponSection();
  });

  document.getElementById('couponInput')?.addEventListener('input', validateCoupon);
  document.getElementById('placeOrderBtn')?.addEventListener('click', handlePlaceOrder);
  document.getElementById('linkInput')?.addEventListener('input', validateLink);
  document.getElementById('termsCheckbox')?.addEventListener('change', updatePlaceOrderButtonState);
  setupCustomDropdowns();
  setupNavigationListeners();
  loadDarkModePreference();
  setupSearchFunctionality();
  initializeAIChatListeners();
  setupProfileFunctionality();

  // Ensure scrolling works properly on load
  forceEnableScrolling();
  console.log('Website loaded successfully - all functionality enabled');
});

// Profile functionality
function setupProfileFunctionality() {
  // Profile functions would go here
  console.log('Profile functionality initialized');
}

function updateProfileStats() {
  // Update profile stats
  const statsElements = document.querySelectorAll('.stat-value');
  if (statsElements.length > 0) {
    statsElements[0].textContent = profileStats.totalOrders;
    statsElements[1].textContent = `₹${profileStats.totalSpent.toFixed(0)}`;
    statsElements[2].textContent = `₹${profileStats.currentBalance.toFixed(0)}`;
    statsElements[3].textContent = `${profileStats.successRate}%`;
  }
}

// Add emergency function to force enable scrolling
function forceEnableScrolling() {
  // Force enable scrolling with !important
  document.body.style.setProperty('overflow', 'auto', 'important');
  document.documentElement.style.setProperty('overflow', 'auto', 'important');
  document.body.style.setProperty('height', 'auto', 'important');
  document.documentElement.style.setProperty('height', 'auto', 'important');
  document.body.style.setProperty('max-height', 'none', 'important');
  document.documentElement.style.setProperty('max-height', 'none', 'important');
  document.body.style.setProperty('position', 'relative', 'important');

  const welcomeOverlay = document.getElementById('welcomePopupOverlay');
  if (welcomeOverlay) {
      welcomeOverlay.style.display = 'none';
      welcomeOverlay.classList.remove('active');
  }

  // Remove any modal overlays that might be stuck
  const modals = document.querySelectorAll('.modal, .overlay, .popup-overlay, .welcome-popup-overlay');
  modals.forEach(modal => {
      modal.style.display = 'none';
      modal.classList.remove('active');
  });

  // Fix main content containers
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
      mainContent.style.setProperty('overflow', 'visible', 'important');
      mainContent.style.setProperty('height', 'auto', 'important');
      mainContent.style.setProperty('max-height', 'none', 'important');
  }

  const dashboard = document.querySelector('.dashboard');
  if (dashboard) {
      dashboard.style.setProperty('overflow', 'visible', 'important');
      dashboard.style.setProperty('height', 'auto', 'important');
      dashboard.style.setProperty('min-height', '100vh', 'important');
      dashboard.style.setProperty('max-height', 'none', 'important');
  }

  // Fix all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      page.style.setProperty('overflow', 'visible', 'important');
      page.style.setProperty('height', 'auto', 'important');
      page.style.setProperty('max-height', 'none', 'important');
  });

  console.log('Emergency scroll fix applied - scrolling should work now');
}

// Make function available globally for debugging
window.forceEnableScrolling = forceEnableScrolling;
function fixScrollingIssues() {
  // Force enable scrolling immediately
  document.body.style.overflow = 'auto !important';
  document.documentElement.style.overflow = 'auto !important';
  document.body.style.height = 'auto !important';
  document.documentElement.style.height = 'auto !important';
  document.body.style.position = 'relative !important';

  // Ensure smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  document.body.style.webkitOverflowScrolling = 'touch';
  document.body.style.minHeight = '100vh';

  // Close any stuck modals that might be preventing scroll
  const modals = document.querySelectorAll('.modal, .overlay, .popup, .welcome-popup-overlay');
  modals.forEach(modal => {
      if (modal.style.display !== 'none' && !modal.classList.contains('active')) {
          modal.style.display = 'none';
          modal.classList.remove('active');
      }
  });

  // Fix main content areas to allow scrolling
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
      mainContent.style.overflow = 'visible';
      mainContent.style.height = 'auto';
      mainContent.style.position = 'relative';
      mainContent.style.maxHeight = 'none';
  }

  const dashboard = document.querySelector('.dashboard');
  if (dashboard) {
      dashboard.style.overflow = 'visible';
      dashboard.style.height = 'auto';
      dashboard.style.minHeight = '100vh';
      dashboard.style.position = 'relative';
      dashboard.style.maxHeight = 'none';
  }

  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      page.style.position = 'relative';
      page.style.overflow = 'visible';
      page.style.height = 'auto';
      page.style.maxHeight = 'none';
  });

  // Ensure welcome popup is properly hidden if not needed
  const welcomeOverlay = document.getElementById('welcomePopupOverlay');
  if (welcomeOverlay && !welcomeOverlay.classList.contains('active')) {
      welcomeOverlay.style.display = 'none';
  }

  // Remove any CSS that might be blocking scroll
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.position === 'fixed' && element.id !== 'welcomePopupOverlay') {
          // Don't change fixed elements except welcome popup
          return;
      }
      if (computedStyle.overflow === 'hidden' && element !== document.body && element !== document.documentElement) {
          element.style.overflow = 'visible';
      }
  });

  console.log('Scrolling issues fixed - page should scroll normally now');
}
// Welcome popup completely disabled and removed
function validateLink() {
  const linkInput = document.getElementById('linkInput');
  const linkValidationMessage = document.getElementById('linkValidationMessage');
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  if (!linkInput || !linkValidationMessage || !placeOrderBtn) return;

  const linkValue = linkInput.value.trim();

  // Check if link starts with "https://" and has at least 8 additional characters
  const isValidLink = linkValue.startsWith('https://') && linkValue.length >= 16; // "https://".length = 8, so total minimum is 16

  if (linkValue === '') {
      // No validation message when field is empty
      linkValidationMessage.style.display = 'none';
      linkValidationMessage.textContent = '';
      linkValidationMessage.className = 'validation-message hidden';
      placeOrderBtn.disabled = true;
      hideCouponSection();
  } else if (isValidLink) {
      // Valid link - hide validation message completely
      linkValidationMessage.style.display = 'none';
      linkValidationMessage.textContent = '';
      linkValidationMessage.className = 'validation-message hidden';
      updatePlaceOrderButtonState();
      showCouponSection();
  } else {
      // Invalid link - show error message
      linkValidationMessage.style.display = 'block';
      linkValidationMessage.textContent = 'Link is invalid.';
      linkValidationMessage.className = 'validation-message error';
      placeOrderBtn.disabled = true;
      hideCouponSection();
  }
}

function showCouponSection() {
  const linkInput = document.getElementById('linkInput');
  const quantityInput = document.getElementById('quantityInput');
  const couponSection = document.getElementById('couponSection');

  if (!linkInput || !quantityInput || !couponSection) return;

  const linkValue = linkInput.value.trim();
  const quantity = parseInt(quantityInput.value) || 0;
  const isLinkValid = linkValue.startsWith('https://') && linkValue.length >= 16;
  const isQuantityValid = quantity >= 100;

  if (isLinkValid && isQuantityValid) {
      couponSection.classList.remove('hidden');
  } else {
      couponSection.classList.add('hidden');
  }
}

function hideCouponSection() {
  const couponSection = document.getElementById('couponSection');
  if (couponSection) {
      couponSection.classList.add('hidden');
      // Clear coupon input when hiding
      const couponInput = document.getElementById('couponInput');
      if (couponInput) {
          couponInput.value = '';
      }
      // Clear validation message
      const couponValidationMessage = document.getElementById('couponValidationMessage');
      if (couponValidationMessage) {
          couponValidationMessage.style.display = 'none';
          couponValidationMessage.textContent = '';
          couponValidationMessage.className = 'validation-message hidden';
      }
  }
}

function validateCoupon() {
  const couponInput = document.getElementById('couponInput');
  const couponValidationMessage = document.getElementById('couponValidationMessage');
  if (!couponInput || !couponValidationMessage) return;

  const couponValue = couponInput.value.trim();

  if (couponValue === '') {
      // No validation message when field is empty
      couponValidationMessage.style.display = 'none';
      couponValidationMessage.textContent = '';
      couponValidationMessage.className = 'validation-message hidden';
  } else {
      // Any coupon code is invalid for now since no coupons are created yet
      couponValidationMessage.style.display = 'block';
      couponValidationMessage.textContent = 'Invalid coupon code. Please check and try again.';
      couponValidationMessage.className = 'validation-message error';
  }

  updatePlaceOrderButtonState();
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
  const icon = document.querySelector('#darkModeToggle i');
  if (icon) {
      if (isDarkMode) {
          icon.className = 'fas fa-sun';
      } else {
          icon.className = 'fas fa-moon';
      }
  }
}
function loadDarkModePreference() {
  const darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'true') {
      document.body.classList.add('dark-mode');
      const icon = document.querySelector('#darkModeToggle i');
      if (icon) {
          icon.className = 'fas fa-sun';
      }
  }
}

function updateRemainingText(language, langContent) {
    // Update dropdown placeholders
    const selectedTexts = document.querySelectorAll('.selected-text');
    selectedTexts.forEach(text => {
        if (text.textContent === 'Select Service') {
            text.textContent = langContent.selectService;
        } else if (text.textContent === 'Select Package') {
            text.textContent = langContent.selectPackage;
        }
    });

    // Update input placeholders
    const searchInput = document.getElementById('searchService');
    if (searchInput) {
        searchInput.placeholder = langContent.searchService;
    }

    const linkInput = document.getElementById('linkInput');
    if (linkInput) {
        linkInput.placeholder = language === 'hindi' ? 'https://instagram.com/उपयोगकर्ता नाम' : 'https://instagram.com/username';
    }

    const quantityInput = document.getElementById('quantityInput');
    if (quantityInput) {
        quantityInput.placeholder = language === 'hindi' ? '100' : '100';
    }

    const couponInput = document.getElementById('couponInput');
    if (couponInput) {
        couponInput.placeholder = language === 'hindi' ? 'कूपन कोड दर्ज करें' : 'Enter coupon code';
    }

    // Update amount input
    const amountInput = document.getElementById('addFundsAmountInput');
    if (amountInput) {
        amountInput.placeholder = language === 'hindi' ? 'राशि दर्ज करें (न्यूनतम: ₹100)' : 'Enter amount (Min: ₹100)';
    }

    // Update validation messages
    const quantityInfo = document.querySelector('.quantity-info');
    if (quantityInfo) {
        quantityInfo.textContent = language === 'hindi' ? 'न्यूनतम: 100 - अधिकतम: 1000000' : 'Min: 100 - Max: 1000000';
    }

    const amountNote = document.querySelector('.amount-note');
    if (amountNote) {
        amountNote.textContent = language === 'hindi' ? 'न्यूनतम: ₹100 | अधिकतम: ₹100,000' : 'Minimum: ₹100 | Maximum: ₹100,000';
    }

    // Update stats card
    const statsHeading = document.querySelector('.stats-card h3');
    if (statsHeading && statsHeading.textContent.includes('TOTAL ORDERS')) {
        statsHeading.textContent = language === 'hindi' ? 'INDIASOCIALPANEL.IN पर कुल ऑर्डर' : 'TOTAL ORDERS AT INDIASOCIALPANEL.IN';
    }

    const statsDescription = document.querySelector('.stats-card p');
    if (statsDescription && statsDescription.textContent.includes('3+ years experience')) {
        statsDescription.textContent = language === 'hindi' ? 'एसएमएम सेवाएं प्रदान करने में 3+ वर्षों का अनुभव!' : '3+ years experience providing SMM services!';
    }

    // Update warning texts
    const warningIcon = document.querySelector('.warning-icon');
    if (warningIcon && warningIcon.textContent.includes('Please Read')) {
        warningIcon.textContent = language === 'hindi' ? '⚠️ कृपया ऑर्डर करने से पहले पढ़ें' : '⚠️ Please Read Before Ordering';
    }

    // Update balance error
    const balanceError = document.querySelector('.balance-error');
    if (balanceError && balanceError.textContent.includes('Houston we have problem')) {
        balanceError.textContent = language === 'hindi' ? '😭 समस्या है! बैलेंस में पर्याप्त फंड नहीं हैं' : '😭 Houston we have problem! And its... Not enough funds on balance';
    }

    // Update must read section
    const mustReadItems = document.querySelectorAll('.must-read li');
    const hindiMustRead = [
        'ऑर्डर देने से पहले विवरण पढ़ें।',
        'पूरा होने से पहले उसी लिंक पर दूसरा ऑर्डर न दें।',
        'गलत या काम न करने वाला लिंक? कोई रिफंड नहीं।',
        'हम स्टार्ट काउंट + मात्रा = अंतिम मात्रा पर काम करते हैं।',
        'यदि आपने रिफिल सेवा ऑर्डर की है तो उपयोगकर्ता नाम न बदलें।',
        '📚 उपयोगकर्ता गाइड पढ़ें ➤ यहां क्लिक करें',
        '📱 अन्य सेवाएं देखें ➤ यहां क्लिक करें'
    ];

    const englishMustRead = [
        'Read description before adding an order.',
        'Do not place a second order on the same link before completion.',
        'Wrong or non-working link? No refund.',
        'We work on start count + quantity = final quantity.',
        'Don\'t change username if you ordered a refill service.',
        '📚 Read User Guide ➤ Click Here',
        '📱 Check Other Services ➤ Click Here'
    ];

    mustReadItems.forEach((item, index) => {
        if (index < (language === 'hindi' ? hindiMustRead : englishMustRead).length) {
            const link = item.querySelector('a');
            const linkHTML = link ? link.outerHTML : '';
            const text = language === 'hindi' ? hindiMustRead[index] : englishMustRead[index];
            item.innerHTML = linkHTML ? text.replace('Click Here', linkHTML) : text;
        }
    });
}

function initializeLanguageSystem() {
    // Get saved language preference or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'english';

    // Set the language select dropdown to the saved/default language
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        languageSelect.addEventListener('change', function() {
            updateLanguage(this.value);
        });
    }

    // Apply the language immediately
    updateLanguage(savedLanguage);
}
function setupSearchFunctionality() {
  const searchInput = document.getElementById('searchService');
  const searchOptions = document.getElementById('searchOptions');
  if (searchInput && searchOptions) {
      searchInput.addEventListener('input', function() {
          const query = this.value.toLowerCase().trim();
          if (query.length === 0) {
              searchOptions.innerHTML = '';
              searchOptions.classList.remove('active');
              return;
          }
          const allServices = [];
          Object.entries(servicePackages).forEach(([category, services]) => {
              services.forEach(service => {
                  allServices.push({
                      ...service,
                      category: category
                  });
              });
          });
          const filteredServices = allServices.filter(service => {
              const serviceName = service.name.toLowerCase();
              const serviceCategory = getServiceDisplayName(service.category).toLowerCase();
              const firstLetterMatch = serviceName.startsWith(query.charAt(0));
              const nameMatch = serviceName.includes(query);
              const categoryMatch = serviceCategory.includes(query);
              return firstLetterMatch || nameMatch || categoryMatch;
          }).sort((a, b) => {
              const aStartsWith = a.name.toLowerCase().startsWith(query);
              const bStartsWith = b.name.toLowerCase().startsWith(query);
              if (aStartsWith && !bStartsWith) return -1;
              if (!aStartsWith && bStartsWith) return 1;
              return a.name.localeCompare(b.name);
          });
          searchOptions.innerHTML = '';
          if (filteredServices.length > 0) {
              filteredServices.slice(0, 15).forEach(service => {
                  const option = document.createElement('div');
                  option.className = 'package-option search-result';
                  option.dataset.service = service.category;
                  option.dataset.package = JSON.stringify(service);
                  const priceText = service.priceType === 'per_k' 
                      ? `₹${service.price}/1k${service.unit ? ` ${service.unit}` : ''}`
                      : `₹${service.price}${service.unit ? ` ${service.unit}` : ''}`;
                  const { icon, iconClass } = getPackageIconAndType(service.name, service.price);
                  option.innerHTML = `
                      <div class="package-icon ${iconClass}">
                          <i class="${icon}"></i>
                      </div>
                      <div class="package-content">
                          <div class="package-info">
                              <div class="package-name">ID: ${service.id} - ${service.name}</div>
                              <div class="package-desc">${service.desc}</div>
                              <div class="service-category">${getServiceDisplayName(service.category)}</div>
                          </div>
                          <div class="package-price">${priceText}</div>
                      </div>
                  `;
                  option.addEventListener('click', function() {
                      selectedService = service.category;
                      selectedPackage = service;
                      const serviceSelected = document.getElementById('serviceSelected');
                      if (serviceSelected) {
                          const serviceIcon = document.querySelector(`[data-value="${service.category}"] .service-icon`);
                          const iconHTML = serviceIcon ? serviceIcon.outerHTML : '<i class="fas fa-cog"></i>';
                          serviceSelected.querySelector('.selected-text').innerHTML = 
                              iconHTML + ' ' + getServiceDisplayName(service.category);
                      }
                      populatePackages(service.category);
                      setTimeout(() => {
                          selectPackageByServiceId(service.id);
                      }, 100);
                      searchInput.value = '';
                      searchOptions.innerHTML = '';
                      searchOptions.classList.remove('active');
                      showNotification('Service and package selected successfully!', 'success');
                  });
                  searchOptions.appendChild(option);
              });
              searchOptions.classList.add('active');
          } else {
              searchOptions.innerHTML = '<div class="no-results">कोई सेवा नहीं मिली / No services found</div>';
              searchOptions.classList.add('active');
          }
      });
      document.addEventListener('click', function(e) {
          if (!e.target.closest('.search-section')) {
              searchOptions.classList.remove('active');
          }
      });
  }
}
function getServiceDisplayName(category) {
  const serviceNames = {
      instagram: 'Instagram Services',
      facebook: 'Facebook Services',
      youtube: 'YouTube Services',
      whatsapp: 'WhatsApp Services',
      twitter: 'Twitter/X Services',
      tiktok: 'TikTok Services',
      telegram: 'Telegram Services',
      linkedin: 'LinkedIn Services',
      snapchat: 'Snapchat Services',
      pinterest: 'Pinterest Services',
      reddit: 'Reddit Services',
      discord: 'Discord Services',
      spotify: 'Spotify Services',
      twitch: 'Twitch Services',
      threads: 'Threads Services',
      'website-traffic': 'Website Traffic',
      'google-reviews': 'Google Reviews',
      'seo-services': 'SEO Services'
  };
  return serviceNames[category] || category;
}
function selectPackageByServiceId(serviceId) {
  const packageOptions = document.getElementById('packageOptions');
  if (packageOptions) {
      const options = packageOptions.querySelectorAll('.package-option');
      options.forEach(option => {
          const packageData = JSON.parse(option.dataset.package);
          if (packageData.id === serviceId) {
              selectPackageOption(option, packageData, serviceId.toString());
              return;
          }
      });
  }
}
function updatePlaceOrderButtonState() {
  const linkInput = document.getElementById('linkInput');
  const quantityInput = document.getElementById('quantityInput');
  const couponInput = document.getElementById('couponInput');
  const termsCheckbox = document.getElementById('termsCheckbox');
  const placeOrderBtn = document.getElementById('placeOrderBtn');

  if (!placeOrderBtn) return;

  const linkValue = linkInput ? linkInput.value.trim() : '';
  const quantity = quantityInput ? parseInt(quantityInput.value.trim()) || 0 : 0;
  const couponValue = couponInput ? couponInput.value.trim() : '';
  const isServiceSelected = selectedService !== '';
  const isPackageSelected = selectedPackage !== null;
  const isLinkValid = linkValue.startsWith('https://') && linkValue.length >= 16;
  const isQuantityValid = quantity >= 100 && quantity <= 1000000;
  const isTermsAccepted = termsCheckbox ? termsCheckbox.checked : false;

  // Coupon is valid if it's empty (optional) or if no validation error is shown
  const couponValidationMessage = document.getElementById('couponValidationMessage');
  const isCouponValid = couponValue === '' || (couponValidationMessage && couponValidationMessage.style.display === 'none');

  // Enable button only if ALL conditions are met
  const allValid = isServiceSelected && isPackageSelected && isLinkValid && isQuantityValid && isCouponValid && isTermsAccepted;
  placeOrderBtn.disabled = !allValid;
}

function generateUniqueOrderId() {
  // Generate a more robust Order ID with current timestamp and random characters
  const timestamp = Date.now().toString();
  const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
  const moreRandomChars = Math.random().toString(36).substring(2, 6).toUpperCase();

  // Create a unique ID: ISP + last 6 digits of timestamp + 8 random alphanumeric characters
  const orderId = 'ISP' + timestamp.slice(-6) + randomChars + moreRandomChars.slice(0, 2);

  // Ensure uniqueness by checking against existing orders
  const existingIds = orderHistory.map(order => order.id);
  if (existingIds.includes(orderId)) {
      // If somehow duplicate (very unlikely), add more randomness
      return 'ISP' + timestamp.slice(-6) + Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  return orderId;
}

// Enhanced Fixed Timer Functions with Animations
function createEnhancedTimer(timerId, duration, onUpdate, onComplete) {
  const timerElement = document.getElementById(timerId);
  if (!timerElement) return;

  // Clear existing timer if any
  if (timerInstances[timerId]) {
      clearInterval(timerInstances[timerId]);
      clearInterval(timerAnimationIntervals[timerId]);
  }

  let timeLeft = duration;
  const totalDuration = duration;

  // Create enhanced fixed timer container
  const timerContainer = document.createElement('div');
  timerContainer.className = 'timer-container-fixed';
  timerContainer.id = `${timerId}-container`;

  // Create timer label
  const timerLabel = document.createElement('div');
  timerLabel.className = 'timer-label';
  timerLabel.textContent = 'Session Expires In';

  // Create progress container
  const progressContainer = document.createElement('div');
  progressContainer.className = 'timer-progress-container';
  const progressFill = document.createElement('div');
  progressFill.className = 'timer-progress-fill';
  progressContainer.appendChild(progressFill);

  // Remove timer from original position and add to fixed container
  const originalParent = timerElement.parentNode;
  timerContainer.appendChild(timerLabel);
  timerContainer.appendChild(timerElement);
  timerContainer.appendChild(progressContainer);

  // Add to body for fixed positioning
  document.body.appendChild(timerContainer);

  // Initialize timer display
  updateTimerDisplay(timerElement, timeLeft);

  // Set initial animation state
  timerElement.className = 'timer-normal';

  // Main timer interval
  timerInstances[timerId] = setInterval(() => {
      timeLeft--;

      // Update display with enhanced animation
      updateEnhancedTimerDisplay(timerElement, timeLeft);

      // Update progress bar with smooth animation
      const progressPercent = (timeLeft / totalDuration) * 100;
      progressFill.style.width = progressPercent + '%';

      // Update progress bar color based on time left
      updateProgressBarColor(progressFill, timeLeft, totalDuration);

      // Change container animation based on time left
      updateTimerContainerState(timerContainer, timeLeft, totalDuration);

      // Create enhanced visual effects
      if (Math.random() < 0.15) {
          createEnhancedFloatingEffect(timerContainer, timeLeft);
      }

      // Callback for updates
      if (onUpdate) onUpdate(timeLeft);

      // Timer completed
      if (timeLeft <= 0) {
          clearInterval(timerInstances[timerId]);
          clearInterval(timerAnimationIntervals[timerId]);

          // Enhanced completion animation
          timerContainer.style.animation = 'timerExpired 1s ease-in-out';

          setTimeout(() => {
              // Remove fixed timer
              if (timerContainer && timerContainer.parentElement) {
                  document.body.removeChild(timerContainer);
              }
              if (onComplete) onComplete();
          }, 1000);
      }
  }, 1000);

  // Enhanced animation interval
  timerAnimationIntervals[timerId] = setInterval(() => {
      addEnhancedTimerEffects(timerContainer, timeLeft);
  }, 2000);

  return timerContainer;
}

function updateEnhancedTimerDisplay(element, seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const newTimeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

  if (element.textContent !== newTimeString) {
      // Enhanced digit change animation
      element.style.transform = 'scale(1.1)';
      element.style.filter = 'brightness(1.3)';

      setTimeout(() => {
          element.textContent = newTimeString;
          element.style.transform = 'scale(1)';
          element.style.filter = 'brightness(1)';
      }, 150);
  }
}

function updateProgressBarColor(progressFill, timeLeft, totalDuration) {
  const percentageLeft = (timeLeft / totalDuration) * 100;

  if (percentageLeft > 50) {
      progressFill.style.background = 'linear-gradient(90deg, #28a745, #20c997)';
      progressFill.style.boxShadow = '0 0 20px rgba(40, 167, 69, 0.5)';
  } else if (percentageLeft > 25) {
      progressFill.style.background = 'linear-gradient(90deg, #ffa502, #ff6348)';
      progressFill.style.boxShadow = '0 0 25px rgba(255, 165, 2, 0.6)';
  } else if (percentageLeft > 10) {
      progressFill.style.background = 'linear-gradient(90deg, #ff4757, #ff3742)';
      progressFill.style.boxShadow = '0 0 30px rgba(255, 71, 87, 0.7)';
  } else {
      progressFill.style.background = 'linear-gradient(90deg, #ff4757, #c44569)';
      progressFill.style.boxShadow = '0 0 35px rgba(255, 71, 87, 0.8)';
  }
}

function updateTimerContainerState(container, timeLeft, totalDuration) {
  const percentageLeft = (timeLeft / totalDuration) * 100;

  // Remove all state classes
  container.classList.remove('timer-warning', 'timer-danger', 'timer-critical');

  if (percentageLeft <= 10) {
      container.classList.add('timer-critical');
      container.style.animation = 'backgroundPulse 1s infinite ease-in-out, timerGlow 1.5s infinite ease-in-out';
  } else if (percentageLeft <= 25) {
      container.classList.add('timer-danger');
      container.style.animation = 'backgroundPulse 2s infinite ease-in-out, timerGlow 2s infinite ease-in-out';
  } else if (percentageLeft <= 50) {
      container.classList.add('timer-warning');
      container.style.animation = 'backgroundPulse 3s infinite ease-in-out';
  } else {
      container.style.animation = 'backgroundPulse 3s infinite ease-in-out';
  }
}

function createEnhancedFloatingEffect(container, timeLeft) {
  const effects = ['⭐', '✨', '💫', '🔥', '⚡'];
  const effect = effects[Math.floor(Math.random() * effects.length)];

  const floatingElement = document.createElement('div');
  floatingElement.textContent = effect;
  floatingElement.style.cssText = `
      position: absolute;
      font-size: 16px;
      pointer-events: none;
      z-index: 1000;
      animation: sparkleEffect 2s ease-out forwards;
      top: ${Math.random() * 50}%;
      left: ${Math.random() * 50}%;
      color: rgba(255,255,255,0.9);
  `;

  container.appendChild(floatingElement);

  setTimeout(() => {
      if (floatingElement.parentNode) {
          floatingElement.parentNode.removeChild(floatingElement);
      }
  }, 2000);
}

function addEnhancedTimerEffects(container, timeLeft) {
  // Add subtle glow effects around timer
  if (timeLeft > 0) {
      const glowEffect = document.createElement('div');
      glowEffect.style.cssText = `
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 25px;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: sparkleEffect 3s ease-in-out;
          pointer-events: none;
          z-index: -1;
      `;

      container.appendChild(glowEffect);

      setTimeout(() => {
          if (glowEffect.parentNode) {
              glowEffect.parentNode.removeChild(glowEffect);
          }
      }, 3000);
  }
}

// Add timer expiration animation
const timerExpiredKeyframes = `
@keyframes timerExpired {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    background: linear-gradient(135deg, rgba(255, 71, 87, 0.95) 0%, rgba(200, 35, 51, 0.95) 100%);
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}
`;

// Inject the keyframes if not already present
if (!document.querySelector('#timer-expiration-styles')) {
  const style = document.createElement('style');
  style.id = 'timer-expiration-styles';
  style.textContent = timerExpiredKeyframes;
  document.head.appendChild(style);
}

function updateTimerDisplay(element, seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  element.textContent = timeString;
}

function updateTimerDisplayAnimated(element, seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const newTimeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

  if (element.textContent !== newTimeString) {
      // Add digit change animation
      element.classList.add('changing');

      setTimeout(() => {
          element.textContent = newTimeString;
          element.classList.remove('changing');
      }, 300);
  }
}

function updateTimerAnimationState(element, timeLeft, totalDuration) {
  const percentageLeft = (timeLeft / totalDuration) * 100;

  // Remove all timer state classes
  element.classList.remove('timer-normal', 'timer-warning', 'timer-danger', 'timer-critical');

  if (percentageLeft > 50) {
      element.classList.add('timer-normal');
  } else if (percentageLeft > 25) {
      element.classList.add('timer-warning');
  } else if (percentageLeft > 10) {
      element.classList.add('timer-danger');
  } else {
      element.classList.add('timer-critical');
  }
}

function createFloatingNumber(container, number) {
  const floatingNum = document.createElement('div');
  floatingNum.className = 'floating-number';
  floatingNum.textContent = number;

  // Random position around timer
  const randomX = Math.random() * 100 - 50;
  const randomY = Math.random() * 20 - 10;

  floatingNum.style.left = `calc(50% + ${randomX}px)`;
  floatingNum.style.top = `calc(50% + ${randomY}px)`;

  container.appendChild(floatingNum);

  // Remove after animation
  setTimeout(() => {
      if (floatingNum.parentNode) {
          floatingNum.parentNode.removeChild(floatingNum);
      }
  }, 2000);
}

function addTimerSparkles(container) {
  for (let i = 0; i < 3; i++) {
      setTimeout(() => {
          const sparkle = document.createElement('div');
          sparkle.innerHTML = '✨';
          sparkle.style.position = 'absolute';
          sparkle.style.fontSize = '12px';
          sparkle.style.pointerEvents = 'none';
          sparkle.style.zIndex = '1001';

          const randomX = Math.random() * container.offsetWidth;
          const randomY = Math.random() * container.offsetHeight;

          sparkle.style.left = randomX + 'px';
          sparkle.style.top = randomY + 'px';
          sparkle.style.animation = 'floatingNumbers 1.5s ease-out';

          container.appendChild(sparkle);

          setTimeout(() => {
              if (sparkle.parentNode) {
                  sparkle.parentNode.removeChild(sparkle);
              }
          }, 1500);
      }, i * 200);
  }
}

// Function to cleanup timer
function cleanupTimer(timerId) {
  if (timerInstances[timerId]) {
      clearInterval(timerInstances[timerId]);
      delete timerInstances[timerId];
  }

  if (timerAnimationIntervals[timerId]) {
      clearInterval(timerAnimationIntervals[timerId]);
      delete timerAnimationIntervals[timerId];
  }
}

function handlePlaceOrder() {
  const linkInput = document.getElementById('linkInput');
  const quantityInput = document.getElementById('quantityInput');
  const termsCheckbox = document.getElementById('termsCheckbox');
  const errorMessage = document.getElementById('errorMessage');
  const placeOrderBtn = document.getElementById('placeOrderBtn');

  // If button is disabled, don't proceed
  if (placeOrderBtn && placeOrderBtn.disabled) {
      return;
  }

  const isServiceSelected = selectedService !== '';
  const isPackageSelected = selectedPackage !== null;
  const linkValue = linkInput ? linkInput.value.trim() : '';
  const quantity = quantityInput ? parseInt(quantityInput.value.trim()) || 0 : 0;
  const isTermsAccepted = termsCheckbox && termsCheckbox.checked;

  // Final validation checks with specific error messages
  if (!isServiceSelected) {
      showNotification('Please select a service first!', 'error');
      return;
  }
  if (!isPackageSelected) {
      showNotification('Please select a package!', 'error');
      return;
  }
  if (!linkValue) {
      showNotification('Please enter your link!', 'error');
      return;
  }
  if (!linkValue.startsWith('https://') || linkValue.length < 16) {
      showNotification('Link is invalid. Must start with https:// and have at least 8 additional characters.', 'error');
      return;
  }
  if (quantity < 100 || quantity > 1000000) {
      showNotification('Please enter quantity between 100-1000000!', 'error');
      return;
  }
  if (!isTermsAccepted) {
      showNotification('Please accept Terms & Conditions!', 'error');
      return;
  }

  if (errorMessage) {
      errorMessage.classList.add('hidden');
  }

  // Generate unique Order ID
  const orderId = generateUniqueOrderId();
  const totalPrice = selectedPackage.priceType === 'per_k' ? 
      (selectedPackage.price * quantity) / 1000 : selectedPackage.price;

  const order = {
      id: orderId,
      serviceId: selectedPackage.id,
      serviceName: selectedPackage.name,
      link: linkValue,
      quantity: quantity,
      price: totalPrice,
      status: 'Processing',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
  };

  currentOrder = order;
  orderHistory.push(order);
  profileStats.totalOrders = orderHistory.length;
  profileStats.totalSpent += totalPrice;

  sendOrderNotificationEmail(order);
  updateProfileStats();
  updateOrderHistoryPage();

  showNotification(`🎉 Order ${order.id} placed successfully! Admin will be notified via email.`, 'success');
  showPaymentPage(order);
  clearOrderForm();
}
function clearOrderForm() {
  document.getElementById('linkInput').value = '';
  document.getElementById('quantityInput').value = '';
  document.getElementById('couponInput').value = '';
  document.getElementById('termsCheckbox').checked = false;
  selectedService = '';
  selectedPackage = null;
  const serviceSelected = document.getElementById('serviceSelected');
  const packageSelected = document.getElementById('packageSelected');
  const priceSection = document.getElementById('priceSection');
  const couponSection = document.getElementById('couponSection');
  if (serviceSelected) {
      serviceSelected.querySelector('.selected-text').textContent = 'Select Service';
  }
  if (packageSelected) {
      packageSelected.querySelector('.selected-text').textContent = 'Select Package';
  }
  if (priceSection) {
      priceSection.classList.add('hidden');
  }
  if (couponSection) {
      couponSection.classList.add('hidden');
  }
  const linkValidationMessage = document.getElementById('linkValidationMessage');
  const couponValidationMessage = document.getElementById('couponValidationMessage');
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  if (linkValidationMessage && placeOrderBtn) {
      linkValidationMessage.textContent = '';
      linkValidationMessage.className = 'validation-message hidden';
      placeOrderBtn.disabled = false;
  }
  if (couponValidationMessage) {
      couponValidationMessage.textContent = '';
      couponValidationMessage.className = 'validation-message hidden';
  }
}
function updateOrderHistoryPage() {
  const orderHistoryContent = document.getElementById('orderHistoryContent');
  if (!orderHistoryContent) return;

  if (orderHistory.length === 0) {
      orderHistoryContent.innerHTML = `
          <div class="empty-state">
              <div class="empty-icon">🛒</div>
              <h3>आपने अभी तक कोई ऑर्डर नहीं दिया है</h3>
              <h3>You haven't placed any orders yet.</h3>
              <p>अपनी पहली ऑर्डर देकर सोशल मीडिया सफलता की यात्रा शुरू करें!</p>
              <p>Start your journey to social media success by placing your first order now!</p>
              <button class="cta-btn" onclick="showPage('dashboardHome')">अपना पहला ऑर्डर दें / Place Your First Order</button>
          </div>
      `;
  } else {
      // Calculate order statistics
      const totalOrders = orderHistory.length;
      const processingOrders = orderHistory.filter(order => order.status === 'Processing').length;
      const completedOrders = orderHistory.filter(order => order.status === 'Completed').length;
      const totalSpent = orderHistory.reduce((sum, order) => sum + order.price, 0);

      orderHistoryContent.innerHTML = `
          <!-- Enhanced Order Filters and Search -->
          <div class="order-filters-enhanced">
              <div class="order-search-section">
                  <input 
                      type="text" 
                      id="orderSearchInput" 
                      class="order-search-input" 
                      placeholder="Search by Order ID, Service Name, or URL..."
                      oninput="filterOrders()"
                  >
                  <button class="order-search-btn" onclick="clearOrderSearch()">
                      <i class="fas fa-times"></i> Clear
                  </button>
              </div>

              <div class="order-filters-row">
                  <select class="filter-select-enhanced" id="orderStatusFilter" onchange="filterOrders()">
                      <option value="">All Status / सभी स्थिति</option>
                      <option value="Processing">Processing / प्रक्रिया में</option>  
                      <option value="Completed">Completed / पूर्ण</option>
                      <option value="Cancelled">Cancelled / रद्द</option>
                  </select>

                  <select class="filter-select-enhanced" id="orderServiceFilter" onchange="filterOrders()">
                      <option value="">All Services / सभी सेवाएं</option>
                      <option value="Instagram">Instagram Services</option>
                      <option value="YouTube">YouTube Services</option>
                      <option value="Facebook">Facebook Services</option>
                      <option value="WhatsApp">WhatsApp Services</option>
                      <option value="Twitter">Twitter Services</option>
                  </select>

                  <select class="filter-select-enhanced" id="orderSortFilter" onchange="filterOrders()">
                      <option value="newest">Newest First / नवीनतम पहले</option>
                      <option value="oldest">Oldest First / पुराने पहले</option>
                      <option value="highest">Highest Amount / सबसे अधिक राशि</option>
                      <option value="lowest">Lowest Amount / सबसे कम राशि</option>
                  </select>
              </div>
          </div>

          <!-- Order Statistics Summary -->
          <div class="order-stats-summary">
              <div class="order-stat-item">
                  <div class="order-stat-number">${totalOrders}</div>
                  <div class="order-stat-label">Total Orders</div>
              </div>
              <div class="order-stat-item">
                  <div class="order-stat-number">${processingOrders}</div>
                  <div class="order-stat-label">Processing</div>
              </div>
              <div class="order-stat-item">
                  <div class="order-stat-number">${completedOrders}</div>
                  <div class="order-stat-label">Completed</div>
              </div>
              <div class="order-stat-item">
                  <div class="order-stat-number">₹${totalSpent.toFixed(0)}</div>
                  <div class="order-stat-label">Total Spent</div>
              </div>
          </div>

          <!-- Orders List -->
          <div class="orders-list" id="ordersList">
              ${renderOrderItems(orderHistory)}
          </div>
      `;

      // Initialize filters
      setupOrderFilters();
  }
}

function renderOrderItems(orders) {
  return orders.map(order => {
      return `
      <div class="order-item" data-order-id="${order.id}" data-service="${order.serviceName}" data-status="${order.status}">
          <!-- Compact Order Header -->
          <div class="order-card-header">
              <div class="order-id-section">
                  <div class="order-id-badge">#${order.id}</div>
                  <div class="order-date-badge">📅 ${order.date} • ${order.time}</div>
              </div>
              <div class="order-status-section">
                  <div class="order-status-badge processing">🔄 Processing</div>
                  <div class="order-amount-display">₹${order.price.toFixed(2)}</div>
              </div>
          </div>

          <!-- Compact Order Details -->
          <div class="order-details-compact">
              <div class="order-detail-compact">
                  <div class="order-detail-label">
                      <i class="fas fa-cog"></i> Service
                  </div>
                  <div class="order-detail-value service-detail-value">
                      ID: ${order.serviceId}<br>${order.serviceName}
                  </div>
              </div>
              <div class="order-detail-compact">
                  <div class="order-detail-label">
                      <i class="fas fa-chart-bar"></i> Quantity
                  </div>
                  <div class="order-detail-value quantity-detail-value">
                      ${order.quantity.toLocaleString()}
                  </div>
              </div>
          </div>

          <!-- Full-width Target Link -->
          <div class="order-link-section">
              <div class="order-detail-label">
                  <i class="fas fa-link"></i> Target URL
              </div>
              <a href="${order.link}" target="_blank" class="link-detail-value">${order.link}</a>
          </div>

          <!-- Compact Progress Section -->
          <div class="progress-section-compact">
              <div class="progress-header">
                  <i class="fas fa-clock"></i>
                  <span class="progress-title">Order Progress</span>
              </div>
              <div class="progress-bar-container">
                  <div class="progress-bar"></div>
              </div>
              <div class="progress-info">
                  <span>Started • Processing...</span>
                  <span>15% Complete</span>
              </div>
              <div class="estimated-time">
                  ⚡ Start: 0-15 min • Speed: 100K/day
              </div>
          </div>
      </div>
      `;
  }).join('');
}

function setupOrderFilters() {
  // Store original order history for filtering
  window.originalOrderHistory = [...orderHistory];
}

function filterOrders() {
  const searchTerm = document.getElementById('orderSearchInput')?.value.toLowerCase() || '';
  const statusFilter = document.getElementById('orderStatusFilter')?.value || '';
  const serviceFilter = document.getElementById('orderServiceFilter')?.value || '';
  const sortFilter = document.getElementById('orderSortFilter')?.value || 'newest';

  let filteredOrders = [...(window.originalOrderHistory || orderHistory)];

  // Apply search filter
  if (searchTerm) {
      filteredOrders = filteredOrders.filter(order => {
          return order.id.toLowerCase().includes(searchTerm) ||
                 order.serviceName.toLowerCase().includes(searchTerm) ||
                 order.link.toLowerCase().includes(searchTerm);
      });
  }

  // Apply status filter
  if (statusFilter) {
      filteredOrders = filteredOrders.filter(order => order.status === statusFilter);
  }

  // Apply service filter
  if (serviceFilter) {
      filteredOrders = filteredOrders.filter(order => 
          order.serviceName.toLowerCase().includes(serviceFilter.toLowerCase()));
  }

  // Apply sorting
  switch(sortFilter) {
      case 'oldest':
          filteredOrders.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
          break;
      case 'highest':
          filteredOrders.sort((a, b) => b.price - a.price);
          break;
      case 'lowest':
          filteredOrders.sort((a, b) => a.price - b.price);
          break;
      case 'newest':
      default:
          filteredOrders.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
          break;
  }

  // Update the orders list
  const ordersList = document.getElementById('ordersList');
  if (ordersList) {
      if (filteredOrders.length === 0) {
          ordersList.innerHTML = `
              <div class="empty-state">
                  <div class="empty-icon">🔍</div>
                  <h3>No orders found / कोई ऑर्डर नहीं मिला</h3>
                  <p>Try adjusting your search criteria / अपने खोज मानदंड को समायोजित करने का प्रयास करें</p>
                  <button class="cta-btn" onclick="clearOrderSearch()">Clear Filters / फ़िल्टर साफ़ करें</button>
              </div>
          `;
      } else {
          ordersList.innerHTML = renderOrderItems(filteredOrders);
      }
  }
}

function clearOrderSearch() {
  const searchInput = document.getElementById('orderSearchInput');
  const statusFilter = document.getElementById('orderStatusFilter');
  const serviceFilter = document.getElementById('orderServiceFilter');
  const sortFilter = document.getElementById('orderSortFilter');

  if (searchInput) searchInput.value = '';
  if (statusFilter) statusFilter.value = '';
  if (serviceFilter) serviceFilter.value = '';
  if (sortFilter) sortFilter.value = 'newest';

  filterOrders();
}
function populatePackages(service) {
  const packageOptions = document.getElementById('packageOptions');
  const packageSelected = document.getElementById('packageSelected');
  const packageSelect = document.getElementById('packageSelect');
  const priceSection = document.getElementById('priceSection');
  if (!packageOptions || !packageSelected) return;
  packageOptions.innerHTML = '';
  packageSelected.querySelector('.selected-text').textContent = 'Select Package';
  if (priceSection) priceSection.classList.add('hidden');
  if (packageSelect) {
      packageSelect.innerHTML = '<option value="">Select Package</option>';
  }
  let packages = [];
  if (service === 'new-offers') {
      packages = [
          ...servicePackages.youtube,
          ...servicePackages.instagram,
          ...servicePackages.facebook,
          ...servicePackages.whatsapp,
          ...servicePackages.twitter,
          ...servicePackages.tiktok
      ];
  } else if (servicePackages[service]) {
      packages = servicePackages[service];
  } else {
      const noOption = document.createElement('div');
      noOption.className = 'package-option';
      noOption.innerHTML = `
          <div class="package-icon growth">
              <i class="fas fa-clock"></i>
          </div>
          <div class="package-content">
              <div class="package-info">
                  <div class="package-name">Coming Soon...</div>
                  <div class="package-desc">This service will be available soon</div>
              </div>
          </div>
      `;
      packageOptions.appendChild(noOption);
      return;
  }
  packages.forEach((pkg, index) => {
      const option = document.createElement('div');
      option.className = 'package-option';
      option.dataset.value = `${service}_${index}`;
      option.dataset.package = JSON.stringify(pkg);
      const priceText = pkg.priceType === 'per_k' 
          ? `₹${pkg.price}/1k${pkg.unit ? ` ${pkg.unit}` : ''}`
          : `₹${pkg.price}${pkg.unit ? ` ${pkg.unit}` : ''}`;
      const { icon, iconClass, badge } = getPackageIconAndType(pkg.name, pkg.price);
      const tierClass = pkg.tier ? `tier-${pkg.tier}` : 'tier-standard';
      const tierText = pkg.tier ? pkg.tier.toUpperCase() : 'STANDARD';
      option.innerHTML = `
          <div class="package-icon ${iconClass}">
              <i class="${icon}"></i>
          </div>
          <div class="package-content">
              <div class="package-info">
                  <div class="package-name">
                      ID: ${pkg.id} - ${pkg.name}
                      <span class="tier-indicator ${tierClass}">${tierText}</span>
                  </div>
                  <div class="package-desc">${pkg.desc || 'High quality service with fast delivery'}</div>
                  <div class="package-details">
                      ${pkg.deliveryTime ? `<span class="package-detail">⏱️ ${pkg.deliveryTime}</span>` : ''}
                      ${pkg.guarantee ? `<span class="package-detail">🛡️ ${pkg.guarantee}</span>` : ''}
                      ${pkg.quality ? `<span class="package-detail">⭐ ${pkg.quality}</span>` : ''}
                  </div>
              </div>
              <div class="package-pricing">
                  <div class="package-price">${priceText}</div>
              </div>
          </div>
      `;
      option.addEventListener('click', function() {
          selectPackageOption(this, pkg, `${service}_${index}`);
      });
      packageOptions.appendChild(option);
      if (packageSelect) {
          const selectOption = document.createElement('option');
          selectOption.value = `${service}_${index}`;
          selectOption.textContent = `ID: ${pkg.id} - ${pkg.name}`;
          selectOption.dataset.package = JSON.stringify(pkg);
          packageSelect.appendChild(selectOption);
      }
  });
}
function initializeAIChatListeners() {
  document.addEventListener('click', function(e) {
      if (e.target.closest('.ai-support')) {
          e.preventDefault();
          openAISupport();
      }
      if (e.target.classList.contains('quick-btn')) {
          e.preventDefault();
          const question = e.target.textContent.trim();
          askQuickQuestion(question);
      }
  });
  document.addEventListener('keypress', function(e) {
      if (e.target.id === 'chatInput' && e.key === 'Enter') {
          e.preventDefault();
          sendMessage();
      }
  });
}
function setupNavigationListeners() {
  const navItems = [
      { id: 'newOrderNav', page: 'dashboardHome' },
      { id: 'orderHistoryNav', page: 'orderHistoryPage' },
      { id: 'servicesNav', page: 'servicesPage' },
      { id: 'depositNav', page: 'addFundsPage' },
      { id: 'childPanelsNav', page: 'childPanelsPage' },
      { id: 'ordersNav', page: 'orderHistoryPage' },
      { id: 'refillHistoryNav', page: 'refillHistoryPage' },
      { id: 'addFundsNav', page: 'addFundsPage' },
      { id: 'ticketsNav', page: 'ticketsPage' },
      { id: 'faqNav', page: 'faqPage' },
      { id: 'apiNav', page: 'apiPage' },
      { id: 'referEarnNav', page: 'referEarnPage' },
      { id: 'tutorialVideoNav', page: 'tutorialVideoPage' },
      { id: 'depositBtnMain', page: 'addFundsPage' }
  ];
  navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
          element.addEventListener('click', (e) => {
              e.preventDefault();
              showPage(item.page);
              closeSideNav();
          });
      }
  });
  const userGuideLink = document.getElementById('userGuideLink');
  if (userGuideLink) {
      userGuideLink.addEventListener('click', (e) => {
          e.preventDefault();
          showPage('userGuidePage');
      });
  }
}
function setupCustomDropdowns() {
  const serviceDropdown = document.getElementById('serviceDropdown');
  const serviceSelected = document.getElementById('serviceSelected');
  const serviceOptions = document.getElementById('serviceOptions');
  if (serviceSelected && serviceOptions) {
      serviceSelected.addEventListener('click', () => {
          serviceOptions.classList.toggle('active');
          serviceSelected.classList.toggle('active');
          const packageOptions = document.getElementById('packageOptions');
          const packageSelected = document.getElementById('packageSelected');
          if (packageOptions && packageSelected) {
              packageOptions.classList.remove('active');
              packageSelected.classList.remove('active');
          }
      });
      serviceOptions.addEventListener('click', (e) => {
          const option = e.target.closest('.dropdown-option');
          if (option) {
              const value = option.dataset.value;
              const text = option.querySelector('span').firstChild.textContent;
              const icon = option.querySelector('.service-icon').outerHTML;
              serviceSelected.querySelector('.selected-text').innerHTML = icon + ' ' + text;
              const serviceSelect = document.getElementById('serviceSelect');
              serviceSelect.value = value;
              selectedService = value;
              serviceOptions.classList.remove('active');
              serviceSelected.classList.remove('active');
              document.querySelectorAll('.dropdown-option.selected').forEach(opt => {
                  opt.classList.remove('selected');
              });
              option.classList.add('selected');
              handleServiceChange();
          }
      });
  }
  const packageDropdown = document.getElementById('packageDropdown');
  const packageSelected = document.getElementById('packageSelected');
  const packageOptions = document.getElementById('packageOptions');
  if (packageSelected && packageOptions) {
      packageSelected.addEventListener('click', () => {
          if (packageOptions.children.length > 0) {
              packageOptions.classList.toggle('active');
              packageSelected.classList.toggle('active');
              if (serviceOptions && serviceSelected) {
                  serviceOptions.classList.remove('active');
                  serviceSelected.classList.remove('active');
              }
          }
      });
      packageOptions.addEventListener('click', (e) => {
          const option = e.target.closest('.package-option');
          if (option && !option.classList.contains('search-result')) {
              const value = option.dataset.value;
              const packageData = JSON.parse(option.dataset.package);
              const text = option.querySelector('.package-name').textContent;
              selectPackageOption(option, packageData, value, text);
          }
      });
  }
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.custom-dropdown')) {
          document.querySelectorAll('.dropdown-options').forEach(options => {
              options.classList.remove('active');
          });
          document.querySelectorAll('.dropdown-selected').forEach(selected => {
              selected.classList.remove('active');
          });
      }
  });
}
function setupServiceItemClickHandlers() {
  document.addEventListener('click', function(e) {
      if (e.target.closest('.service-item')) {
          const serviceItem = e.target.closest('.service-item');
          const serviceCategory = serviceItem.dataset.service;
          const searchTerm = serviceItem.dataset.search;
          if (serviceCategory && searchTerm) {
              showPage('dashboardHome');
              selectedService = serviceCategory;
              const serviceSelected = document.getElementById('serviceSelected');
              const serviceIcon = document.querySelector(`[data-value="${serviceCategory}"] .service-icon`);
              if (serviceSelected && serviceIcon) {
                  const iconHTML = serviceIcon.outerHTML;
                  const serviceName = getServiceDisplayName(serviceCategory);
                  serviceSelected.querySelector('.selected-text').innerHTML = iconHTML + ' ' + serviceName;
              }
              populatePackages(serviceCategory);
              const searchInput = document.getElementById('searchService');
              if (searchInput) {
                  searchInput.value = searchTerm;
                  searchInput.dispatchEvent(new Event('input'));
              }
              showNotification(`${serviceItem.querySelector('span').textContent} service selected!`, 'success');
              setTimeout(() => {
                  document.getElementById('searchService').scrollIntoView({ behavior: 'smooth' });
              }, 300);
          }
      }
  });
}
function selectPackageOption(option, packageData, value, text = null) {
  const packageSelected = document.getElementById('packageSelected');
  const packageOptions = document.getElementById('packageOptions');
  const packageSelect = document.getElementById('packageSelect');
  if (!text) {
      text = option.querySelector('.package-name').textContent;
  }
  if (packageSelected) {
      packageSelected.querySelector('.selected-text').textContent = text;
  }
  if (packageSelect) {
      packageSelect.innerHTML = `<option value="${value}" selected>${text}</option>`;
  }
  selectedPackage = packageData;
  if (packageOptions && packageSelected) {
      packageOptions.classList.remove('active');
      packageSelected.classList.remove('active');
  }
  document.querySelectorAll('.package-option.selected').forEach(opt => {
      opt.classList.remove('selected');
  });
  if (option) {
      option.classList.add('selected');
  }
  showPriceSection(packageData);
  calculateTotal();
}
function toggleSideNav() {
  const sideNav = document.getElementById('sideNav');
  if (sideNav) {
      sideNav.classList.add('active');
  }
}
function closeSideNav() {
  const sideNav = document.getElementById('sideNav');
  if (sideNav) {
      sideNav.classList.remove('active');
  }
}
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
      targetPage.classList.add('active');
  }
  if (pageId === 'refillHistoryPage') {
      updateRefillHistoryPage();
  } else if (pageId === 'orderHistoryPage') {
      updateOrderHistoryPage();
  } else if (pageId === 'ordersPage') {
      showPage('orderHistoryPage');
      return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function updateRefillHistoryPage() {
  const refillContent = document.querySelector('#refillHistoryPage .refill-content');
  if (refillContent) {
      const hasOrders = orderHistory.length > 0;

      // Check for legitimate refills - only count actual service drops that required refills
      const legitimateRefills = orderHistory.filter(order => {
          // In a real scenario, this would check if the order had significant drops (>10%)
          // and if a refill was actually provided. For now, we assume no legitimate refills exist.
          return false; // No legitimate refills have occurred yet
      });

      const hasLegitimateRefills = legitimateRefills.length > 0;

      if (!hasOrders) {
          // No orders placed yet - show informational content
          refillContent.innerHTML = `
              <div class="empty-state no-orders-refill">
                  <div class="empty-icon">📋</div>
                  <h3>No Orders Placed Yet</h3>
                  <p>You haven't placed any orders yet. Once you start ordering, refill information will appear here if needed.</p>
                  <button class="cta-btn" onclick="showPage('dashboardHome')">
                      <i class="fas fa-plus-circle"></i> Place Your First Order
                  </button>
                  <div class="help-section">
                      <h4><i class="fas fa-info-circle"></i> What are Refills?</h4>
                      <ul>
                          <li>• Refills are provided when service drops exceed 10%</li>
                          <li>• 365-day refill guarantee on all eligible services</li>
                          <li>• Automatic monitoring of all completed orders</li>
                          <li>• Free refill service - no additional charges</li>
                      </ul>
                      <button onclick="openTelegramSupport()" class="support-btn">
                          <i class="fab fa-telegram"></i> Contact Support
                      </button>
                  </div>
              </div>
          `;
      } else if (!hasLegitimateRefills) {
          // Has orders but no legitimate refills needed - show positive status
          refillContent.innerHTML = `
              <div class="empty-state no-refills-needed">
                  <div class="empty-icon">✅</div>
                  <h3>No Refills Required</h3>
                  <p>Excellent! All your orders are performing well with high retention rates. No refills have been necessary.</p>
                  <div class="refill-status-info">
                      <div class="status-card">
                          <div class="status-icon success">
                              <i class="fas fa-check-circle"></i>
                          </div>
                          <div class="status-details">
                              <h4>Service Quality: Outstanding</h4>
                              <p>Your ${orderHistory.length} order${orderHistory.length > 1 ? 's have' : ' has'} maintained excellent retention with drops well below our 10% threshold.</p>
                          </div>
                      </div>
                      <div class="status-card">
                          <div class="status-icon monitoring">
                              <i class="fas fa-chart-line"></i>
                          </div>
                          <div class="status-details">
                              <h4>Continuous Monitoring</h4>
                              <p>We actively monitor all your orders 24/7 for any drops that may require refills.</p>
                          </div>
                      </div>
                  </div>
                  <div class="help-section">
                      <h4><i class="fas fa-shield-alt"></i> Our Refill Guarantee</h4>
                      <div class="guarantee-points">
                          <div class="guarantee-item">
                              <i class="fas fa-calendar-alt"></i>
                              <span><strong>365-Day Coverage:</strong> Refill protection for a full year from order completion</span>
                          </div>
                          <div class="guarantee-item">
                              <i class="fas fa-percentage"></i>
                              <span><strong>10% Drop Threshold:</strong> Refills provided automatically if drops exceed 10%</span>
                          </div>
                          <div class="guarantee-item">
                              <i class="fas fa-bolt"></i>
                              <span><strong>Fast Processing:</strong> Refills completed within 24-48 hours of detection</span>
                          </div>
                          <div class="guarantee-item">
                              <i class="fas fa-gift"></i>
                              <span><strong>Completely Free:</strong> No additional charges for legitimate refills</span>
                          </div>
                      </div>
                      <div class="refill-note">
                          <p><i class="fas fa-info-circle"></i> <strong>Important:</strong> If you notice any significant drops in your orders, please contact our support team immediately. We'll investigate and provide refills if the drop exceeds our 10% threshold.</p>
                      </div>
                      <div class="support-actions">
                          <button onclick="openTelegramSupport()" class="support-btn telegram">
                              <i class="fab fa-telegram"></i> Report Drop Issue
                          </button>
                          <button onclick="showPage('orderHistoryPage')" class="support-btn secondary">
                              <i class="fas fa-history"></i> View Order History
                          </button>
                      </div>
                  </div>
              </div>
          `;
      } else {
          // Has legitimate refills - show actual refill history
          refillContent.innerHTML = `
              <div class="refill-stats">
                  <div class="stat-box">
                      <h4>Total Refills</h4>
                      <div class="stat-number">${legitimateRefills.length}</div>
                  </div>
                  <div class="stat-box">
                      <h4>Success Rate</h4>
                      <div class="stat-number">100%</div>
                  </div>
                  <div class="stat-box">
                      <h4>Average Time</h4>
                      <div class="stat-number">24h</div>
                  </div>
              </div>
              <div class="refill-list">
                  <h4>Refill History</h4>
                  ${legitimateRefills.map(refill => `
                      <div class="refill-item">
                          <div class="refill-order">#${refill.id}</div>
                          <div class="refill-service">${refill.serviceName}</div>
                          <div class="refill-date">${refill.date}</div>
                          <div class="refill-status success">Completed</div>
                      </div>
                  `).join('')}
              </div>
          `;
      }
  }
}
function handleServiceChange() {
  const serviceSelect = document.getElementById('serviceSelect');
  const packageSelect = document.getElementById('packageSelect');
  const priceSection = document.getElementById('priceSection');
  if (!serviceSelect || !packageSelect || !priceSection) return;
  const selectedValue = selectedService || serviceSelect.value;
  packageSelect.innerHTML = '<option value="">Select Package</option>';
  priceSection.classList.add('hidden');
  const packageSelected = document.getElementById('packageSelected');
  if (packageSelected) {
      packageSelected.querySelector('.selected-text').textContent = 'Select Package';
  }
  if (selectedValue) {
      populatePackages(selectedValue);
  }
  updatePlaceOrderButtonState();
}
function handlePackageChange() {
  const packageSelect = document.getElementById('packageSelect');
  const priceSection = document.getElementById('priceSection');
  if (!packageSelect || !priceSection) return;
  const selectedValue = packageSelect.value;
  if (selectedValue) {
      const packageData = JSON.parse(packageSelect.options[packageSelect.selectedIndex].dataset.package);
      selectedPackage = packageData;
      showPriceSection(packageData);
      calculateTotal();
  } else {
      priceSection.classList.add('hidden');
      selectedPackage = null;
  }
}
function showPriceSection(packageData) {
  const priceSection = document.getElementById('priceSection');
  const priceDisplay = document.getElementById('priceDisplay');
  if (!priceSection || !priceDisplay) return;
  priceSection.classList.remove('hidden');
  if (packageData.priceType === 'per_k') {
      priceDisplay.textContent = `₹${packageData.price} for 1000`;
  } else {
      priceDisplay.textContent = `₹${packageData.price}`;
  }
  updateDynamicDescription();
  updatePlaceOrderButtonState();
}
function updateDynamicDescription() {
  const descriptionContent = document.getElementById('descriptionContent');
  const quantityInput = document.getElementById('quantityInput');
  if (!selectedPackage || !descriptionContent || !quantityInput) return;
  const quantity = parseInt(quantityInput.value) || 0;
  let calculatedPrice = 0;
  if (selectedPackage.priceType === 'per_k' && quantity > 0) {
      calculatedPrice = (selectedPackage.price * quantity) / 1000;
  } else if (selectedPackage.priceType === 'fixed') {
      calculatedPrice = selectedPackage.price;
  }
  const dynamicDescription = `
      <p><strong>🚀 ${selectedPackage.name} - Only ₹${calculatedPrice.toFixed(2)} with instant delivery + 365 day guarantee!</strong></p>
      <p><strong>⏰ Service Delivery Time:</strong></p>
      <p>⚡ Start: <strong>0-15 minutes</strong> | 🚀 Speed: <strong>100K per day</strong></p>
      <p>👥 Quality: <strong>Real accounts</strong> | 💧 Drop rate: <strong>Maximum 10%</strong></p>
      <p><strong>🛡️ Our Guarantee:</strong></p>
      <p>🔒 <strong>365-day refill guarantee</strong> (if drop exceeds 10%)</p>
      <p>💯 <strong>100% safe delivery</strong> - No ban risk</p>
      <p>⚡ <strong>Instant start</strong> - Within 15 minutes</p>
      <p>🎯 <strong>High retention</strong> - Permanent results</p>
      <p><strong>⚠️ Please read before ordering:</strong></p>
      <p>📝 Account must be <strong>public</strong> (won't work on private)</p>
      <p>🔗 Enter correct and working link (no refund for wrong links)</p>
      <p>⏳ Don't place second order until first one is completed</p>
      <p>👤 Don't change username after refill service</p>
      <p><strong>📞 24/7 Support:</strong> @Indiasocialpainel_support_bot</p>
  `;
  descriptionContent.innerHTML = dynamicDescription;
}
function calculateTotal() {
  const quantityInput = document.getElementById('quantityInput');
  const totalAmount = document.getElementById('totalAmount');
  const balanceError = document.getElementById('balanceError');
  if (!selectedPackage || !quantityInput || !totalAmount || !quantityInput.value) {
      if (totalAmount) totalAmount.textContent = '0.00';
      return;
  }
  const quantity = parseInt(quantityInput.value);
  let total = 0;
  if (selectedPackage.priceType === 'per_k') {
      total = (selectedPackage.price * quantity) / 1000;
  } else {
      total = selectedPackage.price;
  }
  totalAmount.textContent = total.toFixed(2);
  updateDynamicDescription();
  if (balanceError) {
      if (total > 0) {
          balanceError.classList.remove('hidden');
      } else {
          balanceError.classList.add('hidden');
      }
  }
}
function handleSearch() {
}
function showDashboard() {
  document.getElementById('userAvatar').textContent = 'A';
}
function updateBalanceDisplay() {
  document.querySelectorAll('.balance-display, .balance-amount').forEach(display => {
      display.textContent = `₹${currentBalance.toFixed(2)}`;
  });
}
function openTelegramSupport() {
  window.open('https://t.me/Indiasocialpainel_support_bot?start=start', '_blank');
}
async function sendTestEmail() {
  try {
      const testOrderData = {
          id: 'TEST' + Date.now().toString().slice(-6),
          serviceName: 'Instagram Followers - Test Order',
          serviceId: '2001',
          link: 'https://instagram.com/test_account',
          quantity: 1000,
          price: 150.00,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
      };
      const emailSent = await sendOrderNotificationEmail(testOrderData);
      if (emailSent) {
          showNotification('✅ Test email sent successfully to achakumar00@gmail.com!', 'success');
      } else {
          showNotification('❌ Test email failed. Check your connection.', 'error');
      }
  } catch (error) {
      showNotification('❌ Test email failed. Check your internet connection.', 'error');
  }
}
window.testEmail = sendTestEmail;
function toggleContactOptions() {
  const contactOptions = document.getElementById('contactOptions');
  const mainBtn = document.getElementById('contactMainBtn');
  if (contactOptions && mainBtn) {
      contactOptions.classList.toggle('active');
      mainBtn.classList.toggle('active');
  }
}
function openWhatsAppSupport() {
  const whatsappNumber = '+919431863716';
  const message = 'Hello! I need support from India Social Panel.';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
  toggleContactOptions(); // Close menu after click
}
function openPhoneDialer() {
  const phoneNumber = '+919431863716';
  const telURL = `tel:${phoneNumber}`;
  window.location.href = telURL;
  toggleContactOptions(); // Close menu after click
}

// Add Funds Amount Validation Function
function validateAddFundsAmount() {
  const amountInput = document.getElementById('addFundsAmountInput');
  const addFundsBtn = document.getElementById('dynamicAddFundsBtn');
  const googlePayBtn = document.getElementById('googlePayUPIBtn');

  if (!amountInput || !addFundsBtn) return;

  const amount = parseFloat(amountInput.value) || 0;
  const isValidAmount = amount >= 100 && amount <= 100000;

  if (isValidAmount) {
    // Enable buttons
    addFundsBtn.disabled = false;
    addFundsBtn.style.opacity = '1';
    addFundsBtn.style.cursor = 'pointer';
    addFundsBtn.classList.add('active');

    if (googlePayBtn) {
      googlePayBtn.disabled = false;
      googlePayBtn.style.opacity = '1';
      googlePayBtn.style.cursor = 'pointer';
      googlePayBtn.classList.add('active');
    }

    // Update input styling
    amountInput.classList.add('valid');
    amountInput.classList.remove('invalid');
  } else {
    // Disable buttons
    addFundsBtn.disabled = true;
    addFundsBtn.style.opacity = '0.6';
    addFundsBtn.style.cursor = 'not-allowed';
    addFundsBtn.classList.remove('active');

    if (googlePayBtn) {
      googlePayBtn.disabled = true;
      googlePayBtn.style.opacity = '0.6';
      googlePayBtn.style.cursor = 'not-allowed';
      googlePayBtn.classList.remove('active');
    }

    // Update input styling
    amountInput.classList.remove('valid');
    if (amountInput.value) {
      amountInput.classList.add('invalid');
    }
  }
}

// Show Add Funds Payment Options
function showAddFundsPaymentOptions() {
  const amount = parseFloat(document.getElementById('addFundsAmountInput').value) || 0;

  if (amount < 100 || amount > 100000) {
    showNotification('Please enter amount between ₹100 - ₹100,000', 'error');
    return;
  }

  // Create modal with two options
  const modal = document.createElement('div');
  modal.id = 'addFundsOptionsModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 20px;
      padding: 30px;
      max-width: 400px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    ">
      <h2 style="margin-bottom: 10px; color: #333;">💰 Add ₹${amount.toFixed(2)}</h2>
      <p style="color: #666; margin-bottom: 30px;">Choose your payment method</p>

      <div style="display: grid; gap: 15px; margin-bottom: 25px;">
        <button onclick="showAddFundsQRCode(${amount})" style="
          padding: 15px 20px;
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
          <i class="fas fa-qrcode"></i>
          Pay via QR Code
        </button>

        <button onclick="openAddFundsUPIApp(${amount})" style="
          padding: 15px 20px;
          background: linear-gradient(135deg, #4285f4 0%, #3367d6 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
          <i class="fas fa-mobile-alt"></i>
          Open UPI App
        </button>
      </div>

      <button onclick="closeAddFundsModal()" style="
        background: #dc3545;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
      " onmouseover="this.style.background='#c82333'" onmouseout="this.style.background='#dc3545'">Cancel Transaction</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Add event listener to close on overlay click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeAddFundsModal();
    }
  });
}

// Show QR Code for Add Funds
function showAddFundsQRCode(amount) {
  closeAddFundsModal();

  // Generate unique Order ID for Add Funds
  const timestamp = Date.now().toString();
  const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
  const addFundsOrderId = 'ADD' + timestamp.slice(-6) + randomChars.slice(0, 4);

  // Create Add Funds specific QR modal
  const qrModal = document.createElement('div');
  qrModal.id = 'addFundsQRModal';
  qrModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f8f9fa;
      z-index: 10001;
      overflow-y: auto;
  `;

  qrModal.innerHTML = `
      <div style="
          min-height: 100vh;
          background: #f8f9fa;
          padding: 0;
          margin: 0;
          width: 100%;
      ">
          <!-- Header -->
          <div style="
              background: white;
              padding: 15px 20px;
              text-align: center;
              border-bottom: 1px solid #e0e0e0;
              position: sticky;
              top: 0;
              z-index: 100;
          ">
              <div style="
                  font-size: 18px;
                  font-weight: 700;
                  color: #28a745;
                  margin-bottom: 4px;
              ">India Social Panel</div>
              <div style="
                  font-size: 14px;
                  color: #6c757d;
              ">Add Funds - QR Payment</div>
          </div>

          <!-- Main Content -->
          <div style="
              padding: 20px;
              max-width: 400px;
              margin: 0 auto;
          ">
              <div style="
                  text-align: center;
                  margin-bottom: 25px;
              ">
                  <h2 style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      color: #495057;
                      font-weight: 600;
                  ">Scan QR Code to Add Funds</h2>
                  <p style="
                      margin: 0;
                      font-size: 14px;
                      color: #6c757d;
                  ">Amount: ₹${amount.toFixed(2)}</p>
              </div>

              <!-- QR Code Container -->
              <div style="
                  background: white;
                  border-radius: 12px;
                  padding: 30px;
                  text-align: center;
                  margin-bottom: 20px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              ">
                  <div id="addFundsQrCodeContainer" style="
                      width: 240px;
                      height: 240px;
                      background: #f8f9fa;
                      margin: 0 auto 20px;
                      border-radius: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border: 2px dashed #dee2e6;
                      position: relative;
                  ">
                      <div style="text-align: center;">
                          <div style="
                              font-size: 40px; 
                              margin-bottom: 10px;
                              color: #6c757d;
                          ">📱</div>
                          <div style="
                              font-size: 14px; 
                              color: #28a745; 
                              font-weight: 600;
                          ">Tap Generate QR Code</div>
                      </div>
                  </div>
                  <button onclick="generateAddFundsQR(${amount})" style="
                      width: 100%;
                      background: #007bff;
                      color: white;
                      border: none;
                      padding: 12px 20px;
                      border-radius: 8px;
                      cursor: pointer;
                      font-weight: 600;
                      font-size: 16px;
                      margin-bottom: 15px;
                      transition: all 0.2s ease;
                  ">Generate QR Code</button>
                  <div style="
                      font-size: 12px;
                      color: #6c757d;
                      margin-bottom: 15px;
                  ">Scan with any UPI app to add ₹${amount.toFixed(2)} to your wallet</div>
              </div>

              <!-- Cancel Button -->
              <button onclick="closeAddFundsQRModal()" style="
                  width: 100%;
                  background: #dc3545;
                  color: white;
                  border: none;
                  padding: 12px 20px;
                  border-radius: 8px;
                  cursor: pointer;
                  font-weight: 600;
                  font-size: 16px;
                  transition: all 0.2s ease;
              ">Back to Add Funds</button>
          </div>
      </div>
  `;

  document.body.appendChild(qrModal);

  window.generateAddFundsQR = function(amount) {
      const qrContainer = document.getElementById('addFundsQrCodeContainer');
      if (qrContainer) {
          const upiID = 'kavita.5049-49@waicici';
          const note = `Add Funds - India Social Panel`;
          const upiString = `upi://pay?pa=${upiID}&am=${amount.toFixed(2)}&tn=${encodeURIComponent(note)}&cu=INR`;

          qrContainer.innerHTML = `
              <div style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: white;
                  border-radius: 8px;
                  border: 1px solid #dee2e6;
              ">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiString)}" 
                  style="
                      width: 220px; 
                      height: 220px; 
                      border-radius: 4px;
                  " 
                  alt="Add Funds QR Code" />
              </div>
          `;

          showNotification('✅ QR Code generated! Scan to add funds', 'success');
      }
  };

  window.closeAddFundsQRModal = function() {
      if (qrModal && qrModal.parentElement) {
          document.body.removeChild(qrModal);
      }
      showPage('addFundsPage');
  };
}

// Open UPI App for Add Funds
function openAddFundsUPIApp(amount) {
  closeAddFundsModal();

  const upiID = 'kavita.5049-49@waicici';
  const note = `Add Funds - India Social Panel`;
  const upiUrl = `upi://pay?pa=${upiID}&am=${amount.toFixed(2)}&tn=${encodeURIComponent(note)}&cu=INR
}

// Open UPI App Generally (for Google Pay button)
// Add Funds Amount Validation Function
function validateAddFundsAmount() {
  const amountInput = document.getElementById('addFundsAmountInput');
  const addFundsBtn = document.getElementById('dynamicAddFundsBtn');
  const googlePayBtn = document.getElementById('googlePayUPIBtn');

  if (!amountInput || !addFundsBtn) return;

  const amount = parseFloat(amountInput.value) || 0;
  const isValidAmount = amount >= 100 && amount <= 100000;

  if (isValidAmount) {
    // Enable buttons
    addFundsBtn.disabled = false;
    addFundsBtn.style.opacity = '1';
    addFundsBtn.style.cursor = 'pointer';
    addFundsBtn.classList.add('active');

    if (googlePayBtn) {
      googlePayBtn.disabled = false;
      googlePayBtn.style.opacity = '1';
      googlePayBtn.style.cursor = 'pointer';
      googlePayBtn.classList.add('active');
    }

    // Update input styling
    amountInput.classList.add('valid');
    amountInput.classList.remove('invalid');
  } else {
    // Disable buttons
    addFundsBtn.disabled = true;
    addFundsBtn.style.opacity = '0.6';
    addFundsBtn.style.cursor = 'not-allowed';
    addFundsBtn.classList.remove('active');

    if (googlePayBtn) {
      googlePayBtn.disabled = true;
      googlePayBtn.style.opacity = '0.6';
      googlePayBtn.style.cursor = 'not-allowed';
      googlePayBtn.classList.remove('active');
    }

    // Update input styling
    amountInput.classList.remove('valid');
    if (amountInput.value) {
      amountInput.classList.add('invalid');
    }
  }
}

function openUPIAppGeneral() {
  const amountInput = document.getElementById('addFundsAmountInput');
  const amount = parseFloat(amountInput.value) || 0;

  if (amount >= 100 && amount <= 100000) {
    openAddFundsUPIApp(amount);
  } else {
    const upiID = 'kavita.5049-49@waicici';
    const note = 'Add Funds - India Social Panel';
    const upiUrl = 'upi://pay?pa=' + upiID + '&tn=' + encodeURIComponent(note) + '&cu=INR';

    window.location.href = upiUrl;
    // Removed payment success notification
  }
}

// Quick amount selection function
function setQuickAmount(amount) {
  const amountInput = document.getElementById('addFundsAmountInput');
  if (amountInput) {
    amountInput.value = amount;
    validateAddFundsAmount();

    // Update visual state of quick amount buttons
    document.querySelectorAll('.quick-amount-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
  }
}
// Make function globally accessible
window.setQuickAmount = setQuickAmount;

// UPI payment function
function proceedWithUPI() {
  const amountInput = document.getElementById('addFundsAmountInput');
  const amount = parseFloat(amountInput.value) || 0;

  if (amount >= 100 && amount <= 100000) {
    showAddFundsPaymentOptions();
  } else {
    showNotification('Please enter amount between ₹100 - ₹100,000', 'error');
    amountInput.focus();
  }
}

// Coming soon notification
function showComingSoon(method) {
  showNotification(method + ' will be available soon! Use UPI for instant deposits.', 'info');
}

// Close Add Funds Modal
function closeAddFundsModal() {
  const modal = document.getElementById('addFundsOptionsModal');
  if (modal && modal.parentElement) {
    document.body.removeChild(modal);
  }
  // Simply go back to Add Funds page, no confirmation needed
  showPage('addFundsPage');
}
// Make function globally accessible
window.closeAddFundsModal = closeAddFundsModal;

// Add missing close modal functions for payment
function closePaymentModal() {
  const modal = document.getElementById('paymentModal');
  if (modal && modal.parentElement) {
    document.body.removeChild(modal);
  }
}

function closeUPIAppsModal() {
  const modal = document.getElementById('upiAppsModal');
  if (modal && modal.parentElement) {
    document.body.removeChild(modal);
  }
}

function closeQRCodeModal() {
  const modal = document.getElementById('qrCodeModal');
  if (modal && modal.parentElement) {
    document.body.removeChild(modal);
  }
}

function closeUPIIDModal() {
  const modal = document.getElementById('upiIdModal');
  if (modal && modal.parentElement) {
    document.body.removeChild(modal);
  }
}

function closeCreditCardModal() {
  const modal = document.getElementById('creditCardModal');
  if (modal && modal.parentElement) {
    document.body.removeChild(modal);
  }
}

function openInstagramPage() {
  window.open('https://instagram.com/indiasocialpanel.official', '_blank');
  toggleContactOptions(); // Close menu after click
}
const aiKnowledgeBase = {
  "how to place order": "To place an order:\n1. Select Service (Instagram, YouTube, Facebook, WhatsApp)\n2. Choose Package you need\n3. Enter your link (account must be public)\n4. Enter quantity (min 100)\n5. Accept Terms & Conditions\n6. Click PLACE ORDER button\n\nYour order will start immediately! 🚀",
  "order status": "To check your order status:\n1. Go to 'Orders' in Menu\n2. You'll see list of all orders there\n3. Status: Processing, Completed, or Cancelled\n\nMost orders start in 0-15 minutes and complete within 24 hours. 📊",
  "refill guarantee": "Our Refill Policy:\n• 365-day guarantee\n• Free refill if drop exceeds 10%\n• Don't change username after order\n• Quality service with permanent results\n\nContact support team for refills! 🔄",
  "payment methods": "We accept:\n💳 UPI Payment (Instant)\n💳 Credit/Debit Cards\n🏦 Bank Transfer\n💰 Google Pay, PhonePe, Paytm\n\nAll payments are secure with instant processing. Minimum deposit starts from ₹100.",
  "add funds": "To add funds:\n1. Click 'Add Funds' in Menu\n2. Enter amount (₹100 minimum)\n3. Select payment method\n4. Complete payment\n\nBalance will be credited instantly! Your current balance shows in header. 💰",
  "minimum deposit": "Minimum deposit is ₹100. You can pay via UPI, Cards or Bank transfer. Payment processes instantly and balance is added immediately.",
  "instagram services": "Instagram Services:\n📸 Followers - ₹200/k\n❤️ Likes - ₹20/k\n👁️ Views - ₹25/k\n📖 Story Views - ₹20/k\n📤 Reels Share - ₹15/k\n\nAll services include refill guarantee and high quality accounts!",
  "youtube services": "YouTube Services:\n💰 Channel Monetization - ₹17,000\n👥 Subscribers - ₹400/k\n👁️ Views - ₹250/k\n🩳 Shorts Views - ₹200/k\n❤️ Likes - ₹170/k\n⏰ Watch Time - ₹6,000/k hours\n\nReal and active users for growth!",
  "facebook services": "Facebook Services:\n💰 Monetization - ₹5,000\n👥 Followers - ₹200/k\n❤️ Page Likes - ₹200/k\n👁️ Video Views - ₹15/k\n📖 Story Views - ₹150/k\n\nOrganic growth with genuine engagement!",
  "whatsapp services": "WhatsApp Services:\n✅ Blue Tick Verification - ₹40,000\n👥 Channel Members - ₹300/k\n🗳️ Poll Votes - ₹500/k\n\nPremium services with instant delivery!",
  "api information": "API Details:\n🔑 Free API key available\n📚 Complete documentation\n⚡ 99.8% uptime\n🚀 245ms average response time\n\nThrough API you can integrate our services into your applications. Check 'API' section in menu!",
  "api key": "To generate API Key:\n1. Go to 'API' in Menu\n2. Click 'Generate New Key' button\n3. Copy and store key safely\n\nRate limits: Free plan gets 100 requests/hour.",
  "support contact": "Contact Support:\n📱 Telegram: @Indiasocialpainel_support_bot\n📞 Phone: +919431863716\n✉️ Email: indiasocialpanel@email.com\n📸 Instagram: @indiasocialpanel.official\n\n24/7 support available! 🕒",
  "working hours": "We're available 24/7! Support team is always ready to help you. Get instant reply on Telegram.",
  "about company": "India Social Panel:\n🇮🇳 Registered digital marketing agency\n📈 3+ years experience\n🏆 119+ million orders completed\n💯 99.8% success rate\n\nServices: Website Development, SMM,Graphic Design, Google/Meta Ads",
  "delivery time": "Delivery Times:\n⚡ Start: 0-15 minutes\n🚀 Speed: 100K per day\n✅ Most orders complete in 24 hours\n\nSpeed may vary during high demand periods.",
  "quality assurance": "Quality Guarantee:\n👥 Real & Active accounts\n💧 Low drop rate (max 10%)\n🔄 365-day refill guarantee\n🛡️ Secure & Safe process\n\nHigh-quality results with permanent growth!",
  "order not started": "If order hasn't started:\n1. Check link - must be public\n2. Wait 15 minutes\n3. Contact support if still issue\n\nMost orders start automatically.",
  "account private": "To make account public:\n📸 Instagram: Settings > Privacy > Private Account OFF\n📺 YouTube: Check privacy in channel settings\n📘 Facebook: Enable public visibility\n\nServices don't work on private accounts.",
  "wrong link": "No refund for wrong or non-working links. Always:\n✅ Paste correct link\n✅ Keep account public\n✅ Test link in browser\n\nDouble-check before placing order."
};
const commonQuestions = [
  "How to place an order?",
  "What payment methods do you accept?",
  "How to check order status?",
  "What is refill guarantee?",
  "Instagram followers price?",
  "YouTube monetization cost?",
  "API information needed",
  "Support contact details",
  "Delivery time for orders?",
  "Account should be public?",
  "Minimum order quantity?",
  "Bulk order discounts?",
  "WhatsApp verification price?",
  "Facebook page likes cost?",
  "Order not started yet?",
  "Wrong link posted accidentally",
  "Quality of followers?",
  "Drop rate information",
  "24/7 support available?",
  "Company registration details?"
];
function openAISupport() {
  const modal = document.getElementById('aiChatModal');
  if (modal) {
      modal.style.display = 'block';
      initializeAIChat();
      setTimeout(() => {
          const chatInput = document.getElementById('chatInput');
          if (chatInput) chatInput.focus();
      }, 300);
  }
  toggleContactOptions(); // Close menu after click
}
function initializeAIChat() {
  const chatMessages = document.getElementById('chatMessages');
  if (chatMessages && chatMessages.children.length <= 1) {
      const welcomeMessage = '<div class="message ai-message">' +
          '<div class="message-avatar">' +
              '<i class="fas fa-robot"></i>' +
          '</div>' +
          '<div class="message-content">' +
              '<p>Hello! 👋 I\'m India Social Panel\'s AI Assistant. I can help you with SMM services, orders, payments and other queries.</p>' +
              '<div class="quick-questions">' +
                  '<h4>Quick Questions:</h4>' +
                  '<button class="quick-btn" onclick="askQuickQuestion(\'How to place an order?\')">How to place an order?</button>' +
                  '<button class="quick-btn" onclick="askQuickQuestion(\'What payment methods do you accept?\')">Payment methods?</button>' +
                  '<button class="quick-btn" onclick="askQuickQuestion(\'How to check order status?\')">Order status?</button>' +
                  '<button class="quick-btn" onclick="askQuickQuestion(\'What is API?\')">API information?</button>' +
                  '<button class="quick-btn" onclick="askQuickQuestion(\'Instagram followers price?\')">Instagram pricing?</button>' +
                  '<button class="quick-btn" onclick="askQuickQuestion(\'YouTube monetization cost?\')">YouTube monetization?</button>' +
              '</div>' +
          '</div>' +
      '</div>';
      chatMessages.innerHTML = welcomeMessage;
  }
}
function closeAIChat() {
  const modal = document.getElementById('aiChatModal');
  if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}
function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
}
function askQuickQuestion(question) {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
      chatInput.value = question;
      sendMessage();
  }
}
function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  if (!chatInput || !chatMessages || !chatInput.value.trim()) return;
  const userMessage = chatInput.value.trim();
  chatInput.value = '';
  addMessageToChat('user', userMessage);
  showTypingIndicator();
  setTimeout(() => {
      hideTypingIndicator();
      const aiResponse = getAIResponse(userMessage);
      addMessageToChat('ai', aiResponse);
  }, 1500);
}
function addMessageToChat(sender, message) {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) return;
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message ' + sender + '-message';
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.innerHTML = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
  const content = document.createElement('div');
  content.className = 'message-content';
  const messageP = document.createElement('p');
  messageP.innerHTML = message.replace(/\n/g, '<br>');
  content.appendChild(messageP);
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function showTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
      typingIndicator.style.display = 'flex';
  }
}
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
      typingIndicator.style.display = 'none';
  }
}
function getAIResponse(userMessage) {
  const message = userMessage.toLowerCase();
  for (const [key, response] of Object.entries(aiKnowledgeBase)) {
      const keywords = key.split(' ');
      const messageWords = message.split(' ');
      const hasKeywords = keywords.some(keyword =>
          messageWords.some(word =>
              word.includes(keyword) ||
              keyword.includes(word) ||
              (keyword === 'order' && (word.includes('order'))) ||
              (keyword === 'payment' && (word.includes('payment') || word.includes('pay'))) ||
              (keyword === 'price' && (word.includes('price') || word.includes('cost')))
          )
      );
      if (hasKeywords) {
          return response;
      }
  }
  if (message.includes('instagram') || message.includes('insta')) {
      return aiKnowledgeBase["instagram services"];
  }
  if (message.includes('youtube') || message.includes('yt')) {
      return aiKnowledgeBase["youtube services"];
  }
  if (message.includes('facebook') || message.includes('fb')) {
      return aiKnowledgeBase["facebook services"];
  }
  if (message.includes('whatsapp') || message.includes('wa')) {
      return aiKnowledgeBase["whatsapp services"];
  }
  if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
      return "Our service pricing:\n\n📸 Instagram Followers: ₹200/k\n📺 YouTube Subscribers: ₹400/k\n📘 Facebook Followers: ₹200/k\n💬 WhatsApp Blue Tick: ₹40,000\n\nCheck Services section for complete price list or ask about specific service!";
  }
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 🙏 Welcome to India Social Panel. I can help you with all queries:\n\n• Order placement\n• Payment methods\n• Service details\n• API information\n• Support contacts\n\nAsk me anything, I'm ready! 😊";
  }
  if (message.includes('thanks') || message.includes('thank you')) {
      return "You're welcome! 😊 If you need any more help, feel free to ask. Our team is available 24/7 for your service.\n\nFor instant support: Message @Indiasocialpainel_support_bot! 🚀";
  }
  const defaultResponses = [
      "I'm trying to understand your question! 🤔 I can help with these topics:\n\n🛒 Order placement guide\n💰 Pricing & payment info\n📱 Service details (Instagram, YouTube, Facebook, WhatsApp)\n🔧 API integration\n📞 Support contacts\n\nAny specific question?",
      "I might not have understood your question completely. 😅 Popular topics:\n\n📊 Service rates and packages\n⏰ Delivery timeframes\n🔄 Refill guarantees\n💳 Payment methods\n📈 Order tracking\n\nInterested in any of these?",
      "I'm India Social Panel's AI assistant and here to help! 🤖\n\nPopular questions:\n• Which service is best?\n• How to track orders?\n• What's refund policy?\n• How to use API?\n\nFor detailed help: @Indiasocialpainel_support_bot 💬"
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
document.addEventListener('click', function(e) {
  const contactWidget = e.target.closest('.contact-widget');
  const contactOptions = document.getElementById('contactOptions');
  const mainBtn = document.getElementById('contactMainBtn');
  if (!contactWidget && contactOptions && mainBtn) {
      contactOptions.classList.remove('active');
      mainBtn.classList.remove('active');
  }
});
function showPaymentPage(order) {
  const paymentModal = document.createElement('div');
  paymentModal.id = 'paymentModal';
  paymentModal.style.cssText = 
      'position: fixed;' +
      'top: 0;' +
      'left: 0;' +
      'right: 0;' +
      'bottom: 0;' +
      'background: rgba(0,0,0,0.8);' +
      'z-index: 10000;' +
      'display: flex;' +
      'align-items: center;' +
      'justify-content: center;' +
      'padding: 10px;' +
      'overflow-y: auto;';
  
  paymentModal.innerHTML = '<div class="payment-container" style="width: 100%; max-width: 450px; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); margin: auto; max-height: 95vh; overflow-y: auto;">' +
      '<div class="payment-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; text-align: center;">' +
          '<h1 style="font-size: 22px; margin-bottom: 8px;">🎉 Order Placed Successfully!</h1>' +
          '<p style="margin: 0;">Complete your payment to activate the order</p>' +
          '<div class="order-id" style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; display: inline-block; font-weight: 600; margin-top: 10px; font-size: 14px;">Order ID: ' + order.id + '</div>' +
      '</div>' +
      '<div class="order-summary" style="background: #f8f9fa; padding: 20px; border-bottom: 1px solid #e9ecef;">' +
          '<h3 style="margin-bottom: 15px; color: #333; font-size: 16px;">📋 Order Summary / ऑर्डर विवरण</h3>' +
          '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;"><span>Order ID / ऑर्डर ID:</span><strong style="color: #667eea;">#' + order.id + '</strong></div>' +
          '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;"><span>Service / सेवा:</span><strong>' + order.serviceName + '</strong></div>' +
          '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;"><span>Service ID:</span><strong>' + order.serviceId + '</strong></div>' +
          '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;"><span>Target Link / लिंक:</span><strong style="word-break: break-all; font-size: 12px; color: #007bff;">' + order.link + '</strong></div>' +
          '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;"><span>Quantity / मात्रा:</span><strong style="color: #28a745;">' + order.quantity.toLocaleString() + '</strong></div>' +
          '<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;"><span>Charge / शुल्क:</span><strong style="color: #dc3545;">₹' + order.charge.toFixed(2) + '</strong></div>' +
          '<div style="border-top: 2px solid #007bff; padding-top: 15px; margin-top: 15px; text-align: center;">' +
              '<div style="font-size: 18px; font-weight: 700; color: #007bff;">💰 Total Amount / कुल राशि: ₹' + order.charge.toFixed(2) + '</div>' +
          '</div>' +  
      '</div>' +
      '<div class="payment-methods" style="padding: 25px;">' +
          '<h3 style="margin-bottom: 20px; color: #333; text-align: center; font-size: 18px;">💳 Choose Payment Method / भुगतान विधि चुनें</h3>' +
          '<div class="payment-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">' +
              '<button onclick="showUPIAppsPayment()" style="background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; border: none; padding: 18px; border-radius: 15px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3); display: flex; align-items: center; justify-content: center; gap: 10px;">' +
                  '<i class="fab fa-google-pay" style="font-size: 20px;"></i>' +
                  'UPI Apps<br><small style="font-size: 12px; opacity: 0.9;">GPay, PhonePe, Paytm</small>' +
              '</button>' +
              '<button onclick="showQRCodePayment()" style="background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); color: white; border: none; padding: 18px; border-radius: 15px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3); display: flex; align-items: center; justify-content: center; gap: 10px;">' +
                  '<i class="fas fa-qrcode" style="font-size: 20px;"></i>' +
                  'QR Code<br><small style="font-size: 12px; opacity: 0.9;">Scan & Pay</small>' +
              '</button>' +
          '</div>' +
          '<div class="payment-note" style="background: #e3f2fd; border-left: 4px solid #2196F3; padding: 15px; border-radius: 8px; margin-bottom: 20px;">' +
              '<p style="margin: 0; font-size: 14px; color: #1565C0;"><strong>📌 Payment Instructions / भुगतान निर्देश:</strong></p>' +
              '<ul style="margin: 10px 0 0 20px; font-size: 13px; color: #1565C0;">' +
                  '<li>Complete payment within 10 minutes / 10 मिनट में भुगतान पूरा करें</li>' +
                  '<li>Order will start automatically after payment / भुगतान के बाद ऑर्डर अपने आप शुरू हो जाएगा</li>' +
                  '<li>Save screenshot of payment for reference / भुगतान का स्क्रीनशॉट संदर्भ के लिए सेव करें</li>' +
              '</ul>' +
          '</div>' +
          '<div class="action-buttons" style="display: flex; gap: 12px; justify-content: space-between;">' +
              '<button onclick="closePaymentModal()" style="background: #f44336; color: white; border: none; padding: 15px 25px; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; flex: 1;">❌ Cancel Order</button>' +
              '<button onclick="showQRCodePayment()" style="background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%); color: white; border: none; padding: 15px 25px; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; flex: 2;">⚡ Quick Pay</button>' +
          '</div>' +
      '</div>' +
  '</div>';
      <div class="payment-container" style="
          width: 100%;
          max-width: 450px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          margin: auto;
          max-height: 95vh;
          overflow-y: auto;
      ">
          <div class="payment-header" style="
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 25px;
              text-align: center;
          ">
              <h1 style="font-size: 22px; margin-bottom: 8px;">🎉 Order Placed Successfully!</h1>
              <p style="margin: 0;">Complete your payment to activate the order</p>
              <div class="order-id" style="
                  background: rgba(255,255,255,0.2);
                  padding: 8px 16px;
                  border-radius: 20px;
                  display: inline-block;
                  font-weight: 600;
                  margin-top: 10px;
                  font-size: 14px;
              ">Order ID: ${order.id}</div>
          </div>
          <div class="order-summary" style="
              background: #f8f9fa;
              padding: 20px;
              border-bottom: 1px solid #e9ecef;
          ">
              <h3 style="margin-bottom: 15px; color: #333; font-size: 16px;">📋 Order Summary / ऑर्डर विवरण</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">
                  <span>Order ID / ऑर्डर ID:</span>
                  <strong style="color: #667eea;">#${order.id}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">
                  <span>Service / सेवा:</span>
                  <strong>${order.serviceName}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">
                  <span>Service ID:</span>
                  <strong>${order.serviceId}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">
                  <span>Target Link / लिंक:</span>
                  <strong style="word-break: break-all; font-size: 12px; color: #007bff;">${order.link}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">
                  <span>Quantity / मात्रा:</span>
                  <strong style="color: #28a745;">${order.quantity.toLocaleString()}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">
                  <span>Status / स्थिति:</span>
                  <strong style="color: #ff6b35;">Processing / प्रक्रिया में</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; font-size: 14px;">
                  <span>Estimated Time / अनुमानित समय:</span>
                  <strong style="color: #667eea;">Start: 0-15 minutes</strong>
              </div>
              <div style="
                  display: flex; 
                  justify-content: space-between; 
                  border-top: 2px solid #667eea; 
                  padding-top: 12px; 
                  margin-top: 12px; 
                  font-weight: 700; 
                  font-size: 16px; 
                  color: #667eea;
              ">
                  <span>Total Amount / कुल राशि:</span>
                  <strong style="color: #dc3545; font-size: 18px;">₹${order.price.toFixed(2)}</strong>
              </div>
          </div>
          <div class="payment-methods" style="padding: 25px;">
              <h2 style="text-align: center; margin-bottom: 20px; color: #333; font-size: 18px; font-weight: 600;">💳 Choose Payment Method</h2>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 25px;">
                  <div class="payment-method upi-apps" onclick="showUPIAppsPayment()" style="
                      background: white;
                      border: 2px solid #e9ecef;
                      border-radius: 12px;
                      padding: 15px;
                      text-align: center;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 8px;
                  ">
                      <div style="
                          width: 45px;
                          height: 45px;
                          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
                          color: white;
                          border-radius: 10px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 20px;
                          margin-bottom: 5px;
                      ">
                          <i class="fas fa-mobile-alt"></i>
                      </div>
                      <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #333;">UPI Apps</h4>
                      <p style="font-size: 11px; color: #666; margin: 0; line-height: 1.2;">GPay, PhonePe, Paytm & More</p>
                  </div>
                  <div class="payment-method qr" onclick="showQRCodePayment()" style="
                      background: white;
                      border: 2px solid #e9ecef;
                      border-radius: 12px;
                      padding: 15px;
                      text-align: center;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 8px;
                  ">
                      <div style="
                          width: 45px;
                          height: 45px;
                          background: linear-gradient(135deg, #00c851 0%, #007e33 100%);
                          color: white;
                          border-radius: 10px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 20px;
                          margin-bottom: 5px;
                      ">
                          <i class="fas fa-qrcode"></i>
                      </div>
                      <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #333;">QR Code</h4>
                      <p style="font-size: 11px; color: #666; margin: 0; line-height: 1.2;">Scan with any UPI app</p>
                  </div>
                  <div class="payment-method upi-id" onclick="showUPIIDPayment()" style="
                      background: white;
                      border: 2px solid #e9ecef;
                      border-radius: 12px;
                      padding: 15px;
                      text-align: center;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 8px;
                  ">
                      <div style="
                          width: 45px;
                          height: 45px;
                          background: linear-gradient(135deg, #4285f4 0%, #3367d6 100%);
                          color: white;
                          border-radius: 10px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 20px;
                          margin-bottom: 5px;
                      ">
                          <i class="fas fa-at"></i>
                      </div>
                      <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #333;">UPI ID</h4>
                      <p style="font-size: 11px; color: #666; margin: 0; line-height: 1.2;">Manual UPI ID payment</p>
                  </div>
                  <div class="payment-method cards" onclick="showCardBankingPayment()" style="
                      background: white;
                      border: 2px solid #e9ecef;
                      border-radius: 12px;
                      padding: 15px;
                      text-align: center;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 8px;
                  ">
                      <div style="
                          width: 45px;
                          height: 45px;
                          background: linear-gradient(135deg, #9c27b0 0%, #673ab7 100%);
                          color: white;
                          border-radius: 10px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 20px;
                          margin-bottom: 5px;
                      ">
                          <i class="fas fa-credit-card"></i>
                      </div>
                      <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #333;">Card/Net Banking</h4>
                      <p style="font-size: 11px; color: #666; margin: 0; line-height: 1.2;">Credit, Debit, Banking</p>
                  </div>
              </div>
              <div style="
                  background: #fff3cd;
                  border: 1px solid #ffeaa7;
                  border-radius: 10px;
                  padding: 15px;
                  margin: 20px 0;
                  font-size: 13px;
              ">
                  <div style="font-weight: 600; color: #856404; margin-bottom: 8px;">📝 Important Instructions:</div>
                  <div style="color: #856404; line-height: 1.5;">
                      • Payment will be processed automatically<br>
                      • Order starts within 0-15 minutes after payment<br>
                      • Keep payment screenshot for reference<br>
                      • Contact support if you face any issues
                  </div>
              </div>
              <div style="text-align: center; margin-top: 20px;">
                  <button onclick="closePaymentModal()" style="
                      background: #dc3545;
                      color: white;
                      border: none;
                      padding: 12px 25px;
                      border-radius: 8px;
                      cursor: pointer;
                      font-weight: 600;
                      font-size: 14px;
                      transition: all 0.3s ease;
                  " onmouseover="this.style.background='#c82333'" onmouseout="this.style.background='#dc3545'">Cancel Transaction</button>
              </div>
          </div>
      </div>
  `;
  window.closePaymentModal = function() {
      showCancelConfirmationPopup(() => {
          if (paymentModal && paymentModal.parentElement) {
              document.body.removeChild(paymentModal);
          }
          document.body.style.overflow = 'auto';
          showPage('dashboardHome');
      });
  };
  window.showUPIAppsPayment = function() {
      showUPIAppsModal(order);
  };
  window.showQRCodePayment = function() {
      showQRCodeModal(order);
  };
  window.showUPIIDPayment = function() {
      showUPIIDModal(order);
  };
  window.showCardBankingPayment = function() {
      showCardBankingModal(order);
  };
  paymentModal.addEventListener('click', function(e) {
      if (e.target === paymentModal) {
          window.closePaymentModal();
      }
  });
  document.body.appendChild(paymentModal);
}
// Make function globally accessible
window.showPaymentPage = showPaymentPage;
function showCancelConfirmationPopup(onConfirm) {
  const confirmationModal = document.createElement('div');
  confirmationModal.id = 'cancelConfirmationModal';
  confirmationModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: modalFadeIn 0.3s ease;
  `;

  confirmationModal.innerHTML = `
    <div style="
      background: white;
      border-radius: 20px;
      padding: 35px;
      max-width: 450px;
      width: 100%;
      text-align: center;
      box-shadow: 0 25px 50px rgba(0,0,0,0.3);
      position: relative;
      overflow: hidden;
    ">
      <!-- Danger Header -->
      <div style="
        background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        color: white;
        padding: 20px;
        margin: -35px -35px 25px -35px;
        position: relative;
      ">
        <div style="
          font-size: 48px;
          margin-bottom: 10px;
          animation: warningPulse 2s infinite;
        ">⚠️</div>
        <h2 style="
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">Transaction Cancellation</h2>
      </div>

      <!-- Warning Message -->
      <div style="
        margin-bottom: 30px;
        padding: 20px;
        background: linear-gradient(145deg, #fff3cd 0%, #fef9e7 100%);
        border-radius: 15px;
        border-left: 5px solid #ffc107;
      ">
        <h3 style="
          color: #856404;
          margin: 0 0 15px 0;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        ">
          <i class="fas fa-exclamation-triangle" style="color: #dc3545;"></i>
          Are you absolutely sure?
        </h3>
        <p style="
          color: #856404;
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 500;
        ">
          This action will <strong>permanently cancel</strong> your transaction and cannot be undone. You will lose your current progress and be redirected to the home page.
        </p>
      </div>

      <!-- Risk Information -->
      <div style="
        background: linear-gradient(145deg, #f8d7da 0%, #f5c6cb 100%);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 25px;
        border-left: 4px solid #dc3545;
      ">
        <div style="
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        ">
          <i class="fas fa-info-circle" style="color: #721c24; font-size: 16px;"></i>
          <span style="
            color: #721c24;
            font-weight: 600;
            font-size: 14px;
          ">Important Information:</span>
        </div>
        <ul style="
          margin: 0;
          padding-left: 20px;
          color: #721c24;
          font-size: 13px;
          line-height: 1.4;
        ">
          <li>Any payment processing will be stopped immediately</li>
          <li>Order details will not be saved</li>
          <li>You'll need to start the process again from beginning</li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div style="
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
      ">
        <button onclick="confirmCancellation()" style="
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(220, 53, 69, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(220, 53, 69, 0.4)';" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(220, 53, 69, 0.3)';">
          <i class="fas fa-times"></i> Yes, Cancel Transaction
        </button>

        <button onclick="dismissCancellation()" style="
          background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(108, 117, 125, 0.3);
          position: relative;
          overflow: hidden;
        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(108, 117, 125, 0.4)';" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(108, 117, 125, 0.3)';">
          <i class="fas fa-arrow-left"></i> Keep Transaction
        </button>
      </div>

      <!-- Additional Warning -->
      <div style="
        margin-top: 20px;
        padding: 12px;
        background: rgba(220, 53, 69, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(220, 53, 69, 0.2);
      ">
        <p style="
          margin: 0;
          color: #721c24;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        ">
          <i class="fas fa-shield-alt"></i> This action is irreversible
        </p>
      </div>
    </div>
  `;

  document.body.appendChild(confirmationModal);

  // Prevent background scrolling
  document.body.style.overflow = 'hidden';

  window.confirmCancellation = function() {
    if (confirmationModal && confirmationModal.parentElement) {
      document.body.removeChild(confirmationModal);
    }
    document.body.style.overflow = 'auto';
    onConfirm();
  };

  window.dismissCancellation = function() {
    if (confirmationModal && confirmationModal.parentElement) {
      document.body.removeChild(confirmationModal);
    }
    document.body.style.overflow = 'auto';
  };

  // Close on overlay click
  confirmationModal.addEventListener('click', function(e) {
    if (e.target === confirmationModal) {
      window.dismissCancellation();
    }
  });
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
      <div class="notification-content">
          <span>${message}</span>
          <button onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
  `;
  notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#667eea'};
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
      if (notification.parentElement) {
          notification.remove();
      }
  }, 3000);
}
function showUPIAppsModal(order) {
  const upiModal = document.createElement('div');
  upiModal.id = 'upiAppsModal';
  upiModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f8f9fa;
      z-index: 10001;
      overflow-y: auto;
      animation: fadeIn 0.3s ease;
  `;
  let timerInterval;
  let timeLeft = 900; // 15 minutes
  upiModal.innerHTML = `
      <div style="
          min-height: 100vh;
          background: #f8f9fa;
          padding: 0;
          margin: 0;
          width: 100%;
      ">
          <!-- Header with Logo -->
          <div style="
              background: white;
              padding: 15px 20px;
              text-align: center;
              border-bottom: 1px solid #e0e0e0;
              position: sticky;
              top: 0;
              z-index: 100;
          ">
              <div style="
                  font-size: 18px;
                  font-weight: 700;
                  color: #28a745;
                  margin-bottom: 4px;
              ">India Social Panel</div>
              <div style="
                  font-size: 14px;
                  color: #6c757d;
              ">UPI Payment Gateway</div>
          </div>
          <!-- Main Content -->
          <div style="
              padding: 20px;
              max-width: 400px;
              margin: 0 auto;
          ">
              <!-- Payment Title -->
              <div style="
                  text-align: center;
                  margin-bottom: 25px;
              ">
                  <h2 style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      color: #495057;
                      font-weight: 600;
                  ">Choose Your UPI App</h2>
                  <p style="
                      margin: 0;
                      font-size: 14px;
                      color: #6c757d;
                  ">Pay ₹${order.price.toFixed(2)} for Order ${order.id}</p>
              </div>
              <!-- Timer -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 15px;
                  text-align: center;
                  margin-bottom: 20px;
                  border-left: 4px solid #ffc107;
              ">
                  <div style="
                      font-size: 14px;
                      color: #856404;
                      margin-bottom: 5px;
                  ">Session expires in</div>
                  <div id="upiTimer" style="
                      font-size: 24px;
                      font-weight: 700;
                      color: #856404;
                      font-family: monospace;
                  ">15:00</div>
                  <div style="
                      font-size: 12px;
                      color: #856404;
                      margin-top: 5px;
                  ">mins</div>
              </div>
              <!-- UPI Apps Container -->
              <div style="
                  background: white;
                  border-radius: 12px;
                  padding: 25px;
                  margin-bottom: 20px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              ">
                  <h3 style="
                      margin: 0 0 20px 0;
                      color: #495057;
                      font-size: 16px;
                      font-weight: 600;
                      text-align: center;
                  ">Select UPI App</h3>
                  <!-- UPI Apps Grid -->
                  <div style="
                      display: grid;
                      grid-template-columns: repeat(2, 1fr);
                      gap: 15px;
                      margin-bottom: 20px;
                  ">
                      <button onclick="openUPIApp('googlepay')" style="
                          background: white;
                          border: 2px solid #e0e0e0;
                          border-radius: 10px;
                          padding: 20px;
                          cursor: pointer;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          gap: 8px;
                          transition: all 0.2s ease;
                          font-size: 14px;
                          font-weight: 600;
                          color: #495057;
                      " onmouseover="this.style.borderColor='#28a745'; this.style.background='#f8fff9';" onmouseout="this.style.borderColor='#e0e0e0'; this.style.background='white';">
                          <div style="font-size: 24px;">📱</div>
                          <span>Google Pay</span>
                          <small style="font-size: 12px; color: #6c757d; font-weight: 400;">Auto-open with amount</small>
                      </button>
                      <button onclick="openUPIApp('phonepe')" style="
                          background: white;
                          border: 2px solid #e0e0e0;
                          border-radius: 10px;
                          padding: 20px;
                          cursor: pointer;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          gap: 8px;
                          transition: all 0.2s ease;
                          font-size: 14px;
                          font-weight: 600;
                          color: #495057;
                      " onmouseover="this.style.borderColor='#673ab7'; this.style.background='#f3e5f5';" onmouseout="this.style.borderColor='#e0e0e0'; this.style.background='white';">
                          <div style="font-size: 24px;">💜</div>
                          <span>PhonePe</span>
                          <small style="font-size: 12px; color: #6c757d; font-weight: 400;">Auto-open with amount</small>
                      </button>
                      <button onclick="openUPIApp('paytm')" style="
                          background: white;
                          border: 2px solid #e0e0e0;
                          border-radius: 10px;
                          padding: 20px;
                          cursor: pointer;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          gap: 8px;
                          transition: all 0.2s ease;
                          font-size: 14px;
                          font-weight: 600;
                          color: #495057;
                      " onmouseover="this.style.borderColor='#2196f3'; this.style.background='#e3f2fd';" onmouseout="this.style.borderColor='#e0e0e0'; this.style.background='white';">
                          <div style="font-size: 24px;">💙</div>
                          <span>Paytm</span>
                          <small style="font-size: 12px; color: #6c757d; font-weight: 400;">Auto-open with amount</small>
                      </button>
                      <button onclick="openUPIApp('other')" style="
                          background: white;
                          border: 2px solid #e0e0e0;
                          border-radius: 10px;
                          padding: 20px;
                          cursor: pointer;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          gap: 8px;
                          transition: all 0.2s ease;
                          font-size: 14px;
                          font-weight: 600;
                          color: #495057;
                      " onmouseover="this.style.borderColor='#ff9800'; this.style.background='#fff3e0';" onmouseout="this.style.borderColor='#e0e0e0'; this.style.background='white';">
                          <div style="font-size: 24px;">📱</div>
                          <span>Any UPI App</span>
                          <small style="font-size: 12px; color: #6c757d; font-weight: 400;">Generic UPI link</small>
                      </button>
              </div>
              </div>
              <!-- Order Details -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 15px;
                  margin-bottom: 20px;
              ">
                  <div style="
                      font-size: 14px;
                      color: #495057;
                      margin-bottom: 10px;
                      font-weight: 600;
                  ">Payment Details</div>
                  <div style="
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 8px;
                      font-size: 14px;
                  ">
                      <span style="color: #6c757d;">Order ID:</span>
                      <span style="color: #495057; font-weight: 600;">${order.id}</span>
                  </div>
                  <div style="
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 8px;
                      font-size: 14px;
                  ">
                      <span style="color: #6c757d;">Amount:</span>
                      <span style="color: #28a745; font-weight: 700; font-size: 16px;">₹${order.price.toFixed(2)}</span>
                  </div>
              </div>
              <!-- Action Buttons -->
              <div style="
                  display: flex;
                  gap: 12px;
                  padding-bottom: 20px;
              ">
                  <button onclick="cancelTransaction()" style="
                      flex: 1;
                      background: #dc3545;
                      color: white;
                      border: none;
                      padding: 15px;
                      border-radius: 8px;
                      cursor: pointer;
                      font-weight: 600;
                      font-size: 14px;
                      transition: all 0.3s ease;
                  " onmouseover="this.style.background='#c82333'" onmouseout="this.style.background='#dc3545'">Cancel Transaction</button>
              </div>
          </div>
      </div>
  `;
  document.body.appendChild(upiModal);
  timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const timerElement = document.getElementById('upiTimer');
      if (timerElement) {
          timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          cancelTransaction();
      }
      timeLeft--;
  }, 1000);
  window.openUPIApp = function(app) {
      const upiID = 'kavita.5049-49@waicici'; // Correct UPI ID from copy function
      const amount = order.price.toFixed(2);
      const note = `Payment for Order ${order.id} - India Social Panel`;
      
      let upiUrl = '';
      
      // Generate app-specific UPI URLs for better compatibility
      switch(app.toLowerCase()) {
          case 'googlepay':
              // Google Pay specific URL format
              upiUrl = `tez://upi/pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
              // Fallback to generic UPI URL if Google Pay not installed
              setTimeout(() => {
                  window.location.href = `upi://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
              }, 1000);
              break;
              
          case 'phonepe':
              // PhonePe specific URL format
              upiUrl = `phonepe://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
              // Fallback to generic UPI URL
              setTimeout(() => {
                  window.location.href = `upi://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
              }, 1000);
              break;
              
          case 'paytm':
              // Paytm specific URL format
              upiUrl = `paytmmp://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
              // Fallback to generic UPI URL
              setTimeout(() => {
                  window.location.href = `upi://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
              }, 1000);
              break;
              
          case 'other':
          default:
              // Generic UPI URL that works with all UPI apps
              upiUrl = `upi://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
              break;
      }
      
      // Try to open the app-specific URL first
      try {
          window.location.href = upiUrl;
          showNotification(`✅ Opening ${app.toUpperCase()}... Amount ₹${amount} pre-filled`, 'success');
      } catch (error) {
          // If app-specific URL fails, try generic UPI URL
          window.location.href = `upi://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
          showNotification(`✅ Opening UPI App... Amount ₹${amount} pre-filled`, 'success');
      }
      
      // Give user time to complete payment then return to dashboard
      setTimeout(() => {
          clearInterval(timerInterval);
          closeUPIModal();
          showPage('dashboardHome');
      }, 5000); // Increased time to 5 seconds for better user experience
  };
  window.cancelTransaction = function() {
      showCancelConfirmationPopup(() => {
          clearInterval(timerInterval);
          closeUPIModal();
          // Close payment modal completely
          const paymentModal = document.getElementById('paymentModal');
          if (paymentModal && paymentModal.parentElement) {
              document.body.removeChild(paymentModal);
          }
          document.body.style.overflow = 'auto';
          showNotification('❌ Transaction cancelled successfully!', 'info');
          showPage('dashboardHome');
      });
  };
  window.closeUPIModal = function() {
      clearInterval(timerInterval);
      if (upiModal && upiModal.parentElement) {
          document.body.removeChild(upiModal);
      }
  };
}
function showQRCodeModal(order) {
  const qrModal = document.createElement('div');
  qrModal.id = 'qrCodeModal';
  qrModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f8f9fa;
      z-index: 10001;
      overflow-y: auto;
  `;
  let timerInterval;
  let timeLeft = 900; // 15 minutes
  qrModal.innerHTML = `
      <div style="
          min-height: 100vh;
          background: #f8f9fa;
          padding: 0;
          margin: 0;
          width: 100%;
      ">
          <!-- Header with Logo -->
          <div style="
              background: white;
              padding: 15px 20px;
              text-align: center;
              border-bottom: 1px solid #e0e0e0;
              position: sticky;
              top: 0;
              z-index: 100;
          ">
              <div style="
                  font-size: 18px;
                  font-weight: 700;
                  color: #28a745;
                  margin-bottom: 4px;
              ">India Social Panel</div>
              <div style="
                  font-size: 14px;
                  color: #6c757d;
              ">Secure Payment Gateway</div>
          </div>
          <!-- Main Content -->
          <div style="
              padding: 20px;
              max-width: 400px;
              margin: 0 auto;
          ">
              <!-- Payment Title -->
              <div style="
                  text-align: center;
                  margin-bottom: 25px;
              ">
                  <h2 style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      color: #495057;
                      font-weight: 600;
                  ">Scan the QR using any UPI app</h2>
              </div>
              <!-- Order ID Display -->
              <div style="
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  border-radius: 12px;
                  padding: 20px;
                  text-align: center;
                  margin-bottom: 20px;
                  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
              ">
                  <div style="
                      font-size: 14px;
                      margin-bottom: 8px;
                      opacity: 0.9;
                  ">Order ID</div>
                  <div style="
                      font-size: 20px;
                      font-weight: 700;
                      font-family: 'Courier New', monospace;
                      letter-spacing: 1px;
                      margin-bottom: 8px;
                  ">${order.id}</div>
                  <div style="
                      font-size: 16px;
                      font-weight: 600;
                  ">₹${order.price.toFixed(2)}</div>
              </div>

              <!-- QR Code Container -->
              <div style="
                  background: white;
                  border-radius: 12px;
                  padding: 30px;
                  text-align: center;
                  margin-bottom: 20px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              ">
                  <div id="qrCodeContainer" style="
                      width: 240px;
                      height: 240px;
                      background: #f8f9fa;
                      margin: 0 auto 20px;
                      border-radius: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border: 2px dashed #dee2e6;
                      position: relative;
                  ">
                      <div style="text-align: center;">
                          <div style="
                              font-size: 40px; 
                              margin-bottom: 10px;
                              color: #6c757d;
                          ">📱</div>
                          <div style="
                              font-size: 14px; 
                              color: #28a745; 
                              font-weight: 600;
                          ">Tap Generate QR Code</div>
                      </div>
                  </div>
                  <!-- Generate QR Button -->
                  <button id="generateQRBtn" onclick="generateActualQRCode()" style="
                      width: 100%;
                      background: #007bff;
                      color: white;
                      border: none;
                      padding: 12px 20px;
                      border-radius: 8px;
                      cursor: pointer;
                      font-weight: 600;
                      font-size: 16px;
                      margin-bottom: 15px;
                      transition: all 0.2s ease;
                  ">Generate QR Code</button>
                  <div style="
                      font-size: 12px;
                      color: #6c757d;
                      margin-bottom: 15px;
                  ">Scan with any UPI app to pay for Order ${order.id}</div>
              </div>
              <!-- Timer -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 15px;
                  text-align: center;
                  margin-bottom: 20px;
                  border-left: 4px solid #ffc107;
              ">
                  <div style="
                      font-size: 14px;
                      color: #856404;
                      margin-bottom: 5px;
                  ">QR Code will expire in</div>
                  <div id="qrTimer" style="
                      font-size: 24px;
                      font-weight: 700;
                      color: #856404;
                      font-family: monospace;
                  ">15:00</div>
                  <div style="
                      font-size: 12px;
                      color: #856404;
                      margin-top: 5px;
                  ">mins</div>
              </div>
              <!-- Order Details -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 15px;
                  margin-bottom: 20px;
              ">
                  <div style="
                      font-size: 14px;
                      color: #495057;
                      margin-bottom: 10px;
                      font-weight: 600;
                  ">Payment Details</div>
                  <div style="
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 8px;
                      font-size: 14px;
                  ">
                      <span style="color: #6c757d;">Order ID:</span>
                      <span style="color: #495057; font-weight: 600;">${order.id}</span>
                  </div>
                  <div style="
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 8px;
                      font-size: 14px;
                  ">
                      <span style="color: #6c757d;">Service ID:</span>
                      <span style="color: #495057; font-weight: 600;">${order.serviceId}</span>
                  </div>
                  <div style="
                      display: flex;
                      justify-content: space-between;
                      font-size: 14px;
                      padding-top: 8px;
                      border-top: 1px solid #e9ecef;
                  ">
                      <span style="color: #6c757d;">Amount:</span>
                      <span style="color: #28a745; font-weight: 700; font-size: 16px;">₹${order.price.toFixed(2)}</span>
                  </div>
              </div>
              <!-- Cancel Button -->
              <button onclick="cancelQRTransaction()" style="
                  width: 100%;
                  background: #dc3545;
                  color: white;
                  border: none;
                  padding: 12px 20px;
                  border-radius: 8px;
                  cursor: pointer;
                  font-weight: 600;
                  font-size: 16px;
                  transition: all 0.2s ease;
              ">Cancel Transaction</button>
          </div>
      </div>
  `;
  document.body.appendChild(qrModal);
  timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const timerElement = document.getElementById('qrTimer');
      if (timerElement) {
          timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          cancelQRTransaction();
      }
      timeLeft--;
  }, 1000);
  window.generateActualQRCode = function() {
      const qrContainer = document.getElementById('qrCodeContainer');
      const generateBtn = document.getElementById('generateQRBtn');
      if (qrContainer && generateBtn) {
          const upiID = 'kavita.5049-49@waicici';
          const amount = order.price.toFixed(2);
          const note = `Order ${order.id} - India Social Panel`;
          const upiString = `upi://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
          generateBtn.style.display = 'none';
          qrContainer.innerHTML = `
              <div style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: white;
                  border-radius: 8px;
                  border: 1px solid #dee2e6;
              ">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiString)}" 
                  style="
                      width: 220px; 
                      height: 220px; 
                      border-radius: 4px;
                  " 
                  alt="UPI QR Code" />
              </div>
          `;
      }
      showNotification('QR Code generated successfully! Scan with any UPI app to pay.', 'success');
  };
  window.cancelQRTransaction = function() {
      showCancelConfirmationPopup(() => {
          clearInterval(timerInterval);
          closeQRModal();
          // Close payment modal completely
          const paymentModal = document.getElementById('paymentModal');
          if (paymentModal && paymentModal.parentElement) {
              document.body.removeChild(paymentModal);
          }
          document.body.style.overflow = 'auto';
          showNotification('❌ Transaction cancelled successfully!', 'info');
          showPage('dashboardHome');
      });
  };
  window.closeQRModal = function() {
      clearInterval(timerInterval);
      if (qrModal && qrModal.parentElement) {
          document.body.removeChild(qrModal);
      }
  };
}
function showUPIIDModal(order) {
  const upiIDModal = document.createElement('div');
  upiIDModal.id = 'upiIDModal';
  upiIDModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f8f9fa;
      z-index: 10001;
      overflow-y: auto;
      animation: fadeIn 0.3s ease;
  `;
  let timerInterval;
  let timeLeft = 900; // 15 minutes
  const actualUPIID = 'kavita.5049-49@waicici'; // Real UPI ID for copying - consistent with app opening
  const brandedDisplayUPIID = 'India Social Panel@paytm'; // Branded display UPI ID
  upiIDModal.innerHTML = `
      <div style="
          min-height: 100vh;
          background: #f8f9fa;
          padding: 0;
          margin: 0;
          width: 100%;
      ">
          <!-- Header with Logo -->
          <div style="
              background: white;
              padding: 15px 20px;
              text-align: center;
              border-bottom: 1px solid #e0e0e0;
              position: sticky;
              top: 0;
              z-index: 100;
          ">
              <div style="
                  font-size: 18px;
                  font-weight: 700;
                  color: #28a745;
                  margin-bottom: 4px;
              ">India Social Panel</div>
              <div style="
                  font-size: 14px;
                  color: #6c757d;
              ">UPI ID Payment Gateway</div>
          </div>
          <!-- Main Content -->
          <div style="
              padding: 20px;
              max-width: 400px;
              margin: 0 auto;
          ">
              <!-- Payment Title -->
              <div style="
                  text-align: center;
                  margin-bottom: 25px;
              ">
                  <h2 style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      color: #495057;
                      font-weight: 600;
                  ">Pay using UPI ID</h2>
                  <p style="
                      margin: 0;
                      font-size: 14px;
                      color: #6c757d;
                  ">Pay ₹${order.price.toFixed(2)} for Order ${order.id}</p>
              </div>
              <!-- Timer -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 15px;
                  text-align: center;
                  margin-bottom: 20px;
                  border-left: 4px solid #ffc107;
              ">
                  <div style="
                      font-size: 14px;
                      color: #856404;
                      margin-bottom: 5px;
                  ">Session expires in</div>
                  <div id="upiIdTimer" style="
                      font-size: 24px;
                      font-weight: 700;
                      color: #856404;
                      font-family: monospace;
                  ">15:00</div>
                  <div style="
                      font-size: 12px;
                      color: #856404;
                      margin-top: 5px;
                  ">mins</div>
              </div>
              <!-- UPI ID Container -->
              <div style="
                  background: white;
                  border-radius: 12px;
                  padding: 25px;
                  margin-bottom: 20px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              ">
                  <h3 style="
                      margin: 0 0 20px 0;
                      color: #495057;
                      font-size: 16px;
                      font-weight: 600;
                      text-align: center;
                  ">Our UPI ID</h3>
                  <!-- UPI ID Display -->
                  <div style="
                      background: #f8f9fa;
                      border: 2px dashed #dee2e6;
                      border-radius: 8px;
                      padding: 20px;
                      margin-bottom: 20px;
                      text-align: center;
                  ">
                      <div id="displayedUPIID" style="
                          font-size: 18px;
                          font-weight: 700;
                          color: #495057;
                          margin-bottom: 10px;
                          font-family: monospace;
                          word-break: break-all;
                      ">${brandedDisplayUPIID}</div>
                      <button onclick="copyUPIID()" style="
                          background: #007bff;
                          color: white;
                          border: none;
                          padding: 10px 20px;
                          border-radius: 5px;
                          cursor: pointer;
                          font-size: 14px;
                          font-weight: 600;
                      ">Copy UPI ID</button>
                  </div>
                  <!-- Amount -->
                  <div style="
                      text-align: center;
                      margin-bottom: 20px;
                  ">
                      <div style="
                          font-size: 14px;
                          color: #6c757d;
                          margin-bottom: 5px;
                      ">Amount to Pay</div>
                      <div style="
                          font-size: 28px;
                          font-weight: 700;
                          color: #28a745;
                      ">₹${order.price.toFixed(2)}</div>
                  </div>
              </div>
              <!-- Instructions -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 20px;
                  margin-bottom: 20px;
                  border-left: 4px solid #007bff;
              ">
                  <h4 style="
                      margin: 0 0 15px 0;
                      font-size: 16px;
                      color: #495057;
                      font-weight: 600;
                  ">How to Pay</h4>
                  <ol style="
                      margin: 0;
                      padding-left: 20px;
                      color: #6c757d;
                      font-size: 14px;
                      line-height: 1.6;
                  ">
                      <li>Open any UPI app (GPay, PhonePe, Paytm)</li>
                      <li>Select "Send Money" or "Pay to Contact"</li>
                      <li>Enter UPI ID: <strong style="color: #495057;">${brandedDisplayUPIID}</strong></li>
                      <li>Enter amount: <strong style="color: #495057;">₹${order.price.toFixed(2)}</strong></li>
                      <li>Complete payment with your UPI PIN</li>
                  </ol>
              </div>
              <!-- Cancel Button -->
              <div style="
                  display: flex;
                  gap: 12px;
                  padding-bottom: 30px;
              ">
                  <button onclick="cancelUPIIDTransaction()" style="
                      width: 100%;
                      background: #dc3545;
                      color: white;
                      border: none;
                      padding: 15px;
                      border-radius: 8px;
                      cursor: pointer;
                      font-weight: 600;
                      font-size: 14px;
                  ">Cancel Transaction</button>
              </div>
          </div>
      </div>
  `;
  document.body.appendChild(upiIDModal);
  timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const timerElement = document.getElementById('upiIdTimer');
      if (timerElement) {
          timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          cancelUPIIDTransaction();
      }
      timeLeft--;
  }, 1000);
  window.copyUPIID = function() {
      navigator.clipboard.writeText(actualUPIID).then(() => {
          const displayElement = document.getElementById('displayedUPIID');
          const copyBtn = event.target.closest('button');
          if (displayElement) {
              displayElement.style.color = '#28a745';
              displayElement.textContent = actualUPIID;
          }
          showNotification('✅ UPI ID copied to clipboard!', 'success');
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = '✅ Copied!';
          copyBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
          setTimeout(() => {
              copyBtn.innerHTML = originalText;
              copyBtn.style.background = 'linear-gradient(135deg, #4285f4 0%, #667eea 100%)';
              if (displayElement) {
                  displayElement.style.color = '#4285f4';
                  displayElement.textContent = brandedDisplayUPIID;
              }
          }, 3000);
      }).catch(() => {
          showNotification('❌ Failed to copy. Please copy manually: ' + actualUPIID, 'error');
      });
  };
  window.markUPIPaid = function() {
      clearInterval(timerInterval);
      showNotification('✅ Payment confirmed! Order will start processing shortly.', 'success');
      closeUPIIDModal();
      showPage('dashboardHome');
  };
  window.cancelUPIIDTransaction = function() {
      showCancelConfirmationPopup(() => {
          clearInterval(timerInterval);
          closeUPIIDModal();
          // Close payment modal completely
          const paymentModal = document.getElementById('paymentModal');
          if (paymentModal && paymentModal.parentElement) {
              document.body.removeChild(paymentModal);
          }
          document.body.style.overflow = 'auto';
          showNotification('❌ UPI payment cancelled successfully!', 'info');
          showPage('dashboardHome');
      });
  };
  window.closeUPIIDModal = function() {
      clearInterval(timerInterval);
      if (upiIDModal && upiIDModal.parentElement) {
          document.body.removeChild(upiIDModal);
      }
  };
}
function showCardBankingModal(order) {
  const cardModal = document.createElement('div');
  cardModal.id = 'cardBankingModal';
  cardModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f8f9fa;
      z-index: 10001;
      overflow-y: auto;
      animation: fadeIn 0.3s ease;
  `;
  let timerInterval;
  let timeLeft = 900; // 15 minutes
  cardModal.innerHTML = `
      <div style="
          min-height: 100vh;
          background: #f8f9fa;
          padding: 0;
          margin: 0;
          width: 100%;
      ">
          <!-- Header with Logo -->
          <div style="
              background: white;
              padding: 15px 20px;
              text-align: center;
              border-bottom: 1px solid #e0e0e0;
              position: sticky;
              top: 0;
              z-index: 100;
          ">
              <div style="
                  font-size: 18px;
                  font-weight: 700;
                  color: #28a745;
                  margin-bottom: 4px;
              ">India Social Panel</div>
              <div style="
                  font-size: 14px;
                  color: #6c757d;
              ">Card & Banking Payment Gateway</div>
          </div>
          <!-- Main Content -->
          <div style="
              padding: 20px;
              max-width: 400px;
              margin: 0 auto;
          ">
              <!-- Payment Title -->
              <div style="
                  text-align: center;
                  margin-bottom: 25px;
              ">
                  <h2 style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      color: #495057;
                      font-weight: 600;
                  ">Card & Banking Payment</h2>
                  <p style="
                      margin: 0;
                      font-size: 14px;
                      color: #6c757d;
                  ">Pay ₹${order.price.toFixed(2)} for Order ${order.id}</p>
              </div>
              <!-- Timer -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 15px;
                  text-align: center;
                  margin-bottom: 20px;
                  border-left: 4px solid #ffc107;
              ">
                  <div style="
                      font-size: 14px;
                      color: #856404;
                      margin-bottom: 5px;
                  ">Session expires in</div>
                  <div id="cardTimer" style="
                      font-size: 24px;
                      font-weight: 700;
                      color: #856404;
                      font-family: monospace;
                  ">15:00</div>
                  <div style="
                      font-size: 12px;
                      color: #856404;
                      margin-top: 5px;
                  ">mins</div>
              </div>
              <!-- Payment Methods -->
              <div style="
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 15px;
                  margin-bottom: 20px;
              ">
                  <button onclick="processCardPayment('credit')" style="
                      background: white;
                      border: 2px solid #e0e0e0;
                      border-radius: 10px;
                      padding: 20px;
                      cursor: pointer;
                      display: flex;
                      align-items: center;
                      gap: 15px;
                      transition: all 0.2s ease;
                      font-size: 16px;
                      font-weight: 600;
                      color: #495057;
                      width: 100%;
                      text-align: left;
                  ">
                      <div style="font-size: 24px;">💳</div>
                      <div>
                          <div>Credit Card</div>
                          <div style="font-size: 12px; color: #6c757d; font-weight: 400;">Visa, Mastercard, Rupay</div>
                      </div>
                  </button>
                  <button onclick="processCardPayment('debit')" style="
                      background: white;
                      border: 2px solid #e0e0e0;
                      border-radius: 10px;
                      padding: 20px;
                      cursor: pointer;
                      display: flex;
                      align-items: center;
                      gap: 15px;
                      transition: all 0.2s ease;
                      font-size: 16px;
                      font-weight: 600;
                      color: #495057;
                      width: 100%;
                      text-align: left;
                  ">
                      <div style="font-size: 24px;">💳</div>
                      <div>
                          <div>Debit Card</div>
                          <div style="font-size: 12px; color: #6c757d; font-weight: 400;">All major banks</div>
                      </div>
                  </button>
                  <button onclick="processCardPayment('netbanking')" style="
                      background: white;
                      border: 2px solid #e0e0e0;
                      border-radius: 10px;
                      padding: 20px;
                      cursor: pointer;
                      display: flex;
                      align-items: center;
                      gap: 15px;
                      transition: all 0.2s ease;
                      font-size: 16px;
                      font-weight: 600;
                      color: #495057;
                      width: 100%;
                      text-align: left;
                  ">
                      <div style="font-size: 24px;">🏦</div>
                      <div>
                          <div>Net Banking</div>
                          <div style="font-size: 12px; color: #6c757d; font-weight: 400;">50+ banks available</div>
                      </div>
                  </button>
              </div>
              <!-- Order Details -->
              <div style="
                  background: white;
                  border-radius: 8px;
                  padding: 15px;
                  margin-bottom: 20px;
              ">
                  <div style="
                      font-size: 14px;
                      color: #495057;
                      margin-bottom: 10px;
                      font-weight: 600;
                  ">Payment Details</div>
                  <div style="
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 8px;
                      font-size: 14px;
                  ">
                      <span style="color: #6c757d;">Order ID:</span>
                      <span style="color: #495057; font-weight: 600;">${order.id}</span>
                  </div>
                  <div style="
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 8px;
                      font-size: 14px;
                  ">
                      <span style="color: #6c757d;">Amount:</span>
                      <span style="color: #28a745; font-weight: 700; font-size: 16px;">₹${order.price.toFixed(2)}</span>
                  </div>
              </div>
              <!-- Cancel Button -->
              <div style="
                  display: flex;
                  gap: 12px;
                  padding-bottom: 30px;
              ">
                  <button onclick="cancelCardTransaction()" style="
                      width: 100%;
                      background: #dc3545;
                      color: white;
                      border: none;
                      padding: 15px;
                      border-radius: 8px;
                      cursor: pointer;
                      font-weight: 600;
                      font-size: 14px;
                  ">Cancel Transaction</button>
              </div>
          </div>
      </div>
  `;
  document.body.appendChild(cardModal);
  timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const timerElement = document.getElementById('cardTimer');
      if (timerElement) {
          timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          cancelCardTransaction();
      }
      timeLeft--;
  }, 1000);
  window.processCardPayment = function(type) {
      let message = '';
      let icon = '';
      switch(type) {
          case 'credit':
              message = '🔄 Opening secure credit card gateway...';
              icon = '💳';
              break;
          case 'debit':
              message = '🔄 Redirecting to debit card payment...';
              icon = '💳';
              break;
          case 'netbanking':
              message = '🔄 Loading net banking portal...';
              icon = '🏦';
              break;
          case 'wallet':
              message = '🔄 Opening digital wallet gateway...';
              icon = '👛';
              break;
      }
      showNotification(`${icon} ${message}`, 'info');
      setTimeout(() => {
          clearInterval(timerInterval);
          closeCardModal();
          showPage('dashboardHome');
      }, 3000);
  };
  window.cancelCardTransaction = function() {
      showCancelConfirmationPopup(() => {
          clearInterval(timerInterval);
          closeCardModal();
          // Close payment modal completely
          const paymentModal = document.getElementById('paymentModal');
          if (paymentModal && paymentModal.parentElement) {
              document.body.removeChild(paymentModal);
          }
          document.body.style.overflow = 'auto';
          showNotification('❌ Card payment cancelled successfully!', 'info');
          showPage('dashboardHome');
      });
  };
  window.closeCardModal = function() {
      clearInterval(timerInterval);
      if (cardModal && cardModal.parentElement) {
          document.body.removeChild(cardModal);
      }
  };
}
function showPaymentConfirmation(order) {
  // Payment confirmation popup removed - just close payment modal and go to dashboard
  const paymentModal = document.getElementById('paymentModal');
  if (paymentModal && paymentModal.parentElement) {
      document.body.removeChild(paymentModal);
  }
  document.body.style.overflow = 'auto';
  showPage('dashboardHome');
}
function updateProfileStats() {
  const statElements = document.querySelectorAll('.stat-item');
  if (statElements.length >= 4) {
      statElements[0].querySelector('.stat-value').textContent = profileStats.totalOrders;
      statElements[1].querySelector('.stat-value').textContent = `₹${profileStats.totalSpent.toFixed(0)}`;
      statElements[2].querySelector('.stat-value').textContent = `₹${profileStats.currentBalance.toFixed(0)}`;
      statElements[3].querySelector('.stat-value').textContent = `${profileStats.successRate}%`;
  }
}
function setupProfileFunctionality() {
  const savedName = localStorage.getItem('userName');
  if (savedName) {
      const profileNameInput = document.querySelector('input[placeholder="Enter your full name"]');
      const profileDisplayName = document.getElementById('profileDisplayName');
      const userAvatar = document.querySelector('.user-avatar .avatar-icon');
      if (profileNameInput) profileNameInput.value = savedName;
      if (profileDisplayName) profileDisplayName.textContent = savedName;
      if (userAvatar) userAvatar.textContent = savedName.charAt(0).toUpperCase();
  }
  updateProfileStats();

  // Name input functionality
  const nameInput = document.querySelector('input[placeholder="Enter your full name"]');
  if (nameInput) {
      nameInput.addEventListener('input', function() {
          const name = this.value.trim();
          const profileDisplayName = document.getElementById('profileDisplayName');
          const userAvatar = document.querySelector('.user-avatar .avatar-icon');
          if (name) {
              if (profileDisplayName) profileDisplayName.textContent = name;
              if (userAvatar) userAvatar.textContent = name.charAt(0).toUpperCase();
              localStorage.setItem('userName', name);
          } else {
              if (profileDisplayName) profileDisplayName.textContent = 'Enter Your Name';
              if (userAvatar) userAvatar.textContent = 'A';
              localStorage.removeItem('userName');
          }
      });
  }

  // Profile edit button functionality
  const profileEditBtn = document.querySelector('.profile-edit-btn');
  if (profileEditBtn) {
      profileEditBtn.addEventListener('click', function() {
          const nameInput = document.querySelector('input[placeholder="Enter your full name"]');
          if (nameInput) {
              nameInput.focus();
              nameInput.select();
              showNotification('📝 You can now edit your profile information!', 'info');
          }
      });
  }

  // Save buttons functionality
  const saveButtons = document.querySelectorAll('.save-btn');
  saveButtons.forEach(btn => {
      btn.addEventListener('click', function() {
          const section = this.closest('.profile-section');
          if (section) {
              const sectionTitle = section.querySelector('h3').textContent;

              if (sectionTitle.includes('Personal Information')) {
                  savePersonalInformation();
              } else if (sectionTitle.includes('Account Security')) {
                  saveSecuritySettings();
              } else if (sectionTitle.includes('Preferences')) {
                  savePreferences();
              }
          }
      });
  });

  // 2FA Enable button
  const enable2FABtn = document.querySelector('.profile-edit-btn[style*="margin-left: 10px"]');
  if (enable2FABtn && enable2FABtn.textContent.includes('Enable 2FA')) {
      enable2FABtn.addEventListener('click', enable2FA);
  }

  const addPaymentBtn = document.getElementById('addPaymentMethodBtn');
  if (addPaymentBtn) {
      addPaymentBtn.addEventListener('click', showPaymentMethodOptions);
  }
  loadUserPaymentMethods();
}
function showPaymentMethodOptions() {
  const paymentModal = document.createElement('div');
  paymentModal.id = 'paymentMethodModal';
  paymentModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
  `;

  paymentModal.innerHTML = `
      <div style="
          background: white;
          border-radius: 15px;
          padding: 30px;
          max-width: 500px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
      ">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
              <h2 style="margin: 0; color: #333;">Add Payment Method</h2>
              <button onclick="closePaymentMethodModal()" style="
                  background: none;
                  border: none;
                  font-size: 24px;
                  cursor: pointer;
                  color: #666;
              ">×</button>
          </div>

          <div style="display: grid; gap: 15px;">
              <div class="payment-method-option" onclick="addUPIMethod()" style="
                  border: 2px solid #e9ecef;
                  border-radius: 10px;
                  padding: 20px;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  display: flex;
                  align-items: center;
                  gap: 15px;
              ">
                  <div style="
                      width: 50px;
                      height: 50px;
                      background: #28a745;
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 20px;
                  ">💳</div>
                  <div>
                      <h4 style="margin: 0 0 5px 0;">UPI ID</h4>
                      <p style="margin: 0; color: #666; font-size: 14px;">Add your UPI ID for payments</p>
                  </div>
              </div>

              <div class="payment-method-option" onclick="addCardMethod()" style="
                  border: 2px solid #e9ecef;
                  border-radius: 10px;
                  padding: 20px;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  display: flex;
                  align-items: center;
                  gap: 15px;
              ">
                  <div style="
                      width: 50px;
                      height: 50px;
                      background: #9c27b0;
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 20px;
                  ">💳</div>
                  <div>
                      <h4 style="margin: 0 0 5px 0;">Credit/Debit Card</h4>
                      <p style="margin: 0; color: #666; font-size: 14px;">Add your card for payments</p>
                  </div>
              </div>

              <div class="payment-method-option" onclick="addBankMethod()" style="
                  border: 2px solid #e9ecef;
                  border-radius: 10px;
                  padding: 20px;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  display: flex;
                  align-items: center;
                  gap: 15px;
              ">
                  <div style="
                      width: 50px;
                      height: 50px;
                      background: #ff9800;
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 20px;
                  ">🏦</div>
                  <div>
                      <h4 style="margin: 0 0 5px 0;">Bank Account</h4>
                      <p style="margin: 0; color: #666; font-size: 14px;">Add bank account details</p>
                  </div>
              </div>
          </div>
      </div>
  `;

  document.body.appendChild(paymentModal);

  window.closePaymentMethodModal = function() {
      if (paymentModal && paymentModal.parentElement) {
          document.body.removeChild(paymentModal);
      }
  };

  window.addUPIMethod = function() {
      const upiId = prompt('Enter your UPI ID:');
      if (upiId && upiId.includes('@')) {
          addPaymentMethodToList('UPI', upiId, 'fab fa-google-pay');
          closePaymentMethodModal();
          showNotification('✅ UPI ID added successfully!', 'success');
      } else if (upiId) {
          showNotification('❌ Please enter a valid UPI ID', 'error');
      }
  };

  window.addCardMethod = function() {
      const cardNumber = prompt('Enter last 4 digits of your card:');
      if (cardNumber && cardNumber.length === 4 && !isNaN(cardNumber)) {
          addPaymentMethodToList('Card', `**** **** **** ${cardNumber}`, 'fas fa-credit-card');
          closePaymentMethodModal();
          showNotification('✅ Card added successfully!', 'success');
      } else if (cardNumber) {
          showNotification('❌ Please enter valid last 4 digits', 'error');
      }
  };

  window.addBankMethod = function() {
      const accountNumber = prompt('Enter last 4 digits of account number:');
      if (accountNumber && accountNumber.length === 4 && !isNaN(accountNumber)) {
          addPaymentMethodToList('Bank', `Account ending in ${accountNumber}`, 'fas fa-university');
          closePaymentMethodModal();
          showNotification('✅ Bank account added successfully!', 'success');
      } else if (accountNumber) {
          showNotification('❌ Please enter valid last 4 digits', 'error');
      }
  };
}

function addPaymentMethodToList(type, details, icon) {
  const paymentMethodsList = document.getElementById('paymentMethodsList');
  const savedMethods = JSON.parse(localStorage.getItem('paymentMethods') || '[]');

  const newMethod = { type, details, icon, id: Date.now() };
  savedMethods.push(newMethod);
  localStorage.setItem('paymentMethods', JSON.stringify(savedMethods));

  loadUserPaymentMethods();
}

function savePersonalInformation() {
  const nameInput = document.querySelector('input[placeholder="Enter your full name"]');
  const mobileInput = document.querySelector('input[placeholder="Enter your mobile number"]');
  const dobInput = document.querySelector('input[type="date"]');

  const profileData = {
      name: nameInput ? nameInput.value : '',
      mobile: mobileInput ? mobileInput.value : '',
      dob: dobInput ? dobInput.value : ''
  };

  localStorage.setItem('profileData', JSON.stringify(profileData));
  showNotification('✅ Personal information saved successfully!', 'success');
}

function saveSecuritySettings() {
  const currentPassword = document.querySelector('input[placeholder="Enter current password"]');
  const newPassword = document.querySelector('input[placeholder="Enter new password"]');
  const confirmPassword = document.querySelector('input[placeholder="Confirm new password"]');

  if (currentPassword && newPassword && confirmPassword) {
      if (newPassword.value !== confirmPassword.value) {
          showNotification('❌ New passwords do not match!', 'error');
          return;
      }

      if (newPassword.value.length < 6) {
          showNotification('❌ Password must be at least 6 characters!', 'error');
          return;
      }

      // Clear password fields
      currentPassword.value = '';
      newPassword.value = '';
      confirmPassword.value = '';

      showNotification('✅ Password updated successfully!', 'success');
  }
}

function savePreferences() {
  const language = document.querySelector('.profile-section select[value="english"]');
  const currency = document.querySelector('.profile-section select[value="inr"]');
  const emailNotifications = document.querySelector('.profile-section select[value="all"]');
  const smsNotifications = document.querySelector('.profile-section select[value="enabled"]');

  const preferences = {
      language: language ? language.value : 'english',
      currency: currency ? currency.value : 'inr',
      emailNotifications: emailNotifications ? emailNotifications.value : 'all',
      smsNotifications: smsNotifications ? smsNotifications.value : 'enabled'
  };

  localStorage.setItem('userPreferences', JSON.stringify(preferences));
  showNotification('✅ Preferences saved successfully!', 'success');
}

function enable2FA() {
  const enable2FAModal = document.createElement('div');
  enable2FAModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
  `;

  enable2FAModal.innerHTML = `
      <div style="
          background: white;
          border-radius: 15px;
          padding: 30px;
          max-width: 400px;
          width: 100%;
          text-align: center;
      ">
          <div style="
              width: 80px;
              height: 80px;
              background: #28a745;
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
              font-size: 36px;
          ">🔐</div>

          <h2 style="margin-bottom: 15px; color: #333;">Enable Two-Factor Authentication</h2>
          <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">
              Two-factor authentication adds an extra layer of security to your account. 
              You'll receive SMS codes for login verification.
          </p>

          <div style="margin-bottom: 25px;">
              <input type="tel" placeholder="Enter your mobile number" style="
                  width: 100%;
                  padding: 12px;
                  border: 2px solid #e9ecef;
                  border-radius: 8px;
                  margin-bottom: 15px;
              ">
              <button onclick="send2FACode()" style="
                  width: 100%;
                  background: #28a745;
                  color: white;
                  border: none;
                  padding: 12px;
                  border-radius: 8px;
                  font-weight: 600;
                  cursor: pointer;
                  margin-bottom: 15px;
              ">Send Verification Code</button>
          </div>

          <div style="display: flex; gap: 10px;">
              <button onclick="close2FAModal()" style="
                  flex: 1;
                  background: #6c757d;
                  color: white;
                  border: none;
                  padding: 12px;
                  border-radius: 8px;
                  cursor: pointer;
              ">Cancel</button>
          </div>
      </div>
  `;

  document.body.appendChild(enable2FAModal);

  window.close2FAModal = function() {
      if (enable2FAModal && enable2FAModal.parentElement) {
          document.body.removeChild(enable2FAModal);
      }
  };

  window.send2FACode = function() {
      const mobile = enable2FAModal.querySelector('input[type="tel"]').value;
      if (mobile && mobile.length >= 10) {
          showNotification('📱 Verification code sent to your mobile!', 'success');
          close2FAModal();

          // Update 2FA status in UI
          const unverifiedBadge = document.querySelector('.unverified-badge');
          if (unverifiedBadge) {
              unverifiedBadge.className = 'verification-badge';
              unverifiedBadge.innerHTML = '<i class="fas fa-check-circle"></i> Enabled';
          }
      } else {
          showNotification('❌ Please enter a valid mobile number!', 'error');
      }
  };
}
function loadUserPaymentMethods() {
  const paymentMethodsList = document.getElementById('paymentMethodsList');
  if (!paymentMethodsList) return;

  const savedMethods = JSON.parse(localStorage.getItem('paymentMethods') || '[]');

  if (savedMethods.length === 0) {
      paymentMethodsList.innerHTML = `
          <div style="text-align: center; padding: 20px; color: #666;">
              <i class="fas fa-credit-card" style="font-size: 48px; margin-bottom: 15px;"></i>
              <p>No payment methods added yet. Click "Add New Payment Method" to get started!</p>
          </div>
      `;
  } else {
      paymentMethodsList.innerHTML = savedMethods.map(method => `
          <div class="payment-method-card">
              <div class="payment-method-info">
                  <div class="payment-method-icon">
                      <i class="${method.icon}"></i>
                  </div>
                  <div class="payment-method-details">
                      <h4>${method.type}</h4>
                      <p>${method.details}</p>
                  </div>
              </div>
              <button onclick="removePaymentMethod(${method.id})" style="
                  background: #dc3545;
                  color: white;
                  border: none;
                  padding: 8px 12px;
                  border-radius: 5px;
                  cursor: pointer;
                  font-size: 12px;
              ">Remove</button>
          </div>
      `).join('');
  }

  window.removePaymentMethod = function(methodId) {
      const savedMethods = JSON.parse(localStorage.getItem('paymentMethods') || '[]');
      const updatedMethods = savedMethods.filter(method => method.id !== methodId);
      localStorage.setItem('paymentMethods', JSON.stringify(updatedMethods));
      loadUserPaymentMethods();
      showNotification('✅ Payment method removed successfully!', 'success');
  };
}
function getPackageIconAndType(packageName, price) {
  const name = packageName.toLowerCase();
  if (name.includes('monetization')) {
      return {
          icon: 'fas fa-dollar-sign',
          iconClass: 'monetization',
          badge: { type: 'premium', text: 'Premium' }
      };
  }
  if (name.includes('blue tick') || name.includes('verification')) {
      return {
          icon: 'fas fa-check-circle',
          iconClass: 'verification',
          badge: { type: 'premium', text: 'Verified' }
      };
  }
  if (name.includes('followers') || name.includes('subscribe')) {
      return {
          icon: 'fas fa-users',
          iconClass: 'followers',
          badge: price < 300 ? { type: 'popular', text: 'Popular' } : null
      };
  }
  if (name.includes('like')) {
      return {
          icon: 'fas fa-heart',
          iconClass: 'likes',
          badge: price < 50 ? { type: 'recommended', text: 'Best Deal' } : null
      };
  }
  if (name.includes('view') || name.includes('impression')) {
      return {
          icon: 'fas fa-eye',
          iconClass: 'views',
          badge: null
      };
  }
  if (name.includes('comment') || name.includes('reply')) {
      return {
          icon: 'fas fa-comments',
          iconClass: 'engagement',
          badge: null
      };
  }
  if (name.includes('share') || name.includes('repost') || name.includes('retweet')) {
      return {
          icon: 'fas fa-share-alt',
          iconClass: 'growth',
          badge: null
      };
  }
  if (name.includes('watchtime') || name.includes('watch time')) {
      return {
          icon: 'fas fa-clock',
          iconClass: 'analytics',
          badge: { type: 'premium', text: 'For Monetization' }
      };
  }
  if (name.includes('member') || name.includes('connection')) {
      return {
          icon: 'fas fa-user-plus',
          iconClass: 'growth',
          badge: null
      };
  }
  if (name.includes('vote') || name.includes('poll')) {
      return {
          icon: 'fas fa-poll',
          iconClass: 'engagement',
          badge: null
      };
  }
  if (name.includes('save')) {
      return {
          icon: 'fas fa-bookmark',
          iconClass: 'engagement',
          badge: null
      };
  }
  if (name.includes('live')) {
      return {
          icon: 'fas fa-broadcast-tower',
          iconClass: 'premium',
          badge: { type: 'popular', text: 'Live' }
      };
  }
  if (name.includes('traffic') || name.includes('visitor')) {
      return {
          icon: 'fas fa-chart-line',
          iconClass: 'analytics',
          badge: null
      };
  }
  if (name.includes('review') || name.includes('rating')) {
      return {
          icon: 'fas fa-star',
          iconClass: 'premium',
          badge: { type: 'recommended', text: '5 Star' }
      };
  }
  if (name.includes('seo') || name.includes('backlink')) {
      return {
          icon: 'fas fa-search',
          iconClass: 'growth',
          badge: null
      };
  }
  return {
      icon: 'fas fa-rocket',
      iconClass: 'growth',
      badge: price > 10000 ? { type: 'premium', text: 'Premium' } : null
  };
}