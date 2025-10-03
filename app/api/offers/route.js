import dbConnect from "@/lib/dbConnect";
import OfferLetter from "@/models/OfferLetter";

export async function GET() {
    try {
        await dbConnect();
        const offers = await OfferLetter.find();
        return new Response(JSON.stringify(offers), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const offer = await OfferLetter.create(body);
        return new Response(JSON.stringify(offer), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
