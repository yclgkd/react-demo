import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robots from './components/Robots'
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart'

interface Props {
  username: string
}

interface State {
  robotGallery: any[],
  count: number
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => response.json())
        // .then(data => setRobotGallery(data))
        const data = await response.json()
        setRobotGallery(data)
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Click</button>
      <span>count: {count}</span>
      <ShoppingCart />
      {error !== "" && <div>网站出错：{error}</div>}
      { !loading ? (
        <div className={styles.robotList}>
          {robotGallery.map(r => <Robots id={r.id} email={r.email} name={r.name} />)}
        </div>
      ) : (
          <h2>loading加载中</h2>
        )
      }

    </div>
  )
}


export default App;
