import React, { useContext } from 'react'
import { Box } from "@mui/material";
import { InfoList, SocialList, MainPageSkeleton } from '../Components'
import { AppContext } from '../Contexts/AppContext';

export default function MainPage() {

	const { localeState, myInfo, isLoading } = useContext(AppContext)

	return (
		<>
			{
				!isLoading ?
					<Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
						justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
						<Box
							alt={'dev_img'}
							component={'img'}
							src={myInfo.user_img}
							sx={{ boxShadow: 10 }}
							width={{ xs: '35vh', md: '40vh' }}
							height={{ xs: '35vh', md: '40vh' }}
							borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }}
						/>
						<Box>
							<Box style={{ alignSelf: "center", alignItems: "flex-start", paddingLeft: 10 }}>
								<h1 style={{
									fontSize: "2rem",
									"@media only screen and (minWidth: 940px)": {
										fontSize: "3rem",
									}
								}}>
									{myInfo[`first_name_${localeState}`]} {myInfo[`last_name_${localeState}`]}
								</h1>
								<h2 style={{
									fontSize: "1.25rem",
									"@media only screen and (minWidth: 940px)": {
										fontSize: "2rem",
									}
								}}>
									{myInfo.position}.
								</h2>
							</Box>
							<Box component={'ul'} p={'0.8rem'}>
								{
									myInfo.miniBio && myInfo.miniBio.map((item, index) => (
										<InfoList key={index} emoji={item.emoji} text={item[`text_${localeState}`]} />
									))
								}
							</Box>
							<Box display={'flex'} gap={'1.5rem'} mt={"1.5rem"} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
								{
									myInfo.socials && myInfo.socials.map((item, index) => (
										<SocialList key={index} link={item.link} type={item.type} label={item.label} />
									))
								}
							</Box>
						</Box>
					</Box>
					:
					<MainPageSkeleton />
			}
		</>
	)
}
