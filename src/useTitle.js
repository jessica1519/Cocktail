import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` Wiki Drink - ${title}`;
  }, [title]);
};
export default useTitle;
