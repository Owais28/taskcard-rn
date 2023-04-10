import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as React from 'react';
import { Button, Center, Skeleton, VStack } from 'native-base';
import { useRouter } from 'expo-router';
import ProjectImage from './ProjectImage';
import ProjectTitleAndPriority from './ProjectTitleAndPriority';
import ProjectDescription from './ProjectDescription';
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import ProjectProgress from './ProjectProgress';

type Props = {};

const ProjectCard = (props: Props) => {
  const router = useRouter();

  const handlePress = (e: GestureResponderEvent) => {
    console.log('sdds');
    router.push('(project)/20');
  };

  return (
    // <Center w="100%">
    <Pressable onPress={handlePress}>
      <VStack
        w={320}
        maxW="400"
        // borderWidth="1"
        space={2}
        // alignItems={'center'}
        overflow="hidden"
        rounded="md"
        padding={4}
        _dark={{
          borderColor: 'coolGray.500',
          bgColor: 'coolGray.100'
        }}
        _light={{
          borderColor: 'coolGray.200',
          bgColor: 'white'
        }}
      >
        <ProjectImage />
        <ProjectTitleAndPriority title="Demo Project Title" priority={2} />
        <ProjectDescription />
        <ProjectProgress />
      </VStack>
    </Pressable>
    // </Center>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({});
