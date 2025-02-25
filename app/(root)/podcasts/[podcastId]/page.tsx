import { Id } from "@/convex/_generated/dataModel";
import PodcastClient from "./podcast-page";

interface PageProps {
  params: Promise<{
    podcastId: Id<"podcasts">;
  }>;
}

export default async function PodcastPage({ params }: PageProps) {
  const { podcastId } = await params;

  return <PodcastClient podcastId={podcastId} />;
}
