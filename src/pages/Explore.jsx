import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <img
              src="https://howto.co.ke/wp-content/uploads/2019/09/qwetu_logo-696x251.png"
              alt='qwetu'
              height={55}
              width={140}
            />
      </header>

      <main>
        <Slider />

        <p className='exploreCategoryHeading'>Take your pick from our residences below.</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Hostels for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Houses for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
