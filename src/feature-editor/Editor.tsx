import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const onChange = (newValue: string) => {
  console.log("change", newValue);
};
export const Editor = () => {
  return (
    <div>
      <AceEditor
        theme='github'
        onChange={onChange}
        name='UNIQUE_ID_OF_DIV'
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};
