import { css } from "@emotion/css";
import ImageElement from "./ImageElement";
import EmbedElement from "./EmbedElement";
import VideoElement from "./VideoElement";
import TableElement from "./TableElement";
declare const instgrm: any;
const CustomElement = (props: any) => {
  const { attributes, children, element } = props;
  const style = { textAlign: element.align };
  switch (element.type) {
    case "quote":
      return (
        <q
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
        </q>
      );
    case "link":
      return (
        <a style={style} {...attributes} href={element.url}>
          {children}
        </a>
      );
    case "image":
      return <ImageElement {...props} />;
    case "video":
      return <VideoElement {...props} />;
    case "embed":
      setTimeout(() => {
        instgrm.Embeds.process();
      }, 100);
      return <EmbedElement {...props} />;
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
    case "table":
      return <TableElement {...props} />;
    case "table-row":
      return <tr {...attributes}>{children}</tr>;
    case "table-cell":
      return <td {...attributes}>{children}</td>;
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
export default CustomElement;
