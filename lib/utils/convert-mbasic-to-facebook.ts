export function convertMbasicToFacebook(mbasicLink: string) {
  return mbasicLink.replaceAll("mbasic.", "");
}
