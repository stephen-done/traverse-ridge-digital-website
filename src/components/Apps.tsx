import { View, Heading, Content, Text, Well } from '@adobe/react-spectrum';

export default function Apps() {
  return (
    <View paddingX="size-400" paddingY="size-600" maxWidth="size-6000" marginX="auto">
      <Heading level={2} marginBottom="size-400">
        Our Apps
      </Heading>
      <View maxWidth="size-5000">
        <Well>
          <Heading level={3} marginBottom="size-150">
            QR Code Caddy
          </Heading>
          <Text marginBottom="size-200">
            <em>iOS App</em>
          </Text>
          <Content>
            <Text>
              QR Code Caddy is an iOS app that makes it simple to generate QR codes. Whether you
              need to share a website, contact information, or any other data, QR Code Caddy
              provides a quick and easy way to create professional QR codes right from your iPhone
              or iPad.
            </Text>
          </Content>
        </Well>
      </View>
    </View>
  );
}
