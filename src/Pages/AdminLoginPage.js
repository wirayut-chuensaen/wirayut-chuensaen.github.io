import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, TextField, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/Firebase'

export default function AdminPage() {
	const navigation = useNavigate()

	const [isLoading, setIsLoading] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isError, setIsError] = useState(false)

	const onLogin = async () => {
		setIsLoading(true)
		try {
			await signInWithEmailAndPassword(auth, email, password).then((res) => {
				// console.log("signInWithEmailAndPassword res : ", res)
				const { operationType } = res
				if (operationType === "signIn") {
					setIsError(false)
					navigation("/EditDataPage", { replace: true })
				} else {
					setIsError(true)
				}
			})
		} catch (e) {
			console.log("onLogin error : ", e)
			setIsError(true)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Box display={"flex"} flex={1} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{ width: "100%", minHeight: "100vh" }}>
			<Box component={"form"} display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"} flexDirection={{ xs: 'column', md: 'column' }}>
				<Typography sx={{ fontSize: 36, fontStyle: "bold" }}>
					EDIT DATA
				</Typography>
				<Box height={10} />
				<TextField fullWidth required label="Email" variant="standard" value={email} onChange={val => setEmail(val.target.value)} />
				<Box height={10} />
				<TextField fullWidth required label="Password" variant="standard" type={"password"} value={password} onChange={val => setPassword(val.target.value)} />
				{
					isError &&
					<>
						<Box height={10} />
						<Typography sx={{ color: "red" }}>Error</Typography>
					</>
				}
				<Box height={50} />
				<Button variant='contained' fullWidth onClick={onLogin} disabled={isLoading} sx={{ backgroundColor: !isLoading ? "blue" : "gray" }}>
					{!isLoading ? "Login" : "Loading..."}
				</Button>
			</Box>
		</Box>
	)
}
