import React from "react";
import { TEXT, CARD } from "../utils/lengthStyles";

function DefinitionDisplay({ title, content, note, rtl = false }) {
  const contentClass = rtl
    ? TEXT.DEFINITION_CONTENT_RTL
    : TEXT.DEFINITION_CONTENT;
  const noteClass = rtl ? TEXT.DEFINITION_NOTE_SMALL : TEXT.DEFINITION_NOTE;

  return (
    <div className="text-white text-center w-full">
      <p className={TEXT.DEFINITION_TITLE}>{title}</p>
      <div className={CARD.DEFINITION}>
        <p className={contentClass}>{content}</p>
      </div>
      {note && <p className={noteClass}>{note}</p>}
    </div>
  );
}

export default DefinitionDisplay;
