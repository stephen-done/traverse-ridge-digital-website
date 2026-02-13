import { Flex, View, Heading, Image } from '@adobe/react-spectrum';

export default function Header() {
  return (
    <View
      backgroundColor="gray-50"
      borderBottomWidth="thin"
      borderBottomColor="gray-300"
      paddingX="size-400"
      paddingY="size-300"
    >
      <Flex maxWidth="size-6000" marginX="auto" justifyContent="space-between" alignItems="center">
        <a
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'inherit',
          }}
        >
          <Image src="/favicon.svg" alt="Traverse Ridge Digital Logo" height="size-500" />
          <Heading level={1} margin={0}>
            Traverse Ridge Digital
          </Heading>
        </a>
        <Flex gap="size-300" UNSAFE_style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </a>
          <a href="/apps" style={{ textDecoration: 'none', color: 'inherit' }}>
            Apps
          </a>
        </Flex>
      </Flex>
    </View>
  );
}
