//redirect to join waiting list
import { redirect } from "next/navigation";
export default function SignupPage() {
  // Redirect to the waiting list page
  // redirect("/waiting-list");
  redirect("https://app.xtopay.co");
}