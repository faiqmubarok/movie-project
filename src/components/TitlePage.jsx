import propTypes from "prop-types"

const TitlePage = ({title}) => {
  return (
    <section className="flex gap-8 items-center mb-6 w-full">
        <span className="w-full h-0.5 bg-secondary rounded-l-full"></span>
            <h1 className="text-2xl font-bold shrink-0 text-white">{title}</h1>
        <span className="w-full h-0.5 bg-secondary rounded-r-full"></span>
    </section>
  )
}

TitlePage.propTypes = {
    title: propTypes.string
}

export default TitlePage
