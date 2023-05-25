import { Tour } from "@/types/tour";
import { apiAllToursUrl } from "@/constants/routes";

export async function fetchProducts(): Promise<Tour[]> {
  const res = await fetch(apiAllToursUrl);
  const json = await res.json();
  if (!json.success) {
    return [];
  }

  const { data } = json;
  const tours = data.map((t: any) => ({
    id: t.ID,
    href: t.url,
    name: t.title,
    imageSrc: t.image,
    text: t.excerpt,
  }));
  return tours;
}
