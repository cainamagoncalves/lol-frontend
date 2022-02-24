import axios from 'axios'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import styles from '../styles/index/index.module.scss'

interface HomeProps {
  summoner: {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  }
}

interface ChampionProps {
  id: string;
  name: string;
  blurb: string;
}

export default function Home({ summoner }: HomeProps) {

  const [champions, setChampions] = useState<ChampionProps[]>([])
  const [championSelected, setChampionSelected] = useState('')
  const [championSelectedAtributes, setChampionSelectedAtributes] = useState<ChampionProps[]>([])


  useEffect(() => {
    async function run() {
      const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/12.2.1/data/pt_BR/champion.json")
      setChampions(Object.values(response.data.data))
    }

    run()
  }, [])

  useEffect(() => {
    function run() {
      const championSelectedByName = champions.filter(champion => champion.name === championSelected)
      setChampionSelectedAtributes(championSelectedByName)
    }
    run()
  }, [champions, championSelected])

  console.log(championSelectedAtributes)


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>
        Hello World
      </h1>
      <form action="">
        <select onChange={e => setChampionSelected(e.target.value)}>
          <option value="" disabled selected hidden>Selecione uma opção...</option>
          {champions.map((champion, i) => (
            <option key={i} value={champion.name}>{champion.name}</option>
          ))}
        </select>
        <section>
          {championSelectedAtributes.map(champion => (
            <div key={champion.id} className={styles.divChampion}>
              <p>{champion.blurb}</p>
              <span>{champion.name}</span>
            </div>
          ))}
        </section>
      </form>
    </>
  )
}
