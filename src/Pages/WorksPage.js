import React from 'react'
import { Box, Grid, Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

const _list = [
	{
		id: "0",
		name: "Project 01",
		short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image_url: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
	},
	{
		id: "1",
		name: "Project 02",
		short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image_url: "https://nypost.com/wp-content/uploads/sites/2/2019/09/fat-cat.jpg?quality=75&strip=all"
	},
	{
		id: "3",
		name: "Project 03",
		short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image_url: "https://metro.co.uk/wp-content/uploads/2022/01/PRI_220662365.jpg?quality=90&strip=all&zoom=1&resize=480%2C671"
	}
]

export default function WorksPage() {
	return (
		<Box component={'main'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ paddingTop: "2%", paddingBottom: "2%" }}
			pl={{ xs: "5%", md: "10%" }} pr={{ xs: "5%", md: "10%" }}>
			<Grid container display={'flex'} justifyContent={'center'} spacing={{ xs: 4, md: 6, lg: 10 }}>
				{_list.map((item, index) => (
					<Grid item xs={12} md={6} key={index}>
						<Card sx={{ boxShadow: 8 }}>
							<CardActionArea onClick={() => { }}>
								<CardMedia component={'img'} image={item.image_url} alt={'image_project'} />
								<CardContent>
									<Typography variant='h5' sx={{ fontWeight: "bold" }}>{item.name}</Typography>
									<Typography>{item.short_description}</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
