function cleanTag(tag: string): string {
  return tag.toLowerCase().replace(/\s/g, "");
}

export default cleanTag;
