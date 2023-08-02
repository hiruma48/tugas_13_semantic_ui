import { Component } from "react";
import "semantic-ui-css/semantic.min.css"
import { Button, Dimmer, Divider, Grid, Header, Icon, Image,  Label,  List,  Loader, Menu, Placeholder, Search, Segment, Table } from "semantic-ui-react";



class App extends Component{
  render(){
    return(
      <div>
        <br/>
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Cari Document
          </Header>

          <Search placeholder='Search Document' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='pdf file outline' />
            Tambah Dokument Baru
          </Header>
          <Button primary>Create Document</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  
    <Grid container columns={3} stackable>
      <Grid.Column>
        <Segment raised>
          <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
      </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised>
        <Placeholder>
        <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        </Placeholder.Paragraph>
        </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <h3>Website terkait</h3>
        <List>
        <List.Item
          icon='linkify'
          content={<a href='https://www.google.com/'>Google</a>}
        />
        <List.Item
        icon='linkify'
        content={<a href='https://www.facebook.com/'>Facebook</a>}
        />
      <List.Item
          icon='linkify'
          content={<a href='http://www.semantic-ui.com'>Semantic UI</a>}
        />
        <List.Item
          icon='linkify'
          content={<a href="https://niomic.id/">Niomic</a>}
        />
        <List.Item
          icon='linkify'
          content={<a href='https://react.dev/'>react</a>}
        />
        </List>
      </Grid.Column>
    </Grid>
    <Grid textAlign="center" container columns={2}>
      <Grid.Column>
      <Table celled>
        <Table.Header>
          <Table.Row textAlign="right">
          <Table.HeaderCell colSpan='2'><Search placeholder="Search dokument"/></Table.HeaderCell>
            
          
          </Table.Row>
        </Table.Header>
    <Table.Header>
      <Table.Row textAlign="center">
        <Table.HeaderCell>Nama Dokument</Table.HeaderCell>
        <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell positive>
          <Label ribbon>Panduan Belajar Javascript</Label>
        </Table.Cell>
        <Table.Cell>PDF</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar CSS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar React JS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
        
      </Table.Row>
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
      </Grid.Column>
    </Grid>
    
    
      </div>
     
    )
  }
}

export default App;
