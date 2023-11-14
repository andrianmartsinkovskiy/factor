import c from './style.module.css'
import Select from 'react-select'
import {useEffect, useState} from "react";

const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: 'none !important',
    outline: 'none !important',
    borderRadius: "12px",
    background: "#3D444B !important"
  }),
}

const OPTIONS_TEST = [
  {id: 1, label: "Total Debt/Total Assets"},
  {id: 2, label: "Leverage"},
  {id: 3, label: "Quick Ratio"},
  {id: 4, label: "Market Cap"},
  {id: 5, label: "Cash Flow per Share to Price"},
  {id: 6, label: "Operating Margin"},
  {id: 7, label: "Payout Ratio"},
  {id: 8, label: "Return on Investment"},
  {id: 9, label: "Volatility"},
  {id: 10, label: "Earnings per Share Change%"},
  {id: 11, label: "Net Profit Margin"},
  {id: 12, label: "Return on Avg Equity"},
  {id: 13, label: "Liquidity"},
  {id: 14, label: "Dividend Yield"},
  {id: 15, label: "Sales to Price"},
  {id: 16, label: "Book to Price"},
  {id: 17, label: "Net Profit Margin"},
  {id: 18, label: "Return on Avg Equity"},
  {id: 19, label: "Liquidity"},
  {id: 20, label: "Dividend Yield"},
  {id: 21, label: "Sales to Price"},
  {id: 22, label: "Book to Price"},
  {id: 23, label: "Beta"},
  {id: 24, label: "EBITD Growth Rate 5Y"},
  {id: 25, label: "Normalized Earnings to Price Ratio"},
  {id: 26, label: "Revenue Change %"},
  {id: 27, label: "LT Debt/Equity"},
]

const OPTIONS = OPTIONS_TEST.map(item => {
  item.value = item.id
  return item
})

const optionsInitData = OPTIONS.map(item => {
  item.isActive = false
  return item
})

const HeaderSelect = () => {
  const [activeOptions, setActiveOptions] = useState(optionsInitData)
  const [value, setValue] = useState([])

  console.log(value, 'value')

  const changeActiveOptionsData = () => {
    const ids = value.map(item => item.id)

    const newOptions = activeOptions.map(item => {
      item.isActive = ids.includes(item.id)

      return item
    })

    setActiveOptions(newOptions)
  }

  useEffect(() => {
    changeActiveOptionsData()
  }, [value]);

  return (
    <div className={c.wrap}>
      <Select
        inputValue=''
        styles={styles}
        value={value}
        onChange={val => setValue(val)}
        isMulti={true}
        options={OPTIONS}
        placeholder="I’m looking for stocks with:"
      />

      <div className={c.list}>
        {
          activeOptions.map(item => (
            <div key={item.id} className={`${c.label} ${item.isActive && c.labelActive}`}>
              {item.label}
            </div>
          ))
        }
      </div>
    </div>
  )
}


export {
  HeaderSelect
}