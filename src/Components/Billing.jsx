import { apple, bill, google } from "../assets"

import styles, {layout} from "../style"

const Billing = () => (
    <section id="product" className={`${layout.sectionReverse} lg:px-[80px]`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 w-[50%] h-[50%] top-0 rounded-full white__gradient" />

        <div className="absolute z-[0] -left-1/2 w-[50%] h-[50%] bottom-0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium quia iusto in veritatis, eum expedita ex modi, ullam, magnam dignissimos! Eaque veniam optio ullam. </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )


export default Billing