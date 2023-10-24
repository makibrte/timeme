import { supabase } from "@/app/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

interface Completion {
    date : Date,
    completed: boolean

}
export const POST = async(req:NextRequest) : Promise<NextResponse> => {
    
    const body = await req.json();

    const completion:Completion = {
        date : body.data.date,
        completed : body.data.completed
    };

    const {error} = await supabase
    .from('tasks')
    .insert(completion)

    if(error){
        console.error(`Error while inserting completion: ${error.details}`);
        return NextResponse.json({error:error});
    }
    return NextResponse.json({message:"Recorded completion to a time block"});

}