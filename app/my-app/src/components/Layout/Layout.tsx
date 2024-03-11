import { Box } from "@chakra-ui/react"
import { Children, ReactNode } from "react"

interface ILayout {
    
    children:ReactNode 
}

export const Layout = ({children} : ILayout) =>{
    return(
        <Box >
            {children}
        </Box>
    )
}