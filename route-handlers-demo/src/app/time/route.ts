//this is for disable the automatic catche and by default it was automatic cache
export const dynamic = "force-dynamic";

export const  GET = async () => {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}