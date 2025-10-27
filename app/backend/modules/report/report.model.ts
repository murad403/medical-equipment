import mongoose, { model, Schema } from "mongoose";
import TReport from "./report.interface";

const reportSchema = new Schema<TReport>({
    reportId: {type: mongoose.Schema.Types.ObjectId, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true}
})

const Report = mongoose.models.Report || model<TReport>("Report", reportSchema);

export default Report;