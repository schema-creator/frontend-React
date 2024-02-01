import { Editor } from "@/feature-editor/Editor";
import { EditorProvider } from "@/feature-editor/EditorContext";

export const ProjectById = () => {
  return (
    <EditorProvider>
      <Editor />
    </EditorProvider>
  );
};
