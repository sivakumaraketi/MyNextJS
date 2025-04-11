const usersPage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log('Server Users page loaded', data);
    return (
        <div>
        <h1>Users Page</h1>
        {data.map((user: { id: number; name: string; email: string }) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))}
        </div>
    );
}
export default usersPage;