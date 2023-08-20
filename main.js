import "./styles/_reset.scss";
// import './styles/test.scss';
// import './styles/banner.scss';
// import "./styles/main.scss";

/* new */
import "./styles/navbar.scss";
import "./styles/hero.scss";
import "./styles/trending.scss";
import "./styles/navbar_dropdown.scss";

/*  */

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

export const handleNavDropdown = () => {
  console.log("clicked");
  document.querySelector("#show-nav-dropdown").innerHTML = `
  <section id="nav-dropdown-container">
  <div class="platfroms-section">
    <div class="topbar">
      <h5>Platforms</h5>
      <a href="">View All</a>
    </div>

    <div class="platform-items-container">
      <div class="platform-item">
        <img src="/steam_logo.png" alt="platform-icon" />
        <h6>Steam</h6>
      </div>

      <div class="platform-item">
        <img src="/ubisoft_logo.png" alt="platform-icon" />
        <h6>Ubisoft Connect</h6>
      </div>

      <div class="platform-item">
        <img src="/ea_logo.png" alt="platform-icon" />
        <h6>EA App</h6>
      </div>

      <div class="platform-item">
        <img src="/battle_logo.png" alt="platform-icon" />
        <h6>Battle.net</h6>
      </div>

      <div class="platform-item">
        <img src="/Rockstar_Games_Logo.png" alt="platform-icon" />
        <h6>Rockstar</h6>
      </div>

      <div class="platform-item">
        <img src="/gog_logo.png" alt="platform-icon" />
        <h6>GOG.com</h6>
      </div>

      <div class="platform-item">
        <img src="/microsoft_logo.png" alt="platform-icon" />
        <h6>MicrosoftStore</h6>
      </div>

      <div class="platform-item">
        <img src="/epic_games.png" alt="platform-icon" />
        <h6>Epic</h6>
      </div>
    </div>
  </div>

  <div class="platfroms-section pt-0">
    <div class="topbar">
      <h5>Prepaid cards</h5>
      <a href="">View All</a>
    </div>

    <div class="gift-cards-container">
      <a href="">
        <div class="gift-card-item">
          <img src="/steam_logo.png" alt="gift-card" />
          <h6>Steam Gift Cards</h6>
        </div>
      </a>

      <a href="">
        <div class="gift-card-item">
          <img src="/ig_logo.jpg" alt="gift-card" />
          <h6>IG Gift Cards</h6>
        </div>
      </a>

      <a href="">
        <div class="gift-card-item">
          <img src="/blizzard.png" alt="gift-card" />
          <h6>Blizzard Gift Cards</h6>
        </div>
      </a>
    </div>
  </div>
</section>
  `;
};

const navBottomItems = document.querySelectorAll(".nav-dropdown-element");
for (const element of navBottomItems) {
  element.addEventListener("click", handleNavDropdown);
}

const search = document.querySelector(".search");
const handleSearchClick = () => {
  console.log("clicked search");
};

search.addEventListener("click", handleSearchClick);
