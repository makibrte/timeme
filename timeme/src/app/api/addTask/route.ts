import {supabase} from '../../supabaseClient';
import { NextResponse, NextRequest } from 'next/server';


export const POST = async(req: NextRequest) : Promise<NextResponse> => {
    
    const body = await req.json();

    const {data, error} = await supabase
    .from('tasks')
    .insert(body.data);

    if(error){
        console.error(`Error while adding new task : ${error}`);
        return NextResponse.json({error:error, message: 'Please try again. If the issue persists fix the bug'});
    }

    return NextResponse.json({message: 'Added new task'});
}