class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav class="navbar">
        <div class="nav-container">
        <a href="/"><div class="logo">First Web Blog</div></a>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
          </ul>
          <div class="search-field">
          <input type="text" id="search-input" class="search-input">
          <button type="button" id="search-button" class="search-button"></button>
        </div> 
        <div class="button">
          <a href="/login"><button type="button"  class="authBtn" id="loginBtn">Log in</button></a>
          <a href="/signup"><button type="button" class="authBtn" id="submitBtn">Sign
          up</button></a>
      </div>
        </div>
      </nav>
    </header>
        `
    }
}

customElements.define('my-header',MyHeader)

