import { Flex, View, Image } from '@adobe/react-spectrum';

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
          <Image
            src="/logo.jpeg"
            alt="Traverse Ridge Digital Logo"
            height="size-500"
            objectFit="contain"
          />
        </a>
        <Flex gap="size-300" UNSAFE_style={{ listStyle: 'none', margin: 10, padding: 0 }}>
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
