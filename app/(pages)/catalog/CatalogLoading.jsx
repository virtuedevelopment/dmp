import React from 'react'
import styles from './catalog.module.css'
import { LoaderCircle } from "lucide-react";

export default function CatalogLoading() {
  return (
    <div className={styles.loading} >
      <LoaderCircle />
      <p>Please wait...</p>
    </div>
  )
}
