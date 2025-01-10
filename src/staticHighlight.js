import 'prismjs';
function svgCopy({
    width = "24px",
    height = "24px",
    fill = "none",
    pathFill = "#080341",
} = {}) {
    // Create the SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", fill);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    // Create the inner <g> elements
    const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g1.setAttribute("id", "SVGRepo_bgCarrier");
    g1.setAttribute("stroke-width", "0");

    const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g2.setAttribute("id", "SVGRepo_tracerCarrier");
    g2.setAttribute("stroke-linecap", "round");
    g2.setAttribute("stroke-linejoin", "round");

    const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g3.setAttribute("id", "SVGRepo_iconCarrier");

    // Create the <path> element
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("d", "M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z");
    path.setAttribute("fill", pathFill);

    // Append the path to the third <g> element
    g3.appendChild(path);

    // Append the <g> elements to the SVG
    svg.appendChild(g1);
    svg.appendChild(g2);
    svg.appendChild(g3);

    return svg;
}


class Static {
    constructor() {
        this.preElement = document.createElement("pre");
        this.codeElement = document.createElement("code");
        this.codeElement.classList.add("language-js");
        this.preElement.appendChild(this.codeElement);
        this.container = document.createElement("div");
        this.header = document.createElement("div");
        this.textElement = document.createElement("p");
        this.container.append(
            this.header,
            this.preElement
        );
        this.copyBtn = document.createElement("button");
        this.copyBtn.title = "Copy";
        this.copyElement = svgCopy({fill: "#fff", pathFill: "#fff"});
        this.copyBtn.appendChild(this.copyElement);
        this.header.append(this.textElement, this.copyBtn);

        this.setStyle(this.copyBtn, 
            `
                all: unset;
                cursor: pointer;
                border: 0.1px solid #444;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2px;
                border-radius: 5px;
            `
        )
        this.setStyle(this.textElement, 
            `
                font-size: 1rem;
                font-weight: bold;
                color: #fff;
                font-family: monospace;
            `
        )

        setTimeout(() => {
            this.setStyle(this.header,
                `
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    border-bottom: 1.5px solid #44f;
                `
            )
        })
        this.folder = "Prism-Themes/";

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
        if (!element) {
            console.error("Element to get the color from not found.");
            return;
        };
        const style = getComputedStyle(element);
        const color = style.backgroundColor;
        console.log(color);
        return color;
    }

    codeBlock(code) {
        if (code) {
            this.codeElement.textContent = code;
        } else {
            console.error("Code text is not found.");
        }
    }

    setLang(lang) {
        if (!lang) {
            console.error("Language is not selected. Default language is js.");
            return;
        }
        this.codeElement.classList.remove("language-js");
        this.codeElement.classList.add(`language-${lang}`);
    }

    setTheme(theme = `${this.folder}prism-atom-dark.css`) {
        const existingLink = document.querySelector(`#prism-theme`);
        if (existingLink) {
            existingLink.href = theme.contains(this.folder) ? theme : this.folder + theme;
        } else {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.id = "prism-theme";
            link.href = this.folder + theme;
            document.head.appendChild(link);
            setTimeout(() => {
                this.setBackground(this.container, `${this.getColor(this.preElement)}`);
            }, 310)
        }
    }

    setBackground(element, color) {
        if (!element) {
            console.error("You can't set the background because the element is not found.");
            return;
        } else if (!color) {
            console.error("You can't set the background because no color is selected.");
            return;
        }

        element.style.backgroundColor = color;
    }

    setStyle(element, styles) {
        if (!element) {
            console.error("You can't set the styles because the element is not found.");
            return;
        } else if (!styles) {
            console.error("You can't set the styles because no styles is written.");
            return;
        }
        element.style.cssText += styles;
    }

    setTitle(title) {
        if (!title) {
            console.error("Title is not found.");
            return;
        }
        this.textElement.textContent = title;
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
staticHighlight.codeBlock(
    `
function svgCopy({
  width = "24px",
  height = "24px",
  fill = "none",
  pathFill = "#080341",
} = {}) {
  // Create the SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", fill);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  // Create the inner <g> elements
  const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g1.setAttribute("id", "SVGRepo_bgCarrier");
  g1.setAttribute("stroke-width", "0");

  const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g2.setAttribute("id", "SVGRepo_tracerCarrier");
  g2.setAttribute("stroke-linecap", "round");
  g2.setAttribute("stroke-linejoin", "round");

  const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g3.setAttribute("id", "SVGRepo_iconCarrier");

  // Create the <path> element
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("clip-rule", "evenodd");
  path.setAttribute("d", "M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z");
  path.setAttribute("fill", pathFill);

  // Append the path to the third <g> element
  g3.appendChild(path);

  // Append the <g> elements to the SVG
  svg.appendChild(g1);
  svg.appendChild(g2);
  svg.appendChild(g3);

  return svg;
}

    `
);
staticHighlight.setLang('js');
staticHighlight.setTheme("prism-atom-dark.css");
staticHighlight.insert(document.body);
staticHighlight.setTitle("Javascript");
staticHighlight.setBackground(staticHighlight.getPreElement(), "#111b3c");

staticHighlight.setNumberLine("true");