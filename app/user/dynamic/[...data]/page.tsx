"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return (
    <div>
      <h1>Params: {params.data}</h1>
    </div>
  );
}
