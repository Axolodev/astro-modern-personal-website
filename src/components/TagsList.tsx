import cleanTag from "@lib/cleanTag";
import useGetActiveProjectsFilter, {
  customPopstateEventName,
  tagsFilterName,
} from "@lib/useGetActiveProjectsFilter";
import { navigate } from "astro:transitions/client";

import React, { useCallback } from "react";
import { IoMdClose } from "react-icons/io";

interface TagsListProps {
  tags: string[];
}

const TagsList: React.FC<TagsListProps> = ({ tags }) => {
  const activeProjectFilter = useGetActiveProjectsFilter();

  const onTagClick = useCallback(
    (tag: string) => {
      const urlParams = new URLSearchParams(window.location.search);
      if (tag === cleanTag(activeProjectFilter)) {
        urlParams.delete(tagsFilterName);
      } else {
        urlParams.set(tagsFilterName, tag);
      }
      const newRelativePathQuery =
        window.location.pathname +
        (urlParams.toString() ? `?${urlParams.toString()}` : "");
      navigate(newRelativePathQuery);
      window.dispatchEvent(new Event(customPopstateEventName));
    },
    [activeProjectFilter],
  );

  return (
    <div className="flex flex-row gap-2">
      <div className="card-actions gap-3 mb-3 mt-1 flex flex-row flex-wrap">
        {tags.map((tag) => {
          const isActiveTag = cleanTag(tag) === cleanTag(activeProjectFilter);
          return (
            <button
              key={tag}
              className={`badge ${
                isActiveTag ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => onTagClick(cleanTag(tag))}
            >
              {isActiveTag && (
                <span className="mr-1">
                  <IoMdClose />
                </span>
              )}
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
