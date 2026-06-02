export async function fetchPolicyContent(endpoint: string): Promise<string> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return "";

  try {
    const res = await fetch(`${apiUrl}${endpoint}`, { cache: "no-store" });
    if (!res.ok) return "";

    const json = await res.json();
    const data = json?.data;

    // Common Strapi/custom API response shapes:
    // 1) { data: { content: "..." } }
    if (typeof data?.content === "string") return data.content;
    // 2) { data: { attributes: { content: "..." } } }
    if (typeof data?.attributes?.content === "string") {
      return data.attributes.content;
    }
    // 3) { data: [{ content: "..." }] }
    if (Array.isArray(data) && typeof data[0]?.content === "string") {
      return data[0].content;
    }
    // 4) { data: [{ attributes: { content: "..." } }] }
    if (Array.isArray(data) && typeof data[0]?.attributes?.content === "string") {
      return data[0].attributes.content;
    }
    // 5) { content: "..." } (custom)
    if (typeof json?.content === "string") return json.content;

    return "";
  } catch {
    return "";
  }
}

