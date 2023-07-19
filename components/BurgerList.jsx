import styles from "../styles/BurgerList.module.css";
import BurgerCard from "./BurgerCard";

const BurgerList = ({ burgerList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST BURGER IN TOWN</h1>
      <p className={styles.desc}>
      Welcome to BurgerThirst, where passion meets flavor! As a family-owned burger joint, we take pride in crafting mouthwatering burgers that leave a lasting impression. Each burger is thoughtfully prepared using the finest ingredients, ensuring every bite is a burst of deliciousness. From our classic offerings to our inspired veggie creations, we cater to all tastes, making BurgerThirst the go-to destination for both burger enthusiasts and vegetarians alike. With a warm and inviting atmosphere, friendly service, and a commitment to sustainability, we invite you to savor the joy of great food and create cherished memories with us.
      </p>

      <p className={styles.desc}>
      At BurgerThirst, our mission is to elevate the art of burger-making to new heights. We don't just settle for ordinary; we strive for extraordinary. Our dedicated team of chefs is always experimenting with unique flavor combinations and creative toppings, ensuring that every burger is a delightful surprise for your taste buds. Whether you're craving a juicy classic or a gourmet specialty, our menu offers a diverse range of options that cater to your cravings and preferences.
      </p>
      <p className={styles.desc}>Embrace the BurgerThirst experience today!</p>
      <br/>
      <br/>
      <br/>
      <div className={styles.wrapper}>
        {burgerList.map((burger) => (
          <BurgerCard key={burger._id} burger={burger} />
        ))}
      </div>
    </div>
  );
};

export default BurgerList;
