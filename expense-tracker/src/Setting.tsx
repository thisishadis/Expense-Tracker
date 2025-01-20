import { Stack, Typography } from "@mui/material";
import logo from "./assets/money.svg"
export default function Setting(){
    return(
        <Stack>
            <Typography>hello this is setting component!</Typography>
            <img src={logo} alt="logo"/>
        </Stack>
    )
}