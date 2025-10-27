import { Types } from "mongoose";

type TReport = {
    reportId: Types.ObjectId;
    subject: string;
    message: string;
}

export default TReport;