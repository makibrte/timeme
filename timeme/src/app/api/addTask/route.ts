import {supabase} from '../../supabaseClient';
import { NextResponse, NextRequest } from 'next/server';
import { querySupabase } from '@/util/querySupabase';

export const POST = async(req: NextRequest) : Promise<NextResponse> => {
    
    const body = await req.json();

    let query= supabase
    .from('tasks')
    .insert(body.data);

    const {data, error} = await querySupabase('while adding new task :', query);

    if(error){
        return NextResponse.json({error:error, message: 'Please try again. If the issue persists fix the bug'});
    }

    return NextResponse.json({message: 'Added new task'});
}