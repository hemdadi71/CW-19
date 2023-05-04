import MyPopover from '@/Components/Dropdown/Dropdown'
import SearchInput from '@/Components/Input/Input'

const Header = () => {
  return (
    <>
      <nav className="bg-[#343A40] py-7">
        <div className="flex justify-evenly items-center">
          <p className="text-white text-2xl">Shopping Cart</p>
          <SearchInput />
          <MyPopover />
        </div>
      </nav>
    </>
  )
}

export default Header
