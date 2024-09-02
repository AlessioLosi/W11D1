import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'


const FavouriteIndicator = () => {
    const navigate = useNavigate()
    const arrayOfFavourites = useSelector((store) => {
      return store
    })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/RemoveFavourite')}
        className="d-flex align-items-center"
      >
        <span className="ms-2">{arrayOfFavourites.length}</span>
      </Button>
    </div>
  )
}

export default FavouriteIndicator