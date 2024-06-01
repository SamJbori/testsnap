"use server";
import { q } from "@/app/lib/firebase";
import {
  getDocs,
  onSnapshot,
} from "firebase/firestore";

export const subscriberSnap = (callback: (data: any[]) => void) =>
  onSnapshot(q, (qS) => {
    console.log(qS.size, "<======size");
    callback(qS.docs.map((d) => d.data()));
  });

export const getTest = async () => {
  getDocs(q).then((qS) => console.log(qS.docs.map((d) => d.data())));
};

export const getTest2 = async () => {
  return await getDocs(q).then((qS) => qS.docs.map((d) => d.data()));
};
