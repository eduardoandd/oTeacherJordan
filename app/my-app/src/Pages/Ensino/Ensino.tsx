import { Flex } from "@chakra-ui/react"
import { ConteudoEnsino } from "../../components/ConteudoEnsino/ConteudoEnsino"
import { Header } from "../../components/Header/Header"
import { Layout } from "../../components/Layout/Layout"

export const Ensino = () =>{
    return(
        <Layout>
            <Flex>
                <Header />
                <ConteudoEnsino />
            </Flex>
        </Layout>
    )
}