import { data } from "./data.js";

const dataJs = data.ast;

const createAttribute = (attributes) => {
  let result = "";
  attributes.forEach(
    (attribute) => (result += `${attribute.name}='${attribute.value}'`)
  );
  return result;
};

const createChildren = (children) => {
  let value = "";

  for (const key in children) {
    if (children[key].nodeType == "element") value += createTag(children[key]);

    if (children[key].nodeType === "text") value += children[key].value;
  }

  return value;
};

const createTag = (object) => {
  let tag = "";

  let attribute = createAttribute(object.attributes);
  let children = createChildren(object.children);

  if (object.tagName !== "img") {
    tag += `<${object.tagName} ${attribute}>${children}</${object.tagName}>`;
  } else {
    tag += `<${object.tagName} ${attribute}/>`;
  }

  return tag;
};

const exportHTML = () => {
  let htmlText = "";
  htmlText += createTag(dataJs);
  return htmlText;
};
export { exportHTML };
