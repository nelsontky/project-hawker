export function getPostId(postUrl: string) {
  return postUrl.split("/")[6];
}
