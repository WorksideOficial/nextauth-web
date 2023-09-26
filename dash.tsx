"use client"
import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaTasks, FaCheckSquare } from "react-icons/fa";
import { Textarea } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Fragment } from "react";

export default function Dashboard() {
  return (
    <Fragment>
      <Flex
        width="100%"
        justify="center"
        padding="2rem"
        marginTop="24px"
        box-shadow="2px 4px 6px rgb(0 0 0 / 10%)"
        z-zIndex="20"
        as="section"
      >
        <Container
          width="100%"
          maxWidth="1160px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          as="div"
        >
          <Tabs
            width="100%"
          >
            <TabList
              height="55px"
              backgroundColor="gray.100"
              color="gray.400"
              marginTop="-55px"
            >
              <Tab padding="15px 30px" gap="5px"><FaTasks />Listar Tickets</Tab>
              <Tab padding="15px 30px" gap="5px"><FaCheckSquare />Cadastrar Tickets</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box>
                  <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                      <Thead>
                        <Tr>
                          <Th>nchamado</Th>
                          <Th>email</Th>
                          <Th>descricao</Th>
                          <Th>status</Th>
                          <Th>Setor</Th>
                          <Th>Data Inicial</Th>
                          <Th>Data Final</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>001254789</Td>
                          <Td>teste@teste.com</Td>
                          <Td>Estou com problemas no PC e na rede</Td>
                          <Td>Informática</Td>
                          <Td>24-09-2023</Td>
                          <Td>24-09-2023</Td>
                          <Td>Aberto</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </TabPanel>
              <TabPanel>
                <FormControl
                  width="50%"
                  display="flex"
                  flexDirection="column"
                  gap="5px"
                  as="form">
                  <FormLabel>E-MAIL</FormLabel>
                  <Input type='email' placeholder='Informe o seu e-mail' />
                  <FormLabel>DIGITE SEU TICKET</FormLabel>
                  <Textarea placeholder='Here is a sample placeholder' resize="none" />
                  <FormLabel>STATUS</FormLabel>
                  <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                  <Button
                    backgroundColor="green.400"
                    color="#FFF"
                    _hover={{
                      backgroundColor: "green.300"
                    }}
                    type="submit"
                  >Cadastrar Ticket</Button>
                </FormControl>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Flex>
    </Fragment>
  )
}
