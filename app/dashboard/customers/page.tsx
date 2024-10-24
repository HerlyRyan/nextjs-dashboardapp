import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";

export default async function Page({
    searchParam,
}: {
    searchParam?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParam?.query || "";
    const currentPage = Number(searchParam?.page) || 1;

    const customers = await fetchFilteredCustomers(query)

    return (
        <div className="w-full">                        
            <Suspense key={query + currentPage} >
                <CustomersTable customers={ customers} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    )
}