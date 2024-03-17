import { Box, Flex } from "@chakra-ui/react"
import { Header } from "../../components/Header/Header"
import { Layout } from "../../components/Layout/Layout"
import './Biografia.css'
import { ConteudoBio } from "../../components/ConteudoBio/ConteudoBio"

export const Biografia = () => {
    return(
        <Layout>
            <Flex>
                <Header />
                <ConteudoBio/>
            </Flex>
        </Layout>
        
    )
}