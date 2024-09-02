import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const FavouriteIndex = () => {
  const navigate = useNavigate()
  const arrayOfFavourite = useSelector((store) => {
    return store.favourite.content
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/favourite')}
        className="d-flex align-items-center"
      >
        <span className="ms-2">{arrayOfFavourite.length}</span>
      </Button>
    </div>
  )
}

export default FavouriteIndex