import { useForm } from "react-hook-form";
import { Typography, createTheme, styled, TextField, Box, Button, Container} from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Form({ type, href, button }) {
    //フォーム用の関数
    const { register, handleSubmit, formState: { errors } } = useForm();
    //ページ遷移用の関数
    const navigate = useNavigate();
    console.log("errors: ", errors);
    console.log(href);


    return (
        <Container sx={{ border: 1, borderRadius: '16px', width: '300px', borderColor: 'grey.500', mt:'150px'}}>
            <form onSubmit={handleSubmit((data) => {
                console.log('data: ', data.email);

                if(errors != null){
                    //TODO:サーバー側にデータを渡す

                    if(data.email === 'a'){
                        navigate('/')
                    }
                }
            })} >
                    <Box sx={{ mt: '20px', mb: '5px'}}>メールアドレス</Box>
                    <TextField required id="email" label="Required" sx={{ display: 'block' }} {...register("email", {required: "必須入力です"})}/>
                    {
                        errors.email?.message && (
                        <Typography variant="subtitle2">{errors.email.message}</Typography>
                        )
                    }
                    <Box  sx={{ mt: '20px', mb: '5px'}}>パスワード</Box>
                    <TextField required id="password" label="Required" sx={{ display: 'block', width:'100%' }} {...register("password", {required: "必須入力です"})}/>
                    {
                        errors.password?.message && (
                        <Typography variant="subtitle2">{errors.password.message}</Typography>
                        )
                    }
                    <Container>
                        <Button type="submit" variant="contained" sx={{ mt:'30px', mb:'8px',width:'100%' }}>{ button }</Button>
                        <Button href={ href } sx={{ width:'100%' }}>{ type }</Button>
                    </Container>
            </form>
        </Container>
    );
  }