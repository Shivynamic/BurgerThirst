import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";

export default function Home({ burgerList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="./logo.png" />
        <title>Burger Thirst</title>
        <meta name="description" content="Best Burrger shop in town" />
        
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <BurgerList burgerList={burgerList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      burgerList: res.data,
      admin,
    },
  };
};
