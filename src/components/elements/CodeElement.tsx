// Define a React component renderer for our code blocks
const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeElement;
