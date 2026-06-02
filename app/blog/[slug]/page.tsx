import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

async function getBlogPost(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  return res.json();
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { data } = await getBlogPost(resolvedParams.slug);

  if (!data || data.length === 0) {
    return {
      title: "Post Not Found | Floyet",
      description: "The requested blog post could not be found.",
    };
  }

  const post = data[0];
  const seo = post.seo || {};

  return {
    title: seo.metaTitle || `${post.title} | Floyet Blog`,
    description: seo.metaDescription || post.excerpt,
    openGraph: {
      title: seo.metaTitle || post.title,
      description: seo.metaDescription || post.excerpt,
      type: "article",
      images: post.image?.data
        ? [
            {
              url: `${process.env.NEXT_PUBLIC_API_URL}${post.image.data.url}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { data } = await getBlogPost(resolvedParams.slug);

  if (!data || data.length === 0) {
    notFound();
  }

  const post = data[0];

  return (
    <main id="main-content" className={`${styles.main} glass-section`}>
      <div className="glass-section__ambient" aria-hidden="true">
        <div
          className="glass-orb glass-orb--purple"
          style={{ width: 460, height: 460, top: "5%", left: "-10%" }}
        />
        <div
          className="glass-orb glass-orb--blue"
          style={{ width: 380, height: 380, bottom: "15%", right: "-8%" }}
        />
      </div>
      <article className={`${styles.article} glass-section__inner`}>
        <div className={styles.container}>
          <Link href="/blog" className={`${styles.backLink} liquid-glass liquid-glass--interactive`}>
            <i className="bi bi-arrow-left" aria-hidden="true" />
            Back to blog
          </Link>

          <div className={`${styles.articleCard} liquid-glass liquid-glass--elevated reveal-scale`}>
            {post?.image?.url && (
              <div className={`${styles.heroImage} liquid-glass liquid-glass--strong`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${post?.image?.url}`}
                  alt={post.title}
                  className={styles.featuredImage}
                />
              </div>
            )}

            <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>

              <div className={styles.meta}>
                <time className={styles.date} dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className={styles.body}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
