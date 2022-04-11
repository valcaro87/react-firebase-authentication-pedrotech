import { useForm } from "react-hook-form";

export const SubmitForm = ({whichForm, txtBtn}) => {
  //console.log(whichForm)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (

    <form onSubmit={handleSubmit(whichForm)}>
      <br />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true })}
      />

      {errors.email && <span> This field is required </span>}

      <br />
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "This field is required",
          minLength: { value: 8, message: "atleast 8 characters" }
        })}
      />
      {errors.password && <span> {errors.password.message} </span>}

      <br />
      <br />
      <input type="submit" value={txtBtn} />
    </form>
  )
}
