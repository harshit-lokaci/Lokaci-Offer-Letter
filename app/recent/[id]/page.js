// app/recent/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
// import PdfLayout from "@/components/PdfLayout";
import PdfLayout from "../components/PdfLayout";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
// import Loader from "@/components/Loader";

export default function OfferLetterPage() {
    const { id } = useParams();
    const [letter, setLetter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchLetter = async () => {
            try {
                const res = await axios.get(`/api/offers/${id}`);
                setLetter(res.data);
            } catch (err) {
                console.error("Error fetching letter:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchLetter();
    }, [id]);

    return(
        <>
            <Header/>
            <PdfLayout letter={letter} />
            <Footer/>
        </>
    )
}
