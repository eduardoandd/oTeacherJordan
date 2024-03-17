import { Box ,ListItem,Text, UnorderedList} from "@chakra-ui/react"
import './ConteudoEnsino.css'

export const ConteudoEnsino = ()=>{
    return (
        <Box className="ensino-background">
            <Box className="ensino-cont">
                <Text textAlign='center' fontSize='30px'>Metodologia</Text>
                <Text><b>Metodologia Direta de Ensino de Inglês</b><br />
                Na metodologia direta de ensino de inglês, o foco está na comunicação direta na língua-alvo desde o início do processo de aprendizagem. Essa abordagem visa imergir os alunos na língua inglesa de forma autêntica e natural, proporcionando uma experiência de aprendizagem significativa e eficaz.
                </Text>
                <br />
                <Text><b>Princípios Fundamentais:</b><br />Uso Exclusivo do Inglês: Na metodologia direta, o inglês é a língua principal de instrução desde o primeiro dia de aula. Os professores comunicam-se com os alunos apenas em inglês, criando um ambiente linguístico autêntico e imersivo.</Text><br />
                <UnorderedList>
                    <ListItem>Ênfase na Compreensão Oral e Expressão: A compreensão auditiva e a expressão oral são priorizadas, incentivando os alunos a ouvirem, compreenderem e responderem em inglês sem dependerem da tradução para sua língua nativa.</ListItem>
                    <ListItem>Aprendizado Contextualizado: As lições são estruturadas em torno de situações do mundo real, como conversas cotidianas, interações sociais, tarefas práticas e temas relevantes à vida dos alunos, tornando o aprendizado mais significativo e aplicável.</ListItem>
                    <ListItem>Uso de Recursos Visuais e Gestuais: Recursos visuais, gestos e expressões faciais são frequentemente utilizados para apoiar a compreensão e a comunicação, especialmente para alunos iniciantes e aqueles com diferentes estilos de aprendizagem.</ListItem>
                    <ListItem>Atividades Interativas e Participativas: As aulas são altamente interativas e participativas, com ênfase em atividades que promovem a interação entre os alunos e o uso ativo da língua inglesa em contextos variados.</ListItem>
                </UnorderedList>
                <br />
                <Text><b>Benefícios da Metodologia Direta:</b></Text><br />
                <UnorderedList>
                    <ListItem>Desenvolvimento da fluência oral e da compreensão auditiva de forma natural e progressiva.</ListItem>
                    <ListItem>Promoção da confiança e da autonomia dos alunos na comunicação em inglês.</ListItem>
                    <ListItem>Internalização intuitiva das estruturas linguísticas e padrões de fala da língua-alvo.</ListItem>
                    <ListItem>Fomento da motivação e do engajamento dos alunos por meio de atividades relevantes e envolventes</ListItem>
                </UnorderedList>
                <br />
                <Text><b>Considerações Finais:</b><br />A metodologia direta de ensino de inglês oferece uma abordagem dinâmica e comunicativa que capacita os alunos a se tornarem falantes proficientes e confiantes da língua inglesa. Ao criar um ambiente de aprendizagem estimulante e autêntico, os professores podem inspirar e transformar a jornada de aprendizagem de seus alunos, preparando-os para o sucesso em um mundo globalizado e interconectado.</Text>

            </Box>
           

        </Box>
    )
}