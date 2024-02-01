import { useState } from "react";
const useTitle = () => {
  const [open, setOpen] = useState(false);
  const [titleState, setTitle] = useState<string>("");
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };
  return { open, setOpen, titleState, setTitle, handleOpen, handleTitle };
};
export default useTitle;
