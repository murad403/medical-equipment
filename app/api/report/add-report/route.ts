import dbConnect from '@/app/backend/config/db'
import Report from '@/app/backend/modules/report/report.model';
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
    await dbConnect();
  try {
    const report = await req.json();
    const existingReport = await Report.findOne({reportId: report?.reportId});
    if(existingReport){
        return NextResponse.json({message: "You have already reported this issue."}, {status: 409})
    }
    await Report.create(report);
    return NextResponse.json({message: "Report submitted successfully!"}, {status: 200});
  } 
  catch (error) {
    console.log("Error is add report", error);
    return NextResponse.json({message: "Internal server error"}, {status: 500});
  }
}
