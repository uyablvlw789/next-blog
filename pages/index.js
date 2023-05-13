import Link from "next/link";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomePage({ posts }) {
  console.log("[Homepage] render");
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.title}>
                <Link href={`/posts/${post.slug}`}>{post.slug}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
