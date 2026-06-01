export interface CareerRecord {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements?: string;
  experience?: string;
  openings?: string;
}

export async function fetchCareers(): Promise<CareerRecord[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    return [];
  }

  const res = await fetch(`${apiUrl}/careers`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch careers");
  }

  const json = await res.json();
  return Array.isArray(json?.data) ? json.data : [];
}
