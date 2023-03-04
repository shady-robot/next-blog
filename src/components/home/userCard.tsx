import { createStyles, rem, Container, Image, Text, Stack } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
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
        <h1 className={classes.username}>{username}</h1> 
        <Text size="lg">
        {description}
        </Text>
      </Stack>
    </Container>   
  );
}