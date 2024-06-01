"use client";
import { useEffect, useState } from "react";
import { getTest, getTest2, subscriberSnap } from "@/actions/actions";

export default function Home() {
  const [stores, storesSet] = useState<any[]>([]);
  useEffect(() => {
    getTest2().then(console.log);
    const subscriber = subscriberSnap(storesSet);
    return subscriber
  }, []);
  return (
    <div>
      <div>HHHHHH</div>
      {stores.map((s) => (
        <div key={s.id}>{s.id}</div>
      ))}
      <button onClick={() => getTest()}>Click Test</button>
    </div>
  );
}
