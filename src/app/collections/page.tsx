import Collection from "../components/Collection";

export default function Collections() {
    return (
        <div className="min-h-[50rem] w-full bg-black 
        bg-grid-small-white/[0.2] relative flex items-center justify-center 
        pt-[15vh]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[hsl(240,10%,3.9%)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div>
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
            </div>
        </div> 
    )
}