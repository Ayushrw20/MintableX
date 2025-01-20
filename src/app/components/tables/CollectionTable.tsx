"use client"

import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { columns } from "./collectionTableColumns";
import { Collection } from "@/app/types";
import { useRouter } from "next/navigation";

function CollectionTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const router = useRouter();

    const handleCollectionClick = () => {
        router.replace("/collection");
    }

    return (
        <div className="w-full">
            <div className="rounded-md border px-3">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length && (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    className="cursor-pointer"
                                    onClick={handleCollectionClick}
                                >
                                    {row.getVisibleCells().map((cell, index) => (
                                        <TableCell key={index}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default CollectionTable;


const data: Collection[] = [
    {
        rank: "1",
        collectionImage: "https://i.seadn.io/gae/SB1Z2lAQzw42Iu1jyaIAjQLsNNIGDwCXMDL2YlQ1f6ZdM3bE0yI6lCkEATjxNnzywt79eOqUzOVU4-gpn34Qr-mcvBeXVR_L9SUuYw?auto=format&dpr=1&w=1000",
        collectionName: "CryptoPunks",
        floorPrice: "2.53 ETH",
        volume: "50 ETH"
    },
    {
        rank: "2",
        collectionImage: "https://i.seadn.io/s/raw/files/11da8c2ef542f851ecde1556d4096352.png?auto=format&dpr=1&w=384",
        collectionName: "CryptoPunks",
        floorPrice: "2.53 ETH",
        volume: "50 ETH"
    },
    {
        rank: "3",
        collectionImage: "https://i.seadn.io/s/production/501e1ee4-01c4-4a83-b1c6-35c7523668ed.png?w=500&auto=format",
        collectionName: "CryptoPunks",
        floorPrice: "2.53 ETH",
        volume: "50 ETH"
    },
    {
        rank: "4",
        collectionImage: "https://i.seadn.io/s/raw/files/d33a69fe2f9c867d37a099d356af6045.png?auto=format&dpr=1&w=384",
        collectionName: "CryptoPunks",
        floorPrice: "2.53 ETH",
        volume: "50 ETH"
    },
    {
        rank: "5",
        collectionImage: "https://i.seadn.io/s/production/96a72b4b-50b7-4ac0-893c-5f65e2e2fa39.png?w=500&auto=format",
        collectionName: "CryptoPunks",
        floorPrice: "2.53 ETH",
        volume: "50 ETH"
    }
]