import { css } from "@emotion/css";
import CustomImageElement from "./CustomImageElement";
import CustomEmbedElement from "./CustomEmbedElement";
const CustomElement = (props: any) => {
  const { attributes, children, element } = props;
  console.log("element", element);
  const style = { textAlign: element.align };
  console.log("type", element.type);
  switch (element.type) {
    case "block-quote":
      console.log(element.type);
      return (
        <blockquote
          className={css`
            border-left: 2px solid #ddd;
            margin-left: 0;
            margin-right: 0;
            padding-left: 10px;
            color: #aaa;
            font-style: italic;
          `}
          style={style}
          {...attributes}
        >
          {children}
        </blockquote>
      );
    case "link":
      console.log("link: ", attributes);
      console.log("element: ", element);
      return (
        <a style={style} {...attributes} href={element.url}>
          {children}
        </a>
      );
    case "image":
      return <CustomImageElement {...props} />;
    case "embed":
      console.log("embed");
      return <CustomEmbedElement {...props} />;
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
export default CustomElement;
