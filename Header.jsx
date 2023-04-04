import MenuItems from "./Menu";
import AppsLauncher from "./AppsLauncher";
import Button from "./Button";

import React from 'react'

export const Header = () => {
  return (
    <>
      <div className="Head">
        <div className="Header">
          <MenuItems title={"Gmail"} />
          <MenuItems title={"Images"} />
          <AppsLauncher />
          <Button />
        </div>
      </div>
    </>
  )
}
export default Header;
