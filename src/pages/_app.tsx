import "../styles/global.scss";

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import styles from '../styles/app.module.scss';
import { PlayerContext, PlayerContextProvider } from "../contexts/PlayerContext";
import { useState } from "react";


function MyApp({ Component, pageProps }) {
  
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div> 
    </PlayerContextProvider>
    
    // </PlayerContext.Provider>
  )
}

export default MyApp
function state(state: any) {
  throw new Error("Function not implemented.");
}

