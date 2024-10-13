// pages/user-page/UserPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Page } from "../../components/page/Page";
import { UserFormValues, UserModel } from "../../models/user.model";
import { BadgeModel } from "../../models/badges.model";
import TextField from "../../components/text-field/TextField";
import ProfileImagePreview from "../../components/profile-image-view/ProfileReviewImage";
import TagField from "../../components/tag-field/TagField";
import { userService } from "../../services/user.service";


const schema = Yup.object({
  name: Yup.string().required(),
  image: Yup.string().required(),
  badges:Yup.array().required(),
});

export const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserModel>();
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  const navigate=useNavigate();
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<UserFormValues>({
    defaultValues: {
      name: "",
      image: "",
    },
    resolver: yupResolver(schema),
  });

  const imageUrl = watch("image");  // Lekérjük az image URL értéket
  useEffect(()=>{
    const fetchUsers=async()=>{
      const response =await userService.getUsers(id);
      setUser(response);
    }
  },[])
  useEffect(()=>{
    reset({name:user?.name,image:user?.image,badges:user?.badges,})
  },[reset,user?.badges, user?.name,user?.image,user?.badges])
  return (
    <Page title={user ? user.name : "User"}>
      <form>
        <TextField
          name="name"
          label="Name"
          register={register}
          error={errors.name?.message}
        />
        <TextField
          name="image"
          label="Avatar url"
          register={register}
          error={errors.image?.message}
        />
      <Controller 
  name="badges" 
  control={control} 
  render={({ field }) => (
    <TagField 
      {...field} 
      label="Badges" 
      getLabel={(badge) => badge.name}  // Correct function syntax
      setValue={setValue}               // Correct prop assignment
      getValues={getValues} 
      options={badges} 
    />
  )} 
/>    
      </form>
    </Page>
  );
};
