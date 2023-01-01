import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";
import { AboutMePageSkeleton } from '../Components';

export default function WorksPage() {

	const navigate = useNavigate()
	const { localeState, projectList, isLoading } = useContext(AppContext)

	const onPushDetail = (item) => {
		navigate("/WorksDetailPage", { state: item })
	}

	return (
		<>
			{
				!isLoading ?
					<Box component={'main'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ paddingTop: "2%", paddingBottom: "2%" }}
						pl={{ xs: "5%", md: "10%" }} pr={{ xs: "5%", md: "10%" }}>
						<Grid container display={'flex'} justifyContent={'center'} spacing={{ xs: 4, md: 6, lg: 10 }}>
							{
								projectList && projectList.length > 0 && projectList.map((item, index) => (
									<Grid item xs={12} md={6} key={index}>
										<Card sx={{ boxShadow: 8 }}>
											<CardActionArea onClick={() => onPushDetail(item)}>
												<CardMedia component={'img'} image={item.screenshots[0]} alt={'image_project'} />
												<CardContent>
													<Typography variant='h5' sx={{ fontWeight: "bold" }}>{item[`name_${localeState}`]}</Typography>
													<Typography>{item[`short_description_${localeState}`]}</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								))
							}
						</Grid>
					</Box>
					:
					<AboutMePageSkeleton />
			}
		</>
	)
}
