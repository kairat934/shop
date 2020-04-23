import React, {useState} from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import {useDispatch} from "react-redux";
import { userAuth } from '../../store/actions/authAction';

const Login = () => {
    const [email,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault(); 

        dispatch(userAuth(email, password));
    };

    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Форма авторизации
      </Header>
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='E-mail address'
          name="username"
          value={email}
          onChange={e => setUsername(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button color='teal' fluid size='large'>
            Войти
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    );
};


export default Login
