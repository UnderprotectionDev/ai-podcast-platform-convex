"use client";

import { EmptyState } from "@/components/empty-state";
import { LoaderSpinner } from "@/components/loader-spinner";
import { PodcastCard } from "@/components/podcast-card";
import { Searchbar } from "@/components/searchbar";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

export default function DiscoverPage({ searchQuery }: { searchQuery: string }) {
  const podcastsData = useQuery(api.podcasts.getPodcastBySearch, {
    search: searchQuery || "",
  });

  return (
    <div className="flex flex-col gap-9">
      <Searchbar />
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!searchQuery ? "Discover Trending Podcasts" : "Search results for "}
          {searchQuery && <span className="text-white-2">{searchQuery}</span>}
        </h1>
        {podcastsData ? (
          <>
            {podcastsData.length > 0 ? (
              <div className="podcast_grid">
                {podcastsData?.map(
                  ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                    <PodcastCard
                      key={_id}
                      imgUrl={imageUrl!}
                      title={podcastTitle}
                      description={podcastDescription}
                      podcastId={_id}
                    />
                  )
                )}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
}
