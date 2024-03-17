import { Box, Stack, VStack,Image  } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import logo from './logo.png'
import './Header.css'


export const Header = () =>{
    return(
        <Box height='100vh' width='225px' backgroundColor='#C00000'>
            <VStack 
              spacing={3}
              align='center'
              padding={50}
            >
                <img src={logo} className="img-logo" alt="logo"  />
                <Box marginTop={5} color='white' paddingLeft={25}>
                    <Stack spacing={5}>
                        <Text fontSize='2xl'>Biografia</Text>
                        <Text fontSize='2xl'>Meu compromisso</Text>
                        <Text fontSize='2xl'>Livros</Text>
                        <Text fontSize='2xl'>Ensino</Text>
                        <Text fontSize='2xl'>Horario de atendimento</Text>
                    </Stack>
                    
                </Box>
            </VStack>
        </Box>
        
    )
}