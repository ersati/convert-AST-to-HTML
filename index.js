import { data } from "./data.js";

// console.log(data.ast.tagName, data.ast.attributes, data.ast.children);
console.log(typeof data);
const el = document.querySelector(".container");
function convertAstToHtmlString(astObject) {
  const { tagName } = astObject;
  console.log(astObject);
  const string = `<${tagName} >hello</${tagName}>`;
  return string;
}
el.innerHTML = convertAstToHtmlString(data.ast);
