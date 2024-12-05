class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <script src="bootstrap-5.0.1-dist/js/bootstrap.bundle.js"></script>
        <link rel="stylesheet" href="style.css">
        
        <header>
          <a href="index.html">
            <img class="img-logo" src="assets/logo.png" alt="Local Connectivity Lab Logo">
          </a>
          <h1>
            <a id="landing-link" href="index.html"> Seattle Community Network </a>
          </h1>
        </header>
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="aboutUs.html">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://docs.seattlecommunitynetwork.org/">Docs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="ourSites.html">Get Connected</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://coverage.seattlecommunitynetwork.org/">Map</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://docs.seattlecommunitynetwork.org/community/space/">Visit Our Space</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="donate.html">Donate</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://seattlecommunitynetwork.square.site/">Merch!</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
      `;
    }
  }
  
  customElements.define('header-component', Header);
  