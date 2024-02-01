import React, { createContext, useState, ReactNode } from "react";

interface EditorContextProps {
  text: string;
  setText: (value: string) => void;
  onChange: (value: string) => void;
}

const EditorContext = createContext<EditorContextProps>({
  text: "",
  setText: () => {},
  onChange: () => {},
});

const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const onChange = (value: string) => {
    setText(value);
  };
  return (
    <EditorContext.Provider value={{ text, setText, onChange }}>
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
