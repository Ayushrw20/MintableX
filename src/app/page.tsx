import CollectionTable from "./components/tables/CollectionTable"

export default function Home() {
    return (
        <div className="h-screen w-screen">
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