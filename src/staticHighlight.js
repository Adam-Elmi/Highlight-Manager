import 'prismjs';
import 'prismjs/themes/prism.css';

class Static {
    constructor() {
        this.preElement = document.createElement("pre");
        this.codeElement = document.createElement("code");
        this.preElement.appendChild(this.codeElement);
        this.container = document.createElement("div");
        this.header = document.createElement("div");
        this.container.append(
            this.header,
            this.preElement
        )
    }

    codeBlock(code) {
        this.codeElement.textContent = code;
    }

    setLang(lang) {
        this.codeElement.classList.add(`language-${lang}`);
    }

    insert(parent) {
        parent.appendChild(this.container);
        Prism.highlightElement(this.codeElement);
    }
    setTheme(theme) {
        
    }
}

// Create a single instance of Static
const staticHighlight = new Static();
staticHighlight.codeBlock('console.log("Hello Adam");');
staticHighlight.setLang('js');
staticHighlight.insert(document.body);
