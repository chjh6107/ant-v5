import { useEffect, useState } from "react";

/**
 * @param initialTitle 바꾸고 싶은 제목
 */
const useUpdateTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if (htmlTitle) htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};
export default useUpdateTitle;
