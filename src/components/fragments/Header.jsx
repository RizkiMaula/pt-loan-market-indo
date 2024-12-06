import Select from 'react-select';
import { BellIcon } from '@heroicons/react/24/solid';

const options = [
  {
    value: 'chocolate',
    label: (
      <div className="flex items-center gap-2">
        <BellIcon className="w-5 h-5 text-gray-600" />
      </div>
    ),
  },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#000',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const Header = ({ title = 'Dashboard' }) => {
  return (
    <div className="flex justify-between w-full px-4 py-2 border-b-[1px] font-inter">
      <div className="border-black border-3">
        <h1 className="font-sans text-[45px] font-normal leading-[54.46px] text-left decoration-skip-ink-auto text-abuJudul ">{`${title}`}</h1>
      </div>
      <div className="flex pr-[4rem] ">
        <div
          className="flex items-center justify-center px-4 border-black border-3"
          style={{ borderLeft: '1px solid black', borderRight: '1px solid black' }}
        >
          <Select
            options={options}
            placeholder={<BellIcon className="w-5 h-5 text-gray-600" />}
            styles={customStyles}
          />
        </div>
        <div
          className="flex items-center justify-center px-4"
          style={{ borderRight: '1px solid black' }}
        >
          <select
            name=""
            id=""
          >
            <option value="">YOHANNES AFFANDY</option>
            <option value="">Logout</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;

/**
 * font-family: Inter;
font-size: 45px;
font-weight: 400;
line-height: 54.46px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

 */
