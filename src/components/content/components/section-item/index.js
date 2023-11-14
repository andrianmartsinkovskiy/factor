import c from './style.module.css'

const SectionItem = ({title, value}) => {

  return (
    <div className={c.wrap}>
      <span className={c.title}>{title}</span>
      <span className={c.value}>{value}</span>
    </div>
  )
}

export {
  SectionItem
}