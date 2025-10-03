import mongoose from "mongoose";

const offerLetterSchema = new mongoose.Schema({
    candidateName: String,
    jobTitle: String,
    joiningDate: String,
    location: String,
    salary: String,
    hrManagerName: String,
    employmentType: String,
    companyName: String,
    companyAddress: String,
    companyPhone: String,
    companyEmail: String,
    probationPeriod: String,
    workingHours: String,
    offerDeadline: String,
    officeHours: String,
    whatToExpect: [String],
    termsEmployment: [String],
    termsCompensation: [String],
    termsCompliance: [String],
    termsWorkArrangements: [String],
    importantNotes: String,
    acceptanceDeadline: String,
    documentsRequired: [String],
    hrEmail: String,
    hrPhone: String,
    hrTiming: String,
    candidateNameAcceptance: String,
    acceptanceDate: String,
}, { timestamps: true, collection: "letters" });

export default mongoose.models.OfferLetter || mongoose.model("OfferLetter", offerLetterSchema);
