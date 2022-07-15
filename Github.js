import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Avatar, Box, FlatList, NativeBaseProvider, Heading, HStack, Text, VStack, Spacer, Divider, Input, Icon, Center } from 'native-base';
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Github = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData('a')
    }, [])

    const getData = async (username) => {
        const res = await axios.get(`https://api.github.com/search/users?q=${username}`);
        setData(res.data.items);
    }

    const listUsers = () => {
        return
        <>
            ;
        </>
    }

    return (
        <NativeBaseProvider>

            <Center px="2">
                <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
                    <Divider />
                </Box>}>


                    <VStack w="100%" space={5} alignSelf="center">
                        <Input
                            onChangeText={text => {
                                if (text.length > 0) {
                                    getData(text)
                                } else {
                                    getData('a')
                                }
                            }}
                            placeholder="Enter github user-id" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="people" />} />} />
                    </VStack>
                </VStack>
            </Center>

            <FlatList data={data} renderItem={({
                item
            }) => <Box borderBottomWidth="1" _dark={{
                borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                    <HStack space={3} justifyContent="space-between">
                        <Avatar size="48px" source={{
                            uri: item.avatar_url
                        }} />
                        <VStack>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" bold>
                                {item.login}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.id}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" alignSelf="flex-start" onPress={() => { Linking.openURL(item.html_url) }}>
                            VIEW
                        </Text>
                    </HStack>
                </Box>} keyExtractor={item => item.id} />

        </NativeBaseProvider>
    )
}

export default Github