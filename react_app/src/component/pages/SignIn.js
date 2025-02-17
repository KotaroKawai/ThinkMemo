import { Box, Container, Typography } from "@mui/material";
import SignInForm from "../organisms/SignInForm";

export default function SignIn() {
    return (
      <Box>
        <Container sx={{ width:'369px',mt:'100px' }}>
          <img src={`${process.env.PUBLIC_URL}/images/title.png`}/>
          {/* <Box sx={{ textAlign:'center', margin:'10px', mt:'50px', mb:'30px', borderBottom:'10px', borderColor:'red'}}>ログイン</Box> */}
          { <SignInForm /> }
        </Container>

      </Box>
    );
  }