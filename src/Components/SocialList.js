import React, { useState } from 'react'
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function SocialList({ link, type, label }) {

	const [isHover, setIsHover] = useState(false)

	return (
		<a target="_blank" aria-label={label}
			rel="noopener noreferrer" href={link}
			style={{
				color: !isHover ? "black" : "gray",
				transition: "color 200ms ease",
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{
				type === "github" && <GitHub style={{ fontSize: "2.5rem" }} />
			}
			{
				type === "linkedin" && <LinkedIn style={{ fontSize: "2.5rem" }} />
			}
		</a>
	);
}
