import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Floyet",
  description: "Read the latest insights, updates, and stories from our team",
  openGraph: {
    title: "Blog | Floyet",
    description: "Read the latest insights, updates, and stories from our team",
    type: "website",
  },
};

async function getBlogPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const { data: posts } = await getBlogPosts();

  return (
    <>
      <Header isCareersPage={true} />

      <main
        className={styles.main}
        style={{
          marginTop: "100px",
        }}
      >
        <section className={styles.blogSection}>
          <div className={styles.container}>
            <h1 className={styles.title}>Our Blog</h1>
            <p className={styles.subtitle}>
              Insights, updates, and stories from our team
            </p>

            <div className={styles.postsGrid}>
              {posts?.map((post: any) => (
                <Link
                  href={`/blog/${post?.slug}`}
                  key={post.id}
                  className={styles.postCard}
                >
                  {post?.image?.url && (
                    <div className={styles.imageWrapper}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${post?.image?.url}`}
                        alt={post?.title}
                        className={styles.postImage}
                      />
                    </div>
                  )}
                  <div className={styles.postContent}>
                    <h2 className={styles.postTitle}>{post?.title}</h2>
                    <p className={styles.postExcerpt}>{post?.excerpt}</p>
                    <div className={styles.postMeta}>
                      <span className={styles.postDate}>
                        {new Date(post?.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
