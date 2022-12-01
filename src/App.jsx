import styles from './style';
import {
  Navbar,
  CTA,
  BodyTop,
  BodyBottom,
  BodyMiddle,
  Footer,
} from './components';

const App = () => (
  <div className='w-full overflow-hidden'>
    <div className='bg-cta-gradient z-[0] h-[450px] mobile-height-change'>
      <div className={`fix-bg-img flex-col h-[450px] mobile-height-change
        relative overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}>
        {/* background image  */}
        <div className='background-img z-[0] absolute overflow-hidden'></div>
         {/* header section  */}
        <div className={`mt-5 margin-bottom absolute z-[2] ${styles.boxWidth}`}>
          <Navbar />
        </div>
        <div className={`z-[0] mt-5 cta-mobile-change ${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>
    </div>

        {/* body sections  */}
    <div className={`${styles.flexStart} mobile-margin-change`}>
      <div className={`${styles.boxWidth}`}>
          <BodyTop />
      </div>
    </div>
    
    <div className='w-full h-[650px] md:h-[350px] '>
          <BodyMiddle />
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <BodyBottom />
      </div>
    </div>
    
    <Footer />
  </div>
);

export default App;
