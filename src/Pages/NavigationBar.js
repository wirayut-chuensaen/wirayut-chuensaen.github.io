import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { Outlet, Link } from "react-router-dom";
import { Box, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {

    const { localeState, onChangeLocale } = useContext(AppContext)
    const { t } = useTranslation();

    const navLinks = [
        {
            name_en: "Home",
            name_th: "หน้าหลัก",
            to: "/"
        },
        {
            name_en: "Profile",
            name_th: "โปรไฟล์",
            to: "/AboutMePage"
        },
        {
            name_en: "Projects",
            name_th: "โปรเจค",
            to: "/WorksPage"
        }
    ]

    const handleChangeLanguage = (event) => {
        onChangeLocale(event.target.value)
    }

    const styles = {
        button: {
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 2,
            paddingBottom: 2,
            marginLeft: 1,
            marginRight: 1,
            textTransform: "initial",
            fontFamily: "IBM Plex Sans Thai",
            fontSize: "0.9rem",
            // fontWeight: "bold"
        }
    }

    return (
        <Box sx={{ backgroundColor: "white" }}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
                <Grid item>
                    <Box display={"flex"} flex={1} width={"100%"} height={80} justifyContent={"flex-end"} alignItems={"center"}>
                        {
                            navLinks.map((item, index) => (
                                <Button key={index} variant="text" color="inherit" component={Link} to={item.to} sx={styles.button}>{item[`name_${localeState}`]}</Button>
                            ))
                        }
                        <Box sx={{ m: 1, marginLeft: 1, marginRight: 1 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={localeState}
                                    label="Language"
                                    onChange={handleChangeLanguage}
                                >
                                    <MenuItem value={"en"}>EN</MenuItem>
                                    <MenuItem value={"th"}>TH</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
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
            </Grid>
        </Box>
    )
};

export default NavigationBar;