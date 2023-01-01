import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppContext } from '../Contexts/AppContext'
import { Box, Card, CardContent, Typography, Link } from '@mui/material'
import { ProjectImagesSlider } from '../Components'

export default function WorksDetailPage() {

	const { state } = useLocation()
	const navigate = useNavigate()
	const { t } = useTranslation();
	const [workDetail, setWorkDetail] = useState({})
	const { localeState } = useContext(AppContext)

	useEffect(() => {
		// console.log("state : ", state)
		if (state && Object.keys(state).length > 0) {
			setWorkDetail(state)
		} else {
			navigate("/WorksPage", { replace: true })
		}
	}, [navigate, state])

	return (
		<>
			{
				Object.keys(workDetail).length > 0 ?
					<Box component={'main'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ paddingTop: "2%", paddingBottom: "2%" }}
						pl={{ xs: "5%", md: "10%" }} pr={{ xs: "5%", md: "10%" }}
					>
						<Card sx={{ minWidth: "100%", backgroundColor: "white", boxShadow: 10 }}>
							<CardContent>
								<Box p={{ xs: 0, md: 4 }}>
									<Typography padding={'0.35rem'} sx={{ fontSize: "2em", fontWeight: "bold" }}>{workDetail[`name_${localeState}`]}</Typography>
									<Typography padding={'0.35rem'} fontWeight={"bold"}>{t("detail")}</Typography>
									<Typography padding={'0.35rem'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{workDetail[`full_description_${localeState}`]}</Typography>
									<Typography padding={'0.35rem'} fontWeight={"bold"}>{t("features")}</Typography>
									{
										workDetail["features"] && workDetail["features"].map((item, index) => (
											<Typography key={index} padding={'0.35rem'}>• {item[`feature_${localeState}`]}</Typography>
										))
									}
									<Typography padding={'0.35rem'} fontWeight={"bold"}>{t("technology_used")}</Typography>
									{
										workDetail["technologies"] && workDetail["technologies"].map((item, index) => (
											<Typography key={index} padding={'0.35rem'}>• {item}</Typography>
										))
									}
									<Typography padding={'0.35rem'} fontWeight={"bold"}>{t("screenshots")}</Typography>
									<ProjectImagesSlider data={workDetail["screenshots"] || []} />
									<Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} sx={{ marginTop: 6 }}>
										<Typography padding={'0.35rem'} fontWeight={"bold"}>{t("download_url")} : </Typography>
										<Link href={workDetail["download_url"]} target="_blank" underline="none" >
											<Typography padding={'0.35rem'}>{workDetail["project_version"]}</Typography>
										</Link>
									</Box>
								</Box>
							</CardContent>
						</Card>
					</Box>
					:
					<Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
						justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
						<Box>
							<h1>Oops, Something went wrong...</h1>
						</Box>
					</Box>
			}
		</>
	)
}
