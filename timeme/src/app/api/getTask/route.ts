import { supabase } from "@/app/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) : Promise<NextResponse> =>{
    
      //Getting the URL parameter, have to figure out a better way
      const day:string = req.nextUrl.searchParams.values().next().value;

      const {data, error} = await supabase
      .from('tasks')
      .select('*')
      .eq('day', day)

      if(error){
            console.error(`Error retrieving tasks for ${day}. Error: ${error.details}`)
            return NextResponse.json({error:error});
      }
      //This means no data has been returned as it comes back in form of a list
      if(data.length === 0){
            return NextResponse.json({message: "Found no tasks that day"});
      }

      return NextResponse.json({message: "success", data: data});
}