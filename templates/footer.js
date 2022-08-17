class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
                <footer>
                copyright
            </footer>
        `
    }
}

customElements.define('my-footer',MyFooter);

