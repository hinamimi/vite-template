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
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{" "}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </>
  );
}
