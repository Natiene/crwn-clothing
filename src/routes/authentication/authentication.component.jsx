
// import './authentication.styles.jsx';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  // ################ Example of redirect call ##############
  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }

  //     console.log(response);
  //   };
  //   loadData();
  // }, []);

  return (
    <AuthenticationContainer className='authentication-container' >
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;
