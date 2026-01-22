(function () {
    const API_URL = 'https://coaching-extraction-peninsula-medal.trycloudflare.com';

    // Use window.metizShop if available (injected by liquid), otherwise fallback to Shopify.shop
    const shop = window.metizShop || Shopify.shop;
    const container = document.getElementById('metiz-cookie-banner-container');

    if (!shop || !container) return;

    function renderButtons(type) {
        if (type === 'informative') {
            return `<button class="metiz-btn metiz-btn-outline" id="metiz-dismiss">GOT IT</button>`;
        }
        if (type === 'opt-out') { // Decline only
            return `<button class="metiz-btn metiz-btn-outline" id="metiz-decline">Decline</button>`;
        }
        if (type === 'opt-in') { // Accept only
            return `<button class="metiz-btn metiz-btn-primary" id="metiz-accept">Accept</button>`;
        }
        if (type === 'opt-in-out') {
            return `
              <div class="metiz-btn-group">
                  <button class="metiz-btn metiz-btn-primary" id="metiz-accept">Accept</button>
                  <button class="metiz-btn metiz-btn-outline" id="metiz-decline">Decline</button>
              </div>`;
        }
        if (type === 'preferences') {
            return `
              <div class="metiz-btn-group">
                  <button class="metiz-btn metiz-btn-black" id="metiz-accept-all">Accept all</button>
                  <button class="metiz-btn metiz-btn-outline-gray" id="metiz-preferences">Preferences</button>
              </div>`;
        }
        return '';
    }

    function renderBanner(type) {
        const buttonsHtml = renderButtons(type);

        const html = `
      <div class="metiz-overlay">
        <div class="metiz-popup">
            <button class="metiz-close-btn" id="metiz-close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div class="metiz-content">
                <div class="metiz-icon-wrapper">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="metiz-cookie-icon"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-5 5-5 5-5z"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
                </div>
                
                <p class="metiz-text">
                    This website uses cookies to ensure you get the best experience.<br>
                    <a href="#" class="metiz-link">Learn more</a>
                </p>

                <div class="metiz-actions">
                    ${buttonsHtml}
                </div>
            </div>
        </div>
      </div>
    `;

        container.innerHTML = html;

        // Event Listeners
        const closeBtn = document.getElementById('metiz-close');
        if (closeBtn) closeBtn.onclick = () => container.style.display = 'none';

        const dismissBtn = document.getElementById('metiz-dismiss');
        if (dismissBtn) dismissBtn.onclick = () => container.style.display = 'none';

        // Placeholder actions for other buttons
        ['metiz-decline', 'metiz-accept', 'metiz-accept-all', 'metiz-preferences'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.onclick = () => {
                console.log(`Metiz Banner: ${id} clicked`);
                container.style.display = 'none';
                // Here you would implement actual cookie logic
            };
        });
    }

    // Fetch settings
    fetch(`${API_URL}/api/banner?shop=${shop}`)
        .then(res => res.json())
        .then(data => {
            console.log('Metiz Banner Settings:', data);
            if (data && data.bannerType) {
                renderBanner(data.bannerType);
            }
        })
        .catch(err => console.error('Error fetching Metiz banner settings:', err));

})();
