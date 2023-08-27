import {Hero,Footer,Subscribe,SuperQuality,PopularProducts,CustomerReviews,SpecialOffers,Services} from './sections';
import Nav from './components/Nav';
import { useState } from 'react';


const App=()=>{

const [darkMode, setDarkMode] = useState(false);

function toggleDarkMode() {
  setDarkMode(prevDarkMode => !prevDarkMode)
}

return(
<main className={`relative selection:bg-coral-red selection:text-white ${darkMode ? 'dark':''}`}>
<Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
<section className="xl:padding-l wide:padding-r padding-b dark:bg-gray-700">
  <Hero/>
</section>
<section className="padding dark:bg-gray-700">
  <PopularProducts/>
</section>
<section className="padding dark:bg-gray-700">
  <SuperQuality/>
</section>
<section className="padding-x py-10 dark:bg-gray-700">
  <Services/>
</section>
<section className="padding dark:bg-gray-700">
  <SpecialOffers/>
</section>
<section className="bg-pale-blue padding dark:bg-gray-700">
  <CustomerReviews/>
</section>
<section className="padding-x sm:py-32 py-16 w-full dark:bg-gray-700">
  <Subscribe/>
</section>
<section className="bg-black padding-x padding-t pb-8 ">
  <Footer/>
</section>
</main>)
};

export default App;