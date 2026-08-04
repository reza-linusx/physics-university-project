import React from "react";
import { text, card } from "../utils/lengthStyles";

function DefinitionDisplay({ title, content, note, rtl = false }) {
  const contentClass = rtl ? text.definitionContentRtl : text.definitionContent;
  const noteClass = rtl ? text.definitionNoteSmall : text.definitionNote;

  return (
    <div className="text-white text-center w-full">
      <p className={text.definitionTitle}>{title}</p>
      <div className={card.definition}>
        <p className={contentClass}>{content}</p>
      </div>
      {note && <p className={noteClass}>{note}</p>}
    </div>
  );
}

export default DefinitionDisplay;
