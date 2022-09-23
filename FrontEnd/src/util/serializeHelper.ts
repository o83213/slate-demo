import { Node, Descendant, Text } from "slate";
import escapeHtml from "escape-html";
import { jsx } from "slate-hyperscript";

// serialize function
// TODO: add bold, italic and bold
export const serialize = (node: Descendant) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    let htmlString = `<span>${string}</span>`;
    if (node.bold) {
      htmlString = `<strong>${htmlString}</strong>`;
    }
    if (node.code) {
      htmlString = `<code>${htmlString}</code>`;
    }
    if (node.italic) {
      htmlString = `<em>${htmlString}</em>`;
    }
    if (node.underline) {
      htmlString = `<u>${htmlString}</u>`;
    }
    return htmlString;
  }
  const children: string = node.children.map((n) => serialize(n)).join("");
  switch (node.type) {
    case "heading-one":
      return `<h1>${children}</h1>`;
    case "heading-two":
      return `<h2>${children}</h2>`;
    case "block-quote":
      return `<blockquote>${children}</blockquote>`;
    // case 'link':
    //   return `<p>${children}</p>`
    default:
      return `<p>${children}</p>`;
  }
};

// deserialize function
export const deserialize = (el: any, markAttributes: any = {}) => {
  const ElementType = 1;
  const TextType = 3;
  // if (el.nodeType === Node.TEXT_NODE) {
  if (el.nodeType === TextType) {
    return jsx("text", markAttributes, el.textContent);
    // } else if (el.nodeType !== Node.ELEMENT_NODE) {
  } else if (el.nodeType !== ElementType) {
    return null;
  }

  const nodeAttributes = { ...markAttributes };

  // define attributes for text nodes
  switch (el.nodeName) {
    case "strong":
      nodeAttributes.bold = true;
  }

  const children: any = Array.from(el.childNodes)
    .map((node) => deserialize(node, nodeAttributes))
    .flat();

  if (children.length === 0) {
    children.push(jsx("text", nodeAttributes, ""));
  }

  switch (el.nodeName) {
    case "BODY":
      return jsx("fragment", {}, children);
    case "BR":
      return "\n";
    case "BLOCKQUOTE":
      return jsx("element", { type: "blockquote" }, children);
    case "P":
      return jsx("element", { type: "paragraph" }, children);
    case "A":
      return jsx(
        "element",
        { type: "link", url: el.getAttribute("href") },
        children
      );
    default:
      return children;
  }
};
