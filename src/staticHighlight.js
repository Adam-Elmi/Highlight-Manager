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
        return this.preElement;
    }

    getCodeElement() {
        return this.codeElement;
    }

    getContainer() {
        return this.container;
    }

    getHeader() {
        return this.header;
    }

    getColor(element) {
        const style = getComputedStyle(element);
        const color = style.backgroundColor;
        console.log(color);
        return color;
    }

    codeBlock(code) {
        this.codeElement.textContent = code;
    }

    
    
    setLang(lang) {
        this.codeElement.classList.add(`language-${lang}`);
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

    setBackground(element, color) {
        element.style.backgroundColor = color;
    }

    setStyle(element, styles) {
        element.style.cssText = styles;
    }

    setTitle(title) {
        this.header.textContent = title;
    }
    insert(parent) {
        parent.appendChild(this.container);
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
    
    
    
}

const staticHighlight = new Static();
staticHighlight.codeBlock(
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom CodeMirror Theme with Arrays Highlighting</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.css">
    <link rel="stylesheet" href="custom-theme.css"> <!-- Your custom theme -->
    <style>
        .CodeMirror {
            height: 300px;
        }
    </style>
</head>
<body>
    <div id="editor"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/javascript/javascript.min.js"></script>
    <script>
        const editor = CodeMirror(document.getElementById('editor'), {
            mode: 'javascript',
            theme: 'custom-theme', // Apply the custom theme
            lineNumbers: true
        });
    </script> // I want to remove this star space
</body>
</html>

    `
);
staticHighlight.setLang('html');
staticHighlight.setTheme('https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-tomorrow.min.css');
staticHighlight.insert(document.body);
staticHighlight.setTitle("Javascript");
staticHighlight.setBackground(staticHighlight.getChilden()[2], "#111b3c");

const header = staticHighlight.getHeader();

staticHighlight.setStyle(header, `
    padding: 10px;
    border-bottom: 1.5px solid #44f;
    color: #fff;
    font-family: monospace;
`);

const container = staticHighlight.getContainer();

staticHighlight.setStyle(container, `
    // width: 500px;
`);

staticHighlight.setNumberLine("true");