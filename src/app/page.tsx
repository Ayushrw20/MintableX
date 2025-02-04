import CollectionTable from "./components/tables/CollectionTable";
import NftCarousel from "./components/carousel/NftCarousel";
import Collection from "./components/Collection";

export default function Home() {
    return (
        <div className="max-w-screen overflow-x-hidden pt-16">
            <div className="w-full flex justify-center py-8">
                <NftCarousel />
            </div>
            <div className="flex gap-6 px-5 py-5">
                <div className="w-full">
                    <CollectionTable />
                </div>
                <div className="w-full">
                    <CollectionTable />
                </div>
            </div>
            <div className="min-h-[50rem] w-full bg-[hsl(240,10%,3.9%)] bg-grid-white/[0.1] relative flex items-center justify-center mb-5">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[hsl(240,10%,3.9%)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div>
                    <Collection />
                    <Collection />
                    <Collection />
                </div>
            </div>
        </div>
    )
}