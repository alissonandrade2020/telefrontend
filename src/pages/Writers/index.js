import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { FiPlus, FiMoreVertical } from 'react-icons/fi'
import Container from '@material-ui/core/Container'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DetailsIcon from '@material-ui/icons/Details'
import TextField from '@material-ui/core/TextField'

import { ToolsBar, AddButton, WritersContainer, BoxWriter } from './styles'

import Header from '../../components/Header'
import Popover from '../../components/utility/Popover'
import HookPopUp from '../../components/functional/HookPopUp'
import { DefaultForm, ButtonGroup } from '../../components/DefaultForm'

export default function Writers () {
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false)
  const [choicePopUp, setChoicePopUp] = useState('')

  const [writers, setWriters] = useState([
    { id: '1', username: 'alisson.araujo', name: 'Alisson de Andrade Araújo' },
    { id: '2', username: 'alisson.araujo', name: 'Alisson de Andrade Araújo' },
    { id: '3', username: 'alisson.araujo', name: 'Alisson de Andrade Araújo' },
    { id: '4', username: 'alisson.araujo', name: 'Alisson de Andrade Araújo' },
    { id: '5', username: 'alisson.araujo', name: 'Alisson de Andrade Araújo' }
  ])

  return (
    <>
      <Header textPage="Redatores" />
      <Container maxWidth="md">

        <HookPopUp
          choice={choicePopUp}
          openState={[open, setOpen]}
          componentState={[writers, setWriters]}
          id={id}
          endPoint={
            choicePopUp === 'add' ? '/add'
              : choicePopUp === 'edit' ? '/edit'
                : choicePopUp === 'details' ? '/details'
                  : choicePopUp === 'delete' ? '/delete' : '/'
          }
          Component={(props) =>
            choicePopUp === 'add' ? (
              <FormAdd {...props} setOpen={setOpen} />
            ) : choicePopUp === 'edit' ? (
              <FormEdit {...props} id={id} setOpen={setOpen} />
            ) : choicePopUp === 'details' ? (
              <BoxDetails {...props} />
            ) : false
          } />

        <ToolsBar>
          <AddButton onClick={() => {
            setChoicePopUp('add')
            setOpen(true)
          }}>
            <FiPlus size={18}/>
            &nbsp;&nbsp;&nbsp;Adicionar
          </AddButton>
        </ToolsBar>

        <WritersContainer>
          {writers.map((writer, index) => (
            <BoxWriter key={index}>
              <div className="box">
                <div>GR</div>
                <div>
                  <span>{writer.name}</span>
                  <small>{writer.username}</small>
                </div>
                <div>
                  <Popover
                    items={[
                      {
                        permissionRequired: [1, 99],
                        label: 'Editar',
                        Icon: EditIcon,
                        action: () => {
                          setId(writer.id)
                          setChoicePopUp('edit')
                          setOpen(true)
                        }
                      },
                      {
                        permissionRequired: [1, 99],
                        label: 'Excluir',
                        Icon: DeleteIcon,
                        action: () => {
                          setId(writer.id)
                          setChoicePopUp('delete')
                          setOpen(true)
                        }
                      },
                      {
                        permissionRequired: [1, 99],
                        label: 'Detalhes',
                        Icon: DetailsIcon,
                        action: () => {
                          setId(writer.id)
                          setChoicePopUp('details')
                          setOpen(true)
                        }
                      }
                    ]}
                    Button={(props) => <FiMoreVertical {...props} style={{ cursor: 'pointer' }} size={20}/>}
                  />
                </div>
              </div>
            </BoxWriter>
          ))}
        </WritersContainer>

      </Container>
    </>
  )
}

function FormAdd ({ handle, setOpen }) {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  return (
    <DefaultForm handleSubmit={(e) => handle(e, { id: 1, username, name })}>
      <h2>Cadastrar Usuário</h2>
      <TextField className="input" label="Usuário" variant="outlined" value={username} onChange={e => setUsername(e.target.value)}/>
      <TextField className="input" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)}/>
      <ButtonGroup>
        <button type="button" onClick={() => setOpen(false)}>Cancelar</button>
        <button type="submit">Adicionar</button>
      </ButtonGroup>
    </DefaultForm>
  )
} FormAdd.propTypes = {
  handle: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired
}

function FormEdit ({ handle, id, setOpen }) {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  return (
    <DefaultForm handleSubmit={(e) => handle(e, { id, username, name })}>
      <h2>Editar Usuário</h2>
      <TextField className="input" label="Usuário" variant="outlined" value={username} onChange={e => setUsername(e.target.value)}/>
      <TextField className="input" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)}/>
      <ButtonGroup>
        <button type="button" onClick={() => setOpen(false)}>Cancelar</button>
        <button type="submit">Salvar</button>
      </ButtonGroup>
    </DefaultForm>
  )
} FormEdit.propTypes = {
  handle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired
}

function BoxDetails ({ handle }) {
  const [info, setInfo] = useState('')

  useEffect(() => {
    async function getInfo () {
      setInfo(await handle())
    }
    getInfo()
  }, [handle])

  return (
    <div>
      <h1>{info}</h1>
    </div>
  )
} BoxDetails.propTypes = {
  handle: PropTypes.func.isRequired
}
