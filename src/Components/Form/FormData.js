import React from "react";
const initialState = {
  title: "",
  message: "",
  creator: "",
  selectedFile: "",
  tags: "",
  createdAt: "",
  likeCount: "",
};
export const FormData = () => {
  const [formData, setFormData] = React.useState(initialState);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormClear = () => {
    setFormData(initialState);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return {
    handleInputChange,
    formData,
    handleFormClear,
    showPassword,
    handleShowPassword,
    setFormData,
  };
};
