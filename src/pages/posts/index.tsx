import Head from "next/head";
import Link from "next/link";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../Services/prismic";

import styles from "./style.module.scss"


type Post ={
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostProps {
  posts: Post[]
}


export default function Posts({posts}: PostProps){
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (

            <Link href={`/posts/preview/${post.slug}`}>
            <a key={post.slug} href="#">
            <time>{post.updatedAt}</time>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
          </a>
            </Link>
          ))}
        </div>
      </main>

    </>
  );
}


export async function getServerSideProps(){
  const prismic = getPrismicClient()

  const response = await prismic.getByType("publication",{
    pageSize: 100,
  });

  const posts = response.results.map(post => {
    return{
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === "paragraph")?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR', {day: '2-digit',
         month: 'long', 
         year: 'numeric'
      })
    }
  });
 // console.log(JSON.stringify(response, null, 2));

  return {
    props: { posts }
  }
}