"use server";

import { redirect } from "next/navigation";

export async function orderAction(status: string) {
  if(!status) {
    throw new Error("No status");
  }

  if (status.toLowerCase() == "active") {
    return redirect("/example/orders/success");
  }

  if (status.toLowerCase() == "inactivate") {
    return redirect("/example/orders/failure");
  }
}