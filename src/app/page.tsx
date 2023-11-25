import Image from 'next/image'
import styles from './page.module.css'
import { ToolbarButton } from '@/components/ToolbarButton'
import { Toolbar } from '@/components/Toolbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Toolbar>
        <ToolbarButton icon="arrow-left">Back</ToolbarButton>
        <ToolbarButton icon="arrow-right">Forward</ToolbarButton>
        <ToolbarButton icon="reload">Reload</ToolbarButton>
        <ToolbarButton icon="add">New tab</ToolbarButton>
      </Toolbar>
    </main>
  )
}
