import Image from 'next/image';

type Photos = {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
const photosPage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('http://localhost:3002/photos')
    const data = await response.json();
    console.log('Server Photos page loaded', data);
    return (
        <div>
        <h1>Photos Page</h1>
        {data.map((photo: Photos) => (
            <div key={photo.id}>
                <h2>{photo.title}</h2>
                <Image
                    width={100}
                    height={100}
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="rounded-lg"
                />
                <p>{photo.url}</p>
            </div>
        ))}
        </div>
    );
}
export default photosPage;