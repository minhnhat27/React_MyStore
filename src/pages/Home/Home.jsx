import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import TopProducts from './TopProducts'
import DailyDiscover from './DailyDiscover'

const indicators = () => (
  <div className="indicator mt-0 w-2 h-2 cursor-pointer bg-gray-500 rounded-full mx-1"></div>
)
const images = [
  'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
]

export default function Home() {
  return (
    <>
      <div className="space-y-2">
        <div className="md:flex md:space-x-2">
          <div className="md:w-2/3 w-full">
            <Slide indicators={indicators} scale={1.4}>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="each-slide-effect">
                  <div className="bg-cover" style={{ backgroundImage: `url(${images[i]})` }}></div>
                </div>
              ))}
            </Slide>
          </div>
          <div className="md:w-1/3 w-full h-80">
            <img className="h-40 w-full pb-1" src={images[1]} alt="" />
            <img className="h-40 w-full pt-1" src={images[2]} alt="" />
          </div>
        </div>
        <div className="bg-white shadow-sm p-2 grid md:grid-cols-6 grid-cols-4 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-500 text-center">
              <Link to="/">
                <div className="h-12 flex items-center justify-center">
                  <div>Icon</div>
                </div>
                <div className="text-sm ">Category Category</div>
              </Link>
            </div>
          ))}
        </div>
        <TopProducts images={images} />
        <DailyDiscover />
      </div>
    </>
  )
}
