import CollectionTable from "./components/tables/CollectionTable";
import NftCarousel from "./components/carousel/NftCarousel";

export default function Home() {
    return (
        <div className="h-screen max-w-screen overflow-x-hidden">
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
        </div>
    )
}