import { PodcastCard } from "@/components/podcast-card";
import { podcastData } from "@/constants";

export default function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <div className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        {podcastData.map(({ id, title, description, imgURL }) => (
          <PodcastCard
            key={id}
            title={title}
            description={description}
            imgURL={imgURL}
            podcastId={id}
          />
        ))}
      </div>
    </div>
  );
}
