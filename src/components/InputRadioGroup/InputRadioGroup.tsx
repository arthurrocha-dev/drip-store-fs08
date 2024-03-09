import React from 'react'
import styles from './InputRadioGroup.module.css'

interface InputRadioGropuProps {
  children: React.ReactNode
  groupName: string
}

export const InputRadioGropu: React.FC<InputRadioGropuProps> = ({
  children,
  groupName,
}) => {
  return (
    <div className={styles.InputRadioGroup}>
      <p className={styles.InputRadioGroupTitle}>{groupName}</p>
      {children}
    </div>
  )
}
