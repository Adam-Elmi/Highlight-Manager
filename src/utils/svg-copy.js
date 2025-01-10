export default function svgCopy({
    width = "24px",
    height = "24px",
    fill = "none",
    pathFill = "#080341",
  }) {
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
  