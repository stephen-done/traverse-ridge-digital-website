import { Flex, View, Heading, Image, Link } from '@adobe/react-spectrum';

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
        <Link href="/">
          <a style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/favicon.svg" alt="Traverse Ridge Digital Logo" height="size-500" />
            <Heading level={1} margin={0}>
              Traverse Ridge Digital
            </Heading>
          </a>
        </Link>
        <Flex gap="size-300">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/apps">
            <a>Apps</a>
          </Link>
        </Flex>
      </Flex>
    </View>
  );
}
