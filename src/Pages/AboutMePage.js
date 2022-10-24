import React, { useContext } from 'react'
import { useTranslation } from "react-i18next";
import { AppContext } from '../Contexts/AppContext';
import { AboutMePageSkeleton } from '../Components';
import { Box, Card, CardContent, Typography, Link } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StarIcon from '@mui/icons-material/Star';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function AboutMePage() {

    const { t } = useTranslation();
    const { localeState, profile, isLoading } = useContext(AppContext)

    const _renderEducation = ({ item, index }) => (
        <div key={index}>
            <Typography padding={'0.35rem'} fontWeight={"bold"}>{item[`title_${localeState}`]}</Typography>
            {
                item["list"] && item["list"].map((i, ix) => (
                    <div key={`${i}_${ix}`}>
                        <Typography padding={'0.35rem'}>• {i[`title_${localeState}`]}</Typography>
                        <Typography padding={'0.35rem'}>{i[`subtitle_${localeState}`]}</Typography>
                    </div>
                ))
            }
        </div>
    )

    const _renderExperience = ({ item, index }) => (
        <div key={index}>
            <Typography padding={'0.35rem'} fontWeight={"bold"}>{item[`title_${localeState}`]}</Typography>
            {
                item["list"] && item["list"].map((i, ix) => (
                    <div key={`${i}_${ix}`}>
                        <Typography padding={'0.35rem'}>• {i[`title_${localeState}`]}</Typography>
                    </div>
                ))
            }
        </div>
    )

    const _renderSkills = ({ item, index }) => (
        <div key={index}>
            <Typography padding={'0.35rem'} fontWeight={"bold"}>{item[`title_${localeState}`]}</Typography>
            {
                item["list"] && item["list"].map((i, ix) => (
                    <div key={`${i}_${ix}`}>
                        <Typography padding={'0.35rem'}>• {i[`title_${localeState}`]}</Typography>
                    </div>
                ))
            }
        </div>
    )

    const _renderContact = ({ item, index }) => (
        <div key={index}>
            <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }}>
                <Typography padding={'0.35rem'}>• {item[`title_${localeState}`]} : </Typography>
                {
                    item["type"] && item["type"] === "text" ?
                        <Typography padding={'0.35rem'}>{item["data"]}</Typography>
                        :
                        <Link href={item["data"]} target="_blank" underline="none" >
                            <Typography padding={'0.35rem'}>{item["data"]}</Typography>
                        </Link>
                }
            </Box>
        </div>
    )

    return (
        <Box component={'main'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ paddingTop: "2%", paddingBottom: "2%" }}
            pl={{ xs: "5%", md: "10%" }} pr={{ xs: "5%", md: "10%" }}
        >
            <Card sx={{ minWidth: "100%", backgroundColor: "white", boxShadow: 10 }}>
                <CardContent>
                    {
                        (!isLoading && Object.keys(profile).length > 0) ?
                            <Box p={{ xs: 0, md: 4 }}>
                                <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={"center"} mb={{ xs: "1rem", md: "1.5rem" }}>
                                    <Box
                                        alt={'dev_img'}
                                        component={'img'}
                                        src={"https://firebasestorage.googleapis.com/v0/b/wirayut-chuensaen-github-b6b35.appspot.com/o/profile-pic.png?alt=media&token=8d9bdac4-b1d8-45ff-9173-91d9e8150058"}
                                        sx={{ boxShadow: 5 }}
                                        width={{ xs: '28vh', md: '40vh' }}
                                        height={{ xs: '28vh', md: '40vh' }}
                                        borderRadius={'100%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }}
                                    />
                                    <Box display={"flex"} flexDirection={"column"} sx={{ width: "100%", boxShadow: 2, borderRadius: 2, padding: "0.75rem" }}>
                                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Typography padding={'0.35rem'} sx={{ fontSize: "1.5em", fontWeight: "bold", color: "orange" }}>{t("personal_info")}</Typography>
                                            <PersonIcon sx={{ marginLeft: 1, color: "orange" }} />
                                        </Box>
                                        <Typography padding={'0.35rem'}>{t("name")} : {profile["personal_data"][`name_${localeState}`]}</Typography>
                                        <Typography padding={'0.35rem'}>{t("nick_name")} : {profile["personal_data"][`nickname_${localeState}`]}</Typography>
                                        <Typography padding={'0.35rem'}>{t("gender")} : {profile["personal_data"][`gender_${localeState}`]}</Typography>
                                        <Typography padding={'0.35rem'}>{t("date_birth")} : {profile["personal_data"][`date_birth_${localeState}`]}</Typography>
                                        <Typography padding={'0.35rem'}>{t("age")} : {profile["personal_data"]["age"]}</Typography>
                                        <Typography padding={'0.35rem'}>{t("nationality")} : {profile["personal_data"][`nationality_${localeState}`]}</Typography>
                                        <Typography padding={'0.35rem'}>{t("address")} : {profile["personal_data"][`address_${localeState}`]}</Typography>
                                    </Box>
                                </Box>
                                <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={{ xs: "center", md: "space-between" }} mb={{ xs: 0, md: "1.5rem" }}>
                                    <Box width={{ xs: "100%", md: "49%" }} sx={{ boxShadow: 2, borderRadius: 2, padding: "0.75rem" }} mb={{ xs: "1rem", md: 0 }}>
                                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Typography padding={'0.35rem'} sx={{ fontSize: "1.5em", fontWeight: "bold", color: "orange" }}>{t("edu")}</Typography>
                                            <SchoolIcon sx={{ marginLeft: 1, color: "orange" }} />
                                        </Box>
                                        {
                                            profile["education"] && profile["education"].map((item, index) => _renderEducation({ item, index }))
                                        }
                                    </Box>
                                    <Box width={{ xs: "100%", md: "49%" }} sx={{ boxShadow: 2, borderRadius: 2, padding: "0.75rem" }} mb={{ xs: "1rem", md: 0 }}>
                                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Typography padding={'0.35rem'} sx={{ fontSize: "1.5em", fontWeight: "bold", color: "orange" }}>{t("experience")}</Typography>
                                            <TipsAndUpdatesIcon sx={{ marginLeft: 1, color: "orange" }} />
                                        </Box>
                                        {
                                            profile["experience"] && profile["experience"].map((item, index) => _renderExperience({ item, index }))
                                        }
                                    </Box>
                                </Box>
                                <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={{ xs: "center", md: "space-between" }} mb={{ xs: 0, md: "1.5rem" }}>
                                    <Box width={{ xs: "100%", md: "49%" }} sx={{ boxShadow: 2, borderRadius: 2, padding: "0.75rem" }} mb={{ xs: "1rem", md: 0 }}>
                                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Typography padding={'0.35rem'} sx={{ fontSize: "1.5em", fontWeight: "bold", color: "orange" }}>{t("skills")}</Typography>
                                            <StarIcon sx={{ marginLeft: 1, color: "orange" }} />
                                        </Box>
                                        {
                                            profile["skills"] && profile["skills"].map((item, index) => _renderSkills({ item, index }))
                                        }
                                    </Box>
                                    <Box width={{ xs: "100%", md: "49%" }} sx={{ boxShadow: 2, borderRadius: 2, padding: "0.75rem" }} mb={{ xs: "1rem", md: 0 }}>
                                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Typography padding={'0.35rem'} sx={{ fontSize: "1.5em", fontWeight: "bold", color: "orange" }}>{t("contact")}</Typography>
                                            <ContactMailIcon sx={{ marginLeft: 1, color: "orange" }} />
                                        </Box>
                                        {
                                            profile["contact"] && profile["contact"].map((item, index) => _renderContact({ item, index }))
                                        }
                                    </Box>
                                </Box>
                            </Box>
                            :
                            <AboutMePageSkeleton />
                    }
                </CardContent>
            </Card>
        </Box>
    )
}
