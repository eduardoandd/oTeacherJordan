import { Box, Center, Flex,Text } from "@chakra-ui/react"
import './ConteudoBio.css'
import teacher1 from './teacher.png'


export const ConteudoBio = () =>{
    return(
        <Box className="bio-background">
            <Box className="bio-cont">
                <Flex>
                    <img src={teacher1} alt="teacher" className="img-teacher1"  />
                    <Box className="text-content" >
                        <Text as='b' fontSize='3xl'>Professor de Inglês Particular</Text>
                        <br />
                        <br />
                        <Text as='b' fontSize='3xl'>I HAVE A DREAM</Text>
                        <Box className="separator"></Box>
                        <Box marginRight={8}>
                            <Text fontSize='25px' color='red'>
                                Meu principal objetivo como professor de inglês é capacitar os alunos a se tornarem comunicadores proficientes e confiantes. Trabalho incansavelmente para criar um ambiente de aprendizagem positivo e inclusivo, no qual os alunos se sintam seguros para assumir riscos linguísticos e explorar novas ideias.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}