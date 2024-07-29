import { card } from "../assets";

import styles, {layout} from "../style";

import Button from "./Button";

const CardDeal = () => (
    <section className={`${layout.section} ${styles.paddingX}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in consequatur omnis dicta asperiores tempora praesentium aliquam tempore, et nemo.</p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} className="w-[100%] h-[100%]" alt="card" />
      </div>
    </section>
  )

export default CardDeal