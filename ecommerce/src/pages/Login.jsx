import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Warpper = styled.div`
    padding: 40px 20px;
    width: 30%;
    background-color: #fff;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px;
    padding: 10px;
    &:focus{
        outline: none;
        border: 2px solid teal;
    }
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 0 auto;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 15px;
    text-decoration: underline teal;
    cursor: pointer;
    color: teal;
`

const Login = () => {
    return (
    <Container>    
            <Warpper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>Forget password?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Warpper>
</Container>
)
}

export default Login