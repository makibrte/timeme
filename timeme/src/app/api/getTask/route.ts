import { supabase } from "@/app/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import { urlParser } from "@/util/urlParser";
import { querySupabase } from "@/util/querySupabase";
export const GET = async(req: NextRequest) : Promise<NextResponse> =>{
    
      //Getting the URL parameter
      const query = await urlParser(req, supabase, 'tasks');
      //Querying the data
      const {data, error} = await querySupabase('retrieving tasks', query);
      
      if(error){
            return NextResponse.json({error:error.details});
      }
      else if(data.length === 0){
            
            return NextResponse.json({message: "Found no tasks"});
      }

      return NextResponse.json({message: "success", data: data});
}