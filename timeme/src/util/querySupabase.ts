type SupabaseQuery = PromiseLike<{ data: any; error: any; }> | { data: any; error: any; };

export const querySupabase = async(action: string, query: SupabaseQuery): Promise<{data: any, error: any}> => {
    const {data, error} = await query;

    if(error){
        console.error(`Error ${action} : ${error.details}`);
        throw new Error(`Error ${action} : ${error.details}`);
    }
    
    return { data, error };
}
