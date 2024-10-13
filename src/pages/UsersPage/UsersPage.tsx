import React, { useEffect, useState } from "react";

import { Page } from "../../components/page/Page";
import { UserFormValues, UserModel } from "../../models/user.model";
import { userService } from "../../services/user.service";
import { Button } from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import classes from "./UsersPage.module.scss";
import { badgesService } from "../../services/badges.service";

const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
const navigate=useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await userService.getUsers());
    };
    fetchUsers();
  }, [id]);
  const gotoUserPage()=>{
    navigate("/user");
  }
  useEffect(()={
    const fetchBadges=async()=>{
      const response=await badgesService.getBadges();
      setBadges(response);
    }
    if(id)
    {
      fetchBadges();
    }
   
  },[])
  console.log(users);
  const onSubmit=async(values:UserFormValues)=>
  {
    if(user?.id)
    {
      await userService.updateUser(user.id,values);
    }
    else{
      return userService.createUser(values);
    }
    gotoUserPage();
  }
  gotoUserPage()
  {
    navigator
  }
  return (
    <Page title="Users">
      <form onSubmit={handleSubmit(onsubmit)}>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Button color="primary" className="w-100 mb-3" onclick={gotoUserPage}>
            Create User
          </Button>
        </div>
      </div>
      <div className="row">
        {users.map(({ id, name, image }) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
            <Link
              to={`/user/${id}`}
              className={classNames("card", classes.UserCard)}
            >
              <img
                src={image}
                alt={`user #${id}`}
                className={classNames("card-img-top", classes.UserImage)}
              />
              <div className="card-body">
                <h5>{name}</h5>
              </div>
              <Button className={classes.DeleteIcon}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <Button color="secondary" type="button" children="m2" onclick={onclick}>Back</Button>
        <Button type="submit">{id?"Update":"Delete"}</Button>
      </div>
     
      </form>
    </Page>
  );
};

export default UsersPage;
