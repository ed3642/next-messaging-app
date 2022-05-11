import styles from '../styles/alert.module.css'
import cn from 'classnames'

interface AlertProps {
  children: React.ReactNode
  type: string
}

export default function Alert({ children, type }: AlertProps) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
