import Link from "next/link"
import wonderImages from "./wonders"
import Image from "next/image"

const Home = () => {
    return (
        <main className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-4">
                New Wonders Of the World</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wonderImages.map(({id, src, name}) => (
                        <Link key={id} href={`/photo-feed/${id}`}>
                        <Image 
                        src={src} 
                        alt={name}
                        className="rounded-lg aspect-square object-cover" />
                        </Link>
                    ))}
                </div>
        </main>
    )
};
export default Home;