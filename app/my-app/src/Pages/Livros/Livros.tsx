
import { Box, Flex } from "@chakra-ui/react"
import { Layout } from "../../components/Layout/Layout"
import { ConteudoLivros } from "../../components/ConteudoLivros/ConteudoLivros"
import { Header } from "../../components/Header/Header"

export const Livros = () =>{
    return(
        <Layout>
            <Flex>
                <Header/>
                <ConteudoLivros />
            </Flex>
        </Layout>
    )
}