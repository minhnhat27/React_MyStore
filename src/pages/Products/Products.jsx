import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button'
import { BsChevronDown } from 'react-icons/bs'
import Tippy from '@tippyjs/react/headless'
import formatter from '../../services/formatter'

export default function Products() {
  return (
    <>
      <div className="space-y-2">
        <div className="bg-white shadow-sm">
          <div className="uppercase text-sky-500 p-2">Brand</div>
          <div className="grid 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border box-border">
                <Link to="/">
                  <img
                    className="h-24 w-full"
                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2020/10/AAR-3.png"
                    alt=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-100 shadow-sm">
          <div className="flex justify-start items-center space-x-2 h-16 p-2">
            <div className="text-sky-500 shrink-0">Sort by</div>
            <Button className="w-28 py-1.5 bg-sky-500 shadow-sm text-slate-100 rounded-sm">
              Latest
            </Button>
            <Button className="w-28 py-1.5 bg-white shadow-sm rounded-sm">Top Sales</Button>
            <Tippy
              interactive
              placement="bottom"
              render={(attrs) => (
                <div className="w-44 bg-white space-y-1" tabIndex="-1" {...attrs}>
                  <Button className="w-full py-1.5 hover:text-sky-500 bg-white shadow-sm rounded-sm">
                    Price: Low to High
                  </Button>
                  <hr />
                  <Button className="w-full py-1.5 hover:text-sky-500 bg-white shadow-sm rounded-sm">
                    Price: High to Low
                  </Button>
                </div>
              )}
            >
              <Button className="w-44 py-1.5 px-3 bg-white shadow-sm rounded-sm flex justify-between items-center">
                <span>Price</span>
                <BsChevronDown />
              </Button>
            </Tippy>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 grid-cols-2 gap-3">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="relative h-80 bg-white shadow-md hover:border hover:shadow-lg transition duration-500 hover:-translate-y-1"
            >
              <Link to="/products/product-detail">
                <div className="absolute top-2 bg-orange-600 md:w-2/5 w-1/2 text-center text-white px-0.5 text-xs rounded-e-sm">
                  Yêu thích
                </div>
                <div className="absolute end-0 bg-yellow-300 px-0.5 text-xs text-red-500">-2%</div>
                <div className="h-2/3">
                  <img
                    className="h-full w-full object-contain"
                    src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907_inline.jpg.large.jpg"
                    alt=""
                  />
                </div>
                <div className="h-1/3 p-2">
                  <div className="h-1/2  text-sm overflow-hidden line-clamp-2 text-ellipsis">
                    Apple iPhone 14 Pro Max Apple iPhone 14 Pro Max Apple iPhone 14 Pro Max
                  </div>
                  <div className="h-1/2">
                    <div className="text-red-600">{formatter.format(10000000)}</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-yellow-500">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                      <span className="text-xs text-slate-700">3 sold</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">Pagination</div>
      </div>
    </>
  )
}
