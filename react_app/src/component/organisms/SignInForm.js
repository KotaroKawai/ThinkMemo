import Form from "../molecules/Form";

export default function SignUpForm(){
    const data = {
        type:"新規登録はこちら",
        href:"/signup",
        button:"ログイン"
    }

    return(
            <Form type={data.type} href={data.href} button={data.button} />
    );
}