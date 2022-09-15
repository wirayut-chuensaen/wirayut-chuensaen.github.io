import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const NavigationBar = () => {

    const navigate = useNavigate()

    const [lang, setLang] = useState("th")

    useEffect(() => {

    }, [])

    const handleChangeLanguage = (event) => {
        setLang(event.target.value)
    }

    const styles = {
        button: {
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 4,
            paddingBottom: 4,
            textTransform: "initial"
        }
    }

    return (
        <Box sx={{ backgroundColor: "white" }}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
                <Grid item>
                    <Box display={"flex"} flex={1} width={"100%"} height={80} justifyContent={"flex-end"} alignItems={"center"} >
                        <Button color="inherit" sx={styles.button} onClick={() => navigate("/")}>Home</Button>
                        <Button color="inherit" sx={styles.button} onClick={() => navigate("/AboutMePage")}>About Me</Button>
                        <Button color="inherit" sx={styles.button} onClick={() => navigate("/WorksPage")}>My Works</Button>
                        <Box sx={{ minWidth: 80, marginLeft: 4, marginRight: 4 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={lang}
                                    label="Language"
                                    onChange={handleChangeLanguage}
                                >
                                    <MenuItem value={"th"}>TH</MenuItem>
                                    <MenuItem value={"en"}>EN</MenuItem>
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
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <p>template created with &hearts; by <a href={'https://paytonpierce.dev'}>Payton Pierce</a></p>
                        <p>&copy; 2022</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default NavigationBar;