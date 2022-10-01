import React from 'react'
import { Box, Skeleton } from "@mui/material";

export default function MainPageSkeleton() {
    return (
        <>
            <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
                justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
                <Skeleton variant='circular' animation={"wave"} width={'35vh'} height={'35vh'} />
                <Box>
                    <Box style={{ alignSelf: "center", alignItems: "flex-start", paddingLeft: 20 }}>
                        <Skeleton variant="text" animation={"wave"} width={"40vh"} height={"8vh"} />
                        <Skeleton variant="text" animation={"wave"} width={"40vh"} height={"8vh"} />
                        <Skeleton variant="text" animation={"wave"} width={"40vh"} height={"8vh"} />
                        <Skeleton variant="text" animation={"wave"} width={"40vh"} height={"8vh"} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
