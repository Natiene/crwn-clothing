
import './authentication.styles.scss';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

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
    <div className='authentication-container' >
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;