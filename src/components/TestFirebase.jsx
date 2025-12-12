// src/components/TestFirebase.jsx
import React, { useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function TestFirebase() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        console.log("Firebase connected! Documents:");
        querySnapshot.forEach((doc) => console.log(doc.id, doc.data()));
      } catch (error) {
        console.error("Error connecting to Firebase:", error);
      }
    };
    fetchData();
  }, []);

  return <div>Check the console to see if Firebase is connected!</div>;
}
