import React from "react";
import styles from "./customize.module.css";
import Header from "@/app/components/navigation/Header";
import Transition from "@/app/components/page/Transition";
import CustomizeSuit from "./CustomizeSuit";

export default function Customize() {
  return (
    <Transition>
        <CustomizeSuit/>
    </Transition>
  );
}
