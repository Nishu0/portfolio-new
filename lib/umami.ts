import { getClient } from "@umami/api-client"

const client = getClient()

const WEBSITE_ID = "FWzc9iB4MLEJTGiahUfqZxHtFJv2blIg"

export default async function getAnalytics() {
  // @ts-ignore
  const { data } = await client.getWebsiteStats(WEBSITE_ID, {
    startAt: 0,
    endAt: Date.now(),
  })

  return data
}
