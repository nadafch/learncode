import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal, Form, Dropdown, DropdownButton, Button } from 'react-bootstrap'

export default function ModalEdit({ show, handleClose }) {
    if (!show) return null;
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Tambah Materi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <DropdownButton title="Pilih topik Materi">
                                <Dropdown.Item href="#/action-1">HTML</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">CSS</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Javascript</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Judul materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Judul Materi"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Materi</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Link Materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Link Materi"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}