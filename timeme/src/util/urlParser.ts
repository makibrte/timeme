import { NextRequest } from "next/server";

// Caches the columns, saves time about 200ms on local
let columnCache = {};

export const urlParser = async(req: NextRequest, supabase, table: string): Promise<any> => {
    try {
        let columns = columnCache[table];
        
        if (!columns) {
            const { data, error } = await supabase.rpc('get_types', { tname: table });
            if (error) {
                console.error(error);
                throw new Error('Error fetching column types');
            }
            columns = data;
            columnCache[table] = columns; 
        }

        let query = supabase.from(table).select('*');
        
        for (let key of req.nextUrl.searchParams.keys()) {
            if (columns.some(column => column.column_name === key)) {
                query = query.eq(key, req.nextUrl.searchParams.get(key));
            }
        }

        return query;

    } catch (error) {
        console.error(`Error while checking columns: ${error}`);
        throw error;  
    }
}
