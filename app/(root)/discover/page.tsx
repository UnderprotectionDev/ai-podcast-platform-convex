import DiscoverPage from "./discover-page";

export default async function Discover({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const search = (await searchParams).search || "";

  return <DiscoverPage searchQuery={search} />;
}
