import React, { useContext, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Grid, Button, Typography, MenuItem, IconButton, Menu, ListItemIcon, ListItemText, Divider, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';

const NavigationBar = () => {

    const { localeState, onChangeLocale, aboutWeb, isLoading } = useContext(AppContext)
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl)
    const [anchorElLanguage, setAnchorElLanguage] = useState(null);
    const openLanguage = Boolean(anchorElLanguage)
    const [showAbout, setShowAbout] = useState(false)

    const navLinks = [
        {
            name_en: "Home",
            name_th: "หน้าหลัก",
            to: "/",
            active: "home"
        },
        {
            name_en: "Profile",
            name_th: "โปรไฟล์",
            to: "/AboutMePage",
            active: "AboutMePage"
        },
        {
            name_en: "Projects",
            name_th: "โปรเจค",
            to: "/WorksPage",
            active: "WorksPage"
        }
    ]

    const handleChangeLanguage = (locale = "en") => {
        onChangeLocale(locale)
        handleCloseMenu()
    }

    const hadleClickMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClickLanguage = (event) => {
        setAnchorElLanguage(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
        setAnchorElLanguage(null)
    }

    const handleShowAbout = () => {
        setShowAbout(true)
        handleCloseMenu()
    }

    const styles = {
        button: {
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 2,
            paddingBottom: 2,
            marginLeft: 1,
            marginRight: 1,
        },
        buttonText: {
            textTransform: "initial",
            fontFamily: "IBM Plex Sans Thai",
            fontSize: "0.9rem",
        },
        dividerStyle: {
            borderBottomWidth: 4,
            bgcolor: "#757ce8",
            borderRadius: 50
        }
    }

    return (
        <Box sx={{ backgroundColor: "white" }}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
                <Grid item>
                    <Box display={"flex"} flex={1} width={"100%"} height={80} justifyContent={"flex-end"} alignItems={"center"}>
                        {
                            navLinks.map((item, index) => (
                                <Button key={index} variant="text" color="inherit" component={Link} to={item.to} sx={styles.button} onClick={() => setActive(item.active)}>
                                    <Box flexDirection={"column"}>
                                        <Typography sx={styles.buttonText}>{item[`name_${localeState}`]}</Typography>
                                        {
                                            (item.active === active && !item.type) &&
                                            <Divider sx={styles.dividerStyle} />
                                        }
                                    </Box>
                                </Button>
                            ))
                        }
                        <IconButton
                            id="menu-button"
                            sx={{ marginLeft: 2, marginRight: 2 }}
                            onClick={hadleClickMenu}
                            aria-controls={openMenu ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                        >
                            <SettingsIcon fontSize="medium" />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleCloseMenu}
                            MenuListProps={{
                                'aria-labelledby': 'menu-button',
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem
                                id="language-button"
                                onClick={handleClickLanguage}
                                aria-controls={openLanguage ? 'basic-menu-language' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openLanguage ? 'true' : undefined}
                            >
                                <ListItemIcon>
                                    <LanguageIcon color="success" />
                                </ListItemIcon>
                                <ListItemText>{t("language")}</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleShowAbout}>
                                <ListItemIcon>
                                    <InfoIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText>{t("about")}</ListItemText>
                            </MenuItem>
                        </Menu>
                        <Menu
                            id="basic-menu-language"
                            MenuListProps={{
                                'aria-labelledby': 'basic-menu-language',
                            }}
                            anchorEl={anchorElLanguage}
                            open={openLanguage}
                            onClose={handleCloseMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={() => handleChangeLanguage("en")}>English</MenuItem>
                            <MenuItem onClick={() => handleChangeLanguage("th")}>ไทย</MenuItem>
                        </Menu>
                    </Box>
                </Grid>
                <Grid item flexGrow={1}>
                    <Outlet />
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <p>Wirayut Chuensaen</p>
                        <p>&copy; 2022</p>
                    </Box>
                </Grid>
                <Dialog
                    open={showAbout}
                    onClose={() => setShowAbout(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle id="alert-dialog-title">
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>{t("about_this_web")}</Typography>
                    </DialogTitle>
                    <DialogContent dividers>
                        {
                            (!isLoading && Object.keys(aboutWeb).length > 0) &&
                            <Box flexDirection={"column"}>
                                <Typography>{t("lasted_web_update")} : {aboutWeb[`web_update_${localeState}`]}</Typography>
                                <Typography>{t("lasted_database_update")} : {aboutWeb[`database_update_${localeState}`]}</Typography>
                                {
                                    (aboutWeb["technologies"] && aboutWeb["technologies"].length > 0) &&
                                    <Box flexDirection={"column"} sx={{ marginTop: 2 }}>
                                        <Typography>{t("technology_used")} :</Typography>
                                        {
                                            aboutWeb["technologies"].map((item, index) => (
                                                <Typography key={index}>• {item}</Typography>
                                            ))
                                        }
                                    </Box>
                                }
                            </Box>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowAbout(false)}>{t("close")}</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Box>
    )
};

export default NavigationBar;