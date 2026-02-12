import { View, Heading, Content, Text } from '@adobe/react-spectrum';

export default function Home() {
  return (
    <View paddingX="size-400" paddingY="size-600" maxWidth="size-6000" marginX="auto">
      <View maxWidth="size-5000">
        <Heading level={2} marginBottom="size-300">
          Custom Software Solutions
        </Heading>
        <Content>
          <Text>
            Traverse Ridge Digital is a custom software company specializing in innovative software
            engineering services and custom applications. We build tailored solutions that meet your
            unique business needs.
          </Text>
          <Text marginTop="size-200">
            Our expertise spans mobile and web application development, delivering high-quality
            software that helps businesses thrive in the digital age.
          </Text>
        </Content>
      </View>
    </View>
  );
}
