import styles from './style';
import { Navbar, CTA, BodyTop, BodyBottom, BodyMiddle, Footer } from './components';

const App = () => (
  <div className='w-full overflow-hidden'>
  <div className='bg-cta-gradient h-[400px]'>
    <div className={`flex-col ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`mt-5 ${styles.boxWidth}`}>
        <Navbar />
      </div>
      <div className={`${styles.boxWidth}`}> 
        <CTA />
      </div>
    </div>
    </div>

    <div className={`bg-bodyColor ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}> 
        <BodyTop />
        <BodyMiddle />
        <BodyBottom />
        <Footer />
      </div>
    </div>
    
  </div>
);

export default App;
