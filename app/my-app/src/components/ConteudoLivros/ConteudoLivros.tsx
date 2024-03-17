import { Box,Flex,List,ListIcon,ListItem,Text, UnorderedList } from "@chakra-ui/react"
import './ConteudoLivros.css'
import livro from './Captura de tela 2024-03-17 180425.png'
import { Link } from "react-router-dom"

export const ConteudoLivros = () =>{
    return(
       <Box className="livro-background">
            <Box className="livro-cont">
                <Flex>
                    <img src={livro} alt='livro' className="livro-img"></img>
                    <Box className="livro-text">
                        <Text fontSize='4xl' color='red'>What is Callan for Business?</Text>
                        <br />
                        <UnorderedList>
                            <ListItem> The course introduces and practises around 700 new items of vocabulary, including technical business terms, useful phrasal verbs, and common work-related language and idioms. Beyond this, book for Business also includes some of the more frequently used terms relating to company performance and the financial aspects of business </ListItem>
                            <ListItem>Callan for Business is a course for people who are working, or who intend to work, in a professional environment where English is used. It will efficiently provide them with a large amount of business-related English in the dynamic manner that is unique to the Method.  </ListItem>
                        </UnorderedList>
                        <br />
                        <Text>Para adquirir seus books,{' '} <Link color='red.500' to='#'>Aqui</Link></Text>
                    </Box>
                </Flex>
                
                
            </Box>
       </Box>
    )
}