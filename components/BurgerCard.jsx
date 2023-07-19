import Image from "next/image";
import styles from "../styles/BurgerCard.module.css";
import Link from "next/link";

const BurgerCard = ({ burger }) => {
  return (
    // <div className={styles.container}>
    //   <Link href={`/product/${burger._id}`} passHref>
    //     <Image src={burger.img}  alt="" width="250" height="200" />
    //   </Link>
    //   <h1 className={styles.title}>{burger.title}</h1>
    //   <span className={styles.price}>${burger.prices[0]}</span>
    //   <p className={styles.desc}>{burger.desc}</p>
    // </div>


    
    <div className={styles.container} width= "180" height="700">
    <Link href={`/product/${burger._id}`} passHref>
        <Image src={burger.img}  alt="" width="250" height="200"  />
      </Link>

    <h5 className={styles.title}>{burger.title}</h5>
          <span className={styles.price}>Rs {burger.prices[0]}</span>
    <p className={styles.desc}>{burger.desc}</p>
  </div>
    
  );
};

export default BurgerCard;
