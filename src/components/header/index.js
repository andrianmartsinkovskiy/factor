import c from './style.module.css'
import logo from '../../assets/images/logo.png'
import {HeaderSelect} from "../header-select";

const Header = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <div className={c.top}>
          <img src={logo} alt="logo"/>
        </div>
        <div className={c.bottom}>
          <div>
            <h2 className={c.title}>
              Find your needle in the haystack.
            </h2>
            <p className={c.text}>
              Use our FactorBlend Screener to easily find stocks that
              match your strategies across a universe of over 20,000 stocks worldwide.
            </p>
          </div>

          <div>
            <HeaderSelect />
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  Header
}