import React, { useState, useEffect } from "react";
import iconHome from "../icons/icon-home.svg";
import iconBells from "../icons/icon-bells.svg";
import iconPerson from "../icons/icon-person.svg";
import styles from "../css/header.module.scss";

function HeaderC(props) {
  const [searchValue, setSearchValue] = useState(undefined);
  const { onChange } = props;
  useEffect(() => {
    if (searchValue === "31") {
      onChange(false);
    } else {
      onChange(true);
    }
    return () => {};
  }, [searchValue]);
  return (
    <header className="app-header">
      <input
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img className="ml35" src={iconHome} alt="home" />
      <img className="ml35" src={iconBells} alt="bells" />
      <img className="ml35" src={iconPerson} alt="person" />
    </header>
  );
}

export default HeaderC;
