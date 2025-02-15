import { Card, CardContent } from "@/components/ui/card";

function Collection() {
    return (
        <div className="relative py-2">
            <h1 className="absolute text-2xl font-semibold">
                Hello
            </h1>
            <div className="flex justify-center gap-3 py-5 pt-12">
                {nftImages.map((nft, index) => (
                    <Card className="h-[40vh] w-[40vh] overflow-hidden cursor-pointer"
                    key={index}>
                        <CardContent className="flex items-center justify-center h-full relative">
                            <img
                                src={nft.nftImage}
                                className="h-full w-full object-cover
                                    hover:scale-110 transition duration-300 ease-in-out"
                            />
                            <div className="absolute textblack 
                            px-2 bg-black/50 rounded-lg backdrop-blur-sm bottom-0 w-full">
                                <h1 className="font-semibold text-xl text-center">
                                    {nft.nftName}
                                </h1>
                                <p className="text-center">{nft.price}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

const nftImages = [
    {
        nftImage: "https://i.seadn.io/s/raw/files/195027cb1a3004cfb805e524dc34704b.png?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    },
    {
        nftImage: "https://i.seadn.io/s/raw/files/5d322223457ee2dec1a87470de510b03.jpg?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    },
    {
        nftImage: "https://i.seadn.io/gcs/files/8b811c25760d87997bc29ab3eb1e1f44.png?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    },
    {
        nftImage: "https://i.seadn.io/s/raw/files/40cdbe49ad8e070d6be41a2150200f81.png?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    }
];

export default Collection;
