import React from "react";
import styles from "./customize.module.css";
import Header from "@/app/components/navigation/Header";
import Transition from "@/app/components/page/Transition";
import CustomizeSuit from "./CustomizeSuit";

import seo_config from "@/_data/seoConfig";

export const metadata = {
  title: seo_config.customize.title,
  description: seo_config.customize.description,
  keywords: seo_config.customize.keywords,
  ...seo_config.customize.other,
};

export default function Customize() {
  return (
    <Transition>
      <CustomizeSuit />
    </Transition>
  );
}
