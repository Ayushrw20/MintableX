import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function NftCarousel() {
    return (
        <Carousel className="w-full max-w-[90vw]">
            <CarouselContent>
                {nftImages.map((nft, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 
                    lg:basis-1/4">
                        <Card className="h-[45vh] overflow-hidden cursor-pointer">
                            <CardContent className="flex items-center justify-center h-full relative">
                                <img 
                                src={nft.nftImage} 
                                className="h-full w-full object-cover
                                hover:scale-110 transition duration-300 ease-in-out"
                                />
                                <div className="absolute bottom-3 left-3 text-black px-2 bg-white/40 rounded-lg backdrop-blur-sm">
                                    <h1 className="font-semibold text-xl">
                                        {nft.nftName}
                                    </h1>
                                    <p>{nft.price}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
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
    },
    {
        nftImage: "https://i.seadn.io/s/raw/files/648d0c45cb2af7e921b6cd8c5ae1aa68.jpg?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    },
    {
        nftImage: "https://i.seadn.io/s/raw/files/a575cdd759fa80b8f8ddfd3897af8d7b.png?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    },
    {
        nftImage: "https://i.seadn.io/s/raw/files/fffb91078592b2217cbf5ab789d711e7.png?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    },
    {
        nftImage: "https://i.seadn.io/s/raw/files/195027cb1a3004cfb805e524dc34704b.png?auto=format&dpr=1&w=384",
        nftName: "Demo NFT",
        price: "0.37 ETH"
    }
];

export default NftCarousel;