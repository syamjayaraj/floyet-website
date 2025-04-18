import Header from "@/app/components/Header";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
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
    <>
      <Header isCareersPage={true} />
      <main
        className={styles.main}
        style={{
          marginTop: "100px",
        }}
      >
        <article className={styles.article}>
          <div className={styles.container}>
            {post?.image?.url && (
              <div className={styles.heroImage}>
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
                <time className={styles.date}>
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
        </article>
      </main>
      <Footer />
    </>
  );
}
