import { AppShell, Footer, Group, Header, Text } from "@mantine/core";
export const BlogContainer = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFFF",
          width: "100vw",
          height: "100vh",
          paddingLeft: "0px",
        },
      }}
      fixed
      footer={
        <Footer height={60} p="md">
          <Group position="apart" spacing="xl">
            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>Prismas: </span> ORM
            </Text>
            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>🎆 NextJS: </span> web
            </Text>
          </Group>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text size="lg" weight="bolder">
              Blog Feed From DB
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
