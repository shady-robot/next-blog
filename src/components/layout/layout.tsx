import Head from "next/head";
import { createStyles,Container} from "@mantine/core";

import SiteHeader from "./header";
import SiteFooter from "./footer";

const siteTitle = "Shady's Blog based on Next.js";
const links = [
  {link: "https://stackoverflow.com/users/3628275/shady" , label: "Stackoverflow"},
  {link: "https://github.com/shady-robot" , label:"Github"},
]

export default function Layout({ children }) {
  return (
    <Container size="xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SiteHeader />
      <Container>{children}</Container>
    <SiteFooter links={links}/>
  </Container>
  );
}
