import { dev } from '$app/environment'
import { redirect, type RequestEvent } from '@sveltejs/kit'


export const handle = ({ event, resolve }) => {
  console.log('Server hook...')
  console.log(event.request.headers)

  if(isMobile(event)) {
    const BASE_MOBILE_URL = dev ? `http://m.${event.url.hostname}:5174` : 'https://m.project-a.ak-network.xyz'

    const url = new URL(
      event.url.pathname + (event.url.searchParams.size
        ? `?${event.url.searchParams}`
        : ''),
      BASE_MOBILE_URL)
    redirect(307, url)
  }


  return resolve(event, {
    filterSerializedResponseHeaders(name, val) {
      return false
    },
    transformPageChunk(input) {
      return input.html
    },

  })
}

function isMobile(event: RequestEvent): boolean {
  return event.request.headers.get('sec-ch-ua-mobile') !== '?0' ? true : false;
}
