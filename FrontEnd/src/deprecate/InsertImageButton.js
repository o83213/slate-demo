// import { Button, Icon } from "../components/BaseComponents";
// import { useSlateStatic } from "slate-react";
// import { isUrl } from "../util/isUrl";
// import { Editor, Element, Transforms } from "slate";
// import React from "react";
// const imageExtensions = ["jpg", "jpeg", "png"];
// const InsertImageButton = () => {
//   const editor = useSlateStatic();
//   return (
//     <Button
//       onMouseDown={(event: React.MouseEvent) => {
//         event.preventDefault();
//         const url = window.prompt("Enter the URL of the image:");
//         if (url && !isImageUrl(url)) {
//           alert("URL is not an image");
//           return;
//         }
//         url && insertImage(editor, url);
//       }}
//     >
//       <Icon>image</Icon>
//     </Button>
//   );
// };

// const isImageUrl = (url: string) => {
//   if (!url) return false;
//   if (!isUrl(url)) return false;
//   const ext = new URL(url).pathname.split(".").pop()!;
//   return imageExtensions.includes(ext);
// };

// const insertImage = (editor: Editor, url: string) => {
//   const text = { text: "" };
//   const image: Element = { type: "image", url, children: [text] };
//   Transforms.insertNodes(editor, image);
// };

// const withImages = (editor: Editor) => {
//   const { insertData, isVoid } = editor;

//   editor.isVoid = (element) => {
//     return element.type === "image" ? true : isVoid(element);
//   };

//   editor.insertData = (data) => {
//     const text = data.getData("text/plain");
//     const { files } = data as any;
//     console.log("data", data);
//     if (files && files.length > 0) {
//       for (const file of files) {
//         const reader = new FileReader();
//         const [mime] = file.type.split("/");

//         if (mime === "image") {
//           reader.addEventListener("load", () => {
//             const url = reader.result as string;
//             insertImage(editor, url);
//           });

//           reader.readAsDataURL(file);
//         }
//       }
//     } else if (isImageUrl(text)) {
//       insertImage(editor, text);
//     } else {
//       insertData(data);
//     }
//   };

//   return editor;
// };

// export { InsertImageButton, withImages, insertImage };
