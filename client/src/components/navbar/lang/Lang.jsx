import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import Icon from "@mdi/react";
import { mdiTranslate } from "@mdi/js";
import styles from "./Lang.module.css";
import Lang from "../../../Context";
import { useContext } from "react";

function LangMenu() {
  const { setData } = useContext(Lang);

  function handleFlagClick(flagValue) {
    if (flagValue.includes("it")) {
      setData("ita");
    } else if (flagValue.includes("de")) {
      setData("de");
    } else if (flagValue.includes("al")) {
      setData("sq");
    } else if (flagValue.includes("eng")) {
      setData("eng");
    }
  }

  return (
    <div>
      <Dropdown>
        <MenuButton variant="plain" color="none" size="sm">
          <Icon path={mdiTranslate} size={1} className={styles.langIcon} />
        </MenuButton>
        <Menu size="sm" className={styles.langDropDown}>
          <MenuItem>
            <img
              src="./flags/al.png"
              alt="albanian flag"
              onClick={() => handleFlagClick("al")}
            />
          </MenuItem>
          <MenuItem>
            <img
              src="./flags/de.png"
              alt="german flag"
              onClick={() => handleFlagClick("de")}
            />
          </MenuItem>

          <MenuItem>
            <img
              src="./flags/it.png"
              alt="italian flag"
              onClick={() => handleFlagClick("it")}
            />
          </MenuItem>
          <MenuItem>
            <img
              src="./flags/eng.png"
              alt="english flag"
              onClick={() => handleFlagClick("eng")}
            />
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
}

export default LangMenu;
