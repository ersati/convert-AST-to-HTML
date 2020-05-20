import { data } from "./data.js";

// console.log(data.ast.tagName, data.ast.attributes, data.ast.children);
// console.log(typeof data);
const el = document.querySelector(".container");
let name;

const createAttribute = (attributes) => {
  let result = "";
  attributes.forEach((obj) => (result += ` ${obj.name}='${obj.value}`));
  return result;
};

const createChildren = (children) => {
  let text = "";
  for (const key in children) {
    if (children[key].nodeType == "element") text += createTag(children[key]);

    if (children[key].nodeType === "text") text += children[key].value;
  }
  return text;
};

const createTag = (object) => {
  let tag = "";
  let attribute = createAttribute(object.attributes);
  let children = createChildren(object.children);
  tag += `<${object.tagName} ${attribute}>${children}</${object.tagName}>`;
  return tag;
};

el.innerHTML = createTag(data.ast);

// el.innerHTML = convertAstToHtmlString(data.ast);
// console.log(name);
// console.log(data.ast.children[1].children[0].children[0].nodeType);

// function convertAstToHtmlString(astObject) {
//   for (const attributes in astObject) {
//     if (attributes == "tagName") {
//       name = `< ${astObject[attributes]}`;
//       // console.log(astObject[attributes]);
//       console.log(name);
//     }
//     if (attributes == "attributes") {
//       for (const i of astObject[attributes]) {
//         name += ` ${i.name}='${i.value}'>`;
//       }
//     }
//   }

//   const { tagName } = astObject;
//   // console.log(astObject);
//   const string = `<${tagName} >hello</${tagName}>`;

//   return string;
