import { useSyncExternalStore } from "react";

export const tagsFilterName = "filter";
export const customPopstateEventName = "historyChange";

function getSnapshot() {
  const urlParams = new URLSearchParams(window.location.search);
  const filterTag = urlParams.get(tagsFilterName);

  return filterTag || "";
}

function subscribe(callback) {
  window.addEventListener("popstate", callback);
  window.addEventListener(customPopstateEventName, callback);

  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(customPopstateEventName, callback);
  };
}

function getServerSnapshot() {
  return "";
}

const useGetActiveProjectsFilter = () => {
  const activeFilter = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return activeFilter;
};

export default useGetActiveProjectsFilter;
