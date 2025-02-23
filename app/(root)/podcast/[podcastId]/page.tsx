type PageProps = {
  params: Promise<{
    podcastId: string;
  }>;
};

export default async function PodcastPage({ params }: PageProps) {
  const { podcastId } = await params;
  return <p className="text-white-1">PodcastDetails for {podcastId}</p>;
}
