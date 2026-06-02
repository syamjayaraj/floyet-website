import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Product stories, engineering notes, and updates from the Floyet team.",
  openGraph: {
    title: "The Floyet Blog",
    description:
      "Product stories, engineering notes, and updates from the Floyet team.",
    type: "website",
  },
};

async function getBlogPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?populate=*`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const { data: posts } = await getBlogPosts();

  return (
    <main id="main-content" className={`${styles.main} glass-section`}>
      <div className="glass-section__ambient" aria-hidden="true">
        <div
          className="glass-orb glass-orb--purple"
          style={{ width: 480, height: 480, top: "-8%", right: "-5%" }}
        />
        <div
          className="glass-orb glass-orb--blue"
          style={{ width: 400, height: 400, bottom: "10%", left: "-10%" }}
        />
      </div>
      <section className={styles.blogSection}>
        <div className={`${styles.container} glass-section__inner`}>
          <PageHeader
            glass
            eyebrow="Insights"
            title="The Floyet Blog"
            subtitle="Product stories, engineering notes, and updates - with GymTie and our portfolio at the center."
          />

          <div className={`${styles.postsGrid} reveal-stagger`}>
            {posts?.map(
              (post: {
                id: number;
                slug: string;
                title: string;
                excerpt: string;
                publishedAt: string;
                image?: { url?: string };
              }) => (
                <Link
                  href={`/blog/${post?.slug}`}
                  key={post.id}
                  className={`${styles.postCard} liquid-glass liquid-glass--interactive reveal-child`}
                >
                  {post?.image?.url && (
                    <div className={styles.imageWrapper}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${post?.image?.url}`}
                        alt=""
                        className={styles.postImage}
                      />
                    </div>
                  )}
                  <div className={styles.postContent}>
                    <h2 className={styles.postTitle}>{post?.title}</h2>
                    <p className={styles.postExcerpt}>{post?.excerpt}</p>
                    <div className={styles.postMeta}>
                      <time
                        className={styles.postDate}
                        dateTime={post?.publishedAt}
                      >
                        {new Date(post?.publishedAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
