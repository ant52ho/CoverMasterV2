import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "./ViewDoc.css";

function ViewDoc() {
  const docs = [{ uri: "https://docxtemplater.com/tag-example.docx" }];

  return (
    <div className="fileViewer">
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />;
    </div>
  );
}

export default ViewDoc;

// import React from "react";
// import DocViewer from "react-doc-viewer";
// import "./ViewDoc.css";
// import FileViewer from "react-file-viewer";

// function ViewDoc() {
//   const docs = [
//     { uri: "https://docxtemplater.com/tag-example.docx" },
//     // { uri: "https://url-to-my-pdf.pdf" },
//     // { uri: require("./example-files/pdf.pdf") }, // Local File
//   ];

//   const file = "https://docxtemplater.com/tag-example.docx";
//   const type = "docx";

//   return (
//     <div className="fileViewer">
//       <FileViewer fileType={type} filePath={file} />;
//     </div>
//   );
// }

// export default ViewDoc;
