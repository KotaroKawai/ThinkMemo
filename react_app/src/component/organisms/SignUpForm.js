import Form from "../molecules/Form";

export default function SignUpForm(){

    const data = {
        type:"ログインへ",
        href:"/signin",
        button:"新規登録" 
    }
    return(
            <Form type={data.type} href={data.href} button={data.button} />
    );
}