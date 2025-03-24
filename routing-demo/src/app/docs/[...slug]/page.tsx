const docPage = (
    params: {
        slug: string[];
    
}) => {
    return (<>
    <h1>Doc Page</h1>
    {params.slug.length === 2 && <p>view docs for the feaures{params.slug[0]} and
        {params.slug[1]}</p>}
    </>)
}
export default docPage;