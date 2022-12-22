import { useState } from "react";

const handleToggle = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log("teste");
  return showMenu;
};

export default handleToggle;
