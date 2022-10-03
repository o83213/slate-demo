import {
  Text,
  createEditor,
  Node,
  Element,
  Editor,
  Descendant,
  BaseEditor,
} from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

export type QuoteElement = {
  type: "quote";
  align?: string;
  children: Descendant[];
};

export type NumberedListElement = {
  type: "numbered-list";
  align?: string;
  children: Descendant[];
};
export type BulletedListElement = {
  type: "bulleted-list";
  align?: string;
  children: Descendant[];
};

export type HeadingElement = {
  type: "heading-one";
  align?: string;
  children: Descendant[];
};

export type HeadingTwoElement = {
  type: "heading-two";
  align?: string;
  children: Descendant[];
};
export type ListItemElement = {
  type: "list-item";
  children: Descendant[];
};

export type ImageElement = {
  type: "image";
  url: string;
  children: EmptyText[];
};
export type VideoElement = {
  type: "video";
  url: string;
  children: EmptyText[];
};
export type LinkElement = { type: "link"; url: string; children: Descendant[] };
export type EmbedElement = {
  type: "embed";
  url: string;
  children: Descendant[];
};

export type ParagraphElement = {
  type: "paragraph";
  align?: string;
  children: Descendant[];
};

export type TableElement = { type: "table"; children: TableRow[] };

export type TableCellElement = { type: "table-cell"; children: CustomText[] };

export type TableRowElement = { type: "table-row"; children: TableCell[] };

export type TitleElement = { type: "title"; children: Descendant[] };

type CustomElement =
  | QuoteElement
  | BulletedListElement
  | NumberedListElement
  | ListItemElement
  | HeadingElement
  | HeadingTwoElement
  | ImageElement
  | LinkElement
  | VideoElement
  | ParagraphElement
  | TableElement
  | TableRowElement
  | TableCellElement
  | TitleElement
  | EmbedElement;

export interface CustomText {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: string;
  text: string;
}

export interface EmptyText {
  text: string;
}

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText & EmptyText;
  }
}
