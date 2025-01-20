import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";

export default function Collection() {
    return (
        <div className="h-screen px-[3vw] py-5">
            <div className="grid grid-cols-4 gap-5 place-items-center">
                {
                    data.map((nft, index) => (
                        <Card
                            key={index}
                            className="flex flex-col items-center h-[55vh] overflow-hidden w-[20vw] bg-[#252525]"
                        >
                            <CardContent className="w-full">
                                <img
                                    src={nft.collectionImage}
                                    className="min-h-[42vh] w-full object-cover rounded-lg"
                                />
                            </CardContent>
                            <CardFooter className="h-full w-full p-0 flex flex-col justify-center">
                                <p className="py-2 font-bold">
                                    {nft.price}
                                </p>
                                <div className="w-full flex-1">
                                    <p className="h-full w-full flex items-center justify-center font-bold 
                                    bg-[#2e8dee] cursor-pointer">
                                        Buy Now
                                    </p>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

const data = [
    {
        collectionImage: "https://i.seadn.io/gae/SB1Z2lAQzw42Iu1jyaIAjQLsNNIGDwCXMDL2YlQ1f6ZdM3bE0yI6lCkEATjxNnzywt79eOqUzOVU4-gpn34Qr-mcvBeXVR_L9SUuYw?auto=format&dpr=1&w=1000",
        price: "14.35 ETH"
    },
    {
        collectionImage: "https://i.seadn.io/s/raw/files/11da8c2ef542f851ecde1556d4096352.png?auto=format&dpr=1&w=384",
        price: "14.35 ETH"
    },
    {
        collectionImage: "https://i.seadn.io/s/production/501e1ee4-01c4-4a83-b1c6-35c7523668ed.png?w=500&auto=format",
        price: "14.35 ETH"
    },
    {
        collectionImage: "https://i.seadn.io/s/raw/files/d33a69fe2f9c867d37a099d356af6045.png?auto=format&dpr=1&w=384",
        price: "14.35 ETH"
    },
    {
        collectionImage: "https://i.seadn.io/s/production/96a72b4b-50b7-4ac0-893c-5f65e2e2fa39.png?w=500&auto=format",
        price: "14.35 ETH"
    }
]