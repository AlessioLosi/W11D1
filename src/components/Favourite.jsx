import { Col, Row, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'


const Favourite = () => {
  const arrayOfFavourite = useSelector((store) => store.favourite.content)

  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {arrayOfFavourite.map((data, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAVOURITE',
                    payload: i,
                  })
                }}
              >Elimina
              </Button>
            
              {data.title}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Favourite