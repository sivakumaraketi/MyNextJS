import { NextRequest } from "next/server"
import { comments } from "./data"

//Get request with query parameters 
export const  GET = async (request: NextRequest) => {
    const searchParams = new URL(request.url).searchParams
    const search = searchParams.get("query")
    const filteredComments = search ? comments.filter(comment => comment.text.includes(search)) : comments
    return Response.json(filteredComments)
}

//Post request
export const POST = async (request: Request) => {
    const body = await request.json()
    const newComments = [
        ...comments,
        {
            id: comments.length + 1,
            text: body.text
        }
    ];
    return new Response(JSON.stringify(newComments), {
        headers: {
            "Content-Type": "application/json"  
    },
    status: 201
    })
}
