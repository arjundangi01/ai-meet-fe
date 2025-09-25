// utils/getGoogleMeetId.ts

export function getGoogleMeetId(url: string): string | null {
  const meetRegex =
    /^https:\/\/meet\.google\.com\/([a-z]{3}-[a-z]{4}-[a-z]{3})(?:[/?].*)?$/i;

  const match = url.match(meetRegex);

  if (match && match[1]) {
    return match[1];
  }

  return null;
}
