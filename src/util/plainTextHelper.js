import { Node } from "slate";
export const plainTextHelper = {
  serialize(value) {
    return value.map((n) => Node.string(n)).join("\n");
  },
  deserialize(string) {
    return string.split("\n").map((line) => {
      return {
        children: [{ text: line }],
      };
    });
  },
};
