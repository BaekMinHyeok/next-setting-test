// import { notFound } from "next/navigation";
"use client";
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
    params,
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    //  console.log(params);

    const random = getRandomInt(2);

    if (random === 1) {
        throw new Error("Error occured when loading review ID");
    }

    //   if (parseInt(params.reviewId) > 100) {
    //      notFound();
    //   }

    return (
        <>
            <h1>Product Id : {params.productId}</h1>
            <h1>Review Id : {params.reviewId}</h1>
        </>
    );
}
