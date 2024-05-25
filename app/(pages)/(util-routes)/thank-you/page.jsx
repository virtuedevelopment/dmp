import React from "react";
import Transition from "@/app/components/page/Transition";
import Link from "next/link";

export default function Thankyou() {
  return (
    <Transition>
      <section className="thankyou">
        <h1>Thank you for contacting us!</h1>
        <p>
          Kindly check your email for the confirmation. If you have not received
          the email, please <Link href={"/contact"}>try again</Link> or continue
          browsing our <Link href={"/catalog"}>catalog</Link>.
        </p>
      </section>
    </Transition>
  );
}
