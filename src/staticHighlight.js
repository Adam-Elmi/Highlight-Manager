import 'prismjs';

class Static {
    constructor() {
        this.preElement = document.createElement("pre");
        this.codeElement = document.createElement("code");
        this.codeElement.classList.add("language-js");
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

    getElement({ name, element }) {
        if (!element) console.error(`${name} is not found.`);
        return element;
    }

    getContainer() {
        return this.getElement({ name: "Container Element", element: this.container });
    }

    getHeader() {
        return this.getElement({ name: "Header Element", element: this.header });
    }

    getPreElement() {
        return this.getElement({ name: "Pre Element", element: this.preElement });
    }

    getCodeElement() {
        return this.getElement({ name: "Code Element", element: this.codeElement });
    }


    getColor(element) {
        if(!element) {
            console.error("Element to get the color from not found.");
            return;
        };
        const style = getComputedStyle(element);
        const color = style.backgroundColor;
        console.log(color);
        return color;
    }

    codeBlock(code) {
        if(code) {
            this.codeElement.textContent = code;
        } else {
            console.error("Code text is not found.");
        }
    }

    setLang(lang) {
        if(!lang) {
            console.error("Language is not selected. Default language is js.");
            return;
        }
        this.codeElement.classList.remove("language-js");
        this.codeElement.classList.add(`language-${lang}`);
    }

    setTheme(theme = "Prism-Themes/prism-atom-dark.css") {
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
            }, 310)
        }
    }

    setBackground(element, color) {
        if(!element) {
            console.error("You can't set the background because the element is not found.");
            return;
        } else if(!color) {
            console.error("You can't set the background because no color is selected.");
            return;
        }

        element.style.backgroundColor = color;
    }

    setStyle(element, styles) {
        if(!element) {
            console.error("You can't set the styles because the element is not found.");
            return;
        } else if(!styles) {
            console.error("You can't set the styles because no styles is written.");
            return;
        }
        element.style.cssText = styles;
    }

    setTitle(title) {
        if(!title) {
            console.error("Title is not found.");
            return;
        }
        this.header.textContent = title;
    }
    insert(parent) {
        setTimeout(() => {
            parent.appendChild(this.container);
        }, 300)
        this.preElement.classList.add("line-numbers");
        Prism.highlightElement(this.codeElement);

        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-numbers/prism-line-numbers.min.js";
        script.onload = () => {
            Prism.highlightElement(this.codeElement);
        };
        document.head.appendChild(script);
    }

    setNumberLine(option) {
        const cssHref = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-numbers/prism-line-numbers.min.css";
        const existingLink = document.querySelector(`#prism-line-number`);

        if (option === "true") {
            if (!existingLink) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.id = "prism-line-number";
                link.href = cssHref;
                document.head.appendChild(link);
            }
        }
    }

    wrap(operation) {
        setTimeout(() => {
            operation();
        }, 310)
    }

}

const staticHighlight = new Static();
staticHighlight.codeBlock("console.log('Hello Adam');");
staticHighlight.setLang('js');
staticHighlight.setTheme("Prism-Themes/prism-atom-dark.css");
staticHighlight.insert(document.body);
staticHighlight.setTitle("Javascript");
staticHighlight.setBackground(staticHighlight.getPreElement(), "#111b3c");

const header = staticHighlight.getHeader();

staticHighlight.setStyle(header, `
    padding: 10px;
    border-bottom: 1.5px solid #44f;
    color: #fff;
    font-family: monospace;
`);

const container = staticHighlight.getContainer();

staticHighlight.setStyle(container, `
    width: 500px;
    border-radius: 10px;
    overflow: hidden;
`);

staticHighlight.setNumberLine("true");

document.querySelector(".con").appendChild(container);