import styles from './style';
import { Navbar, CTA, BodyTop, BodyBottom, BodyMiddle, Footer } from './components';

const App = () => (
  <div className='bg-cta-gradient w-full overflow-hidden'>
    <div className={`flex-col ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      <div className={`${styles.boxWidth}`}> 
        <CTA />
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
