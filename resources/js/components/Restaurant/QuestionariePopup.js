import React from 'react'
import { Modal } from 'react-bootstrap'

const Questionarie = ({ item, onItemChange, ...rest }) => (
  <Modal {...rest} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Edit Item</h4>
      <input
        type="text"
        value={item.name}
        name="name"
        onChange={onItemChange(item.id)}
      />
      <input
        type="number"
        value={item.age}
        name="age"
        onChange={onItemChange(item.id)}
      />
    </Modal.Body>
    <Modal.Footer />
  </Modal>
)

export default Questionarie
