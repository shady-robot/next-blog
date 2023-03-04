import { createStyles, rem, Container, Image, Text, Stack, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
   marginTop: rem(16)
  },
  username: {
    margin: 0
  },
}));

export default function UserCard({username, image, description}) {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Stack align="center" justify="space-around" spacing="xs">
        <Image maw={160} mx="auto" radius={200} src={image.src} alt="User Profile" />
        <Title order={2} className={classes.username}>{username}</Title> 
        <Text size="lg">
        {description}
        </Text>
      </Stack>
    </Container>   
  );
}