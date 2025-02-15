'use client'

import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function Navbar() {

    const [address, setAddress] = useState<string | null>(null);

    const connectWallet = async() => {
        if (typeof window !== "undefined" && window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum as any);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            console.log("Account:", address);
            setAddress(address);
        } 
        else {
            alert("MetaMask is not installed");
        }        
    }

    return (
        <nav className="h-[11vh] w-full fixed z-10 border-b-2 flex items-center justify-between px-5 backdrop-blur-md">
            <h1 className="text-4xl font-semibold pt-1 text-white 
            drop-shadow-[2px_2px_0px_black] mr-12">
                MintableX
            </h1>
            <div className="flex gap-10">
                <Link href="/" className="drop-shadow-[1px_1px_0px_black]">
                    Explore
                </Link>
                <Link href="/marketplace" className="drop-shadow-[1px_1px_0px_black]">
                    Marketplace
                </Link>
                <Link href="/collections" className="drop-shadow-[1px_1px_0px_black]">
                    Collections
                </Link>
                <Link href="/" className="drop-shadow-[1px_1px_0px_black]">
                    My Assets
                </Link>
            </div>
            <div className="w-[30%]">
                {/* <Input type="text" placeholder="Search..."  />             */}
            </div>
            <div>
                {
                    !address ? <Button onClick={connectWallet}>
                        Connect Wallet
                    </Button> : <Button variant="secondary" className="font-semibold">{address}</Button>
                }
            </div>
        </nav>
    )
}

export default Navbar;