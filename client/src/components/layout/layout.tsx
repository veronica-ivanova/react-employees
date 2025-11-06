import { Header } from '../header/header'
import { Layout as AntLayout } from 'antd'
import styles from './layout.module.css'

type Props = {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className = {styles.root}>
        <Header/>
        <AntLayout.Content style={{ height: '100%' }}>
            { children }
        </AntLayout.Content>
    </div>
  )
}
