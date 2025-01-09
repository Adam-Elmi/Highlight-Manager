import 'prismjs';

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
        );
    }

    getChilden() {
        return [
            this.container,
            this.header,
            this.preElement,
            this.codeElement
        ]
    }

    getPreElement() {

    }

    getCodeElement() {
        
    }

    getColor(element) {
        const style = getComputedStyle(element);
        const color = style.backgroundColor;
        console.log(color);
        return color;
    }

    setBackground(element, color) {
        element.style.backgroundColor = color;
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
        const existingLink = document.querySelector(`#prism-theme`);
        if (existingLink) {
            existingLink.href = theme;
        } else {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.id = "prism-theme";
            link.href = theme;
            document.head.appendChild(link);
            setTimeout(() => {
                this.setBackground(this.container, `${this.getColor(this.preElement)}`);
            }, 0);
        }
    }
    setTitle(title) {
        this.header.textContent = title;
    }
}

const staticHighlight = new Static();
staticHighlight.codeBlock('console.log("Hello Adam");');
staticHighlight.setLang('js');
staticHighlight.setTheme('https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-tomorrow.min.css');
staticHighlight.insert(document.body);
staticHighlight.setTitle("Javascript");
staticHighlight.setBackground(staticHighlight.getChilden()[2], "#111b3c");
