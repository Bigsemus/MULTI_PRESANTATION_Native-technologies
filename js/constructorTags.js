import {ajaxRequests} from "./ajaxRequests.js";

export const constructorTags = ajaxRequests.sendRequestForModelSite('GET', ajaxRequests.requestUrlForModel)
    .then(model => {
        return function makeElement (tagName, classList, attrName, attrVal) {
            const tag = document.createElement(tagName);
            let textVal = '';
            let source = '';
            let alternative = '';
            tag.className = classList;
            model.forEach(el => {
                if (el[classList]) {
                    textVal = el[classList]
                }
                if (typeof el[classList] === "object") {
                    source = el[classList][0];
                    alternative = el[classList][1];
                }
            })
            if (attrName && attrVal) {
                tag.setAttribute(attrName, attrVal);
            }
            if (source) {
                tag.src = source;
            }
            if (alternative) {
                tag.alt = alternative;
            }
            if (textVal) {
                let text = document.createTextNode(textVal);
                tag.appendChild(text);
            }
            return tag;
        };
    });
