import dbConnect from "@/lib/dbConnect";
import OfferLetter from "@/models/OfferLetter";

export async function GET(req, { params }) {
    try {
        await dbConnect();
        const { id } = params;

        const offer = await OfferLetter.findById(id);
        if (!offer) {
            return new Response(JSON.stringify({ message: "Offer not found" }), { status: 404 });
        }
        return new Response(JSON.stringify(offer), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        await dbConnect();
        const { id } = params;
        const body = await req.json();

        const updatedOffer = await OfferLetter.findByIdAndUpdate(id, body, { new: true });
        if (!updatedOffer) {
            return new Response(JSON.stringify({ message: "Offer not found" }), { status: 404 });
        }
        return new Response(JSON.stringify(updatedOffer), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await dbConnect();
        const { id } = params;

        const deletedOffer = await OfferLetter.findByIdAndDelete(id);
        if (!deletedOffer) {
            return new Response(JSON.stringify({ message: "Offer not found" }), { status: 404 });
        }
        return new Response(JSON.stringify({ message: "Offer deleted successfully" }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
