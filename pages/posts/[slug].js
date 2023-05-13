import React from "react";
import Head from "next/head";

import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  console.log(slugs);
  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),

    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("[Post Page] getStaticProps():", slug);
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}

function PostPage({ post }) {
  console.log("[PostPage] render: ", post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
      </main>
    </>
  );
}

export default PostPage;
