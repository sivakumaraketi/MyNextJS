import { redirect } from "next/navigation";
import { comments } from "../data";

//Get request
export const  GET = async (_request: Request, {params} : {params: {id: string}}) => {
    if(parseInt(params.id) > comments.length){
        redirect("/comments");
    }
    const comment = comments.find(comment => comment.id === parseInt(params.id))
    return Response.json(comment)
}

//Patch request
export const PATCH = async (request: Request, {params} : {params: {id: string}}) => {
    const body = await request.json()
    const updatedComments = comments.map(comment => {
        if(comment.id === parseInt(params.id)){
            return {
                ...comment,
                text: body.text
            }
        }
        return comment
    })
    return Response.json(updatedComments)
}

//Delete request
export const DELETE = async (_request: Request, {params} : {params: {id: string}}) => {
    const updatedComments = comments.filter(comment => comment.id !== parseInt(params.id))
    return Response.json(updatedComments)
}

