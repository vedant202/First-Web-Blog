class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <div class="footer">
          <div class="text-center">
            <small
              >Copyright © 2022 First Web Blog, Inc. All Rights Reserved.</small
            >
          </div>
        </div>
      </footer>
        `
    }
}

customElements.define('my-footer',MyFooter);

