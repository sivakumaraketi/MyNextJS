import { NextRequest } from "next/server"
import { headers } from "next/headers"

//add headers
export const  GET = async (request: NextRequest) => {
    const requestHeaders = new Headers(request.headers);
    const headersList = headers();

    //for getting cookies
    console.log(requestHeaders.get("cookie1"));

    console.log(requestHeaders.get("Authorization"));
    console.log((await headersList).get("Authorization"));

    return new Response("<h1>profile api<h1>", {
        headers: {
            "Content-Type": "text/html",
            "set-cookie": "cookie1=value1; cookie2=value2"
        }
    })
};