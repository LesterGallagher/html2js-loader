
exports.document_createDocumentFragment = () => {
    return document.createDocumentFragment();
}

exports.document_createElement = name => {
    return document.createElement(name);
}

exports.document_createTextNode = text => {
    return document.createTextNode(text);
}

exports.appendChild = (parent, child) => {
    parent.appendChild(child);
}

exports.setAttribute = (elem, key, value) => {
    elem.setAttribute(key, value);
}
