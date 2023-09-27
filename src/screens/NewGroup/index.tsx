import { Container, Content, Icon } from './styles'
import { Button, Input, Header, Highlight } from '@components/index'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas."
        />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
