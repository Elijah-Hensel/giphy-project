import { incrementPage, decrementPage } from "../utils/actions"

const PageControllers = ({ pageRef, setPageRef, gifs }) => {
  return (
    <div className="page-controllers" data-testid="controllers">
      {pageRef.page > 1 && (
        <p
          onClick={() => setPageRef(decrementPage(pageRef))}
          className="prev-page"
        >
          {`<<`}
        </p>
      )}
      {pageRef.page < 5 && gifs.data.length > 0 && (
        <p
          onClick={() => setPageRef(incrementPage(pageRef))}
          className="next-page"
        >
          {`>>`}
        </p>
      )}
    </div>
  )
}

export default PageControllers
