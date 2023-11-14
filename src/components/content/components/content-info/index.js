import c from './style.module.css'
import {SectionItem} from "../section-item";
import {RadarCharts} from "../radar-chart";
import {MyAreaChart} from "../area-chart";

const ContentInfo = () => {

  return (
    <div className={c.wrap}>
      <div className={c.topWrap}>
        <div>
          <div className={c.top}>
            <span className={c.title}>nike</span>
            <button className={c.btn}>Buy</button>
          </div>
          <p className={c.titleLabel}>Nike Inc CI B NYSE</p>
          <div className={c.priceWrap}>
            <p className={c.price}>108.21</p>
            <p className={c.priceChange}>+0.89 +0.82%</p>
          </div>

          <div>
            <h5 className={c.sectionTitle}>FactorBlend</h5>
            <div className={c.section}>
              <SectionItem title="FactorBlend" value={(Math.random() * 40).toFixed(1)}/>
              <SectionItem title="Leverage" value={(Math.random() * 40).toFixed(1)}/>
              <SectionItem title="Market Cap" value={(Math.random() * 40).toFixed(1)}/>
              <SectionItem title="Volatility" value={(Math.random() * 40).toFixed(1)}/>
              <SectionItem title="Liquidity" value={(Math.random() * 40).toFixed(1)}/>
              <SectionItem title="FactorBlend" value={(Math.random() * 40).toFixed(1)}/>
            </div>
          </div>
        </div>
        <div>
          <RadarCharts />
        </div>
      </div>

      <div className={c.secondSection}>
        <div>
          <h5 className={c.sectionTitle}>FactorBlend</h5>
          <div className={c.section}>
            <SectionItem title="FactorBlend" value={(Math.random() * 40).toFixed(1)}/>
            <SectionItem title="Leverage" value={(Math.random() * 40).toFixed(1)}/>
            <SectionItem title="Market Cap" value={(Math.random() * 40).toFixed(1)}/>
            <SectionItem title="Volatility" value={(Math.random() * 40).toFixed(1)}/>
            <SectionItem title="Liquidity" value={(Math.random() * 40).toFixed(1)}/>
            <SectionItem title="FactorBlend" value={(Math.random() * 40).toFixed(1)}/>
            <SectionItem title="Leverage" value={(Math.random() * 40).toFixed(1)}/>
          </div>
        </div>

        <div>
          <h4 className={c.sectionTitle}>News</h4>
          <p className={c.labelText}>
            Nike sues New Balance, Skechers for patent infringement...
            Nike (NKE) Stock Moves 0.18%: What You Should Know
            SKX vs. NKE: Which Stock Is the Better Value Option?
            Nike Outperforms Among Dow Jones Stocks In October; ...
            3 Dividend Stocks That Could Raise Their Payouts in Nov...
            Industry Moves: Canada Goose Names New Chief Finan...
            This Underappreciated Athletic Company Is Giving Nike...
            Nike (NKE) Outperforms Broader Market: What You Need ...
          </p>
        </div>
      </div>

      <div className={c.areaChart}>
        <MyAreaChart />
      </div>
    </div>
  )
}

export {
  ContentInfo
}