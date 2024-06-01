
import { db } from "@/app/lib/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export const subscriberSnap = (callback: (data: any[]) => void) =>
  onSnapshot(
    query(
      collection(db, "Stores"),
      where("users", "array-contains", "3fd79391d285277fe615b2b145637a71")
    ),
    (q) => {
      console.log(q.size, "<======size");
      callback(q.docs.map((d) => d.data()));
    }
  );

export const getTest = async () => {
  getDocs(
    query(
      collection(db, "Stores"),
      where("users", "array-contains", "3fd79391d285277fe615b2b145637a71")
    )
  ).then((q) => console.log(q.docs.map((d) => d.data())));
};

export const getTest2 = async () => {
  return await getDocs(
    query(
      collection(db, "Stores"),
      where("users", "array-contains", "3fd79391d285277fe615b2b145637a71")
    )
  ).then((q) => q.docs.map((d) => d.data()));
};
