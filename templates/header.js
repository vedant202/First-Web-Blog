class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
            <div class="logo">
                <h2>Testing</h2>
            </div>
            <ul class="container-nav">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
        `
    }
}

customElements.define('my-header',MyHeader)

