import { cookies } from 'next/headers';

const Page = async () => {
    
    const cookiesStore = cookies();
    const cookieValue = (await cookiesStore).get('theme')?.value;
    console.log('Server About page loaded', cookieValue);
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        </div>
    )
}
export default Page;