import Head from "next/head";
import Link from "next/link";

import Layout from "../../component/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>This is my first post using Next JS</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Go to home</a>
      </Link>
      <p>
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </p>
    </Layout>
  );
};

export default FirstPost;
