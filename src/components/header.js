import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  Divider,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { BlogIcon } from "./blogIcon";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const { data: session, status } = useSession();
  return (
    <Box pb={10}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <BlogIcon />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href={"/"} className={classes.link}>
              Home
            </Link>
            <Link href={"/posts/static"} className={classes.link}>
              Posts
            </Link>
            <Link href={"/posts/dynamic"} className={classes.link}>
              Todo
            </Link>
          </Group>
          {!session ? (
            <Group className={classes.hiddenMobile}>
              <Link href="/api/auth/signin">
                {" "}
                <Button variant="default">Log in</Button>
              </Link>
            </Group>
          ) : (
            <Group className={classes.hiddenMobile}>
              {" "}
              <Avatar src={session.user.image} alt="it's me" />
              <Button variant="default" onClick={() => signOut()}>
                Logout
              </Button>
            </Group>
          )}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link href={"/"} className={classes.link}>
            Home
          </Link>
          <Link href={"/posts/static"} className={classes.link}>
            Static
          </Link>
          <Link href={"/posts/dynamic"} className={classes.link}>
            Dynamic
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          {!session ? (
            <Group position="center" grow pb="xl" px="md">
              <Link href="/api/auth/signin">
                {" "}
                <Button variant="default">Log in</Button>
              </Link>
            </Group>
          ) : (
            <Group position="center" grow pb="xl" px="md">
              <Button variant="default" onClick={() => signOut()}>
                Logout
              </Button>
            </Group>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
