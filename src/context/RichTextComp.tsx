const RichTextComp = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 list-decimal">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    // checkmarks: ({ children }: any) => (
    //   <ol className="m-auto text-lg">{children}</ol>
    // ),
  },
  //   listItem: {
  //     // Ex. 1: customizing common list types
  //     bullet: ({children}: any) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,

  //     // Ex. 2: rendering custom list items
  //     checkmarks: ({children}: any) => <li>✅ {children}</li>,
  //   },
};

export default RichTextComp;
