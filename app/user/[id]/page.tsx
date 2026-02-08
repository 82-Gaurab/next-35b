"use client";

import { useParams, usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();
  const params = useParams();
  return (
    <div>
      <h1>Dynamic Route</h1>
      <h1>Path name: {pathName}</h1>
      <h1>Params Id: {params.id}</h1>
    </div>
  );
}
