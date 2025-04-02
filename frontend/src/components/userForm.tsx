import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserInput } from "../validation/userSchema";
import { createUser } from "../api/userApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./useForm.css";  // Import the CSS file

const UserForm: React.FC = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm<UserInput>({
    resolver: zodResolver(userSchema),
  });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const onSubmit = (data: UserInput) => {
    mutation.mutate(data);
    alert("You Login Successfully")
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="title"> Welcome Back!</h2>

        <div className="input-group">
          <input type="email" {...register("email")} placeholder="UID" className="input" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <input type="password" {...register("password")} placeholder="Password" className="input" />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <button type="submit" className="button">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
