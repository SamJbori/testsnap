"use client";
import { useEffect, useState } from "react";
import { getTest, getTest2 } from "@/actions/actions";
import { onSnapshot } from "firebase/firestore";
import { q } from "./lib/firebase";

export default function Home() {
  const [stores, storesSet] = useState<any[]>([]);
  useEffect(() => {
    getTest2().then(console.log); // same query
    const subscriber = onSnapshot(
      q,
      (q) => {
        console.log(q.size, "<======size");
        storesSet(q.docs.map((d) => d.data()));
      }
    );
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
