"use client";

import Link from "next/link";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Donate() {
  const flags = useFlags();
  console.log(flags.simpleToggle);
  return (
    <div>
      {flags.simpleToggle && (
        <Link href={"/donate"} className="flex gap-1 items-center" id="donate">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            Donate
          </span>
        </Link>
      )}
    </div>
  );
}
