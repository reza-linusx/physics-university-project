import React, { useContext } from "react";
import { ViewContext } from "../../context/ViewContext";
import { DEFINITIONS } from "../../utils/constants";
import InfoPanel from "./InfoPanel";

function DefinitionPanel() {
  const { view } = useContext(ViewContext);
  const definition = DEFINITIONS[view];
  if (!definition) return null;

  return (
    <InfoPanel title={definition.title} description={definition.content} />
  );
}

export default DefinitionPanel;
