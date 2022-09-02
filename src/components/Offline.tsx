import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",

    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: "white",

    [theme.fn?.smallerThan("sm")]: {
      fontSize: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 26,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: "white",
  },
}));

export default function Offline() {
  const { classes } = useStyles();
  const router = useRouter();

  function refresh() {
    router.reload();
  }

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>OOPS!</div>
        <Title className={classes.title}>We are lost</Title>
        <Text size='lg' align='center' className={classes.description}>
          This is Probably Network Issue. Please Check if you are connected to
          the internet. If you think this is wrong, contact the owner. This Page
          will automatically disappear when you are connected to the internet.
        </Text>
        <Group position='center'>
          <Button onClick={refresh} variant='white' size='md'>
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
