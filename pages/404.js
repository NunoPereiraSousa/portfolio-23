import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import { components } from "../slices";
import Layout from "@/components/Layout";
import Preloader from "@/components/Elements/Preloader";
import OpenToWork from "@/components/Elements/Links/OpenToWork";
import Error404 from "@/components/Error404";

// PASS NAVIGATION INSIDE LAYOUT COMPONENT navigation={navigation} menus={menus}
/*
  navigation,
  menus,
  page,
  footer,
  metaTitle,
  metaDescription,
*/

export default function Page({ page, metaTitle, metaDescription }) {
  return (
    <Layout>
      <Head>
        <title>Nuno Pereira Sousa | 404</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#EE7D3D" />
        <meta
          name="msapplication-TileImage"
          content="favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#EE7D3D" />
      </Head>

      <Error404
        descriptions={page?.data.descriptions}
        labels={page?.data.labels}
        buttonLabel={page?.data.button_label}
        buttonLink={page?.data.button_link}
      />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("404");

  return {
    props: {
      page,
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
    },
  };
}
