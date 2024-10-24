
const Heading = ({className, title}) => {
  return (
    <div className={`&{className} mx-w-[50rem] mx-auto mb-12 lg:mb-20`}>
        {title && <h3 className="h2">{title}</h3>}
    </div>
  )
}

export default Heading