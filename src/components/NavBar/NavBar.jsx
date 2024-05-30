import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { GoHome } from "react-icons/go";
import { Link } from "react-scroll";
export const NavBar = () => {
  const matches = useMediaQuery("(min-width: 769px)");
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={styles.navBar}>
        <a href="/">
          <img src={getImageUrl("logo_black.png")} />
        </a>

        <div className={styles.menu}>
          {matches ? null : open ? (
            <CloseRoundedIcon
              className={styles.menuBtn}
              sx={{ fontSize: 40 }}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <MenuRoundedIcon
              className={styles.menuBtn}
              sx={{ fontSize: 40 }}
              onClick={() => setOpen(!open)}
            />
          )}
          <ul
            className={`${styles.menuItems} ${open && styles.menuOpen}`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <GoHome fontSize={25} />
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span className={styles.menuBtn}>About</span>
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
