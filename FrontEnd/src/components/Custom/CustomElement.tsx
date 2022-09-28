import { css } from "@emotion/css";
import CustomImageElement from "./CustomImageElement";
const CustomElement = (props: any) => {
  const { attributes, children, element } = props;
  console.log(element);
  const style = { textAlign: element.align };
  console.log(element.type);
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
      console.log(element.type);
      return <CustomImageElement {...props} />;
    case "heading-one":
      console.log(element.type);
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      console.log(element.type);
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      console.log(element.type);
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "bulleted-list":
      console.log(element.type);
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "numbered-list":
      console.log(element.type);
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      console.log(element.type);
      console.log(children);
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
export default CustomElement;
