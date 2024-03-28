import Input from '../../UI/Input'
import Wrapper from '../../Wrapper'
import Button from '../../UI/Button'
import style from './Header.module.scss'
import { debounce } from '../../../services/userService'

import Tippy from '@tippyjs/react/headless'
import { useRef, useState } from 'react'
import { BsX, BsSearch } from 'react-icons/bs'
import axios from 'axios'

export default function Search() {
  const [isSearchExpand, setIsSearchExpand] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const searchRef = useRef(null)

  const handleSearch = (e) => {
    const { value } = e.target
    setTextSearch(value)
    setLoading(true)
    setSearchResult([])
    getSearchResult(value)
  }
  const clearSearch = () => {
    setTextSearch('')
    if (searchRef.current) {
      searchRef.current.value = ''
    }
  }

  const getSearchResult = useRef(
    debounce((value) => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          setLoading(false)
          setSearchResult(response.data)
          console.log(response.data)
        })
        .catch(() => {
          setLoading(false)
          setSearchResult([])
        })
    }, 1500),
  ).current

  return (
    <>
      <Tippy
        interactive
        visible={isSearchExpand && textSearch.length > 0}
        onClickOutside={() => setIsSearchExpand(false)}
        placement="bottom-end"
        render={(attrs) => (
          <div className="lg:w-72 md:w-52 w-48" tabIndex="-1" {...attrs}>
            <Wrapper className="p-2 max-h-80">
              {searchResult.length > 0 && (
                <>
                  <div className="flex items-center">
                    <BsSearch className="w-4 h-4 mx-1 text-slate-500" />
                    <span className="text-sm text-slate-500">
                      Kết quả cho "{textSearch}"
                    </span>
                  </div>
                  <ul>
                    {searchResult.map((item, i) => (
                      <li key={i}>{item.id}</li>
                    ))}
                  </ul>
                </>
              )}
              {loading && (
                <div className="flex items-center">
                  <div
                    className={`${style.loader} rounded-full border-2 border-t-slate-500 border-slate-300 h-4 w-4 mx-1 animate-spin`}
                  ></div>
                  <span className="text-sm text-slate-500">
                    Đang tìm "{textSearch}"
                  </span>
                </div>
              )}
              {searchResult.length > 0 || loading || (
                <div className="flex items-center">
                  <BsSearch className="w-4 h-4 mx-1 text-slate-500" />
                  <span className="text-sm text-slate-500">
                    Không có kết quả cho "{textSearch}"
                  </span>
                </div>
              )}
            </Wrapper>
          </div>
        )}
      >
        <div className="flex items-center">
          <BsSearch className="w-5 h-5 text-slate-500 hover:text-slate-600 absolute ms-3 top-1/2 transform -translate-y-1/2" />
          {textSearch.length > 0 && (
            <Button type="button" onClick={() => clearSearch()}>
              <BsX className="w-6 h-6 text-2xl text-slate-500 lg:ms-64 md:ms-44 ms-40 absolute top-1/2 transform -translate-y-1/2" />
            </Button>
          )}
          <Input
            type="text"
            onClick={() => setIsSearchExpand(true)}
            onChange={(e) => handleSearch(e)}
            value={textSearch}
            className={`${style.search} lg:w-72 md:w-52 w-48 rounded-full py-1 px-10`}
            placeholder="Search"
            ref={searchRef}
          />
        </div>
      </Tippy>
    </>
  )
}
