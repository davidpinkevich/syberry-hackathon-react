import { FC, useRef } from "react";

import {
  useForm,
  SubmitHandler,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import styles from "./signIn.module.scss";

import bcrypt from 'bcryptjs';
import useClickOutside from "../../../hooks/useClickOutside";

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

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

export const SignIn: FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const hashUser = bcrypt.hashSync(data.password.toString(), 10)
    localStorage.setItem('user', `${JSON.stringify(hashUser)}`);
    setIsOpen(false)
  };

  const ref = useRef(null)
  useClickOutside(ref, () => setIsOpen(false))

  return (
    <>
      {
        isOpen && (

          <div className={styles.modal} ref={ref}>
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
          </div>
        )
      }
    </>
  );
};
