import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

export const persister = createSyncStoragePersister({
  key: "OFFLINE_KEY",
  storage: typeof window !== "undefined" ? window.localStorage : undefined,
  serialize: (data) => {
    console.log("serialize", data);

    return JSON.stringify(data);
  },
  deserialize: (data) => {
    console.log("deserialize", data);

    return JSON.parse(data);
  },
});
