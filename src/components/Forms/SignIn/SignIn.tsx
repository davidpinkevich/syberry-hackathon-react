import { FC } from "react";

import {
  useForm,
  SubmitHandler,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import styles from "./signIn.module.scss";

type Inputs = {
  username: string;
  password: number;
};

interface IInputProps {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  type: "username" | "password";
  title: string;
}

const Input: FC<IInputProps> = ({ errors, register, type, title }) => (
  <div className={styles.wrapperInput}>
    <label htmlFor="username" className={styles.label}>
      {title}:
    </label>
    <input
      type={`${type === "password" && "password"}`}
      className={styles.input}
      id={type}
      placeholder={title}
      {...register(type, { required: true, maxLength: 12 })}
    />
    <div className={styles.wrapperErrors}>
      {errors && errors[type]?.type === "required" && (
        <span className={styles.error}>This is required</span>
      )}
      {errors && errors[type]?.type === "maxLength" && (
        <span className={styles.error}>Max length exceeded</span>
      )}
    </div>
  </div>
);

export const SignIn: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        register={register}
        errors={errors}
        title="Username"
        type="username"
      />
      <Input
        register={register}
        errors={errors}
        title="Password"
        type="password"
      />
      <input type="submit" className={styles.button} />
    </form>
  );
};
