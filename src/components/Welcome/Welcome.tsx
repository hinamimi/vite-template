import { Anchor, Text, Title } from "@mantine/core";

export function Welcome() {
  return (
    <>
      <Title
        ta="center"
        mt={100}
        style={{
          color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
          fontSize: "rem(100px)",
          fontWeight: 900,
          letterSpacing: "rem(-2px)",
        }}
      >
        Welcome to{" "}
        <Text inherit variant="gradient" component="span" gradient={{ from: "pink", to: "yellow" }}>
          Vite Template
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Mantine + Viteのテンプレートプロジェクトです。ViteとMantineの詳細については
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          ガイド
        </Anchor>
        を見てください。
      </Text>
    </>
  );
}
