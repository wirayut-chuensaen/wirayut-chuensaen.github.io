import React from 'react'
import { Box } from "@mui/material";
import { info } from '../Info/MyInfo'
import { InfoList, SocialList } from '../Components'

export default function MainPage() {
	return (
		<Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
			justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
			<Box alt={'dev_img'} component={'img'} src={require("../Assets/Images/1647aa148a3880354bbe07d8c02de8c9.jpg")} width={{ xs: '35vh', md: '40vh' }}
				height={{ xs: '35vh', md: '40vh' }}
				borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
			<Box>
				<Box style={{ alignSelf: "center", alignItems: "flex-start", paddingLeft: 10 }}>
					<h1 style={{
						fontSize: "2rem",
						"@media only screen and (minWidth: 940px)": {
							fontSize: "3rem",
						}
					}}>
						Hi, I'm {info.first_name} {info.last_name}
					</h1>
					<h2 style={{
						fontSize: "1.25rem",
						"@media only screen and (minWidth: 940px)": {
							fontSize: "2rem",
						}
					}}>
						I'm {info.position}.
					</h2>
				</Box>
				<Box component={'ul'} p={'0.8rem'}>
					{
						info.miniBio.map((item, index) => (
							<InfoList key={index} emoji={item.emoji} text={item.text} />
						))
					}
				</Box>
				<Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
					{
						info.socials.map((item, index) => (
							<SocialList key={index} link={item.link} type={item.type} label={item.label} />
						))
					}
				</Box>
			</Box>
		</Box>
	)
}
