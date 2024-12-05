class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <script src="bootstrap-5.0.1-dist/js/bootstrap.bundle.js"></script>
        <link rel="stylesheet" href="style.css">
        
        <div class="footer">
          <div class="flex-container">
            <div class="flex-item-left">
              <h3> Address </h3>
              <p class="footer-text">
                3800 E Stevens Way NE, Seattle, WA 98195
                <br>
                lcl@seattlecommunitynetwork.org
              </p>
              <a href="https://www.instagram.com/seattlecommnet/"><img class="logo" src="assets/IG_icon_circle.png"
                  alt="Instagram logo"></a>
              <a href="https://twitter.com/SeattleCommNet"><img class="logo" src="assets/twitter_icon_circle.png"
                  alt="twitter logo"></a>
              <a href="https://www.facebook.com/SeattleCommNet"><img class="logo" src="assets/facebook_icon_circle.png"
                  alt="Facebook logo"></a>
              <br><br>
            </div>

            <div class="flex-item-left">
              <h3> Mission </h3>
              <p class="footer-text">
                To facilitate community focused technology development and
                research in support of low-income, marginalized populations
                and groups.
              </p>
            </div>

            <div class="flex-item-left">
              <button onclick="location.href='https://discord.gg/gn4DKF83bP'" id="subscribe-button">
                &nbsp; Join our Discord server &nbsp;
              </button>
              <br><br>
              <button
                onclick="location.href='https://groups.google.com/a/seattlecommunitynetwork.org/g/local-connectivity-lab/'"
                id="subscribe-button">
                Subscribe to Mailing List
              </button>
            </div>
          </div>
        </div>
        
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  