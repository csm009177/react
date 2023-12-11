export function createElement(type, props, ...children) {
  return { type, props, children };
}

export function component(stateData, direction) {
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i];
    const menuItem = createElement("li", {id:`${item.text}LiCont`, 
      style: `list-style: none; `},
      createElement("a", { id:`${item.text}`, href: item.hash }, item.text ) );
    menuItems.push(menuItem);
  }
  return createElement("div", {id:"stateCont" }, ...menuItems );
}

export function render(virtualDom) {
  if (typeof virtualDom === "string") {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}

export function tagMaker(tagName, type, style, ...content){
  if(typeof(tagName)==='string'&& typeof(style)==='string'){
    return `<${tagName} '${type}' style ="${style}">${content}</${tagName}>`
    } else { console.log(`${tagName} and ${style} must be string`)}
}


