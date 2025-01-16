import { ColumnDef } from "@tanstack/react-table"
import { Collection } from "@/app/types";

export const columns: ColumnDef<Collection>[] = [
    {
        accessorKey: "rank",
        header: "Rank"
    },
    {
        accessorKey: "collectionImage",
        header: "Preview",
        cell: ({ row }) => (
            <img 
            src={row.getValue("collectionImage")} 
            className="h-20 w-20 object-cover rounded-lg"
            />
        ),
    },
    {
        accessorKey: "collectionName",
        header: "Collection",
        cell: ({ row }) => (
            <div className="text-lg">{row.getValue("collectionName")}</div>
        ),
    },
    {
        accessorKey: "floorPrice",
        header: "Floor Price",
        cell: ({ row }) => <div className="text-lg">{row.getValue("floorPrice")}</div>,
    },
    {
        accessorKey: "volume",
        header: "Volume",
        cell: ({ row }) => {
            return <div className="text-lg">{row.getValue("volume")}</div>
        },
    },
];