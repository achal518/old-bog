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
        searchService: "Search Service",
        selectService: "Select Service", 
        selectPackage: "Select Package",
        placeOrder: "PLACE ORDER"
    }
};
let selectedService = '';
let selectedPackage = null;
let orderHistory = [];
let currentOrder = null;
let currentBalance = 0.00;
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
    updateBalanceDisplay();
    showDashboard();
    initializeEmailJS();
    document.getElementById('hamburgerMenu')?.addEventListener('click', toggleSideNav);
    document.getElementById('closeNav')?.addEventListener('click', closeSideNav);
    document.getElementById('navOverlay')?.addEventListener('click', closeSideNav);
    document.getElementById('balanceBtn')?.addEventListener('click', () => showPage('addFundsPage'));
    document.getElementById('userAvatar')?.addEventListener('click', () => showPage('userProfilePage'));
    document.getElementById('darkModeToggle')?.addEventListener('click', toggleDarkMode);
    document.getElementById('serviceSelect')?.addEventListener('change', handleServiceChange);
    document.getElementById('packageSelect')?.addEventListener('change', handlePackageChange);
    document.getElementById('searchService')?.addEventListener('input', setupSearchFunctionality);
    document.getElementById('quantityInput')?.addEventListener('input', calculateTotal);
    document.getElementById('placeOrderBtn')?.addEventListener('click', handlePlaceOrder);
    document.getElementById('linkInput')?.addEventListener('input', validateLink);
    setupCustomDropdowns();
    setupNavigationListeners();
    loadDarkModePreference();
    setupSearchFunctionality();
    initializeAIChatListeners();
    setupProfileFunctionality();
    showWelcomePopup();
    fixScrollingIssues();
});
function fixScrollingIssues() {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    document.body.style.webkitOverflowScrolling = 'touch';
    const modals = document.querySelectorAll('.modal, .overlay, .popup');
    modals.forEach(modal => {
        if (modal.style.display !== 'none' && !modal.classList.contains('active')) {
            modal.style.display = 'none';
        }
    });
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.overflow = 'visible';
        mainContent.style.height = 'auto';
    }
    const dashboard = document.querySelector('.dashboard');
    if (dashboard) {
        dashboard.style.overflow = 'visible';
        dashboard.style.height = 'auto';
        dashboard.style.minHeight = '100vh';
    }
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.position = 'relative';
        page.style.overflow = 'visible';
    });
}
function showWelcomePopup() {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenWelcome) {
        setTimeout(() => {
            const welcomeOverlay = document.getElementById('welcomePopupOverlay');
            if (welcomeOverlay) {
                welcomeOverlay.classList.add('active');
            }
        }, 1000);
    }
}
function closeWelcomePopup() {
    const welcomeOverlay = document.getElementById('welcomePopupOverlay');
    if (welcomeOverlay) {
        welcomeOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        localStorage.setItem('hasSeenWelcomePopup', 'true');
        showNotification('🎉 Welcome aboard! Ready to start your social media journey?', 'success');
        setTimeout(() => {
            const serviceSection = document.querySelector('.search-section');
            if (serviceSection) {
                serviceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 500);
    }
}
document.addEventListener('click', function(e) {
    if (e.target.id === 'welcomePopupOverlay') {
        closeWelcomePopup();
    }
});
document.addEventListener('click', function(e) {
    if (e.target.closest('.welcome-popup-container')) {
        e.stopPropagation();
    }
});
function validateLink() {
    const linkInput = document.getElementById('linkInput');
    const linkValidationMessage = document.getElementById('linkValidationMessage');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (!linkInput || !linkValidationMessage || !placeOrderBtn) return;
    const linkValue = linkInput.value.trim();
    const isValidLink = linkValue.startsWith('https://');
    if (isValidLink) {
        linkValidationMessage.textContent = 'Link is valid.';
        linkValidationMessage.className = 'validation-message success';
        placeOrderBtn.disabled = false;
    } else {
        linkValidationMessage.textContent = 'Link must start with https://';
        linkValidationMessage.className = 'validation-message error';
        placeOrderBtn.disabled = true;
    }
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
function handlePlaceOrder() {
    const linkInput = document.getElementById('linkInput');
    const quantityInput = document.getElementById('quantityInput');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const errorMessage = document.getElementById('errorMessage');
    const linkValidationMessage = document.getElementById('linkValidationMessage');
    const isServiceSelected = selectedService !== '';
    const isPackageSelected = selectedPackage !== null;
    const isLinkFilled = linkInput && linkInput.value.trim() !== '';
    const isQuantityFilled = quantityInput && quantityInput.value.trim() !== '';
    const quantity = quantityInput ? parseInt(quantityInput.value.trim()) || 0 : 0;
    const isTermsAccepted = termsCheckbox && termsCheckbox.checked;
    if (!isServiceSelected) {
        showNotification('Please select a service first!', 'error');
        return;
    }
    if (!isPackageSelected) {
        showNotification('Please select a package!', 'error');
        return;
    }
    if (!isLinkFilled) {
        showNotification('Please enter your link!', 'error');
        return;
    }
    const linkValue = linkInput.value.trim();
    if (!linkValue.startsWith('https://')) {
        showNotification('Please enter a valid link starting with https://', 'error');
        return;
    }
    if (!isQuantityFilled || quantity < 100 || quantity > 1000000) {
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
    const orderId = 'ISP' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
    const totalPrice = selectedPackage.priceType === 'per_k' ? 
        (selectedPackage.price * quantity) / 1000 : selectedPackage.price;
    const order = {
        id: orderId,
        serviceId: selectedPackage.id,
        serviceName: selectedPackage.name,
        link: linkInput.value.trim(),
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
    document.getElementById('termsCheckbox').checked = false;
    selectedService = '';
    selectedPackage = null;
    const serviceSelected = document.getElementById('serviceSelected');
    const packageSelected = document.getElementById('packageSelected');
    const priceSection = document.getElementById('priceSection');
    if (serviceSelected) {
        serviceSelected.querySelector('.selected-text').textContent = 'Select Service';
    }
    if (packageSelected) {
        packageSelected.querySelector('.selected-text').textContent = 'Select Package';
    }
    if (priceSection) {
        priceSection.classList.add('hidden');
    }
    const linkValidationMessage = document.getElementById('linkValidationMessage');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (linkValidationMessage && placeOrderBtn) {
        linkValidationMessage.textContent = '';
        linkValidationMessage.className = 'validation-message hidden';
        placeOrderBtn.disabled = false;
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
        orderHistoryContent.innerHTML = `
            <div class="order-filters">
                <select class="filter-select">
                    <option>All Orders / सभी ऑर्डर</option>
                    <option>Processing / प्रक्रिया में</option>  
                    <option>Completed / पूर्ण</option>
                    <option>Cancelled / रद्द</option>
                </select>
            </div>
            <div class="orders-list">
                ${orderHistory.map(order => {
                    return `
                    <div class="order-item">
                        <!-- Order Header -->
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
                        <!-- Order Details Grid -->
                        <div class="order-details-grid">
                            <div class="order-detail-section">
                                <div class="order-detail-label">
                                    <i class="fas fa-cog"></i> Service Details
                                </div>
                                <div class="order-detail-value service-detail-value">
                                    ID: ${order.serviceId}<br>${order.serviceName}
                                </div>
                            </div>
                            <div class="order-detail-section">
                                <div class="order-detail-label">
                                    <i class="fas fa-chart-bar"></i> Quantity Ordered
                                </div>
                                <div class="order-detail-value quantity-detail-value">
                                    ${order.quantity.toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <!-- Target Link -->
                        <div class="order-detail-section" style="margin-bottom: 15px;">
                            <div class="order-detail-label">
                                <i class="fas fa-link"></i> Target URL
                            </div>
                            <div class="order-detail-value">
                                <a href="${order.link}" target="_blank" class="link-detail-value">${order.link}</a>
                            </div>
                        </div>
                        <!-- Progress Section -->
                        <div class="progress-section">
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
                                ⚡ Estimated Start: 0-15 minutes • Speed: 100K/day
                            </div>
                        </div>
                    </div>
                `;
                }).join('')}
            </div>
        `;
    }
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
    if (refillContent && !document.querySelector('.no-orders-refill')) {
        const hasOrders = orderHistory.length > 0;
        if (!hasOrders) {
            refillContent.innerHTML = `
                <div class="empty-state no-orders-refill">
                    <div class="empty-icon">📋</div>
                    <h3>No refill history found</h3>
                    <p>You haven't placed any orders yet. Place your first order to see refill information here.</p>
                    <button class="cta-btn" onclick="showPage('dashboardHome')">
                        <i class="fas fa-plus-circle"></i> Place Your First Order
                    </button>
                    <div class="help-section">
                        <h4>Learn about Refills:</h4>
                        <ul>
                            <li>• 365-day refill guarantee on all services</li>
                            <li>• Refill provided if drop exceeds 10%</li>
                            <li>• Contact support team for refills</li>
                        </ul>
                        <button onclick="openTelegramSupport()" class="support-btn">
                            <i class="fab fa-telegram"></i> Contact Support
                        </button>
                    </div>
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
        const welcomeMessage = `
            <div class="message ai-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>Hello! 👋 I'm India Social Panel's AI Assistant. I can help you with SMM services, orders, payments and other queries.</p>
                    <div class="quick-questions">
                        <h4>Quick Questions:</h4>
                        <button class="quick-btn" onclick="askQuickQuestion('How to place an order?')">How to place an order?</button>
                        <button class="quick-btn" onclick="askQuickQuestion('What payment methods do you accept?')">Payment methods?</button>
                        <button class="quick-btn" onclick="askQuickQuestion('How to check order status?')">Order status?</button>
                        <button class="quick-btn" onclick="askQuickQuestion('What is API?')">API information?</button>
                        <button class="quick-btn" onclick="askQuickQuestion('Instagram followers price?')">Instagram pricing?</button>
                        <button class="quick-btn" onclick="askQuickQuestion('YouTube monetization cost?')">YouTube monetization?</button>
                    </div>
                </div>
            </div>
        `;
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
    messageDiv.className = `message ${sender}-message`;
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
    paymentModal.style.cssText = `
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
        padding: 10px;
        overflow-y: auto;
    `;
    paymentModal.innerHTML = `
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
                        background: #6c757d;
                        color: white;
                        border: none;
                        padding: 12px 25px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 14px;
                    ">Close</button>
                </div>
            </div>
        </div>
    `;
    window.closePaymentModal = function() {
        if (paymentModal && paymentModal.parentElement) {
            document.body.removeChild(paymentModal);
        }
        document.body.style.overflow = 'auto';
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
                        ">
                            <div style="font-size: 24px;">📱</div>
                            <span>Google Pay</span>
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
                        ">
                            <div style="font-size: 24px;">💜</div>
                            <span>PhonePe</span>
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
                        ">
                            <div style="font-size: 24px;">💙</div>
                            <span>Paytm</span>
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
                        ">
                            <div style="font-size: 24px;">📱</div>
                            <span>Any UPI App</span>
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
                        background: #6c757d;
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 14px;
                    ">Cancel</button>
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
        const upiID = 'kavita.5049-49@waicici'; // Updated with correct UPI ID
        const amount = order.price.toFixed(2);
        const note = `Payment for Order ${order.id} - India Social Panel`;
        const upiUrl = `upi://pay?pa=${upiID}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
        window.location.href = upiUrl;
        showNotification(`✅ Opening ${app.toUpperCase()}... Complete payment of ₹${amount}`, 'success');
        setTimeout(() => {
            clearInterval(timerInterval);
            closeUPIModal();
            showPaymentConfirmation(order);
        }, 3000);
    };
    window.cancelTransaction = function() {
        clearInterval(timerInterval);
        closeUPIModal();
        showNotification('❌ Transaction cancelled successfully!', 'info');
        showPage('dashboardHome');
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
                        font-size: 14px;
                        color: #6c757d;
                        margin-bottom: 15px;
                    ">Amount: <strong style="color: #495057; font-size: 16px;">₹${order.price.toFixed(2)}</strong></div>
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
                        <span style="color: #6c757d;">Service:</span>
                        <span style="color: #495057; font-weight: 600;">India Social Panel</span>
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
                    background: #6c757d;
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
        clearInterval(timerInterval);
        closeQRModal();
        showNotification('Transaction cancelled successfully!', 'info');
        showPage('dashboardHome');
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
    const actualUPIID = 'kavita.5049-49@waicici';
    const maskedUPIID = 'kavita.•••••••@waicici'; // Show only first part and bank
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
                        ">${actualUPIID}</div>
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
                        <li>Enter UPI ID: <strong style="color: #495057;">${actualUPIID}</strong></li>
                        <li>Enter amount: <strong style="color: #495057;">₹${order.price.toFixed(2)}</strong></li>
                        <li>Complete payment with your UPI PIN</li>
                    </ol>
                </div>
                <!-- Payment Confirmation Buttons -->
                <div style="
                    display: flex;
                    gap: 12px;
                    padding-bottom: 30px;
                ">
                    <button onclick="markUPIPaid()" style="
                        flex: 1;
                        background: #28a745;
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 14px;
                    ">Payment Done</button>
                    <button onclick="cancelUPIIDTransaction()" style="
                        flex: 1;
                        background: #6c757d;
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 14px;
                    ">Cancel</button>
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
                    displayElement.textContent = maskedUPIID;
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
        showPaymentConfirmation(order);
    };
    window.cancelUPIIDTransaction = function() {
        clearInterval(timerInterval);
        closeUPIIDModal();
        showNotification('❌ UPI payment cancelled successfully!', 'info');
        showPage('dashboardHome');
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
                        flex: 1;
                        background: #6c757d;
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 14px;
                    ">Cancel</button>
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
            showPaymentConfirmation(order);
        }, 3000);
    };
    window.cancelCardTransaction = function() {
        clearInterval(timerInterval);
        closeCardModal();
        showNotification('❌ Card payment cancelled successfully!', 'info');
        showPage('dashboardHome');
    };
    window.closeCardModal = function() {
        clearInterval(timerInterval);
        if (cardModal && cardModal.parentElement) {
            document.body.removeChild(cardModal);
        }
    };
}
function showPaymentConfirmation(order) {
    const confirmModal = document.createElement('div');
    confirmModal.id = 'paymentConfirmModal';
    confirmModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        z-index: 10002;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    confirmModal.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 30px;
            width: 100%;
            max-width: 400px;
            text-align: center;
        ">
            <div style="
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
                color: white;
                font-size: 36px;
            ">
                ✓
            </div>
            <h2 style="color: #28a745; margin-bottom: 15px;">Payment Initiated!</h2>
            <p style="color: #666; margin-bottom: 20px;">
                Your payment for Order #${order.id} has been initiated.<br>
                Amount: ₹${order.price.toFixed(2)}
            </p>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                <p style="color: #155724; font-weight: 600; margin: 0 0 10px 0;">📱 What's Next?</p>
                <ul style="text-align: left; color: #155724; font-size: 14px; margin: 0; padding-left: 20px;">
                    <li>Payment verification in progress</li>
                    <li>Order will start in 0-15 minutes</li>
                    <li>Check order status in "Order History"</li>
                    <li>Contact support if any issues</li>
                </ul>
            </div>
            <button onclick="closeConfirmModal()" style="
                background: #667eea;
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
            ">Got It!</button>
        </div>
    `;
    document.body.appendChild(confirmModal);
    window.closeConfirmModal = function() {
        if (confirmModal && confirmModal.parentElement) {
            document.body.removeChild(confirmModal);
        }
        const paymentModal = document.getElementById('paymentModal');
        if (paymentModal && paymentModal.parentElement) {
            document.body.removeChild(paymentModal);
        }
        document.body.style.overflow = 'auto';
    };
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
    const addPaymentBtn = document.getElementById('addPaymentMethodBtn');
    if (addPaymentBtn) {
        addPaymentBtn.addEventListener('click', showPaymentMethodOptions);
    }
    loadUserPaymentMethods();
}
function showPaymentMethodOptions() {
    showNotification('Payment method management coming soon!', 'info');
}
function loadUserPaymentMethods() {
    const paymentMethodsList = document.getElementById('paymentMethodsList');
    if (!paymentMethodsList) return;
    paymentMethodsList.innerHTML = `
        <div style="text-align: center; padding: 20px; color: #666;">
            <i class="fas fa-credit-card" style="font-size: 48px; margin-bottom: 15px;"></i>
            <p>Payment methods management will be available soon!</p>
        </div>
    `;
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