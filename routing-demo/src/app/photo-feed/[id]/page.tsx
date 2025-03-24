import Image from "next/image";
import wonderImages from "../wonders";

const PhotoPage = ({params:{id},
}: {
    params: {
        id: string;
    };
}) => {
    const photo = wonderImages.find((p) => p.id === id);
    if (!photo) {
        return (
            <main className="container mx-auto">
                <h1 className="text-3xl font-bold text-center my-4">
                    Photo not found</h1>
            </main>
        );
    }

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-4">
                {photo.name}</h1>
                <Image 
                src={photo.src}
                alt={photo.name}
                className="rounded-lg aspect-square object-cover" />
        </main>
    )
}
export default PhotoPage;